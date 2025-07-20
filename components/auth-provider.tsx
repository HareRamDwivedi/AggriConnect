"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "farmer" | "admin"
  phone?: string
  location?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  signup: (userData: any) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token and validate
    const token = localStorage.getItem("auth-token")
    if (token) {
      // In real app, validate token with backend
      const mockUser = {
        id: "1",
        name: "Rajesh Kumar",
        email: "rajesh@example.com",
        role: "farmer" as const,
        phone: "+91 9876543210",
        location: "Punjab, India",
      }
      setUser(mockUser)
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser = {
        id: "1",
        name: email === "admin@agriconnect.com" ? "Admin User" : "Rajesh Kumar",
        email,
        role: email === "admin@agriconnect.com" ? ("admin" as const) : ("farmer" as const),
        phone: "+91 9876543210",
        location: "Punjab, India",
      }

      setUser(mockUser)
      localStorage.setItem("auth-token", "mock-jwt-token")
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: "farmer" as const,
        phone: userData.phone,
        location: userData.location,
      }

      setUser(newUser)
      localStorage.setItem("auth-token", "mock-jwt-token")
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-token")
  }

  return <AuthContext.Provider value={{ user, login, logout, signup, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
