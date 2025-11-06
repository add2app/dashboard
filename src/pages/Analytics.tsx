import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  TrendingDown,
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
  Calendar as CalendarIcon,
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
  ArrowUp,
  ArrowDown,
  ThumbsUp,
  MessageCircle as MessageCircleIcon,
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
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area, ScatterChart, Scatter } from "recharts";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const viewsData = [
  { date: "Mon", views: 12000, likes: 2400, shares: 800, comments: 1200 },
  { date: "Tue", views: 19000, likes: 3800, shares: 1200, comments: 1900 },
  { date: "Wed", views: 15000, likes: 3000, shares: 1000, comments: 1500 },
  { date: "Thu", views: 25000, likes: 5000, shares: 1600, comments: 2500 },
  { date: "Fri", views: 32000, likes: 6400, shares: 2000, comments: 3200 },
  { date: "Sat", views: 28000, likes: 5600, shares: 1800, comments: 2800 },
  { date: "Sun", views: 35000, likes: 7000, shares: 2200, comments: 3500 },
];

const platformData = [
  { name: "TikTok", value: 45, color: "#00f2ea", views: "2.4M", engagement: "8.5%" },
  { name: "Instagram", value: 30, color: "#e1306c", views: "1.8M", engagement: "6.2%" },
  { name: "YouTube", value: 25, color: "#ff0000", views: "856K", engagement: "7.8%" },
];

const engagementData = [
  { metric: "Likes", count: 45200, change: "+12%", color: "#ef4444" },
  { metric: "Comments", count: 12800, change: "+8%", color: "#3b82f6" },
  { metric: "Shares", count: 8900, change: "+15%", color: "#10b981" },
  { metric: "Saves", count: 15600, change: "+6%", color: "#f59e0b" },
];

const audienceData = [
  { age: "13-17", percentage: 15, count: "180K" },
  { age: "18-24", percentage: 35, count: "420K" },
  { age: "25-34", percentage: 28, count: "336K" },
  { age: "35-44", percentage: 15, count: "180K" },
  { age: "45+", percentage: 7, count: "84K" },
];

