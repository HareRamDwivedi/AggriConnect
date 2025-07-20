"use client"

import { useAuth } from "../contexts/AuthContext"
import { FarmerDashboard } from "../components/FarmerDashboard"
import { AdminDashboard } from "../components/AdminDashboard"
import { Navbar } from "../components/Navbar"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {user?.role === "admin" ? <AdminDashboard /> : <FarmerDashboard />}
    </div>
  )
}
