"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Bell,
 
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageSquare,
  Settings,
  Watch,
  Menu,
  X
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile)
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])
  
  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      href: "/tasks",
      label: "Tasks",
      icon: <CheckSquare className="h-5 w-5" />
    },
    {
      href: "/staff",
      label: "Staff",
      icon: <Users className="h-5 w-5" />
    },
    {
      href: "/communications",
      label: "Communications",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />
    },
    {
      href: "/smartWatch",
      label: "Smart Watch",
      icon: <Watch className="h-5 w-5" />
    }
  ]

  // Mobile menu toggle button (fixed position)
  const MobileMenuButton = () => (
    <div className="lg:hidden fixed top-4 left-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  )

  return (
    <>
      <MobileMenuButton />
      
      {/* Sidebar - hidden on mobile unless menu is open */}
      <div 
        className={`h-screen flex flex-col shadow-sm bg-white fixed transition-all duration-300 z-40
          ${isMobile 
            ? isMobileMenuOpen ? "w-64 left-0" : "w-64 -left-64" 
            : "w-64 left-0"}`}
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/textured-wall-background-texture_1368-6403.jpg?ga=GA1.1.1562725796.1744005327&semt=ais_country_boost&w=740)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex items-center justify-center sm:p-2 p-6">
          <img
            src="https://res.cloudinary.com/dunssu2gi/image/upload/v1744056928/blog-images/z2l2dmh5muyqzqwo2igr.png"
            alt="HotelSync Logo"
            className="h-20 w-full object-cover"
          />
        </div>
        <nav className="flex flex-col flex-1 p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`
                flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium rounded-md
                ${pathname === route.href 
                  ? "bg-orange-50 text-gray-600" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-orange-50/20"}
              `}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" size="sm" className="w-full mb-2">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button size="sm" className="w-full">
            Admin Portal
          </Button>
        </div>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Main content spacing - Add this to your layout to push content away from sidebar */}
      <div className={`${isMobile ? "pl-0" : "pl-64"} transition-all duration-300`}></div>
    </>
  )
}