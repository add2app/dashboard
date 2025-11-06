import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Image as ImageIcon,
  Camera,
  Film,
  Mic as MicIcon,
  Headphones as HeadphonesIcon,
  Radio as RadioIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Image as ImageIcon2,
  Camera as CameraIcon,
  Film as FilmIcon,
  UserPlus,
  MoreVertical,
  Mail,
  User as UserIcon,
  UserCheck,
  UserX,
  UserCog,
  UserSearch,
  Calendar,
  Clock as ClockIcon,
  MapPin,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Globe as GlobeIcon,
  Building,
  Briefcase,
  GraduationCap,
  Award as AwardIcon,
  Trophy,
  Medal,
  Star as StarIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageSquare as MessageSquareIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  Flag as FlagIcon,
  MoreHorizontal as MoreHorizontalIcon,
  PlayCircle as PlayCircleIcon,
  PauseCircle as PauseCircleIcon,
  StopCircle as StopCircleIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  Volume1 as Volume1Icon,
  Volume3 as Volume3Icon,
  Headphones as HeadphonesIcon2,
  Radio as RadioIcon2,
  Music as MusicIcon2,
  Video as VideoIcon2,
  Image as ImageIcon3,
  Camera as CameraIcon2,
  Film as FilmIcon2,
  Code
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const teamMembers = [
  { 
    name: "Sarah Johnson", 
    email: "sarah@add2app.com", 
    role: "owner", 
    status: "active", 
    avatar: "SJ",
    lastActive: "2 minutes ago",
    projects: 12,
    contributions: 156,
    joinDate: "Jan 2023",
    location: "San Francisco, CA",
    skills: ["AI", "Design", "Strategy"],
    bio: "Creative Director & Founder",
    social: { linkedin: "sarahjohnson", twitter: "sarahj" }
  },
  { 
    name: "Mike Chen", 
    email: "mike@add2app.com", 
    role: "admin", 
    status: "active", 
    avatar: "MC",
    lastActive: "5 minutes ago",
    projects: 8,
    contributions: 89,
    joinDate: "Mar 2023",
    location: "New York, NY",
    skills: ["Development", "AI", "Backend"],
    bio: "Lead Developer & AI Engineer",
    social: { github: "mikechen", linkedin: "mikechen" }
  },
  { 
    name: "Emily Davis", 
    email: "emily@add2app.com", 
    role: "editor", 
    status: "active", 
    avatar: "ED",
    lastActive: "1 hour ago",
    projects: 6,
    contributions: 67,
    joinDate: "Jun 2023",
    location: "Austin, TX",
    skills: ["Content", "Marketing", "Social"],
    bio: "Content Creator & Marketing Lead",
    social: { instagram: "emilydavis", twitter: "emilyd" }
  },
  { 
    name: "Tom Wilson", 
    email: "tom@add2app.com", 
    role: "viewer", 
    status: "invited", 
    avatar: "TW",
    lastActive: "Never",
    projects: 0,
    contributions: 0,
    joinDate: "Pending",
    location: "London, UK",
    skills: ["Analytics", "Strategy"],
    bio: "Business Analyst",
    social: { linkedin: "tomwilson" }
  },
];

