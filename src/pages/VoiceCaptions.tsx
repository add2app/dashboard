import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mic, 
  Volume2, 
  Type, 
  Languages, 
  Download, 
  Play, 
  Pause, 
  Crown, 
  Star, 
  Award, 
  Brain, 
  Zap, 
  Sparkles, 
  Wand2, 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  Activity, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  RefreshCw, 
  Save, 
  Upload, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Copy, 
  Trash2, 
  Plus, 
  Minus, 
  Move, 
  Settings, 
  Palette, 
  Music, 
  FileText, 
  Hash, 
  Heart, 
  Share2, 
  MessageSquare, 
  BarChart3, 
  PieChart, 
  LineChart, 
  X,
  VolumeX,
  MicOff,
  Headphones,
  Radio,
  AudioLines,
  Vibrate,
  Volume1,
  RadioReceiver,
  Speaker,
  Globe,
  SkipBack,
  SkipForward,
  Maximize2
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export default function VoiceCaptions() {
  console.log('🎤 Advanced AI Voice & Captioning loaded successfully!');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateProgress, setGenerateProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('voice');
  const [selectedVoice, setSelectedVoice] = useState('female1');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCaptionStyle, setSelectedCaptionStyle] = useState('modern');
  const [voiceSpeed, setVoiceSpeed] = useState(50);
  const [voicePitch, setVoicePitch] = useState(50);
  const [fontSize, setFontSize] = useState(50);
  const [captionPosition, setCaptionPosition] = useState('center');
  const [captionAnimation, setCaptionAnimation] = useState('fade');
  const [isSaved, setIsSaved] = useState(true);
  const [hasAudio, setHasAudio] = useState(true);
  const [selectedClip, setSelectedClip] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Stats for the dashboard
  const stats = [
    { label: "Voice Clips Generated", value: "2,847", change: "+28%", icon: Mic, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Captions Created", value: "5.2M", change: "+45%", icon: Type, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Languages Supported", value: "47", change: "+12%", icon: Languages, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "AI Accuracy", value: "98.5%", change: "+8%", icon: Brain, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Demo timeline tracks data
  const timelineTracks = [
    { id: 'voice1', type: 'voice', name: 'Intro Voice', duration: 15, startTime: 0, locked: false, visible: true, color: '#3B82F6' },
    { id: 'voice2', type: 'voice', name: 'Main Narration', duration: 45, startTime: 15, locked: false, visible: true, color: '#10B981' },
    { id: 'voice3', type: 'voice', name: 'Outro Voice', duration: 12, startTime: 60, locked: false, visible: true, color: '#F59E0B' },
    { id: 'caption1', type: 'caption', name: 'Title Caption', duration: 8, startTime: 5, locked: false, visible: true, color: '#06B6D4' },
    { id: 'caption2', type: 'caption', name: 'Main Captions', duration: 25, startTime: 20, locked: false, visible: true, color: '#84CC16' },
    { id: 'caption3', type: 'caption', name: 'End Caption', duration: 5, startTime: 70, locked: false, visible: true, color: '#EC4899' },
    { id: 'audio1', type: 'audio', name: 'Background Music', duration: 77, startTime: 0, locked: false, visible: true, color: '#8B5CF6' },
    { id: 'audio2', type: 'audio', name: 'Sound Effects', duration: 30, startTime: 10, locked: false, visible: true, color: '#EF4444' },
  ];

  // Enhanced AI Voice Features
  const aiVoiceFeatures = [
    { name: 'Auto Voice Sync', icon: Mic, description: 'AI-powered voice synchronization', category: 'voice', popular: true },
    { name: 'Emotion Control', icon: Heart, description: 'Adjust voice emotion and tone', category: 'voice', popular: true },
    { name: 'Accent Matching', icon: Globe, description: 'Match regional accents automatically', category: 'voice', popular: false },
    { name: 'Voice Cloning', icon: Copy, description: 'Clone any voice with AI', category: 'voice', popular: true },
    { name: 'Noise Reduction', icon: VolumeX, description: 'Remove background noise', category: 'audio', popular: true },
    { name: 'Auto Captions', icon: Type, description: 'Generate captions with AI', category: 'text', popular: true },
    { name: 'Multi-Language', icon: Languages, description: 'Support for 47+ languages', category: 'text', popular: true },
    { name: 'Caption Sync', icon: Target, description: 'Perfect timing synchronization', category: 'text', popular: false },
    { name: 'Style Transfer', icon: Palette, description: 'Apply different caption styles', category: 'text', popular: true },
    { name: 'Real-time Preview', icon: Eye, description: 'Live preview of changes', category: 'preview', popular: false },
    { name: 'Batch Processing', icon: Zap, description: 'Process multiple files at once', category: 'processing', popular: true },
    { name: 'Quality Enhancement', icon: Award, description: 'AI-powered quality improvement', category: 'processing', popular: false },
  ];

  // Voice presets
  const voicePresets = [
    { id: 'female1', name: 'Professional Female', accent: 'American', emotion: 'Confident', popular: true },
    { id: 'male1', name: 'Professional Male', accent: 'British', emotion: 'Authoritative', popular: true },
    { id: 'casual1', name: 'Casual Friendly', accent: 'Australian', emotion: 'Warm', popular: false },
    { id: 'energetic1', name: 'Energetic Youth', accent: 'American', emotion: 'Excited', popular: true },
    { id: 'calm1', name: 'Calm Narrator', accent: 'Canadian', emotion: 'Peaceful', popular: false },
    { id: 'dramatic1', name: 'Dramatic Voice', accent: 'British', emotion: 'Intense', popular: false },
  ];

  // Caption styles
  const captionStyles = [
    { id: 'modern', name: 'Modern Bold', description: 'Clean and contemporary', popular: true },
    { id: 'minimal', name: 'Minimal Clean', description: 'Simple and elegant', popular: false },
    { id: 'karaoke', name: 'Karaoke Style', description: 'Word-by-word highlighting', popular: true },
    { id: 'subtitle', name: 'Classic Subtitle', description: 'Traditional movie style', popular: false },
    { id: 'neon', name: 'Neon Glow', description: 'Futuristic with glow effect', popular: true },
    { id: 'vintage', name: 'Vintage Style', description: 'Retro and nostalgic', popular: false },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleAIFeature = (feature: any) => {
    setIsProcessing(true);
    toast.success(`Applying ${feature.name}...`);
    
    // Simulate AI processing with realistic timing
    const processingTime = feature.popular ? 1500 : 2500; // Popular features are faster
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`${feature.name} applied successfully!`);
      
      // Update timeline with new feature
      if (feature.category === 'voice') {
        const newVoice = {
          id: `voice_${Date.now()}`,
          type: 'voice',
          name: feature.name,
          duration: 2,
          startTime: currentTime,
          locked: false,
          visible: true,
          color: '#3B82F6'
        };
        // In a real app, this would update the timeline
        console.log('New voice added:', newVoice);
      }
    }, processingTime);
  };

  const handleGenerateVoice = () => {
    setIsGenerating(true);
    setGenerateProgress(0);
    toast.success('Generating AI voiceover...');
    
    // Simulate realistic generation progress
    const interval = setInterval(() => {
      setGenerateProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          toast.success('Voiceover generated successfully!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleGenerateCaptions = () => {
    setIsGenerating(true);
    setGenerateProgress(0);
    toast.success('Generating AI captions...');
    
    // Simulate realistic generation progress
    const interval = setInterval(() => {
      setGenerateProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          toast.success('Captions generated successfully!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleExport = () => {
    setIsExporting(true);
    setExportProgress(0);
    toast.success('Starting export process...');
    
    // Simulate realistic export progress
    const interval = setInterval(() => {
      setExportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExporting(false);
          toast.success('Audio exported successfully!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleImportAudio = () => {
    setIsProcessing(true);
    toast.success('Importing audio...');
    
    setTimeout(() => {
      setIsProcessing(false);
      setHasAudio(true);
      toast.success('Audio imported successfully!');
    }, 1500);
  };

  const handleClipSelect = (clip: any) => {
    setSelectedClip(clip);
    setCurrentTime(clip.startTime);
    toast.success(`Selected ${clip.name}`);
  };

  const handleSave = () => {
    setIsSaved(true);
    toast.success('Project saved!');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 lg:gap-3">
              <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-300" />
              <h1 className="text-2xl lg:text-4xl font-bold text-white">🎤 Advanced AI Voice & Captioning</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Professional voice synthesis and caption generation powered by AI</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                47 Languages
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Mic className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Type className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Languages className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="group p-3 lg:p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-2 lg:space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-2 lg:p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-4 h-4 lg:w-6 lg:h-6 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg lg:text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-primary">{stat.change}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4 p-3 lg:p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl">
        <div className="flex items-center gap-2 lg:gap-4">
          <h2 className="text-sm lg:text-lg font-semibold">AI Voice & Caption Project</h2>
          <Badge variant={isSaved ? "secondary" : "destructive"} className="text-xs">
            {isSaved ? "Saved" : "Unsaved"}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleSave} variant="outline" size="sm" className="text-xs">
            <Save className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
            Save
          </Button>
          <Button onClick={handleExport} disabled={isExporting} className="bg-primary hover:bg-primary/90 text-xs">
            {isExporting ? (
              <>
                <Loader2 className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 animate-spin" />
                {Math.round(exportProgress)}%
              </>
            ) : (
              <>
                <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Export
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Main Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {/* Audio Preview */}
        <div className="lg:col-span-2 xl:col-span-3 space-y-4 lg:space-y-6">
          {/* Audio Player */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              
              {hasAudio ? (
                // Demo audio content
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                        <Volume2 className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        AI VOICE
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI Voice Preview</h3>
                    <p className="text-muted-foreground mb-4">Professional Female Voice - 1:20</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>🎤 3 Voice Clips</span>
                      <span>📝 3 Caption Layers</span>
                      <span>🎵 2 Audio Tracks</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Import area
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <Volume2 className="w-20 h-20 text-primary/50 mx-auto group-hover:text-primary transition-colors" />
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        AI
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Advanced AI Voice & Captioning</h3>
                    <p className="text-muted-foreground mb-4">Drop your audio here or click to import</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button onClick={handleImportAudio} disabled={isProcessing} className="bg-primary hover:bg-primary/90">
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Importing...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Import Audio
                          </>
                        )}
                      </Button>
                      <Button onClick={() => setShowTemplates(true)} variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Templates
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Audio Controls Overlay */}
              <div className="absolute bottom-2 left-2 right-2 lg:bottom-4 lg:left-4 lg:right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    onClick={handlePlayPause}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex-1 mx-2 lg:mx-4">
                    <Slider
                      value={[currentTime]}
                      onValueChange={handleSeek}
                      max={duration}
                      step={0.1}
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <div className="flex items-center gap-1 lg:gap-2 text-white text-xs lg:text-sm">
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" onClick={handleMute} className="text-white hover:bg-white/20">
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    <div className="w-16 lg:w-20">
                      <Slider
                        value={[volume]}
                        onValueChange={handleVolumeChange}
                        max={100}
                        step={1}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-foreground">🎵 Advanced Timeline</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Multi-Track
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">100%</span>
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2 lg:space-y-3" ref={timelineRef}>
              {timelineTracks.map((track) => (
                <div 
                  key={track.id} 
                  className={`flex items-center gap-2 lg:gap-4 p-2 lg:p-3 bg-secondary/50 rounded-lg border transition-all duration-200 ${
                    selectedClip?.id === track.id 
                      ? 'border-primary bg-primary/10 shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="w-6 h-6"
                      onClick={() => {
                        const newTracks = timelineTracks.map(t => 
                          t.id === track.id ? { ...t, visible: !t.visible } : t
                        );
                        console.log('Toggle visibility:', track.name);
                      }}
                    >
                      {track.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="w-6 h-6"
                      onClick={() => {
                        const newTracks = timelineTracks.map(t => 
                          t.id === track.id ? { ...t, locked: !t.locked } : t
                        );
                        console.log('Toggle lock:', track.name);
                      }}
                    >
                      {track.locked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 min-w-[80px] lg:min-w-[120px]">
                    {track.type === 'voice' && <Mic className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    {track.type === 'caption' && <Type className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    {track.type === 'audio' && <Music className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    <span className="text-xs lg:text-sm font-medium">{track.name}</span>
                  </div>
                  
                  <div 
                    className="flex-1 h-8 lg:h-12 bg-muted/30 rounded relative overflow-hidden cursor-pointer group"
                    onClick={() => handleClipSelect(track)}
                  >
                    <div 
                      className="absolute top-0 h-full rounded transition-all duration-200 group-hover:shadow-lg"
                      style={{ 
                        left: `${(track.startTime / duration) * 100}%`,
                        width: `${(track.duration / duration) * 100}%`,
                        backgroundColor: track.color,
                        background: `linear-gradient(90deg, ${track.color} 0%, ${track.color}CC 100%)`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          {track.duration}s
                        </span>
                      </div>
                    </div>
                    
                    {/* Timeline markers */}
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: Math.ceil(duration / 10) }, (_, i) => (
                        <div key={i} className="flex-1 border-r border-border/50 h-full flex items-end">
                          <span className="text-xs text-muted-foreground px-1 hidden lg:block">{i * 10}s</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="w-6 h-6"
                      onClick={() => {
                        console.log('Copy clip:', track.name);
                        toast.success(`Copied ${track.name}`);
                      }}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="w-6 h-6 hover:text-red-500"
                      onClick={() => {
                        console.log('Delete clip:', track.name);
                        toast.success(`Deleted ${track.name}`);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools Panel */}
        <div className="lg:col-span-1 space-y-4 lg:space-y-6">
          {/* AI Voice Features */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">🤖 AI Voice Features</h3>
              <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary border-primary/20">
                Advanced
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3">
              {aiVoiceFeatures.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-2 lg:p-4 flex flex-col items-center gap-1 lg:gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIFeature(feature)}
                  disabled={isProcessing}
                >
                  {feature.popular && (
                    <Badge className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 py-0">
                      🔥
                    </Badge>
                  )}
                  <feature.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  <span className="text-xs font-medium text-center">{feature.name}</span>
                  <span className="text-xs text-muted-foreground text-center">{feature.category}</span>
                </Button>
              ))}
            </div>
          </Card>

        {/* Voice Settings */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mic className="w-5 h-5 text-primary" />
            </div>
              <h3 className="text-xl font-semibold text-foreground">🎤 Voice Settings</h3>
          </div>

            <div className="space-y-4">
            <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Voice Preset</label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {voicePresets.map((preset) => (
                      <SelectItem key={preset.id} value={preset.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{preset.name}</span>
                          {preset.popular && <Badge variant="secondary" className="ml-2 text-xs">🔥</Badge>}
                        </div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                  Speed: {(voiceSpeed / 50).toFixed(1)}x
              </label>
                <Slider value={[voiceSpeed]} onValueChange={(value) => setVoiceSpeed(value[0])} max={100} step={1} />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                  Pitch: {voicePitch}%
              </label>
                <Slider value={[voicePitch]} onValueChange={(value) => setVoicePitch(value[0])} max={100} step={1} />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Language</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                    <SelectItem value="ko">Korean</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>

              <Button 
                onClick={handleGenerateVoice} 
                disabled={isGenerating} 
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating... {Math.round(generateProgress)}%
                  </>
                ) : (
                  <>
              <Volume2 className="w-4 h-4 mr-2" />
              Generate Voiceover
                  </>
                )}
            </Button>
          </div>
        </Card>

        {/* Caption Settings */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Type className="w-5 h-5 text-accent" />
            </div>
              <h3 className="text-xl font-semibold text-foreground">📝 Caption Settings</h3>
          </div>

            <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Caption Style</label>
                <Select value={selectedCaptionStyle} onValueChange={setSelectedCaptionStyle}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {captionStyles.map((style) => (
                      <SelectItem key={style.id} value={style.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{style.name}</span>
                          {style.popular && <Badge variant="secondary" className="ml-2 text-xs">🔥</Badge>}
                        </div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Position</label>
                <Select value={captionPosition} onValueChange={setCaptionPosition}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top">Top</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="bottom">Bottom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                  Font Size: {fontSize}%
              </label>
                <Slider value={[fontSize]} onValueChange={(value) => setFontSize(value[0])} max={100} step={1} />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Animation</label>
                <Select value={captionAnimation} onValueChange={setCaptionAnimation}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fade">Fade In</SelectItem>
                  <SelectItem value="slide">Slide Up</SelectItem>
                  <SelectItem value="bounce">Bounce</SelectItem>
                  <SelectItem value="typewriter">Typewriter</SelectItem>
                    <SelectItem value="glow">Neon Glow</SelectItem>
                    <SelectItem value="wave">Wave Effect</SelectItem>
                </SelectContent>
              </Select>
            </div>

              <Button 
                onClick={handleGenerateCaptions} 
                disabled={isGenerating} 
                className="w-full bg-accent hover:bg-accent/90"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating... {Math.round(generateProgress)}%
                  </>
                ) : (
                  <>
              <Languages className="w-4 h-4 mr-2" />
              Auto-Generate Captions
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Upload className="w-4 h-4 mr-2" />
                Import Audio
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Music className="w-4 h-4 mr-2" />
                Add Background Music
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Type className="w-4 h-4 mr-2" />
                Add Text Overlay
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Apply AI Effects
            </Button>
          </div>
        </Card>
      </div>
      </div>

      {/* Enhanced Preview Section */}
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-foreground">🎬 Live Preview</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Real-time
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
        
        <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          
          {/* Demo Caption Preview */}
          <div className="relative z-10 text-center p-8">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
                <Volume2 className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                LIVE
              </div>
            </div>
            
            {/* Caption Preview */}
            <div className="space-y-4">
              <div className="px-6 py-4 bg-black/70 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-2xl font-bold text-white mb-2">
                  Welcome to Advanced AI Voice & Captioning
                </p>
                <p className="text-white/80 text-lg">
                  Professional voice synthesis powered by artificial intelligence
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mic className="w-4 h-4" />
                  Voice: Professional Female
                </span>
                <span className="flex items-center gap-1">
                  <Type className="w-4 h-4" />
                  Style: Modern Bold
                </span>
                <span className="flex items-center gap-1">
                  <Languages className="w-4 h-4" />
                  Language: English
                </span>
              </div>
            </div>
          </div>
          
          {/* Preview Controls Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Play className="w-4 h-4 mr-1" />
                  Play Preview
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Volume2 className="w-4 h-4 mr-1" />
                  Test Voice
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-6">
          <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg">
            <Wand2 className="w-4 h-4 mr-2" />
            Apply to Project
          </Button>
          <Button variant="outline" className="border-border hover:border-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Audio
          </Button>
          <Button variant="outline" className="border-border hover:border-primary">
            <FileText className="w-4 h-4 mr-2" />
            Export SRT
          </Button>
        </div>
      </Card>
    </div>
  );
}
