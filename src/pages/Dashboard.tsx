import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
  Play, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  DollarSign,
  Target,
  Clock,
  Zap,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Sparkles,
  Crown,
  Star,
  Award,
  TrendingDown,
  Calendar,
  Filter,
  Download,
  Share2,
  MessageSquare,
  ThumbsUp,
  Share,
  Bookmark,
  Settings,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Brain,
  Cpu,
  Database,
  Layers,
  Network,
  Shield,
  Rocket,
  Lightbulb,
  TrendingUp as TrendingUpIcon,
  BarChart,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon
} from "lucide-react";
import { Link } from "react-router-dom";
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
  ReferenceLine
} from "recharts";

// Enhanced Stats with Theme Colors
const stats = [
  { 
    label: "Total Projects", 
    value: "47", 
    change: "+18%", 
    icon: Play, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Active video projects"
  },
  { 
    label: "Total Views", 
    value: "2.4M", 
    change: "+34%", 
    icon: Eye, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Cross-platform views"
  },
  { 
    label: "Engagement Rate", 
    value: "12.8%", 
    change: "+7%", 
    icon: Heart, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Average engagement"
  },
  { 
    label: "Followers", 
    value: "89.7K", 
    change: "+22%", 
    icon: Users, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Total followers"
  },
  { 
    label: "Revenue", 
    value: "$24.8K", 
    change: "+41%", 
    icon: DollarSign, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Monthly earnings"
  },
  { 
    label: "AI Score", 
    value: "94%", 
    change: "+5%", 
    icon: Brain, 
    color: "text-primary", 
    bgColor: "bg-primary/10",
    trend: "up",
    description: "Content optimization"
  },
];

// Advanced Chart Data with Realistic Trends
const performanceData = [
  { 
    month: 'Jan', 
    views: 185000, 
    engagement: 12500, 
    revenue: 3200, 
    subscribers: 1200,
    completion: 78,
    shares: 890
  },
  { 
    month: 'Feb', 
    views: 220000, 
    engagement: 15600, 
    revenue: 4100, 
    subscribers: 1450,
    completion: 82,
    shares: 1120
  },
  { 
    month: 'Mar', 
    views: 195000, 
    engagement: 14200, 
    revenue: 3800, 
    subscribers: 1380,
    completion: 79,
    shares: 980
  },
  { 
    month: 'Apr', 
    views: 280000, 
    engagement: 19800, 
    revenue: 5200, 
    subscribers: 1680,
    completion: 85,
    shares: 1450
  },
  { 
    month: 'May', 
    views: 320000, 
    engagement: 22400, 
    revenue: 6100, 
    subscribers: 1920,
    completion: 88,
    shares: 1680
  },
  { 
    month: 'Jun', 
    views: 380000, 
    engagement: 26600, 
    revenue: 7200, 
    subscribers: 2150,
    completion: 91,
    shares: 1980
  },
];

const platformAnalytics = [
  { 
    platform: 'TikTok', 
    percentage: 42, 
    views: 159600, 
    engagement: 8.2, 
    revenue: 3200,
    color: '#000000',
    icon: '🎵'
  },
  { 
    platform: 'Instagram', 
    percentage: 28, 
    views: 106400, 
    engagement: 12.4, 
    revenue: 2100,
    color: '#E4405F',
    icon: '📸'
  },
  { 
    platform: 'YouTube', 
    percentage: 22, 
    views: 83600, 
    engagement: 15.8, 
    revenue: 1800,
    color: '#FF0000',
    icon: '📺'
  },
  { 
    platform: 'Twitter', 
    percentage: 8, 
    views: 30400, 
    engagement: 6.1, 
    revenue: 100,
    color: '#1DA1F2',
    icon: '🐦'
  },
];

const audienceInsights = [
  { 
    ageGroup: '18-24', 
    percentage: 38, 
    engagement: 14.2, 
    growth: '+12%',
    preferences: ['Short-form', 'Trending', 'Music']
  },
  { 
    ageGroup: '25-34', 
    percentage: 32, 
    engagement: 11.8, 
    growth: '+8%',
    preferences: ['Educational', 'Lifestyle', 'Tech']
  },
  { 
    ageGroup: '35-44', 
    percentage: 18, 
    engagement: 9.4, 
    growth: '+5%',
    preferences: ['Tutorials', 'Reviews', 'News']
  },
  { 
    ageGroup: '45-54', 
    percentage: 8, 
    engagement: 7.1, 
    growth: '+3%',
    preferences: ['Long-form', 'Documentary', 'Educational']
  },
  { 
    ageGroup: '55+', 
    percentage: 4, 
    engagement: 5.8, 
    growth: '+1%',
    preferences: ['News', 'Educational', 'Documentary']
  },
];