const teamStats = [
  { label: "Active Members", value: "3", change: "+1", icon: Users, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Total Projects", value: "26", change: "+4", icon: Folder, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Contributions", value: "312", change: "+23", icon: Activity, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Collaboration Score", value: "94%", change: "+8%", icon: Star, color: "text-primary", bgColor: "bg-primary/10" },
];

const recentActivity = [
  { user: "Sarah Johnson", action: "created new project", project: "Summer Campaign", time: "2 min ago", type: "create" },
  { user: "Mike Chen", action: "updated AI model", project: "Voice Processing", time: "15 min ago", type: "update" },
  { user: "Emily Davis", action: "published content", project: "Brand Guidelines", time: "1 hour ago", type: "publish" },
  { user: "Sarah Johnson", action: "shared project", project: "Team Templates", time: "2 hours ago", type: "share" },
];

export default function Team() {
  console.log('👥 Advanced AI Team Collaboration Platform loaded successfully!');
  const [activeTab, setActiveTab] = useState("overview");
  const [isInviting, setIsInviting] = useState(false);
  const [inviteProgress, setInviteProgress] = useState(0);
  const [selectedMember, setSelectedMember] = useState("");
  const [isOnline, setIsOnline] = useState(true);

  // Enhanced AI Team Features
  const aiTeamFeatures = [
    { name: 'Smart Invitations', icon: UserPlus, description: 'AI-powered team member recommendations', category: 'invitations', popular: true },
    { name: 'Role Optimization', icon: UserCog, description: 'Automated role assignment based on skills', category: 'roles', popular: true },
    { name: 'Collaboration Insights', icon: Activity, description: 'Team performance and productivity analytics', category: 'analytics', popular: true },
    { name: 'Workload Balance', icon: Target, description: 'AI-driven task distribution and workload management', category: 'balance', popular: true },
    { name: 'Skill Matching', icon: UserSearch, description: 'Match team members to projects by skills', category: 'matching', popular: true },
    { name: 'Conflict Resolution', icon: Shield, description: 'AI-powered team conflict detection and resolution', category: 'conflict', popular: false },
    { name: 'Performance Tracking', icon: TrendingUp, description: 'Individual and team performance monitoring', category: 'performance', popular: true },
    { name: 'Communication Analysis', icon: MessageCircle, description: 'Analyze team communication patterns', category: 'communication', popular: false },
    { name: 'Project Recommendations', icon: Sparkles, description: 'AI-suggested project assignments', category: 'projects', popular: true },
    { name: 'Team Health Score', icon: Heart, description: 'Overall team wellness and satisfaction metrics', category: 'health', popular: true },
    { name: 'Automated Onboarding', icon: UserCheck, description: 'AI-guided new member onboarding process', category: 'onboarding', popular: true },
    { name: 'Retention Analytics', icon: Award, description: 'Predict and improve team member retention', category: 'retention', popular: false },
  ];

  const handleAIFeature = (feature: any) => {
    setIsInviting(true);
    setInviteProgress(0);
    toast.success(`Running ${feature.name} analysis...`);
    
    // Simulate AI analysis with realistic timing
    const processingTime = feature.popular ? 2000 : 3000;
    
    setTimeout(() => {
      setIsInviting(false);
      toast.success(`${feature.name} analysis completed!`);
    }, processingTime);
  };

  const handleInviteMember = () => {
    setIsInviting(true);
    setInviteProgress(0);
    toast.success('Sending invitation...');
    
    setTimeout(() => {
      setIsInviting(false);
      toast.success('Invitation sent successfully!');
    }, 2000);
  };

const getRoleIcon = (role: string) => {
  switch (role) {
    case "owner": return <Crown className="w-4 h-4 text-yellow-500" />;
    case "admin": return <Shield className="w-4 h-4 text-primary" />;
    default: return <UserIcon className="w-4 h-4 text-muted-foreground" />;
  }
};

  const getRoleColor = (role: string) => {
    switch (role) {
      case "owner": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "admin": return "bg-primary/20 text-primary border-primary/30";
      case "editor": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "viewer": return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "invited": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "offline": return "bg-gray-500/20 text-gray-500 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
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
              <h1 className="text-2xl lg:text-4xl font-bold text-white">👥 Advanced AI Team Collaboration</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Intelligent team management and collaboration powered by AI</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Users className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Smart Collaboration
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Activity className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {teamStats.map((stat) => (
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
            <h2 className="text-base lg:text-lg font-semibold">AI Team Collaboration Dashboard</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
              Smart Collaboration
            </Badge>
            <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              {isOnline ? "ONLINE" : "OFFLINE"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsOnline(!isOnline)} variant="outline" size="sm" className="text-xs">
              <Settings className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              {isOnline ? "Go Offline" : "Go Online"}
            </Button>
            <Button onClick={() => toast.success('Team data exported successfully!')} variant="outline" size="sm" className="text-xs">
              <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              Export Team Data
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Interface */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Team Content */}
        <div className="xl:col-span-9 space-y-6">
          {/* Enhanced Invite Section */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <UserPlus className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">👥 Smart Invitations</h2>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  AI Powered
                </Badge>
                <Button onClick={handleInviteMember} disabled={isInviting} className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg">
                  {isInviting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Mail className="w-4 h-4 mr-2" />}
                  {isInviting ? "Sending..." : "Send Invite"}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-3">
          <Input
            placeholder="Enter email address..."
            type="email"
                    className="bg-secondary border-border focus:border-primary"
          />
          <Select defaultValue="editor">
                    <SelectTrigger className="bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">AI Suggestions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Based on team composition, we recommend inviting someone with Design skills.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Quick Invite Templates</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-left" size="sm">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Designer & Creative Professional
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" size="sm">
                    <Code className="w-4 h-4 mr-2" />
                    Developer & Technical Expert
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Marketing & Analytics Specialist
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Enhanced Team Members */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">👨‍💼 Team Members ({teamMembers.length})</h2>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Live Status
                </Badge>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-4 bg-secondary/50 border-border hover:border-primary/50 transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-semibold">
                            {member.avatar}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            member.status === "active" ? "bg-green-500" : "bg-yellow-500"
                          }`} />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-foreground">{member.name}</h3>
                            {getRoleIcon(member.role)}
                          </div>
                          <p className="text-sm text-muted-foreground">{member.bio}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{member.location}</span>
                            <Clock className="w-3 h-3 ml-2" />
                            <span>{member.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className={`text-xs ${getRoleColor(member.role)}`}>
                          {member.role}
                        </Badge>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(member.status)}`}>
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Projects</span>
                          <span className="font-medium text-foreground">{member.projects}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Contributions</span>
                          <span className="font-medium text-foreground">{member.contributions}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Joined</span>
                          <span className="font-medium text-foreground">{member.joinDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Skills</span>
                          <div className="flex gap-1">
                            {member.skills.slice(0, 2).map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

          {/* Recent Activity */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">📊 Recent Activity</h2>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                Live Updates
              </Badge>
            </div>
            
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium text-primary">{activity.project}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Enhanced Role Permissions */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">🛡️ Role Permissions</h2>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                AI Optimized
              </Badge>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
                { role: "Owner", permissions: ["Full access", "Billing", "Delete workspace", "Manage all"], icon: Crown, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
                { role: "Admin", permissions: ["Manage members", "Edit content", "Publish", "Analytics"], icon: Shield, color: "bg-primary/10 text-primary border-primary/20" },
                { role: "Editor", permissions: ["Edit content", "Upload media", "Use templates", "Export"], icon: UserIcon, color: "bg-green-500/10 text-green-500 border-green-500/20" },
                { role: "Viewer", permissions: ["View projects", "Comment", "Download", "Share links"], icon: UserIcon, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
          ].map((item) => (
                <Card key={item.role} className="p-4 bg-secondary/50 border-border hover:border-primary/50 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">{item.role}</h3>
              </div>
                    <Badge variant="secondary" className={`text-xs ${item.color}`}>
                      {item.permissions.length} Permissions
                    </Badge>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {item.permissions.map((perm) => (
                        <li key={perm} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {perm}
                        </li>
                ))}
              </ul>
                  </div>
            </Card>
          ))}
        </div>
      </Card>
        </div>

        {/* Tools Panel */}
        <div className="xl:col-span-3 space-y-6">
          {/* AI Team Features */}
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
              {aiTeamFeatures.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-3 flex flex-col items-center gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIFeature(feature)}
                  disabled={isInviting}
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

          {/* Team Health Score */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">❤️ Team Health</h3>
              <Badge variant="secondary" className="ml-auto bg-green-500/10 text-green-500 border-green-500/20">
                94%
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Overall Team Satisfaction</span>
                  <span className="font-medium">94%</span>
                </div>
                <Progress value={94} className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Collaboration Score</span>
                  <span className="font-medium">89%</span>
                </div>
                <Progress value={89} className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Productivity Index</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="w-full" />
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span>Team performance is trending upward</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
