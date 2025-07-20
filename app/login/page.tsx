"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Camera, Upload, FileText, Sprout, TrendingUp, CheckCircle, AlertCircle } from "lucide-react"

interface RecommendationResult {
  fertilizer: string
  npkRatio: string
  quantity: string
  application: string
  cost: string
  confidence: number
}

export default function FertilizerRecommendationPage() {
  const [activeTab, setActiveTab] = useState<"soil-image" | "soil-report" | "manual">("soil-image")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<RecommendationResult | null>(null)
  const [formData, setFormData] = useState({
    cropType: "",
    soilType: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    organicMatter: "",
  })
  const { toast } = useToast()

  const handleImageUpload = async (type: "soil" | "report") => {
    setIsAnalyzing(true)

    // Simulate API call to ML backend
    setTimeout(() => {
      const mockResult: RecommendationResult = {
        fertilizer: "NPK 20-20-20 + Micronutrients",
        npkRatio: "20:20:20",
        quantity: "250 kg per hectare",
        application: "Apply in 2 splits - 60% at sowing, 40% at flowering",
        cost: "₹3,500 - ₹4,200 per hectare",
        confidence: 87,
      }
      setResult(mockResult)
      setIsAnalyzing(false)
      toast({
        title: "Analysis Complete!",
        description: "Your soil analysis results are ready.",
      })
    }, 3000)
  }

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      const mockResult: RecommendationResult = {
        fertilizer: "NPK 15-15-15 + Organic Compost",
        npkRatio: "15:15:15",
        quantity: "200 kg per hectare",
        application: "Apply 150 kg at sowing, 50 kg at tillering stage",
        cost: "₹2,800 - ₹3,200 per hectare",
        confidence: 92,
      }
      setResult(mockResult)
      setIsAnalyzing(false)
      toast({
        title: "Recommendation Generated!",
        description: "Based on your soil parameters.",
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Fertilizer Recommendation</h1>
          <p className="text-lg text-gray-600">
            Get personalized fertilizer recommendations using advanced machine learning
          </p>
        </div>

        {/* Input Methods */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Button
            variant={activeTab === "soil-image" ? "default" : "outline"}
            className="h-20 flex-col"
            onClick={() => setActiveTab("soil-image")}
          >
            <Camera className="h-6 w-6 mb-2" />
            Soil Image
          </Button>
          <Button
            variant={activeTab === "soil-report" ? "default" : "outline"}
            className="h-20 flex-col"
            onClick={() => setActiveTab("soil-report")}
          >
            <FileText className="h-6 w-6 mb-2" />
            Soil Report
          </Button>
          <Button
            variant={activeTab === "manual" ? "default" : "outline"}
            className="h-20 flex-col"
            onClick={() => setActiveTab("manual")}
          >
            <Sprout className="h-6 w-6 mb-2" />
            Manual Input
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>
                {activeTab === "soil-image" && "Upload Soil Image"}
                {activeTab === "soil-report" && "Upload Soil Report"}
                {activeTab === "manual" && "Enter Soil Parameters"}
              </CardTitle>
              <CardDescription>
                {activeTab === "soil-image" && "Take a clear photo of your soil sample"}
                {activeTab === "soil-report" && "Upload your laboratory soil test report"}
                {activeTab === "manual" && "Manually enter your soil test values"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {activeTab === "soil-image" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Click to capture or upload soil image</p>
                    <Button onClick={() => handleImageUpload("soil")}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Crop Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {activeTab === "soil-report" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload your soil test report (PDF/Image)</p>
                    <Button onClick={() => handleImageUpload("report")}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Report
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Crop Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {activeTab === "manual" && (
                <form onSubmit={handleManualSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Crop Type</Label>
                      <Select
                        value={formData.cropType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, cropType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="corn">Corn</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Soil Type</Label>
                      <Select
                        value={formData.soilType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, soilType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select soil type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="sandy">Sandy</SelectItem>
                          <SelectItem value="loamy">Loamy</SelectItem>
                          <SelectItem value="silt">Silt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Nitrogen (N) ppm</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 45"
                        value={formData.nitrogen}
                        onChange={(e) => setFormData((prev) => ({ ...prev, nitrogen: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phosphorus (P) ppm</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 25"
                        value={formData.phosphorus}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phosphorus: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Potassium (K) ppm</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 120"
                        value={formData.potassium}
                        onChange={(e) => setFormData((prev) => ({ ...prev, potassium: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>pH Level</Label>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="e.g., 6.5"
                        value={formData.ph}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ph: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Organic Matter (%)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="e.g., 2.5"
                        value={formData.organicMatter}
                        onChange={(e) => setFormData((prev) => ({ ...prev, organicMatter: e.target.value }))}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Get Recommendation"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Recommendation Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing your soil data...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-medium">Analysis Complete</span>
                    </div>
                    <Badge variant="default">{result.confidence}% Confidence</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg text-green-700 mb-2">Recommended Fertilizer</h4>
                      <p className="text-gray-900 font-medium">{result.fertilizer}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-1">NPK Ratio</h5>
                        <p className="text-gray-900">{result.npkRatio}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-1">Quantity</h5>
                        <p className="text-gray-900">{result.quantity}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-700 mb-1">Application Method</h5>
                      <p className="text-gray-900">{result.application}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-700 mb-1">Estimated Cost</h5>
                      <p className="text-gray-900 font-medium">{result.cost}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full mb-2">Buy Recommended Fertilizer</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Save Recommendation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Sprout className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Upload soil data to get personalized fertilizer recommendations</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Tips for Better Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Soil Image Quality</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Take photos in natural light</li>
                  <li>• Ensure soil is dry</li>
                  <li>• Capture from 6-8 inches away</li>
                  <li>• Include a coin for scale reference</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Soil Report Upload</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use recent reports (within 6 months)</li>
                  <li>• Ensure text is clearly readable</li>
                  <li>• Include all nutrient parameters</li>
                  <li>• PDF format preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Manual Input</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use laboratory test results</li>
                  <li>• Enter values in correct units</li>
                  <li>• Include all available parameters</li>
                  <li>• Double-check for accuracy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Leaf, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        toast({
          title: "Login successful!",
          description: "Welcome back to AgriConnect",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to your AgriConnect account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              {"Don't have an account? "}
              <Link href="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">Demo Accounts:</p>
            <p className="text-xs text-blue-600">Farmer: any email + password</p>
            <p className="text-xs text-blue-600">Admin: admin@agriconnect.com + password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