const contentPerformance = [
  { 
    category: 'Video Completion', 
    value: 89, 
    target: 85, 
    trend: '+4%',
    status: 'excellent'
  },
  { 
    category: 'Click-through Rate', 
    value: 78, 
    target: 70, 
    trend: '+8%',
    status: 'excellent'
  },
  { 
    category: 'Share Rate', 
    value: 72, 
    target: 65, 
    trend: '+7%',
    status: 'good'
  },
  { 
    category: 'Comment Rate', 
    value: 58, 
    target: 60, 
    trend: '-2%',
    status: 'needs_improvement'
  },
  { 
    category: 'Save Rate', 
    value: 65, 
    target: 55, 
    trend: '+10%',
    status: 'excellent'
  },
  { 
    category: 'Follow Rate', 
    value: 42, 
    target: 45, 
    trend: '-3%',
    status: 'needs_improvement'
  },
];

const revenueBreakdown = [
  { 
    source: 'Sponsorships', 
    amount: 12800, 
    percentage: 52, 
    growth: '+28%',
    trend: 'up'
  },
  { 
    source: 'Ad Revenue', 
    amount: 7200, 
    percentage: 29, 
    growth: '+35%',
    trend: 'up'
  },
  { 
    source: 'Affiliate', 
    amount: 3200, 
    percentage: 13, 
    growth: '+18%',
    trend: 'up'
  },
  { 
    source: 'Merchandise', 
    amount: 1600, 
    percentage: 6, 
    growth: '+12%',
    trend: 'up'
  },
];

const aiInsights = [
  { 
    metric: 'Content Optimization', 
    score: 94, 
    description: 'AI-powered content suggestions',
    improvement: '+12% engagement'
  },
  { 
    metric: 'Trend Prediction', 
    score: 87, 
    description: 'Next viral topic analysis',
    improvement: '+8% views'
  },
  { 
    metric: 'Audience Targeting', 
    score: 91, 
    description: 'Precision audience matching',
    improvement: '+15% conversion'
  },
  { 
    metric: 'Optimal Timing', 
    score: 89, 
    description: 'Best posting schedule',
    improvement: '+22% reach'
  },
];

const quickActions = [
  { 
    title: "AI Script Generator", 
    description: "Generate viral scripts with AI", 
    link: "/script-generator", 
    icon: Brain,
    stats: "2.3K generated"
  },
  { 
    title: "Smart Video Editor", 
    description: "AI-powered editing tools", 
    link: "/video-editor", 
    icon: Cpu,
    stats: "47 projects"
  },
  { 
    title: "Auto Captions", 
    description: "Intelligent caption generation", 
    link: "/voice-captions", 
    icon: MessageSquare,
    stats: "98% accuracy"
  },
  { 
    title: "Multi-Publish", 
    description: "Cross-platform publishing", 
    link: "/publishing", 
    icon: Rocket,
    stats: "4 platforms"
  },
];

