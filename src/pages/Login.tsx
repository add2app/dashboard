import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Brain,
  Zap,
  Sparkles,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Users,
  Activity,
  Shield,
  Target,
  TrendingUp,
  Heart,
  MessageCircle,
  BarChart3,
  Palette,
  Type,
  Image as ImageIcon,
  Video,
  Mic,
  Globe,
  Camera,
  Film,
  Music,
  Headphones,
  Radio,
  Play,
  Pause,
  Volume2,
  Download,
  Upload,
  Settings,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Building,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Star as StarIcon,
  ThumbsUp,
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
  Headphones as HeadphonesIcon,
  Radio as RadioIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Image as ImageIcon2,
  Camera as CameraIcon,
  Film as FilmIcon,
  Mic as MicIcon,
  Headphones as HeadphonesIcon2,
  Radio as RadioIcon2,
  Music as MusicIcon2,
  Video as VideoIcon2,
  Image as ImageIcon3,
  Camera as CameraIcon2,
  Film as FilmIcon2
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user) {
        toast.success("Login successful! Welcome back!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };


  const features = [
    { icon: Brain, text: "AI-Powered Content Creation" },
    { icon: Video, text: "Professional Video Editing" },
    { icon: Mic, text: "Voice & Caption Generation" },
    { icon: BarChart3, text: "Advanced Analytics" },
    { icon: Users, text: "Team Collaboration" },
    { icon: Shield, text: "Enterprise Security" },
  ];

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Left Side - Full Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="/images/template/Modern Product Showcase.jpg" 
          alt="Add2App Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white z-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Add2App</h1>
            <p className="text-lg text-white/90">
              Advanced AI-Powered Content Creation Platform
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>50K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>1M+ Videos Created</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          {/* Login Card */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-2xl">
            <div className="space-y-5">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-1">
                  <img src="/images/logoes/logo.png" alt="Add2App Logo" className="w-full h-auto max-h-16 object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                <p className="text-muted-foreground">Sign in to your account to continue</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-secondary border-border focus:border-primary"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>


              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>
          </Card>

          {/* Features Badge */}
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 50,000+ creators worldwide
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
