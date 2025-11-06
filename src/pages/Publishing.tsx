import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
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
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Copy,
  Plus,
  Minus,
  Move,
  Settings,
  Palette,
  FileText,
  Hash,
  Heart,
  Share2,
  MessageSquare,
  BarChart3,
  PieChart,
  LineChart,
  X,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  Type,
  Languages,
  Globe,
  SkipBack,
  SkipForward,
  Maximize2,
  Grid3X3,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Tag,
  Folder,
  HardDrive,
  Cloud,
  Wifi,
  WifiOff,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Info,
  ExternalLink,
  Edit,
  RotateCcw,
  RotateCw,
  Crop,
  Contrast,
  Sun,
  Droplets,
  RotateLeft,
  RotateRight,
  Maximize,
  Minimize,
  Layers,
  Send,
  Upload,
  Bell,
  Timer,
  CalendarDays,
  Clock3,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ThumbsUp,
  MessageCircle,
  Share,
  Bookmark,
  Flag,
  MoreHorizontal,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Repeat,
  Shuffle,
  Volume1,
  Volume3,
  Headphones,
  Radio,
  Music,
  Video,
  Image,
  Camera,
  Film,
  Mic as MicIcon,
  Headphones as HeadphonesIcon,
  Radio as RadioIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Camera as CameraIcon,
  Film as FilmIcon
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const platforms = [
  { 
    name: "TikTok", 
    icon: "🎵", 
    connected: true, 
    color: "from-cyan-500 to-pink-500",
    followers: "2.4M",
    engagement: "8.5%",
    posts: 156,
    live: true,
    trending: true
  },
  { 
    name: "Instagram", 
    icon: "📷", 
    connected: true, 
    color: "from-purple-500 to-pink-500",
    followers: "1.8M",
    engagement: "6.2%",
    posts: 89,
    live: true,
    trending: false
  },
  { 
    name: "YouTube", 
    icon: "▶️", 
    connected: false, 
    color: "from-red-500 to-red-600",
    followers: "0",
    engagement: "0%",
    posts: 0,
    live: false,
    trending: false
  },
  { 
    name: "Twitter", 
    icon: "🐦", 
    connected: false, 
    color: "from-blue-400 to-blue-500",
    followers: "0",
    engagement: "0%",
    posts: 0,
    live: false,
    trending: false
  },
];

