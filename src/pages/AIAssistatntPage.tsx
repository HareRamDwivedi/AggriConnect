"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { ScrollArea } from "../components/ui/scroll-area"
import { Badge } from "../components/ui/badge"
import { Bot, User, Send, Mic, MicOff, Sprout, Bug, CloudRain, Tractor } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickQuestions = [
  {
    icon: Sprout,
    question: "What's the best time to plant wheat?",
    category: "Planting",
  },
  {
    icon: Bug,
    question: "How to identify and treat aphids?",
    category: "Pest Control",
  },
  {
    icon: CloudRain,
    question: "How does rainfall affect crop growth?",
    category: "Weather",
  },
  {
    icon: Tractor,
    question: "What equipment do I need for harvesting?",
    category: "Equipment",
  },
]

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your AI farming assistant. I can help you with crop management, pest control, weather advice, and farming best practices. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Thank you for your question about "${input}". As your AI farming assistant, I'd recommend consulting with local agricultural experts for specific advice tailored to your region and crop conditions. In the meantime, here are some general guidelines that might help...`,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 2000)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  const toggleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input implementation would go here
    if (!isListening) {
      console.log("Starting voice input...")
    } else {
      console.log("Stopping voice input...")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Farming Assistant</h1>
          <p className="text-lg text-gray-600">
            Get instant answers to your farming questions with AI-powered assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickQuestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    onClick={() => handleQuickQuestion(item.question)}
                  >
                    <div className="flex items-start space-x-2">
                      <item.icon className="h-4 w-4 mt-1 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">{item.question}</p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-green-600" />
                  Chat with AI Assistant
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                              message.role === "user" ? "bg-blue-600 ml-2" : "bg-green-600 mr-2"
                            }`}
                          >
                            {message.role === "user" ? (
                              <User className="h-4 w-4 text-white" />
                            ) : (
                              <Bot className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div
                            className={`rounded-lg px-4 py-2 ${
                              message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 mr-2 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-gray-100 rounded-lg px-4 py-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
                  <div className="flex-1 relative">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything about farming..."
                      className="pr-12"
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                      onClick={toggleVoiceInput}
                    >
                      {isListening ? <MicOff className="h-4 w-4 text-red-500" /> : <Mic className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button type="submit" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>

                {isListening && (
                  <div className="mt-2 p-2 bg-red-50 rounded-lg text-center">
                    <p className="text-sm text-red-600">🎤 Listening... Speak your question</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Sprout className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Crop Management</h3>
              <p className="text-sm text-gray-600">Get advice on planting, growing, and harvesting your crops</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Bug className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Pest & Disease Control</h3>
              <p className="text-sm text-gray-600">Identify and treat common pests and diseases affecting your crops</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CloudRain className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Weather Insights</h3>
              <p className="text-sm text-gray-600">Understand how weather patterns affect your farming decisions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
