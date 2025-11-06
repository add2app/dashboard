import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Upload, 
  FolderOpen, 
  Image, 
  Video, 
  Music, 
  Trash2, 
  MoreVertical,
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
  Calendar,
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
  Hash as HashIcon,
  Activity as ActivityIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Loader2 as Loader2Icon,
  RefreshCw as RefreshCwIcon,
  Save as SaveIcon,
  FolderOpen as FolderOpenIcon,
  Search as SearchIcon,
  Sliders,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  X as XIcon
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const mediaItems = [
  { 
    id: 1, 
    name: "intro-video.mp4", 
    type: "video", 
    size: "12.4 MB", 
    date: "2024-01-15",
    duration: "0:15",
    resolution: "1920x1080",
    format: "MP4",
    thumbnail: "/images/template/Fashion Transition.jpg",
    tags: ["intro", "video", "marketing"],
    views: 1250,
    downloads: 45,
    rating: 4.8,
    category: "Marketing",
    popular: true
  },
  { 
    id: 2, 
    name: "product-shot.jpg", 
    type: "image", 
    size: "2.1 MB", 
    date: "2024-01-14",
    resolution: "2048x1536",
    format: "JPEG",
    thumbnail: "/images/template/Modern Product Showcase.jpg",
    tags: ["product", "photo", "ecommerce"],
    views: 890,
    downloads: 23,
    rating: 4.6,
    category: "Product",
    popular: false
  },
  { 
    id: 3, 
    name: "background-music.mp3", 
    type: "audio", 
    size: "4.5 MB", 
    date: "2024-01-13",
    duration: "2:30",
    format: "MP3",
    thumbnail: "/images/template/Travel Montage.jpg",
    tags: ["music", "background", "ambient"],
    views: 2100,
    downloads: 78,
    rating: 4.9,
    category: "Audio",
    popular: true
  },
  { 
    id: 4, 
    name: "outro-clip.mp4", 
    type: "video", 
    size: "8.2 MB", 
    date: "2024-01-12",
    duration: "0:08",
    resolution: "1920x1080",
    format: "MP4",
    thumbnail: "/images/template/Story Reveal.jpg",
    tags: ["outro", "video", "ending"],
    views: 980,
    downloads: 34,
    rating: 4.7,
    category: "Marketing",
    popular: false
  },
  { 
    id: 5, 
    name: "thumbnail.png", 
    type: "image", 
    size: "1.8 MB", 
    date: "2024-01-11",
    resolution: "1280x720",
    format: "PNG",
    thumbnail: "/images/template/Tech Review Intro.jpg",
    tags: ["thumbnail", "preview", "social"],
    views: 1560,
    downloads: 67,
    rating: 4.8,
    category: "Social Media",
    popular: true
  },
  { 
    id: 6, 
    name: "voiceover.mp3", 
    type: "audio", 
    size: "3.2 MB", 
    date: "2024-01-10",
    duration: "1:45",
    format: "MP3",
    thumbnail: "/images/template/Tutorial Layout.jpg",
    tags: ["voice", "narration", "ai"],
    views: 1750,
    downloads: 89,
    rating: 4.9,
    category: "Audio",
    popular: true
  },
  { 
    id: 7, 
    name: "b-roll.mp4", 
    type: "video", 
    size: "15.7 MB", 
    date: "2024-01-09",
    duration: "0:45",
    resolution: "1920x1080",
    format: "MP4",
    thumbnail: "/images/template/Recipe Quick Cut.jpg",
    tags: ["broll", "footage", "cinematic"],
    views: 2100,
    downloads: 56,
    rating: 4.8,
    category: "Cinematic",
    popular: true
  },
  { 
    id: 8, 
    name: "logo.svg", 
    type: "image", 
    size: "0.5 MB", 
    date: "2024-01-08",
    resolution: "Vector",
    format: "SVG",
    thumbnail: "/images/template/Trending Audio Sync.jpg",
    tags: ["logo", "brand", "vector"],
    views: 3200,
    downloads: 145,
    rating: 4.9,
    category: "Brand",
    popular: true
  },
];