export default function Analytics() {
  console.log('📊 Advanced AI Analytics Platform loaded successfully!');
  const [activeTab, setActiveTab] = useState("overview");
  const [isLive, setIsLive] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState("views");
  const [timeRange, setTimeRange] = useState("7d");

  // Stats for the dashboard
  const stats = [
    { label: "Total Views", value: "12.4M", change: "+23.4%", icon: Eye, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Engagement Rate", value: "8.5%", change: "+5.2%", icon: Heart, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Total Shares", value: "456K", change: "+15.3%", icon: Share2, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "New Followers", value: "89K", change: "+18.3%", icon: Users, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Enhanced AI Analytics Features
  const aiAnalyticsFeatures = [
    { name: 'Predictive Analytics', icon: Brain, description: 'AI-powered performance predictions', category: 'prediction', popular: true },
    { name: 'Audience Insights', icon: Users, description: 'Deep audience behavior analysis', category: 'audience', popular: true },
    { name: 'Content Optimization', icon: Wand2, description: 'AI content recommendations', category: 'optimization', popular: true },
    { name: 'Trend Analysis', icon: TrendingUp, description: 'Real-time trend detection', category: 'trends', popular: true },
    { name: 'Competitor Analysis', icon: Target, description: 'Compare with competitors', category: 'competition', popular: false },
    { name: 'ROI Calculator', icon: BarChart3, description: 'Calculate content ROI', category: 'business', popular: true },
    { name: 'Sentiment Analysis', icon: Heart, description: 'Analyze audience sentiment', category: 'sentiment', popular: true },
    { name: 'Growth Forecasting', icon: TrendingUp, description: 'Predict future growth', category: 'forecasting', popular: false },
    { name: 'A/B Test Results', icon: Target, description: 'Analyze A/B test performance', category: 'testing', popular: true },
    { name: 'Peak Time Analysis', icon: Clock, description: 'Find optimal posting times', category: 'timing', popular: true },
    { name: 'Hashtag Performance', icon: Hash, description: 'Track hashtag effectiveness', category: 'hashtags', popular: true },
    { name: 'Cross-Platform Sync', icon: RefreshCw, description: 'Sync analytics across platforms', category: 'sync', popular: false },
  ];

  const handleAIFeature = (feature: any) => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    toast.success(`Running ${feature.name} analysis...`);
    
    // Simulate AI analysis with realistic timing
    const processingTime = feature.popular ? 2000 : 3000;
    
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success(`${feature.name} analysis completed!`);
    }, processingTime);
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
              <h1 className="text-2xl lg:text-4xl font-bold text-white">📊 Advanced AI Analytics</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Intelligent insights and performance tracking powered by AI</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Real-time
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
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
            <h2 className="text-base lg:text-lg font-semibold">AI Analytics Dashboard</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
              Live Data
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
            <Button onClick={() => toast.success('Report exported successfully!')} variant="outline" size="sm" className="text-xs">
              <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Interface */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Analytics Content */}
        <div className="xl:col-span-9 space-y-6">
          {/* Enhanced Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Multi-Metric Views Chart */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">📈 Performance Trends</h2>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Multi-Metric
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => toast.success('Chart refreshed!')}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="likes"
                    stackId="2"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent))"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* Enhanced Platform Distribution */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">🌐 Platform Performance</h2>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Real-time
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Platform Details */}
              <div className="mt-4 space-y-2">
                {platformData.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                      <span className="text-sm font-medium">{platform.name}</span>
                    </div>
                    <div className="text-right text-xs">
                      <div className="font-medium">{platform.views}</div>
                      <div className="text-muted-foreground">{platform.engagement}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Enhanced Engagement Analysis */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">💬 Engagement Analysis</h2>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  AI Insights
                </Badge>
                <Button size="sm" variant="outline" onClick={() => toast.success('Engagement analysis updated!')}>
                  <Brain className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            
            {/* Engagement Insights */}
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {engagementData.map((metric, index) => (
                <div key={index} className="p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <span className="text-xs text-green-500 font-medium">{metric.change}</span>
                  </div>
                  <div className="text-lg font-bold">{metric.count.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Audience Demographics */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">👥 Audience Demographics</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                AI Analyzed
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Age Distribution */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Age Distribution</h3>
                <div className="space-y-3">
                  {audienceData.map((ageGroup, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{ageGroup.age}</span>
                        <span className="text-muted-foreground">{ageGroup.count}</span>
                      </div>
                      <Progress value={ageGroup.percentage} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Geographic Distribution */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Top Locations</h3>
                <div className="space-y-3">
                  {[
                    { country: "United States", percentage: 35, count: "420K" },
                    { country: "United Kingdom", percentage: 18, count: "216K" },
                    { country: "Canada", percentage: 12, count: "144K" },
                    { country: "Australia", percentage: 8, count: "96K" },
                    { country: "Germany", percentage: 6, count: "72K" },
                  ].map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">{location.country}</span>
                      <div className="text-right text-xs">
                        <div className="font-medium">{location.count}</div>
                        <div className="text-muted-foreground">{location.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tools Panel */}
        <div className="xl:col-span-3 space-y-6">
          {/* AI Analytics Features */}
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
              {aiAnalyticsFeatures.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-3 flex flex-col items-center gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIFeature(feature)}
                  disabled={isAnalyzing}
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

          {/* Quick Insights */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">💡 Quick Insights</h3>
              <Badge variant="secondary" className="ml-auto bg-green-500/10 text-green-500 border-green-500/20">
                LIVE
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Peak Performance</span>
                </div>
                <p className="text-xs text-muted-foreground">Your content performs best on Sundays at 7 PM</p>
              </div>
              
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Growth Opportunity</span>
                </div>
                <p className="text-xs text-muted-foreground">TikTok engagement increased 23% this week</p>
              </div>
              
              <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-500">Attention</span>
                </div>
                <p className="text-xs text-muted-foreground">Instagram reach decreased 5% - consider content strategy</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Enhanced Top Performing Content */}
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">🏆 Top Performing Content</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              AI Ranked
            </Badge>
            <Button size="sm" variant="outline" onClick={() => toast.success('Content ranking updated!')}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { 
              title: "Summer Fashion Trends 2024", 
              views: "250K", 
              engagement: "9.2%", 
              platform: "TikTok",
              thumbnail: "/images/template/Fashion Transition.jpg",
              rank: 1,
              trend: "up",
              revenue: "$2.4K"
            },
            { 
              title: "Quick Recipe: 5-Min Breakfast", 
              views: "180K", 
              engagement: "8.7%", 
              platform: "Instagram",
              thumbnail: "/images/template/Modern Product Showcase.jpg",
              rank: 2,
              trend: "up",
              revenue: "$1.8K"
            },
            { 
              title: "Tech Review: Latest Gadgets", 
              views: "150K", 
              engagement: "7.8%", 
              platform: "YouTube",
              thumbnail: "/images/template/Tech Review Intro.jpg",
              rank: 3,
              trend: "down",
              revenue: "$1.2K"
            },
            { 
              title: "Morning Workout Routine", 
              views: "120K", 
              engagement: "8.1%", 
              platform: "TikTok",
              thumbnail: "/images/template/Fitness Motivation.jpg",
              rank: 4,
              trend: "up",
              revenue: "$980"
            },
            { 
              title: "Travel Vlog: Tokyo Adventure", 
              views: "95K", 
              engagement: "6.9%", 
              platform: "YouTube",
              thumbnail: "/images/template/Travel Vlog Intro.jpg",
              rank: 5,
              trend: "stable",
              revenue: "$750"
            },
          ].map((video, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{video.rank}</span>
                  </div>
                  <div className="w-16 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {video.engagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {video.revenue} revenue
                    </span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        video.platform === "TikTok" 
                          ? "bg-primary/20 text-primary border-primary/30" 
                          : video.platform === "Instagram"
                          ? "bg-accent/20 text-accent border-accent/30"
                          : "bg-green-500/20 text-green-500 border-green-500/30"
                      }`}
                    >
                      {video.platform}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {video.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                  {video.trend === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                  {video.trend === "stable" && <Activity className="w-4 h-4 text-blue-500" />}
                </div>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
