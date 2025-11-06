// Groq API Service for AI Script Generation
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Debug logging
console.log('Groq API Configuration:', {
  hasEnvKey: !!import.meta.env.VITE_GROQ_API_KEY,
  hasFallbackKey: !!GROQ_API_KEY,
  keyLength: GROQ_API_KEY?.length || 0,
  apiUrl: GROQ_API_URL
});

export interface ScriptGenerationOptions {
  topic: string;
  platform?: 'tiktok' | 'instagram' | 'youtube' | 'twitter';
  duration?: '15s' | '30s' | '60s' | '90s';
  tone?: 'energetic' | 'educational' | 'funny' | 'serious' | 'inspirational';
  targetAudience?: string;
  includeHook?: boolean;
  includeCTA?: boolean;
}

export interface GeneratedScript {
  script: string;
  duration: string;
  tone: string;
  platform: string;
  wordCount: number;
  estimatedViews: string;
  engagementScore: number;
  hashtags: string[];
  thumbnailIdeas: string[];
}

export class GroqScriptGenerator {
  private getAvailableModels(): string[] {
    return [
      'llama-3.1-8b-instant',
      'llama-3.1-70b-versatile',
      'llama-3.1-8b-instant-128k',
      'llama-3.1-70b-versatile-128k',
      'mixtral-8x7b-32768'
    ];
  }