export default function Publishing() {
  console.log('🚀 Advanced AI Publishing Platform loaded successfully!');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishProgress, setPublishProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("publish");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isLive, setIsLive] = useState(true);
  const [liveStats, setLiveStats] = useState({
    totalViews: "12.4M",
    totalLikes: "2.8M",
    totalShares: "456K",
    totalComments: "89K"
  });

  // Stats for the dashboard
  const stats = [
    { label: "Total Posts", value: "2,847", change: "+18%", icon: Send, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Total Views", value: "45.2M", change: "+32%", icon: Eye, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Engagement Rate", value: "8.5%", change: "+12%", icon: Heart, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "AI Optimization", value: "98.5%", change: "+8%", icon: Brain, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Enhanced AI Publishing Features
  const aiPublishingFeatures = [
    { name: 'Auto Hashtags', icon: Hash, description: 'AI-powered hashtag suggestions', category: 'optimization', popular: true },
    { name: 'Content Optimization', icon: Wand2, description: 'Optimize content for each platform', category: 'optimization', popular: true },
    { name: 'Best Time Analysis', icon: Clock, description: 'Find optimal posting times', category: 'analytics', popular: true },
    { name: 'Trend Detection', icon: TrendingUp, description: 'Detect trending topics', category: 'trends', popular: true },
    { name: 'Audience Analysis', icon: Users, description: 'Analyze audience preferences', category: 'analytics', popular: false },
    { name: 'Engagement Prediction', icon: Target, description: 'Predict engagement levels', category: 'analytics', popular: true },
    { name: 'Content Scheduling', icon: CalendarDays, description: 'Smart scheduling recommendations', category: 'scheduling', popular: true },
    { name: 'Cross-Platform Sync', icon: RefreshCw, description: 'Sync content across platforms', category: 'automation', popular: false },
    { name: 'Performance Tracking', icon: BarChart3, description: 'Track performance metrics', category: 'analytics', popular: true },
    { name: 'A/B Testing', icon: Target, description: 'Test different content versions', category: 'testing', popular: false },
    { name: 'Auto Captions', icon: Type, description: 'Generate platform-specific captions', category: 'content', popular: true },
    { name: 'Live Analytics', icon: Activity, description: 'Real-time performance tracking', category: 'analytics', popular: true },
  ];

  const handlePublish = () => {
    setIsPublishing(true);
    setPublishProgress(0);
    toast.success('Starting multi-platform publish...');
    
    // Simulate realistic publishing progress
    const interval = setInterval(() => {
      setPublishProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPublishing(false);
          toast.success('Content published successfully across all platforms!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleAIFeature = (feature: any) => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    toast.success(`Applying ${feature.name}...`);
    
    // Simulate AI processing with realistic timing
    const processingTime = feature.popular ? 1500 : 2500;
    
    setTimeout(() => {
      setIsOptimizing(false);
      toast.success(`${feature.name} applied successfully!`);
    }, processingTime);
  };

  const handlePlatformToggle = (platformName: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformName) 
        ? prev.filter(name => name !== platformName)
        : [...prev, platformName]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 space-y-6 animate-fade-in">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 lg:gap-3">
              <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-300" />
              <h1 className="text-2xl lg:text-4xl font-bold text-white">🚀 Advanced AI Publishing</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Multi-platform publishing powered by AI intelligence</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Live Analytics
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Send className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Activity className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="group p-4 lg:p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-3 lg:space-y-4">
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
      <Card className="p-4 lg:p-6 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:gap-4">
            <h2 className="text-base lg:text-lg font-semibold">AI Publishing Project</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
              Live Analytics
            </Badge>
            <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
              <Activity className="w-3 h-3 mr-1" />
              {isLive ? "LIVE" : "OFFLINE"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsLive(!isLive)} variant="outline" size="sm" className="text-xs">
              <Activity className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              {isLive ? "Stop Live" : "Start Live"}
            </Button>
            <Button onClick={handlePublish} disabled={isPublishing} className="bg-primary hover:bg-primary/90 text-xs">
              {isPublishing ? (
                <>
                  <Loader2 className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 animate-spin" />
                  {Math.round(publishProgress)}%
                </>
              ) : (
                <>
                  <Send className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  Publish Now
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Interface */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Publishing Content */}
        <div className="xl:col-span-9 space-y-6">
          {/* Enhanced Connected Platforms */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">🌐 Connected Platforms</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {platforms.filter(p => p.connected).length} Connected
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform) => (
                <Card 
                  key={platform.name} 
                  className={`p-4 bg-card/60 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer ${
                    selectedPlatforms.includes(platform.name) ? 'border-primary bg-primary/10' : ''
                  }`}
                  onClick={() => handlePlatformToggle(platform.name)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="font-medium text-foreground">{platform.name}</span>
                </div>
                      <div className="flex items-center gap-1">
                        {platform.live && (
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                        {platform.trending && (
                          <Badge className="bg-orange-500 text-white text-xs px-1 py-0">
                            🔥
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {platform.connected && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Followers</span>
                          <span className="font-medium">{platform.followers}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Engagement</span>
                          <span className="font-medium text-green-500">{platform.engagement}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Posts</span>
                          <span className="font-medium">{platform.posts}</span>
                        </div>
              </div>
                    )}
                    
              <Button
                variant={platform.connected ? "outline" : "default"}
                size="sm"
                      className={`w-full ${
                        platform.connected 
                          ? "border-border hover:border-primary" 
                          : `bg-gradient-to-r ${platform.color} hover:shadow-lg`
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.success(`${platform.connected ? 'Disconnected from' : 'Connected to'} ${platform.name}`);
                      }}
              >
                {platform.connected ? "Disconnect" : "Connect"}
              </Button>
                  </div>
            </Card>
          ))}
        </div>
      </Card>

          {/* Enhanced Publishing Form */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">📝 AI Content Creator</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Smart Mode
              </Badge>
            </div>
            
            <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Caption</label>
              <Textarea
                  placeholder="Write your caption here... AI will optimize it for each platform"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                className="min-h-[120px] bg-secondary border-border focus:border-primary resize-none"
              />
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>{caption.length}/500 characters</span>
                  <Button size="sm" variant="ghost" onClick={() => toast.success('AI optimized caption!')}>
                    <Wand2 className="w-3 h-3 mr-1" />
                    AI Optimize
                  </Button>
                </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Hashtags</label>
              <Input
                placeholder="#trending #viral #contentcreator"
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                className="bg-secondary border-border focus:border-primary"
              />
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>AI suggests trending hashtags</span>
                  <Button size="sm" variant="ghost" onClick={() => toast.success('AI hashtags generated!')}>
                    <Hash className="w-3 h-3 mr-1" />
                    AI Generate
                  </Button>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                  <p className="font-medium text-foreground">Smart Scheduling</p>
                  <p className="text-sm text-muted-foreground">AI finds optimal posting times</p>
              </div>
              <Switch
                checked={scheduleEnabled}
                onCheckedChange={setScheduleEnabled}
              />
            </div>

              {isPublishing && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Publishing to platforms...</span>
                    <span>{Math.round(publishProgress)}%</span>
                  </div>
                  <Progress value={publishProgress} className="w-full" />
                </div>
              )}

            <div className="flex gap-2">
                <Button 
                  onClick={handlePublish} 
                  disabled={isPublishing}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
                >
                  {isPublishing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                Publish Now
                    </>
                  )}
              </Button>
              <Button variant="outline" className="border-border hover:border-primary">
                  <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>
          </div>
        </Card>

          {/* Enhanced Schedule Calendar with Content */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">📅 Smart Schedule</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                8 Posts Scheduled
              </Badge>
            </div>
            
            <div className="space-y-4">
              {/* Calendar with Scheduled Posts */}
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Grid with Scheduled Posts */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty days */}
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={`empty-${i}`} className="h-12"></div>
                  ))}
                  
                  {/* Day 1 */}
                  <div className="h-12 border border-border rounded p-1 bg-primary/10">
                    <div className="text-xs font-medium text-primary">1</div>
                    <div className="text-xs text-primary">🎵 TikTok</div>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">2</div>
                  </div>
                  
                  {/* Day 3 */}
                  <div className="h-12 border border-border rounded p-1 bg-accent/10">
                    <div className="text-xs font-medium text-accent">3</div>
                    <div className="text-xs text-accent">📷 Instagram</div>
                  </div>
                  
                  {/* Day 4 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">4</div>
                  </div>
                  
                  {/* Day 5 */}
                  <div className="h-12 border border-border rounded p-1 bg-green-500/10">
                    <div className="text-xs font-medium text-green-500">5</div>
                    <div className="text-xs text-green-500">▶️ YouTube</div>
                  </div>
                  
                  {/* Day 6 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">6</div>
                  </div>
                  
                  {/* Day 7 */}
                  <div className="h-12 border border-border rounded p-1 bg-blue-500/10">
                    <div className="text-xs font-medium text-blue-500">7</div>
                    <div className="text-xs text-blue-500">🐦 Twitter</div>
                  </div>
                  
                  {/* Day 8 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">8</div>
                  </div>
                  
                  {/* Day 9 */}
                  <div className="h-12 border border-border rounded p-1 bg-primary/10">
                    <div className="text-xs font-medium text-primary">9</div>
                    <div className="text-xs text-primary">🎵 TikTok</div>
                  </div>
                  
                  {/* Day 10 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">10</div>
                  </div>
                  
                  {/* Day 11 */}
                  <div className="h-12 border border-border rounded p-1 bg-accent/10">
                    <div className="text-xs font-medium text-accent">11</div>
                    <div className="text-xs text-accent">📷 Instagram</div>
                  </div>
                  
                  {/* Day 12 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">12</div>
                  </div>
                  
                  {/* Day 13 */}
                  <div className="h-12 border border-border rounded p-1 bg-green-500/10">
                    <div className="text-xs font-medium text-green-500">13</div>
                    <div className="text-xs text-green-500">▶️ YouTube</div>
                  </div>
                  
                  {/* Day 14 */}
                  <div className="h-12 border border-border rounded p-1 bg-orange-500/10">
                    <div className="text-xs font-medium text-orange-500">14</div>
                    <div className="text-xs text-orange-500">🔥 Multi-Platform</div>
                  </div>
                  
                  {/* Day 15 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">15</div>
                  </div>
                  
                  {/* Day 16 */}
                  <div className="h-12 border border-border rounded p-1 bg-primary/10">
                    <div className="text-xs font-medium text-primary">16</div>
                    <div className="text-xs text-primary">🎵 TikTok</div>
                  </div>
                  
                  {/* Day 17 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">17</div>
                  </div>
                  
                  {/* Day 18 */}
                  <div className="h-12 border border-border rounded p-1 bg-accent/10">
                    <div className="text-xs font-medium text-accent">18</div>
                    <div className="text-xs text-accent">📷 Instagram</div>
                  </div>
                  
                  {/* Day 19 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">19</div>
                  </div>
                  
                  {/* Day 20 */}
                  <div className="h-12 border border-border rounded p-1 bg-green-500/10">
                    <div className="text-xs font-medium text-green-500">20</div>
                    <div className="text-xs text-green-500">▶️ YouTube</div>
                  </div>
                  
                  {/* Day 21 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">21</div>
                  </div>
                  
                  {/* Day 22 */}
                  <div className="h-12 border border-border rounded p-1 bg-blue-500/10">
                    <div className="text-xs font-medium text-blue-500">22</div>
                    <div className="text-xs text-blue-500">🐦 Twitter</div>
                  </div>
                  
                  {/* Day 23 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">23</div>
                  </div>
                  
                  {/* Day 24 */}
                  <div className="h-12 border border-border rounded p-1 bg-primary/10">
                    <div className="text-xs font-medium text-primary">24</div>
                    <div className="text-xs text-primary">🎵 TikTok</div>
                  </div>
                  
                  {/* Day 25 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">25</div>
                  </div>
                  
                  {/* Day 26 */}
                  <div className="h-12 border border-border rounded p-1 bg-accent/10">
                    <div className="text-xs font-medium text-accent">26</div>
                    <div className="text-xs text-accent">📷 Instagram</div>
                  </div>
                  
                  {/* Day 27 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">27</div>
                  </div>
                  
                  {/* Day 28 */}
                  <div className="h-12 border border-border rounded p-1 bg-green-500/10">
                    <div className="text-xs font-medium text-green-500">28</div>
                    <div className="text-xs text-green-500">▶️ YouTube</div>
                  </div>
                  
                  {/* Day 29 */}
                  <div className="h-12 border border-border rounded p-1 bg-orange-500/10">
                    <div className="text-xs font-medium text-orange-500">29</div>
                    <div className="text-xs text-orange-500">🔥 Multi-Platform</div>
                  </div>
                  
                  {/* Day 30 */}
                  <div className="h-12 border border-border rounded p-1">
                    <div className="text-xs font-medium text-foreground">30</div>
                  </div>
                  
                  {/* Day 31 */}
                  <div className="h-12 border border-border rounded p-1 bg-primary/10">
                    <div className="text-xs font-medium text-primary">31</div>
                    <div className="text-xs text-primary">🎵 TikTok</div>
                  </div>
                </div>
              </div>
              
              {/* Quick Schedule Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-border hover:border-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Post
                </Button>
                <Button variant="outline" className="border-border hover:border-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Bulk Schedule
                </Button>
              </div>
            </div>
          </Card>

          {/* Enhanced Live Analytics - Horizontal Layout */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">📊 Live Analytics</h3>
              <Badge variant="secondary" className="ml-auto bg-green-500/10 text-green-500 border-green-500/20">
                LIVE
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Metrics */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <Eye className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{liveStats.totalViews}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <Heart className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{liveStats.totalLikes}</div>
                    <div className="text-xs text-muted-foreground">Likes</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <Share2 className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{liveStats.totalShares}</div>
                    <div className="text-xs text-muted-foreground">Shares</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{liveStats.totalComments}</div>
                    <div className="text-xs text-muted-foreground">Comments</div>
                  </div>
                </div>
                
                {/* Engagement Rate */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Engagement Rate</span>
                    <span className="text-green-500 font-medium">8.5%</span>
                  </div>
                  <Progress value={85} className="w-full" />
                </div>
              </div>

              {/* Platform Performance */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Platform Performance</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🎵</span>
                      <span className="text-xs text-muted-foreground">TikTok</span>
                    </div>
                    <div className="text-xs font-medium text-primary">2.4M views</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📷</span>
                      <span className="text-xs text-muted-foreground">Instagram</span>
                    </div>
                    <div className="text-xs font-medium text-accent">1.8M views</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">▶️</span>
                      <span className="text-xs text-muted-foreground">YouTube</span>
                    </div>
                    <div className="text-xs font-medium text-green-500">856K views</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🐦</span>
                      <span className="text-xs text-muted-foreground">Twitter</span>
                    </div>
                    <div className="text-xs font-medium text-blue-500">234K views</div>
                  </div>
                </div>
              </div>

              {/* Trending Hashtags */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Trending Hashtags</h4>
                <div className="flex flex-wrap gap-1">
                  {['#viral', '#trending', '#fyp', '#content', '#creator'].map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Best Posting Times */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Best Posting Times</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                    <span className="text-muted-foreground">TikTok</span>
                    <span className="text-primary font-medium">3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-accent/10 rounded">
                    <span className="text-muted-foreground">Instagram</span>
                    <span className="text-accent font-medium">7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-500/10 rounded">
                    <span className="text-muted-foreground">YouTube</span>
                    <span className="text-green-500 font-medium">2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tools Panel */}
        <div className="xl:col-span-3 space-y-6">
          {/* AI Publishing Features */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">🤖 AI Features</h3>
              <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary border-primary/20">
                Advanced
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
              {aiPublishingFeatures.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-3 flex flex-col items-center gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIFeature(feature)}
                  disabled={isOptimizing}
                >
                  {feature.popular && (
                    <Badge className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 py-0">
                      🔥
                    </Badge>
                  )}
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-center">{feature.name}</span>
                  <span className="text-xs text-muted-foreground text-center">{feature.category}</span>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Enhanced Publishing Queue */}
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">📋 Publishing Queue</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            2 Scheduled
          </Badge>
        </div>
        
        <div className="space-y-4">
          {[
            { 
              title: "Summer Fashion Video", 
              time: "Today at 3:00 PM", 
              platforms: ["TikTok", "Instagram"],
              status: "scheduled",
              engagement: "High",
              thumbnail: "/images/template/Fashion Transition.jpg"
            },
            { 
              title: "Product Review", 
              time: "Tomorrow at 10:00 AM", 
              platforms: ["YouTube"],
              status: "scheduled",
              engagement: "Medium",
              thumbnail: "/images/template/Modern Product Showcase.jpg"
            },
            { 
              title: "Tech Tutorial", 
              time: "In 2 hours", 
              platforms: ["TikTok", "Instagram", "Twitter"],
              status: "processing",
              engagement: "High",
              thumbnail: "/images/template/Tech Review Intro.jpg"
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {item.status === "processing" && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    </div>
                  )}
                </div>
                
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.time}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-1">
                      {item.platforms.map(p => (
                        <Badge key={p} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                          {p}
                        </Badge>
                      ))}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        item.engagement === "High" 
                          ? "bg-green-500/20 text-green-500 border-green-500/30" 
                          : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                      }`}
                    >
                      {item.engagement} Engagement
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {item.status === "processing" && (
                  <div className="flex items-center gap-2">
                    <Progress value={65} className="w-16" />
                    <span className="text-xs text-muted-foreground">65%</span>
                </div>
                )}
                <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                  <X className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
