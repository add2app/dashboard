import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Sparkles,
  Video,
  LayoutGrid,
  Mic,
  FolderOpen,
  Share2,
  BarChart3,
  Palette,
  MessageSquare,
  Users,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "AI Script Generator", url: "/script-generator", icon: Sparkles },
  { title: "Video Editor", url: "/video-editor", icon: Video },
  { title: "Templates Library", url: "/templates", icon: LayoutGrid },
  { title: "AI Voice & Captions", url: "/voice-captions", icon: Mic },
  { title: "Media Library", url: "/media-library", icon: FolderOpen },
  { title: "Publishing Hub", url: "/publishing", icon: Share2 },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Brand Kit", url: "/brand-kit", icon: Palette },
  { title: "AI Assistant", url: "/ai-assistant", icon: MessageSquare },
  { title: "Team", url: "/team", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-border bg-sidebar backdrop-blur-glass">
      <SidebarContent>
        <div className="px-6 py-6 border-b border-border flex items-center justify-center">
          <NavLink to="/" className="flex items-center justify-center w-full">
            <img src="/images/logoes/logo.png" alt="Add2App Logo" className="w-full h-auto max-h-16 object-contain" />
          </NavLink>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-3 py-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-neon-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {open && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