  async testConnection(): Promise<boolean> {
    const models = this.getAvailableModels();
    
    for (const model of models) {
      try {
        console.log(`Testing connection with model: ${model}`);
        const response = await fetch(GROQ_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: 'Hello' }],
            max_tokens: 10,
          }),
        });
        
        console.log(`Model ${model} Response Status:`, response.status);
        if (response.ok) {
          console.log(`✅ Working model found: ${model}`);
          return true;
        } else {
          const errorText = await response.text();
          console.log(`❌ Model ${model} failed:`, errorText);
        }
      } catch (error) {
        console.error(`❌ Model ${model} error:`, error);
      }
    }
    
    console.error('❌ All models failed');
    return false;
  }

  private async makeRequest(messages: any[]) {
    const models = this.getAvailableModels();
    
    for (const model of models) {
      try {
        console.log(`Making request to Groq API with model: ${model}`);
        
        const requestBody = {
          model: model,
          messages,
          temperature: 0.7,
          max_tokens: 2000,
          stream: false,
        };

        console.log('Request body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch(GROQ_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        console.log(`Model ${model} Response status:`, response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Model ${model} Error Response:`, errorText);
          
          // If this is a model decommissioned error, try next model
          if (errorText.includes('decommissioned') || errorText.includes('not supported')) {
            console.log(`Model ${model} is decommissioned, trying next model...`);
            continue;
          }
          
          throw new Error(`Groq API error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log(`✅ Model ${model} Response:`, data);
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          throw new Error('Invalid response format from Groq API');
        }
        
        return data.choices[0].message.content;
      } catch (error) {
        console.error(`Model ${model} Error:`, error);
        
        // If this is the last model, throw the error
        if (model === models[models.length - 1]) {
          throw new Error(`Failed to generate script with any model: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
        
        // Otherwise, try the next model
        console.log(`Model ${model} failed, trying next model...`);
      }
    }
    
    throw new Error('All models failed');
  }

  async generateScript(options: ScriptGenerationOptions): Promise<GeneratedScript> {
    const {
      topic,
      platform = 'tiktok',
      duration = '30s',
      tone = 'energetic',
      targetAudience = 'general audience',
      includeHook = true,
      includeCTA = true
    } = options;

    const systemPrompt = `You are an expert video script writer specializing in viral content creation. Create engaging, platform-optimized scripts that maximize views and engagement.

Create a script with the following structure:
1. Hook (first 3 seconds)
2. Main content with clear points
3. Call-to-action
4. Include timestamps for each section
5. Make it engaging and shareable

Return ONLY the script content, no JSON formatting needed.`;

    const userPrompt = `Create a ${duration} ${tone} script for ${platform} about "${topic}" targeting ${targetAudience}.

Requirements:
- ${includeHook ? 'Include a strong hook in the first 3 seconds' : 'Skip the hook section'}
- ${includeCTA ? 'Include a clear call-to-action' : 'Skip the call-to-action'}
- Use platform-specific formatting
- Include timestamps for each section
- Make it engaging and shareable
- Optimize for maximum reach and engagement

Format the script with clear sections and timestamps.`;

    try {
      const response = await this.makeRequest([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]);

      // Calculate word count from the response
      const wordCount = response.split(/\s+/).length;
      
      // Generate estimated metrics based on platform and duration
      const getEstimatedViews = () => {
        const baseViews = platform === 'tiktok' ? 50000 : platform === 'instagram' ? 30000 : platform === 'youtube' ? 20000 : 10000;
        const durationMultiplier = duration === '15s' ? 1.2 : duration === '30s' ? 1.0 : duration === '60s' ? 0.8 : 0.6;
        return Math.round(baseViews * durationMultiplier).toLocaleString();
      };

      const getEngagementScore = () => {
        const baseScore = platform === 'tiktok' ? 85 : platform === 'instagram' ? 80 : platform === 'youtube' ? 75 : 70;
        const toneBonus = tone === 'energetic' ? 10 : tone === 'funny' ? 8 : tone === 'educational' ? 5 : 0;
        return Math.min(95, baseScore + toneBonus);
      };

      const getHashtags = () => {
        const platformTags = platform === 'tiktok' ? ['#fyp', '#viral', '#trending'] :
                            platform === 'instagram' ? ['#reels', '#viral', '#fyp'] :
                            platform === 'youtube' ? ['#shorts', '#viral', '#trending'] :
                            ['#viral', '#trending', '#fyp'];
        return platformTags;
      };

      const getThumbnailIdeas = () => {
        return [
          'Close-up reaction shot',
          'Before/after comparison',
          'Text overlay with key point',
          'Action shot or demonstration'
        ];
      };
      
      // Return the structured response
      return {
        script: response || 'Script generation failed',
        duration: duration,
        tone: tone,
        platform: platform,
        wordCount: wordCount,
        estimatedViews: `${getEstimatedViews()}`,
        engagementScore: getEngagementScore(),
        hashtags: getHashtags(),
        thumbnailIdeas: getThumbnailIdeas()
      };
    } catch (error) {
      console.error('Script generation error:', error);
      throw new Error('Failed to generate script. Please try again.');
    }
  }

  async generateVariations(originalScript: string, count: number = 3): Promise<string[]> {
    const systemPrompt = `You are a creative script writer. Generate ${count} different variations of the given script, each with a different approach while maintaining the core message.`;

    const userPrompt = `Generate ${count} creative variations of this script:\n\n${originalScript}\n\nEach variation should:
- Have a different hook/opening
- Use different storytelling techniques
- Maintain the same core message
- Be optimized for viral potential
- Have unique value propositions`;

    try {
      const response = await this.makeRequest([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]);

      // Split response into variations (assuming they're separated by clear markers)
      const variations = response.split(/\n\n(?=\d+\.|Variation|Version)/i).filter(v => v.trim());
      return variations.length > 0 ? variations : [response];
    } catch (error) {
      console.error('Variation generation error:', error);
      return [originalScript];
    }
  }

  async optimizeForPlatform(script: string, platform: string): Promise<string> {
    const systemPrompt = `You are a platform optimization expert. Adapt scripts for maximum performance on specific social media platforms.`;

    const userPrompt = `Optimize this script for ${platform}:\n\n${script}\n\nFocus on:
- Platform-specific formatting
- Optimal length and pacing
- Platform-native features
- Audience behavior patterns
- Algorithm optimization`;

    try {
      const response = await this.makeRequest([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]);

      return response;
    } catch (error) {
      console.error('Platform optimization error:', error);
      return script;
    }
  }
}

export const groqScriptGenerator = new GroqScriptGenerator();