const recentProjects = [
  { 
    id: 1, 
    title: "AI-Powered Cooking Tips", 
    platform: "TikTok", 
    views: "340K", 
    engagement: "8.2%",
    status: "published",
    performance: "viral",
    revenue: "$1,200"
  },
  { 
    id: 2, 
    title: "Tech Review: Latest iPhone", 
    platform: "YouTube", 
    views: "125K", 
    engagement: "12.4%",
    status: "published",
    performance: "trending",
    revenue: "$890"
  },
  { 
    id: 3, 
    title: "Fashion Week Highlights", 
    platform: "Instagram", 
    views: "89K", 
    engagement: "15.8%",
    status: "draft",
    performance: "pending",
    revenue: "$0"
  },
  { 
    id: 4, 
    title: "Quick Fitness Routine", 
    platform: "TikTok", 
    views: "267K", 
    engagement: "9.1%",
    status: "published",
    performance: "trending",
    revenue: "$1,100"
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Enhanced Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl font-bold text-white">Welcome back, Creator!</h1>
            </div>
            <p className="text-white/90 text-lg">Your AI-powered content empire is growing stronger</p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Brain className="w-4 h-4 mr-2" />
                AI Score: 94%
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                +34% Growth
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{stat.change}</span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Advanced Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Overview */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Performance Overview</h3>
                <p className="text-sm text-muted-foreground">6-month trend analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Area yAxisId="left" type="monotone" dataKey="views" fill="hsl(var(--primary))" fillOpacity={0.3} stroke="hsl(var(--primary))" strokeWidth={2} />
                <Bar yAxisId="right" dataKey="revenue" fill="hsl(var(--primary))" fillOpacity={0.8} radius={[4, 4, 0, 0]} />
                <Line yAxisId="left" type="monotone" dataKey="engagement" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Platform Analytics */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Platform Distribution</h3>
                <p className="text-sm text-muted-foreground">Content performance by platform</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Activity className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={platformAnalytics}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={130}
                  paddingAngle={2}
                  dataKey="percentage"
                >
                  {platformAnalytics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {platformAnalytics.map((platform) => (
              <div key={platform.platform} className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{platform.platform}</span>
                      <span className="text-sm font-bold">{platform.percentage}%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {platform.views.toLocaleString()} views • {platform.engagement}% engagement
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI Insights & Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Insights */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">AI Insights</h3>
                <p className="text-sm text-muted-foreground">Machine learning recommendations</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-6">
            {aiInsights.map((insight) => (
              <div key={insight.metric} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{insight.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{insight.score}%</span>
                    <Badge variant="outline" className="text-primary border-primary/20">
                      {insight.improvement}
                    </Badge>
                  </div>
                </div>
                <Progress value={insight.score} className="h-2" />
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Content Performance */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Content Performance</h3>
                <p className="text-sm text-muted-foreground">Key metrics vs targets</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Calendar className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-6">
            {contentPerformance.map((item) => (
              <div key={item.category} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{item.value}%</span>
                    <Badge 
                      variant="outline" 
                      className={`${
                        item.status === 'excellent' ? 'text-green-600 border-green-200' :
                        item.status === 'good' ? 'text-blue-600 border-blue-200' :
                        'text-orange-600 border-orange-200'
                      }`}
                    >
                      {item.trend}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={item.value} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Target: {item.target}%</span>
                    <span>{item.status.replace('_', ' ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Revenue Analytics</h3>
              <p className="text-sm text-muted-foreground">Monthly earnings breakdown</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              +41% Growth
            </Badge>
            <Button variant="ghost" size="sm">
              <Calendar className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {revenueBreakdown.map((source) => (
            <div key={source.source} className="p-4 bg-muted/50 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{source.source}</span>
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {source.growth}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-primary">${source.amount.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{source.percentage}% of total</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Audience Insights */}
      <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Audience Insights</h3>
              <p className="text-sm text-muted-foreground">Demographic analysis & preferences</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Globe className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {audienceInsights.map((audience) => (
            <div key={audience.ageGroup} className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{audience.percentage}%</div>
                <div className="text-sm font-medium">{audience.ageGroup}</div>
                <div className="text-xs text-muted-foreground">{audience.engagement}% engagement</div>
              </div>
              <div className="space-y-2">
                <Progress value={audience.percentage} className="h-2" />
                <div className="text-xs text-center text-muted-foreground">{audience.growth}</div>
              </div>
              <div className="space-y-1">
                {audience.preferences.map((pref) => (
                  <Badge key={pref} variant="secondary" className="text-xs w-full justify-center">
                    {pref}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">AI-Powered Tools</h2>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            <Plus className="w-4 h-4 mr-2" />
            Explore More
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.link}>
              <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 cursor-pointer h-full hover:shadow-xl hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                      <action.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {action.stats}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Recent Projects</h2>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            View All <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project) => (
            <Card key={project.id} className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.platform}
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          project.performance === 'viral' ? 'bg-green-100 text-green-700' :
                          project.performance === 'trending' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {project.performance}
                      </Badge>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "published" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{project.views}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{project.engagement}</div>
                    <div className="text-xs text-muted-foreground">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{project.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full group-hover:text-primary">
                  Open Project <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
