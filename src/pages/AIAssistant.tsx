import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";

const suggestedPrompts = [
  "What's trending on TikTok right now?",
  "Help me improve my video engagement",
  "Suggest hashtags for my fashion video",
  "What's the best time to post?",
];

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI assistant. I can help you with content ideas, performance tips, trending topics, and more. How can I assist you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    // Simulate AI response after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Great question! Based on current trends and your content style, here are my recommendations...",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Assistant</h1>
        <p className="text-muted-foreground">
          Get personalized help and content recommendations
        </p>
      </div>

      {/* Chat Container */}
      <Card className="p-6 bg-card/60 backdrop-blur-glass border-border">
        <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto pr-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" ? "bg-gradient-primary" : "bg-secondary"
                }`}
              >
                {message.role === "assistant" ? (
                  <Bot className="w-5 h-5 text-white" />
                ) : (
                  <User className="w-5 h-5 text-foreground" />
                )}
              </div>
              <div
                className={`flex-1 p-4 rounded-lg ${
                  message.role === "assistant"
                    ? "bg-secondary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedPrompts.map((prompt) => (
                <Button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  variant="outline"
                  className="justify-start text-left h-auto py-3 border-border hover:border-primary"
                >
                  <Sparkles className="w-4 h-4 mr-2 flex-shrink-0 text-primary" />
                  <span className="text-sm">{prompt}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about your content..."
            className="flex-1 bg-secondary border-border focus:border-primary"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-primary hover:shadow-neon-primary"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* AI Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Content Ideas", desc: "Get creative video concepts" },
          { title: "Performance Tips", desc: "Improve your metrics" },
          { title: "Trend Analysis", desc: "Stay ahead of trends" },
        ].map((feature) => (
          <Card
            key={feature.title}
            className="p-4 bg-card/60 backdrop-blur-glass border-border text-center"
          >
            <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
