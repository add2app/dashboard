import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Copy, 
  Download, 
  RefreshCw, 
  Brain, 
  Target, 
  Clock, 
  TrendingUp,
  Users,
  Eye,
  Heart,
  Share2,
  Zap,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Crown,
  Star,
  Award,
  Play,
  MessageSquare,
  Hash,
  Image,
  Settings,
  Save,
  History,
  Wand2,
  Rocket,
  CheckCircle,
  AlertCircle,
  Loader2,
  Cpu,
  DollarSign
} from "lucide-react";
import { toast } from "sonner";
import { groqScriptGenerator, type ScriptGenerationOptions, type GeneratedScript } from "@/services/groqApi";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart as RechartsBarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie,
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  ComposedChart,
  ReferenceLine,
  Legend
} from "recharts";

export default function ScriptGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedScript, setGeneratedScript] = useState<GeneratedScript | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationOptions, setGenerationOptions] = useState<ScriptGenerationOptions>({
    topic: "",
    platform: "tiktok",
    duration: "30s",
    tone: "energetic",
    targetAudience: "general audience",
    includeHook: true,
    includeCTA: true
  });
  const [scriptHistory, setScriptHistory] = useState<GeneratedScript[]>([]);
  const [variations, setVariations] = useState<string[]>([]);
  const [isGeneratingVariations, setIsGeneratingVariations] = useState(false);

  // Stats for the dashboard
  const stats = [
    { label: "Scripts Generated", value: "2,847", change: "+23%", icon: Brain, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Average Views", value: "45K", change: "+18%", icon: Eye, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Engagement Rate", value: "12.4%", change: "+7%", icon: Heart, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Success Rate", value: "94%", change: "+5%", icon: Target, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Chart data for analytics
  const scriptGenerationTrends = [
    { month: 'Jan', scripts: 120, views: 45000, engagement: 8.2 },
    { month: 'Feb', scripts: 145, views: 52000, engagement: 9.1 },
    { month: 'Mar', scripts: 168, views: 61000, engagement: 10.3 },
    { month: 'Apr', scripts: 192, views: 73000, engagement: 11.7 },
    { month: 'May', scripts: 218, views: 85000, engagement: 12.4 },
    { month: 'Jun', scripts: 245, views: 98000, engagement: 13.8 },
  ];

  const platformPerformance = [
    { platform: 'TikTok', scripts: 45, avgViews: 85000, engagement: 14.2, revenue: 3200 },
    { platform: 'Instagram', scripts: 32, avgViews: 42000, engagement: 11.8, revenue: 2100 },
    { platform: 'YouTube', scripts: 28, avgViews: 38000, engagement: 9.4, revenue: 1800 },
    { platform: 'Twitter', scripts: 15, avgViews: 12000, engagement: 6.1, revenue: 400 },
  ];

  const tonePerformance = [
    { tone: 'Energetic', scripts: 85, avgViews: 72000, engagement: 15.2 },
    { tone: 'Educational', scripts: 78, avgViews: 45000, engagement: 12.8 },
    { tone: 'Funny', scripts: 65, avgViews: 68000, engagement: 14.1 },
    { tone: 'Serious', scripts: 45, avgViews: 32000, engagement: 8.9 },
    { tone: 'Inspirational', scripts: 52, avgViews: 55000, engagement: 11.3 },
  ];

  const durationAnalysis = [
    { duration: '15s', scripts: 95, avgViews: 78000, engagement: 16.2, completion: 89 },
    { duration: '30s', scripts: 120, avgViews: 65000, engagement: 13.8, completion: 85 },
    { duration: '60s', scripts: 78, avgViews: 42000, engagement: 10.4, completion: 72 },
    { duration: '90s', scripts: 35, avgViews: 28000, engagement: 8.1, completion: 58 },
  ];

  const aiModelPerformance = [
    { model: 'llama-3.1-8b-instant', requests: 1250, avgResponse: 1.2, success: 98.5 },
    { model: 'llama-3.1-70b-versatile', requests: 890, avgResponse: 2.8, success: 97.2 },
    { model: 'mixtral-8x7b', requests: 450, avgResponse: 1.8, success: 96.8 },
  ];

  const engagementPrediction = [
    { hour: 0, engagement: 45, views: 12000 },
    { hour: 6, engagement: 78, views: 25000 },
    { hour: 9, engagement: 95, views: 45000 },
    { hour: 12, engagement: 88, views: 38000 },
    { hour: 15, engagement: 92, views: 42000 },
    { hour: 18, engagement: 98, views: 55000 },
    { hour: 21, engagement: 85, views: 35000 },
  ];

  const scriptQualityMetrics = [
    { metric: 'Hook Effectiveness', score: 92, target: 85 },
    { metric: 'Content Structure', score: 88, target: 80 },
    { metric: 'Call-to-Action', score: 85, target: 75 },
    { metric: 'Engagement Factor', score: 94, target: 85 },
    { metric: 'Viral Potential', score: 89, target: 80 },
  ];

  const handleTestConnection = async () => {
    try {
      const isConnected = await groqScriptGenerator.testConnection();
      if (isConnected) {
        toast.success("API connection successful!");
      } else {
        toast.error("API connection failed. Check console for details.");
      }
    } catch (error) {
      toast.error("API test failed");
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a topic or idea");
      return;
    }

    setIsGenerating(true);
    try {
      console.log('Environment check:', {
        hasApiKey: !!import.meta.env.VITE_GROQ_API_KEY,
        apiKeyLength: import.meta.env.VITE_GROQ_API_KEY?.length || 0
      });

      const options: ScriptGenerationOptions = {
        ...generationOptions,
        topic: prompt
      };

      console.log('Generating script with options:', options);

      const result = await groqScriptGenerator.generateScript(options);
      setGeneratedScript(result);
      setScriptHistory(prev => [result, ...prev.slice(0, 9)]); // Keep last 10
      toast.success("Script generated successfully!");
    } catch (error) {
      console.error('Script generation error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to generate script");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateVariations = async () => {
    if (!generatedScript) return;

    setIsGeneratingVariations(true);
    try {
      const variations = await groqScriptGenerator.generateVariations(generatedScript.script, 3);
      setVariations(variations);
      toast.success("Variations generated!");
    } catch (error) {
      toast.error("Failed to generate variations");
    } finally {
      setIsGeneratingVariations(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleDownload = () => {
    if (!generatedScript) return;
    
    const content = `Script: ${generatedScript.script}\n\nDuration: ${generatedScript.duration}\nTone: ${generatedScript.tone}\nPlatform: ${generatedScript.platform}\nWord Count: ${generatedScript.wordCount}\nEstimated Views: ${generatedScript.estimatedViews}\nEngagement Score: ${generatedScript.engagementScore}\nHashtags: ${generatedScript.hashtags.join(', ')}\nThumbnail Ideas: ${generatedScript.thumbnailIdeas.join(', ')}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `script-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Script downloaded!");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl font-bold text-white">AI Script Generator</h1>
            </div>
            <p className="text-white/90 text-lg">Powered by Groq AI - Create viral content scripts</p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Brain className="w-4 h-4 mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Rocket className="w-4 h-4 mr-2" />
                Viral Ready
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{stat.change}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="generator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="generator">Script Generator</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
            <Card className="lg:col-span-1 p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
                <h2 className="text-xl font-semibold text-foreground">Script Configuration</h2>
          </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic / Idea</Label>
          <Textarea
                    id="topic"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: A quick morning routine for busy professionals, tips for growing plants indoors..."
                    className="min-h-[120px] bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform</Label>
                    <Select value={generationOptions.platform} onValueChange={(value: any) => setGenerationOptions(prev => ({ ...prev, platform: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Select value={generationOptions.duration} onValueChange={(value: any) => setGenerationOptions(prev => ({ ...prev, duration: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15s">15 seconds</SelectItem>
                        <SelectItem value="30s">30 seconds</SelectItem>
                        <SelectItem value="60s">60 seconds</SelectItem>
                        <SelectItem value="90s">90 seconds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select value={generationOptions.tone} onValueChange={(value: any) => setGenerationOptions(prev => ({ ...prev, tone: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="energetic">Energetic</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="funny">Funny</SelectItem>
                      <SelectItem value="serious">Serious</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Input
                    id="audience"
                    value={generationOptions.targetAudience}
                    onChange={(e) => setGenerationOptions(prev => ({ ...prev, targetAudience: e.target.value }))}
                    placeholder="e.g., young professionals, fitness enthusiasts"
                  />
                </div>

          <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="includeHook"
                      checked={generationOptions.includeHook}
                      onChange={(e) => setGenerationOptions(prev => ({ ...prev, includeHook: e.target.checked }))}
                      className="rounded border-border"
                    />
                    <Label htmlFor="includeHook">Include Strong Hook</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="includeCTA"
                      checked={generationOptions.includeCTA}
                      onChange={(e) => setGenerationOptions(prev => ({ ...prev, includeCTA: e.target.checked }))}
                      className="rounded border-border"
                    />
                    <Label htmlFor="includeCTA">Include Call-to-Action</Label>
                  </div>
                </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
                  className="w-full bg-primary hover:bg-primary/90"
            >
              {isGenerating ? (
                <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Script
                </>
              )}
            </Button>

                <Button
                  onClick={handleTestConnection}
                  variant="outline"
                  className="w-full border-border hover:border-primary"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Test API Connection
              </Button>
          </div>
        </Card>

        {/* Output Section */}
            <Card className="lg:col-span-2 p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Generated Script</h2>
            {generatedScript && (
              <div className="flex gap-2">
                    <Button onClick={() => handleCopy(generatedScript.script)} size="icon" variant="ghost">
                  <Copy className="w-4 h-4" />
                </Button>
                    <Button onClick={handleDownload} size="icon" variant="ghost">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

            {generatedScript ? (
                <div className="space-y-6">
                  {/* Script Content */}
                  <div className="p-4 bg-secondary rounded-lg border border-border">
              <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                      {generatedScript.script}
              </pre>
                  </div>

                  {/* Script Analytics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-primary">{generatedScript.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Target className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-primary">{generatedScript.wordCount}</div>
                      <div className="text-xs text-muted-foreground">Words</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Eye className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-primary">{generatedScript.estimatedViews}</div>
                      <div className="text-xs text-muted-foreground">Est. Views</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Activity className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-primary">{generatedScript.engagementScore}%</div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                    </div>
                  </div>

                  {/* Hashtags */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Hash className="w-4 h-4" />
                      Hashtags
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {generatedScript.hashtags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Ideas */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Image className="w-4 h-4" />
                      Thumbnail Ideas
                    </Label>
                    <div className="space-y-2">
                      {generatedScript.thumbnailIdeas.map((idea, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg text-sm">
                          {idea}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button onClick={handleGenerateVariations} disabled={isGeneratingVariations} className="flex-1">
                      {isGeneratingVariations ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Variations
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="border-border hover:border-primary">
                      <Play className="w-4 h-4 mr-2" />
                      Use in Editor
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-muted-foreground">
                  <div className="text-center space-y-4">
                    <Brain className="w-16 h-16 text-primary/50 mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold">Ready to Create</h3>
                      <p>Your AI-generated script will appear here</p>
                    </div>
                  </div>
              </div>
            )}
            </Card>
          </div>

          {/* Variations Section */}
          {variations.length > 0 && (
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wand2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Script Variations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {variations.map((variation, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">Variation {index + 1}</Badge>
                      <Button onClick={() => handleCopy(variation)} size="icon" variant="ghost">
                        <Copy className="w-4 h-4" />
              </Button>
            </div>
                    <pre className="text-xs text-foreground whitespace-pre-wrap font-mono max-h-40 overflow-y-auto">
                      {variation}
                    </pre>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Script Generation Trends */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Script Generation Trends</h3>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={scriptGenerationTrends}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="scripts" fill="hsl(var(--primary))" fillOpacity={0.3} stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Bar yAxisId="right" dataKey="views" fill="hsl(var(--primary))" fillOpacity={0.8} radius={[4, 4, 0, 0]} />
                  <Line yAxisId="left" type="monotone" dataKey="engagement" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Platform Performance Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <PieChart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Platform Performance</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={platformPerformance}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="scripts"
                    >
                      {platformPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#000000', '#E4405F', '#FF0000', '#1DA1F2'][index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} scripts`, name]} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {platformPerformance.map((platform, index) => (
                  <div key={platform.platform} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#000000', '#E4405F', '#FF0000', '#1DA1F2'][index] }} />
                      <span className="text-sm font-medium">{platform.platform}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {platform.avgViews.toLocaleString()} avg views
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {platform.engagement}% engagement
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Tone Performance</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={tonePerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="tone" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="avgViews" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Duration Analysis & Engagement Prediction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Duration Analysis</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={durationAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="duration" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="avgViews" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="completion" stroke="hsl(var(--primary))" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Optimal Posting Times</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={engagementPrediction}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="engagement" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="views" stackId="2" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* AI Model Performance & Script Quality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Model Performance</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={aiModelPerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="model" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="success" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Script Quality Metrics</h3>
              </div>
              <div className="space-y-4">
                {scriptQualityMetrics.map((metric) => (
                  <div key={metric.metric} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary">{metric.score}%</span>
                        <Badge variant="outline" className="text-xs">
                          Target: {metric.target}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Advanced Analytics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Viral Potential</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Above Industry Average</div>
                <Progress value={94} className="mt-4" />
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Audience Reach</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.4M</div>
                <div className="text-sm text-muted-foreground">Total Reach</div>
                <Progress value={87} className="mt-4" />
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Revenue Impact</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$24.8K</div>
                <div className="text-sm text-muted-foreground">Monthly Earnings</div>
                <Progress value={92} className="mt-4" />
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          {/* AI Insights Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Performance Insights</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm font-bold text-primary">1.2s</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Accuracy Rate</span>
                    <span className="text-sm font-bold text-primary">98.5%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Satisfaction</span>
                    <span className="text-sm font-bold text-primary">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Content Optimization</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={scriptQualityMetrics}>
                    <RadialBar dataKey="score" fill="hsl(var(--primary))" />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Trend Analysis */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Content Performance Trends</h3>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scriptGenerationTrends}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="scripts" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} />
                  <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={3} strokeDasharray="5 5" dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} />
                  <Line type="monotone" dataKey="engagement" stroke="hsl(var(--primary))" strokeWidth={3} strokeDasharray="10 5" dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Predictive Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Engagement Prediction</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={platformPerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="avgViews" name="Views" />
                    <YAxis dataKey="engagement" name="Engagement" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="scripts" fill="hsl(var(--primary))" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Viral Potential Score</h3>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">94%</div>
                  <div className="text-sm text-muted-foreground">Overall Viral Score</div>
                </div>
                <div className="space-y-4">
                  {[
                    { factor: 'Hook Strength', score: 96 },
                    { factor: 'Content Quality', score: 92 },
                    { factor: 'Timing Optimization', score: 89 },
                    { factor: 'Platform Fit', score: 98 },
                    { factor: 'Audience Match', score: 91 }
                  ].map((item) => (
                    <div key={item.factor} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.factor}</span>
                        <span className="text-sm font-bold text-primary">{item.score}%</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
        </Card>
      </div>

          {/* Recommendations */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wand2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Best Posting Time", value: "6-9 PM", icon: Clock, color: "text-primary" },
                { title: "Optimal Duration", value: "15-30s", icon: Play, color: "text-primary" },
                { title: "Top Platform", value: "TikTok", icon: Share2, color: "text-primary" },
                { title: "Best Tone", value: "Energetic", icon: Zap, color: "text-primary" },
                { title: "Hook Strategy", value: "Question Hook", icon: MessageSquare, color: "text-primary" },
                { title: "CTA Type", value: "Follow + Like", icon: Heart, color: "text-primary" }
              ].map((rec) => (
                <div key={rec.title} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <rec.icon className={`w-5 h-5 ${rec.color}`} />
                    <span className="font-medium">{rec.title}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">{rec.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <History className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Script History</h3>
            </div>
            {scriptHistory.length > 0 ? (
              <div className="space-y-4">
                {scriptHistory.map((script, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{script.platform}</Badge>
                        <Badge variant="secondary">{script.duration}</Badge>
                        <Badge variant="outline">{script.tone}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => handleCopy(script.script)} size="icon" variant="ghost">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button onClick={() => setGeneratedScript(script)} size="icon" variant="ghost">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Views:</span>
                        <span className="ml-1 font-medium">{script.estimatedViews}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Engagement:</span>
                        <span className="ml-1 font-medium">{script.engagementScore}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Words:</span>
                        <span className="ml-1 font-medium">{script.wordCount}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Hashtags:</span>
                        <span className="ml-1 font-medium">{script.hashtags.length}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <History className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p>No scripts generated yet</p>
              </div>
            )}
      </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