export default function MediaLibrary() {
  console.log('📁 Advanced Media Library loaded successfully!');
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isSaved, setIsSaved] = useState(true);
  const [hasMedia, setHasMedia] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPreview, setShowPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Stats for the dashboard
  const stats = [
    { label: "Total Files", value: "2,847", change: "+18%", icon: FolderOpen, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Storage Used", value: "45.2 GB", change: "+12%", icon: HardDrive, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "Downloads", value: "12.4K", change: "+28%", icon: Download, color: "text-primary", bgColor: "bg-primary/10" },
    { label: "AI Processing", value: "98.5%", change: "+8%", icon: Brain, color: "text-primary", bgColor: "bg-primary/10" },
  ];

  // Enhanced AI Media Features
  const aiMediaFeatures = [
    { name: 'Auto Tagging', icon: Tag, description: 'AI-powered automatic tagging', category: 'organization', popular: true },
    { name: 'Smart Search', icon: Search, description: 'Intelligent content search', category: 'search', popular: true },
    { name: 'Auto Thumbnail', icon: Image, description: 'Generate thumbnails automatically', category: 'processing', popular: true },
    { name: 'Format Conversion', icon: RefreshCw, description: 'Convert between formats', category: 'conversion', popular: false },
    { name: 'Quality Enhancement', icon: Award, description: 'AI-powered quality improvement', category: 'enhancement', popular: true },
    { name: 'Duplicate Detection', icon: Copy, description: 'Find and remove duplicates', category: 'organization', popular: false },
    { name: 'Content Analysis', icon: Eye, description: 'Analyze media content', category: 'analysis', popular: true },
    { name: 'Batch Processing', icon: Zap, description: 'Process multiple files', category: 'processing', popular: true },
    { name: 'Smart Cropping', icon: Crop, description: 'AI-powered smart cropping', category: 'editing', popular: false },
    { name: 'Color Correction', icon: Palette, description: 'Automatic color correction', category: 'editing', popular: true },
    { name: 'Noise Reduction', icon: VolumeX, description: 'Remove audio/video noise', category: 'enhancement', popular: true },
    { name: 'Metadata Extraction', icon: FileText, description: 'Extract file metadata', category: 'analysis', popular: false },
  ];

  const categories = [
    { id: "all", name: "All Media", count: mediaItems.length, icon: FolderOpen },
    { id: "video", name: "Videos", count: mediaItems.filter(item => item.type === "video").length, icon: Video },
    { id: "image", name: "Images", count: mediaItems.filter(item => item.type === "image").length, icon: Image },
    { id: "audio", name: "Audio", count: mediaItems.filter(item => item.type === "audio").length, icon: Music },
    { id: "marketing", name: "Marketing", count: mediaItems.filter(item => item.category === "Marketing").length, icon: Target },
    { id: "social", name: "Social Media", count: mediaItems.filter(item => item.category === "Social Media").length, icon: Share2 },
    { id: "brand", name: "Brand Assets", count: mediaItems.filter(item => item.category === "Brand").length, icon: Award },
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesCategory && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-5 h-5 text-primary" />;
      case "image": return <Image className="w-5 h-5 text-accent" />;
      case "audio": return <Music className="w-5 h-5 text-green-500" />;
      default: return <FolderOpen className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    toast.success('Starting upload...');
    
    // Simulate realistic upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast.success('Upload completed successfully!');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleAIFeature = (feature: any) => {
    setIsProcessing(true);
    toast.success(`Applying ${feature.name}...`);
    
    // Simulate AI processing with realistic timing
    const processingTime = feature.popular ? 1500 : 2500;
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`${feature.name} applied successfully!`);
    }, processingTime);
  };

  const handleItemSelect = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleBulkAction = (action: string) => {
    if (selectedItems.length === 0) {
      toast.error('Please select items first');
      return;
    }
    
    setIsProcessing(true);
    toast.success(`Applying ${action} to ${selectedItems.length} items...`);
    
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedItems([]);
      toast.success(`${action} completed successfully!`);
    }, 2000);
  };

  const handlePreview = (item: any) => {
    setPreviewItem(item);
    setShowPreview(true);
  };

  const formatFileSize = (size: string) => {
    return size;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
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
              <h1 className="text-2xl lg:text-4xl font-bold text-white">📁 Advanced Media Library</h1>
            </div>
            <p className="text-white/90 text-sm lg:text-lg">Professional media management powered by AI</p>
            <div className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Smart Organization
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <FolderOpen className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Cloud className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="p-2 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
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
            <h2 className="text-base lg:text-lg font-semibold">Media Library Project</h2>
            <Badge variant={isSaved ? "secondary" : "destructive"} className="text-xs">
              {isSaved ? "Saved" : "Unsaved"}
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
              {filteredMedia.length} Files
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" size="sm" className="text-xs">
              <Filter className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              Filters
            </Button>
            <Button onClick={handleUpload} disabled={isUploading} className="bg-primary hover:bg-primary/90 text-xs">
              {isUploading ? (
                <>
                  <Loader2 className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 animate-spin" />
                  {Math.round(uploadProgress)}%
                </>
              ) : (
                <>
                  <Upload className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  Upload
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Interface */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Media Content */}
        <div className="xl:col-span-9 space-y-6">
          {/* Enhanced Filters and Search */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <div className="space-y-4">
              {/* Search and Controls Row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
                    placeholder="Search media files, tags, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary border-border focus:border-primary w-full"
            />
          </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    onClick={() => setViewMode("grid")}
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    className="min-w-[40px]"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => setViewMode("list")}
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    className="min-w-[40px]"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    variant="outline"
                    size="sm"
                    className="min-w-[40px]"
                  >
                    {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
              <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className="text-xs whitespace-nowrap"
                  >
                    <category.icon className="w-3 h-3 mr-1" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
              </Button>
            ))}
          </div>
        </div>
      </Card>

          {/* Enhanced Upload Zone */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border border-dashed hover:border-primary/50 transition-colors cursor-pointer group" ref={dropZoneRef}>
        <div className="text-center">
              <div className="relative mb-6">
                <Upload className="w-16 h-16 text-primary/50 mx-auto group-hover:text-primary transition-colors" />
                <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  AI
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Media Upload</h3>
              <p className="text-muted-foreground mb-4">
                Drag & drop files here or click to browse from your computer
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button onClick={handleUpload} disabled={isUploading} className="bg-primary hover:bg-primary/90">
                  {isUploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading... {Math.round(uploadProgress)}%
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files
                    </>
                  )}
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud Import
          </Button>
              </div>
              
              {isUploading && (
                <div className="mt-4">
                  <Progress value={uploadProgress} className="w-full" />
                </div>
              )}
        </div>
      </Card>

          {/* Bulk Actions */}
          {selectedItems.length > 0 && (
            <Card className="p-4 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{selectedItems.length} items selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => handleBulkAction("Download")} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button onClick={() => handleBulkAction("Delete")} variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                  <Button onClick={() => setSelectedItems([])} variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Enhanced Media Grid */}
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
        {filteredMedia.map((item) => (
              <Card 
                key={item.id} 
                className={`overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer ${
                  selectedItems.includes(item.id) ? 'border-primary bg-primary/10' : ''
                }`}
                onClick={() => handleItemSelect(item.id)}
              >
                {viewMode === "grid" ? (
                  <>
                    {/* Grid View */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Overlay Controls */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {item.popular && (
                            <Badge className="bg-primary text-white text-xs px-1 py-0">
                              🔥
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                            {item.format}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="w-6 h-6 bg-black/50 text-white hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePreview(item);
                            }}
                          >
                            <Eye className="w-3 h-3" />
                          </Button>
              <Button
                size="icon"
                variant="ghost"
                            className="w-6 h-6 bg-black/50 text-white hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success(`Downloaded ${item.name}`);
                            }}
                          >
                            <Download className="w-3 h-3" />
              </Button>
            </div>
                      </div>
                      
                      {/* Duration Badge */}
                      {item.duration && (
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      )}
                      
                      {/* Resolution Badge */}
                      {item.resolution && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.resolution}
                        </div>
                      )}
                    </div>
                    
            <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-foreground text-sm truncate flex-1">{item.name}</h3>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-muted-foreground">{item.rating}</span>
                        </div>
                      </div>
                      
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>{item.size}</span>
                        <span>{formatDate(item.date)}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {item.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{item.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {item.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {item.downloads}
                        </span>
              </div>
                      
              <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-border hover:border-primary text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Added ${item.name} to project`);
                          }}
                        >
                  Use
                </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Deleted ${item.name}`);
                          }}
                        >
                  <Trash2 className="w-3 h-3" />
                </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="flex items-center gap-4 p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <img 
                          src={item.thumbnail} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {getIcon(item.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground text-sm truncate">{item.name}</h3>
                          {item.popular && (
                            <Badge className="bg-primary text-white text-xs px-1 py-0">
                              🔥
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span>{item.size}</span>
                          <span>{formatDate(item.date)}</span>
                          <span>{item.category}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePreview(item);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Downloaded ${item.name}`);
                          }}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Added ${item.name} to project`);
                          }}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Deleted ${item.name}`);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Tools Panel */}
        <div className="xl:col-span-3 space-y-6">
          {/* AI Media Features */}
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
              {aiMediaFeatures.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-3 flex flex-col items-center gap-2 border-border hover:border-primary hover:bg-primary/5 relative"
                  onClick={() => handleAIFeature(feature)}
                  disabled={isProcessing}
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
    </div>
  );
}
