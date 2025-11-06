import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ScriptGenerator from "./pages/ScriptGenerator";
import VideoEditor from "./pages/VideoEditor";
import Templates from "./pages/Templates";
import VoiceCaptions from "./pages/VoiceCaptions";
import MediaLibrary from "./pages/MediaLibrary";
import Publishing from "./pages/Publishing";
import Analytics from "./pages/Analytics";
import BrandKit from "./pages/BrandKit";
import AIAssistant from "./pages/AIAssistant";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout><Dashboard /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/script-generator" element={
              <ProtectedRoute>
                <DashboardLayout><ScriptGenerator /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/video-editor" element={
              <ProtectedRoute>
                <DashboardLayout><VideoEditor /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/templates" element={
              <ProtectedRoute>
                <DashboardLayout><Templates /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/voice-captions" element={
              <ProtectedRoute>
                <DashboardLayout><VoiceCaptions /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/media-library" element={
              <ProtectedRoute>
                <DashboardLayout><MediaLibrary /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/publishing" element={
              <ProtectedRoute>
                <DashboardLayout><Publishing /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <DashboardLayout><Analytics /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/brand-kit" element={
              <ProtectedRoute>
                <DashboardLayout><BrandKit /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/ai-assistant" element={
              <ProtectedRoute>
                <DashboardLayout><AIAssistant /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/team" element={
              <ProtectedRoute>
                <DashboardLayout><Team /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <DashboardLayout><Settings /></DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
