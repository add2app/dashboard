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
  User,
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

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user) {
        toast.success("Registration successful! Please check your email to verify your account.");
        navigate("/login");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };


  const benefits = [
    { icon: Brain, text: "AI-Powered Content Creation", description: "Create stunning videos with AI assistance" },
    { icon: Video, text: "Professional Video Editing", description: "Edit like a pro with our advanced tools" },
    { icon: BarChart3, text: "Advanced Analytics", description: "Track performance with detailed insights" },
    { icon: Users, text: "Team Collaboration", description: "Work together seamlessly with your team" },
    { icon: Shield, text: "Enterprise Security", description: "Your data is safe with enterprise-grade security" },
    { icon: Zap, text: "Lightning Fast", description: "Process videos 10x faster than traditional tools" },
  ];

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Left Side - Full Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="/images/template/Fashion Transition.jpg" 
          alt="Add2App Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white z-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Add2App</h1>
            <p className="text-lg text-white/90">
              Join thousands of creators building amazing content
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free Forever Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          {/* Register Card */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-2xl">
            <div className="space-y-5">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-1">
                  <img src="/images/logoes/logo.png" alt="Add2App Logo" className="w-full h-auto max-h-16 object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Create Account</h2>
                <p className="text-muted-foreground">Join thousands of creators worldwide</p>
              </div>

              {/* Register Form */}
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10 bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="pl-10 bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 bg-secondary border-border focus:border-primary"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>


              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </Card>

          {/* Features Badge */}
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Star className="w-3 h-3 mr-1" />
              Free forever plan available
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
