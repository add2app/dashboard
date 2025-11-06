import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Bell, Shield, CreditCard, Palette } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6 bg-card/60 backdrop-blur-glass border-border">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Profile Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
              <Input defaultValue="Creator" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
              <Input defaultValue="Pro" className="bg-secondary border-border" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
            <Input defaultValue="creator@add2app.com" type="email" className="bg-secondary border-border" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6 bg-card/60 backdrop-blur-glass border-border">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Bell className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: "Email notifications", desc: "Receive email updates about your content" },
            { label: "Push notifications", desc: "Get push notifications for important events" },
            { label: "Performance alerts", desc: "Alert me when videos reach milestones" },
            { label: "Team activity", desc: "Notify me of team member actions" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-6 bg-card/60 backdrop-blur-glass border-border">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Palette className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Appearance</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Theme</label>
            <Select defaultValue="dark">
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Dark Mode</SelectItem>
                <SelectItem value="light">Light Mode</SelectItem>
                <SelectItem value="auto">Auto (System)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-6 bg-card/60 backdrop-blur-glass border-border">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Security</h2>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
            Enable Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start border-border hover:border-primary">
            Manage Connected Apps
          </Button>
        </div>
      </Card>

      {/* Subscription */}
      <Card className="p-6 bg-gradient-primary">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold">Pro Plan</h3>
              <p className="text-white/80 text-sm">Unlimited projects and AI features</p>
            </div>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90">
            Manage Subscription
          </Button>
        </div>
      </Card>
    </div>
  );
}
