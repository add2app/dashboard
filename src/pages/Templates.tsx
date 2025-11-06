import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Sparkles, 
  Search, 
  Filter, 
  Play, 
  Eye, 
  Star, 
  Download, 
  Heart, 
  Share2, 
  Clock, 
  Users, 
  TrendingUp,
  Wand2,
  Crown,
  Award,
  Zap,
  Target,
  Brain,
  Video,
  Music,
  Type,
  Image,
  Settings,
  Grid3X3,
  List,
  SortAsc,
  SortDesc
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Enhanced Templates with real images and SEO data
  const templates = [
    { 
      id: 1, 
      name: 'Fashion Transition', 
      thumbnail: '/images/template/Fashion Transition.jpg', 
      duration: '15s', 
      category: 'Fashion', 
      effects: ['Smooth Transitions', 'Color Grading'],
      description: 'Perfect for fashion content with elegant transitions and professional color grading',
      tags: ['fashion', 'transition', 'elegant', 'style'],
      views: '2.3M',
      rating: 4.8,
      downloads: '45K',
      trending: true,
      featured: true,
      seoTitle: 'Fashion Video Transition Template - Professional Style',
      seoDescription: 'Create stunning fashion videos with our AI-powered transition template featuring smooth cuts and professional color grading.',
      keywords: ['fashion video', 'transition template', 'style content', 'professional editing']
    },
    { 
      id: 2, 
      name: 'Modern Product Showcase', 
      thumbnail: '/images/template/Modern Product Showcase.jpg', 
      duration: '30s', 
      category: 'Marketing', 
      effects: ['Product Focus', 'Call to Action'],
      description: 'Professional product showcase with modern aesthetics and compelling call-to-action',
      tags: ['product', 'marketing', 'professional', 'showcase'],
      views: '1.8M',
      rating: 4.9,
      downloads: '38K',
      trending: false,
      featured: true,
      seoTitle: 'Product Showcase Video Template - Marketing Ready',
      seoDescription: 'Boost your product sales with our professional showcase template featuring product focus and compelling CTAs.',
      keywords: ['product video', 'marketing template', 'showcase', 'sales video']
    },
    { 
      id: 3, 
      name: 'Recipe Quick Cut', 
      thumbnail: '/images/template/Recipe Quick Cut.jpg', 
      duration: '45s', 
      category: 'Food', 
      effects: ['Quick Cuts', 'Step by Step'],
      description: 'Fast-paced recipe videos with dynamic cuts and clear step-by-step instructions',
      tags: ['food', 'recipe', 'quick', 'cooking'],
      views: '3.1M',
      rating: 4.7,
      downloads: '62K',
      trending: true,
      featured: false,
      seoTitle: 'Recipe Video Template - Quick Cut Style',
      seoDescription: 'Create engaging cooking videos with our quick-cut recipe template perfect for food content creators.',
      keywords: ['recipe video', 'cooking template', 'food content', 'quick cuts']
    },
    { 
      id: 4, 
      name: 'Story Reveal', 
      thumbnail: '/images/template/Story Reveal.jpg', 
      duration: '20s', 
      category: 'Storytelling', 
      effects: ['Mystery Build', 'Reveal Effect'],
      description: 'Engaging story format with mystery build-up and dramatic reveal effects',
      tags: ['story', 'reveal', 'engaging', 'drama'],
      views: '4.2M',
      rating: 4.9,
      downloads: '78K',
      trending: true,
      featured: true,
      seoTitle: 'Story Reveal Video Template - Engaging Content',
      seoDescription: 'Capture your audience with our story reveal template featuring mystery build-up and dramatic effects.',
      keywords: ['story video', 'reveal template', 'engaging content', 'storytelling']
    },
    { 
      id: 5, 
      name: 'Tech Review Intro', 
      thumbnail: '/images/template/Tech Review Intro.jpg', 
      duration: '25s', 
      category: 'Technology', 
      effects: ['Tech Animation', 'Data Visualization'],
      description: 'Professional tech review introduction with animated data visualization',
      tags: ['tech', 'review', 'professional', 'animation'],
      views: '2.7M',
      rating: 4.8,
      downloads: '52K',
      trending: false,
      featured: false,
      seoTitle: 'Tech Review Video Template - Professional Intro',
      seoDescription: 'Start your tech reviews with our professional template featuring animated data visualization.',
      keywords: ['tech review', 'technology video', 'professional intro', 'data visualization']
    },
    { 
      id: 6, 
      name: 'Travel Montage', 
      thumbnail: '/images/template/Travel Montage.jpg', 
      duration: '60s', 
      category: 'Travel', 
      effects: ['Cinematic Shots', 'Music Sync'],
      description: 'Cinematic travel montage with music synchronization and breathtaking shots',
      tags: ['travel', 'cinematic', 'montage', 'adventure'],
      views: '5.1M',
      rating: 4.9,
      downloads: '89K',
      trending: true,
      featured: true,
      seoTitle: 'Travel Montage Video Template - Cinematic Style',
      seoDescription: 'Create stunning travel videos with our cinematic montage template featuring music sync and breathtaking shots.',
      keywords: ['travel video', 'montage template', 'cinematic', 'adventure content']
    },
    { 
      id: 7, 
      name: 'Trending Audio Sync', 
      thumbnail: '/images/template/Trending Audio Sync.jpg', 
      duration: '15s', 
      category: 'Social Media', 
      effects: ['Beat Sync', 'Trending Audio'],
      description: 'Viral content with trending audio synchronization and beat-matching effects',
      tags: ['trending', 'audio', 'viral', 'social'],
      views: '6.8M',
      rating: 4.9,
      downloads: '125K',
      trending: true,
      featured: true,
      seoTitle: 'Trending Audio Sync Template - Viral Content',
      seoDescription: 'Go viral with our trending audio sync template featuring beat-matching and viral effects.',
      keywords: ['trending audio', 'viral template', 'social media', 'beat sync']
    },
    { 
      id: 8, 
      name: 'Tutorial Layout', 
      thumbnail: '/images/template/Tutorial Layout.jpg', 
      duration: '90s', 
      category: 'Educational', 
      effects: ['Clear Instructions', 'Visual Guides'],
      description: 'Educational tutorial with clear visual guides and step-by-step instructions',
      tags: ['tutorial', 'educational', 'clear', 'learning'],
      views: '3.5M',
      rating: 4.8,
      downloads: '67K',
      trending: false,
      featured: false,
      seoTitle: 'Tutorial Video Template - Educational Content',
      seoDescription: 'Create effective tutorials with our educational template featuring clear visual guides and instructions.',
      keywords: ['tutorial video', 'educational template', 'learning content', 'how-to video']
    },
  ];

  const categories = ['All', 'Fashion', 'Marketing', 'Food', 'Storytelling', 'Technology', 'Travel', 'Social Media', 'Educational'];

  const handleTemplateSelect = (template: any) => {
    toast.success(`Selected ${template.name} template!`);
  };

  const handleFavorite = (templateId: number) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
    toast.success(favorites.includes(templateId) ? 'Removed from favorites' : 'Added to favorites');
  };

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseInt(b.views.replace('M', '')) - parseInt(a.views.replace('M', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl font-bold text-white">Professional Video Templates</h1>
            </div>
            <p className="text-white/90 text-lg max-w-2xl">
              Choose from our curated collection of AI-powered video templates designed for maximum engagement and professional results
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Professional
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Grid3X3 className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Templates</p>
                <p className="text-2xl font-bold text-foreground">{templates.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">+12% this month</span>
            </div>
          </div>
        </Card>

        <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold text-foreground">29.5M</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">+28% this month</span>
            </div>
          </div>
        </Card>

        <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold text-foreground">556K</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">+35% this month</span>
            </div>
          </div>
        </Card>

        <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-foreground">4.8</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">+0.2 this month</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
                placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary border-border focus:border-primary"
          />
        </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-muted-foreground" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="trending">Trending</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-1 border border-border rounded-md p-1">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className="h-8 w-8 p-0"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="h-8 w-8 p-0"
              >
                <List className="w-4 h-4" />
            </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Templates Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
        {sortedTemplates.map((template) => (
          <Card 
            key={template.id}
            className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-xl hover:-translate-y-1"
            onClick={() => handleTemplateSelect(template)}
          >
            {/* Template Image */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={template.thumbnail} 
                alt={template.seoTitle}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {template.featured && (
                  <Badge className="bg-primary text-white text-xs px-2 py-1">
                    <Crown className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                {template.trending && (
                  <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {template.duration}
              </div>
              
              {/* Views Badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {template.views}
              </div>
              
              {/* Rating Badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {template.rating}
              </div>
              
              {/* Action Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavorite(template.id);
                    }}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(template.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {template.name}
                </h3>
                <Badge variant="outline" className="text-xs shrink-0 ml-2">
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
              
              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {template.downloads}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {template.views}
                  </span>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Use Template
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* SEO Footer */}
      <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Create Professional Videos with AI</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our video templates are powered by advanced AI technology, ensuring maximum engagement and professional results. 
            Whether you're creating content for social media, marketing, education, or entertainment, our templates provide 
            the perfect foundation for your creative vision.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['video templates', 'AI video editing', 'professional templates', 'social media content', 'marketing videos', 'educational content'].map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                #{keyword}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}