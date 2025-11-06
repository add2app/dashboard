import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Scissors, 
  Wand2, 
  Download, 
  Upload, 
  Sparkles,
  Volume2,
  VolumeX,
  Mic,
  Type,
  Palette,
  Zap,
  Crown,
  Star,
  Award,
  Settings,
  RotateCcw,
  RotateCw,
  Maximize2,
  Minimize2,
  Grid3X3,
  Layers,
  Music,
  Image,
  Video,
  FileText,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Copy,
  Trash2,
  Plus,
  Minus,
  Move,
  Crop,
  Filter,
  Contrast,
  Sun,
  Droplets,
  RotateLeft,
  RotateRight,
  Brain,
  Target,
  Clock,
  TrendingUp,
  Users,
  Heart,
  Share2,
  MessageSquare,
  Hash,
  Activity,
  CheckCircle,
  AlertCircle,
  Loader2,
  RefreshCw,
  Save,
  FolderOpen,
  Search,
  Sliders,
  BarChart3,
  PieChart,
  LineChart,
  X
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export default function VideoEditor() {
  console.log('🚀 Advanced AI Video Editor loaded successfully!');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedTool, setSelectedTool] = useState('select');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('timeline');
  const [isProcessing, setIsProcessing] = useState(false);
  const [projectName, setProjectName] = useState('My Awesome Video');
  const [isSaved, setIsSaved] = useState(true);
  const [hasVideo, setHasVideo] = useState(true);
  const [selectedClip, setSelectedClip] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Stats for the dashboard
  const stats = [
    { label: "Projects Created", value: "1,247", change: "+18%", icon: Video, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Total Views", value: "2.4M", change: "+32%", icon: Eye, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Export Quality", value: "4K", change: "+15%", icon: Award, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "AI Features Used", value: "89%", change: "+12%", icon: Brain, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Demo timeline tracks data
  const timelineTracks = [
    { id: 'video1', type: 'video', name: 'Intro Clip', duration: 15, startTime: 0, locked: false, visible: true, color: '#3B82F6' },
    { id: 'video2', type: 'video', name: 'Main Content', duration: 45, startTime: 15, locked: false, visible: true, color: '#10B981' },
    { id: 'video3', type: 'video', name: 'Outro', duration: 12, startTime: 60, locked: false, visible: true, color: '#F59E0B' },
    { id: 'audio1', type: 'audio', name: 'Background Music', duration: 77, startTime: 0, locked: false, visible: true, color: '#8B5CF6' },
    { id: 'audio2', type: 'audio', name: 'Voice Over', duration: 50, startTime: 10, locked: false, visible: true, color: '#EF4444' },
    { id: 'text1', type: 'text', name: 'Title Card', duration: 8, startTime: 5, locked: false, visible: true, color: '#06B6D4' },
    { id: 'text2', type: 'text', name: 'Subtitle', duration: 25, startTime: 20, locked: false, visible: true, color: '#84CC16' },
    { id: 'effect1', type: 'effect', name: 'Fade In', duration: 2, startTime: 0, locked: false, visible: true, color: '#F97316' },
    { id: 'effect2', type: 'effect', name: 'Transition', duration: 3, startTime: 57, locked: false, visible: true, color: '#EC4899' },
  ];

  // Enhanced Templates with real images
  const templates = [
    { 
      id: 1, 
      name: 'Fashion Transition', 
      thumbnail: '/images/template/Fashion Transition.jpg', 
      duration: '15s', 
      category: 'Fashion', 
      effects: ['Smooth Transitions', 'Color Grading'],
      description: 'Perfect for fashion content with elegant transitions',
      tags: ['fashion', 'transition', 'elegant'],
      views: '2.3M',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Modern Product Showcase', 
      thumbnail: '/images/template/Modern Product Showcase.jpg', 
      duration: '30s', 
      category: 'Marketing', 
      effects: ['Product Focus', 'Call to Action'],
      description: 'Professional product showcase with modern aesthetics',
      tags: ['product', 'marketing', 'professional'],
      views: '1.8M',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Recipe Quick Cut', 
      thumbnail: '/images/template/Recipe Quick Cut.jpg', 
      duration: '45s', 
      category: 'Food', 
      effects: ['Quick Cuts', 'Step by Step'],
      description: 'Fast-paced recipe videos with dynamic cuts',
      tags: ['food', 'recipe', 'quick'],
      views: '3.1M',
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Story Reveal', 
      thumbnail: '/images/template/Story Reveal.jpg', 
      duration: '20s', 
      category: 'Storytelling', 
      effects: ['Mystery Build', 'Reveal Effect'],
      description: 'Engaging story format with reveal effects',
      tags: ['story', 'reveal', 'engaging'],
      views: '4.2M',
      rating: 4.9
    },
    { 
      id: 5, 
      name: 'Tech Review Intro', 
      thumbnail: '/images/template/Tech Review Intro.jpg', 
      duration: '25s', 
      category: 'Technology', 
      effects: ['Tech Animation', 'Data Visualization'],
      description: 'Professional tech review introduction',
      tags: ['tech', 'review', 'professional'],
      views: '2.7M',
      rating: 4.8
    },
    { 
      id: 6, 
      name: 'Travel Montage', 
      thumbnail: '/images/template/Travel Montage.jpg', 
      duration: '60s', 
      category: 'Travel', 
      effects: ['Cinematic Shots', 'Music Sync'],
      description: 'Cinematic travel montage with music sync',
      tags: ['travel', 'cinematic', 'montage'],
      views: '5.1M',
      rating: 4.9
    },
    { 
      id: 7, 
      name: 'Trending Audio Sync', 
      thumbnail: '/images/template/Trending Audio Sync.jpg', 
      duration: '15s', 
      category: 'Social Media', 
      effects: ['Beat Sync', 'Trending Audio'],
      description: 'Viral content with trending audio sync',
      tags: ['trending', 'audio', 'viral'],
      views: '6.8M',
      rating: 4.9
    },
    { 
      id: 8, 
      name: 'Tutorial Layout', 
      thumbnail: '/images/template/Tutorial Layout.jpg', 
      duration: '90s', 
      category: 'Educational', 
      effects: ['Clear Instructions', 'Visual Guides'],
      description: 'Educational tutorial with clear visual guides',
      tags: ['tutorial', 'educational', 'clear'],
      views: '3.5M',
      rating: 4.8
    },
  ];

  // Enhanced AI Effects
  const aiEffects = [
    { name: 'Auto Trim', icon: Scissors, description: 'AI-powered smart trimming', category: 'cutting', popular: true },
    { name: 'Smart Cut', icon: Wand2, description: 'Intelligent scene detection', category: 'cutting', popular: true },
    { name: 'Auto Color', icon: Palette, description: 'AI color correction', category: 'color', popular: false },
    { name: 'Background Remove', icon: Eye, description: 'Remove background automatically', category: 'effects', popular: true },
    { name: 'Auto Captions', icon: Type, description: 'Generate captions with AI', category: 'text', popular: true },
    { name: 'Voice Enhancement', icon: Mic, description: 'AI voice improvement', category: 'audio', popular: false },
    { name: 'Auto Transitions', icon: Zap, description: 'Smart transition effects', category: 'effects', popular: true },
    { name: 'Motion Tracking', icon: Target, description: 'Track objects automatically', category: 'effects', popular: false },
    { name: 'Beat Sync', icon: Music, description: 'Sync cuts to music beats', category: 'audio', popular: true },
    { name: 'Face Enhancement', icon: Users, description: 'AI-powered face beautification', category: 'effects', popular: false },
    { name: 'Auto Subtitles', icon: FileText, description: 'Generate multilingual subtitles', category: 'text', popular: true },
    { name: 'Scene Detection', icon: Eye, description: 'Detect and separate scenes', category: 'cutting', popular: false },
  ];

  // Filters and adjustments
  const filters = [
    { name: 'Brightness', value: 0, min: -100, max: 100, icon: Sun },
    { name: 'Contrast', value: 0, min: -100, max: 100, icon: Contrast },
    { name: 'Saturation', value: 0, min: -100, max: 100, icon: Palette },
    { name: 'Blur', value: 0, min: 0, max: 50, icon: Droplets },
    { name: 'Sharpen', value: 0, min: 0, max: 100, icon: Zap },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (videoRef.current) {
      videoRef.current.volume = value[0] / 100;
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleAIEffect = (effect: any) => {
    setIsProcessing(true);
    toast.success(`Applying ${effect.name}...`);
    
    // Simulate AI processing with realistic timing
    const processingTime = effect.popular ? 1500 : 2500; // Popular effects are faster
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`${effect.name} applied successfully!`);
      
      // Update timeline with new effect
      if (effect.category === 'effects') {
        const newEffect = {
          id: `effect_${Date.now()}`,
          type: 'effect',
          name: effect.name,
          duration: 2,
          startTime: currentTime,
          locked: false,
          visible: true,
          color: '#EC4899'
        };
        // In a real app, this would update the timeline
        console.log('New effect added:', newEffect);
      }
    }, processingTime);
  };

  const handleTemplateSelect = (template: any) => {
    setSelectedTemplate(template);
    setIsProcessing(true);
    toast.success(`Loading ${template.name} template...`);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowTemplates(false);
      toast.success(`${template.name} template applied!`);
    }, 2000);
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
          toast.success('Video exported successfully!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleImportVideo = () => {
    setIsProcessing(true);
    toast.success('Importing video...');
    
    setTimeout(() => {
      setIsProcessing(false);
      setHasVideo(true);
      toast.success('Video imported successfully!');
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
              <h1 className="text-2xl lg:text-4xl font-bold text-white">🚀 Advanced AI Video Editor</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Professional editing powered by AI - Create viral content</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                CapCut Style
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Wand2 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
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
          <Input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="text-sm lg:text-lg font-semibold bg-transparent border-none p-0 h-auto"
          />
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

      {/* Main Editor Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {/* Video Preview */}
        <div className="lg:col-span-2 xl:col-span-3 space-y-4 lg:space-y-6">
          {/* Video Player */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              
              {hasVideo ? (
                // Demo video content
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        LIVE
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Demo Video Preview</h3>
                    <p className="text-muted-foreground mb-4">My Awesome Video - 1:20</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>🎬 3 Video Clips</span>
                      <span>🎵 2 Audio Tracks</span>
                      <span>📝 2 Text Layers</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Import area
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <Play className="w-20 h-20 text-primary/50 mx-auto group-hover:text-primary transition-colors" />
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        AI
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Advanced AI Video Editor</h3>
                    <p className="text-muted-foreground mb-4">Drop your video here or click to import</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button onClick={handleImportVideo} disabled={isProcessing} className="bg-primary hover:bg-primary/90">
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Importing...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Import Video
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
              
              {/* Video Controls Overlay */}
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
                <h3 className="text-xl font-semibold text-foreground">🎬 Advanced Timeline</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Multi-Track
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">{zoomLevel}%</span>
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
                    {track.type === 'video' && <Video className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    {track.type === 'audio' && <Music className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    {track.type === 'text' && <Type className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
                    {track.type === 'effect' && <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />}
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
          {/* AI Effects */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">🤖 AI Effects</h3>
              <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary border-primary/20">
                Advanced
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3">
              {aiEffects.map((effect, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-2 lg:p-4 flex flex-col items-center gap-1 lg:gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIEffect(effect)}
                  disabled={isProcessing}
                >
                  {effect.popular && (
                    <Badge className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 py-0">
                      🔥
                    </Badge>
                  )}
                  <effect.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  <span className="text-xs font-medium text-center">{effect.name}</span>
                  <span className="text-xs text-muted-foreground text-center">{effect.category}</span>
                </Button>
              ))}
                </div>
          </Card>

          {/* Filters */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Filters</h3>
            </div>
            
            <div className="space-y-4">
              {filters.map((filter, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <filter.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{filter.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{filter.value}</span>
                  </div>
                  <Slider
                    value={[filter.value]}
                    onValueChange={(value) => {
                      // Update filter value
                    }}
                    min={filter.min}
                    max={filter.max}
                    step={1}
                    className="cursor-pointer"
                  />
              </div>
            ))}
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
                Import Media
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Music className="w-4 h-4 mr-2" />
                Add Music
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Type className="w-4 h-4 mr-2" />
                Add Text
            </Button>
            <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
                <Image className="w-4 h-4 mr-2" />
                Add Image
            </Button>
            <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Add Transition
            </Button>
          </div>
        </Card>
      </div>
      </div>

      {/* Enhanced Templates Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-card/98 backdrop-blur-xl border-border shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">Professional Video Templates</h1>
                    <p className="text-muted-foreground">Choose from our curated collection of AI-powered templates</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {templates.length} Templates
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowTemplates(false)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10 hover:text-primary">
                  All Categories
                </Badge>
                {['Fashion', 'Marketing', 'Food', 'Storytelling', 'Technology', 'Travel', 'Social Media', 'Educational'].map((category) => (
                  <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {templates.map((template) => (
                  <Card 
                    key={template.id}
                    className="group bg-secondary/30 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-xl hover:-translate-y-1"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    {/* Template Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={template.thumbnail} 
                        alt={`${template.name} video template`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Duration Badge */}
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {template.duration}
                      </div>
                      
                      {/* Views Badge */}
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {template.views}
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {template.rating}
                      </div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {template.name}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {template.description}
                      </p>
                      
                      {/* Effects Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {template.effects.map((effect, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {template.tags.map((tag, index) => (
                          <span key={index} className="text-xs text-muted-foreground">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for? Create your own custom template with our AI tools.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Create Custom Template
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
