import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Bell,
  Hotel,
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageSquare,
  Settings,
  Watch
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="h-screen w-64 flex flex-col shadow-sm bg-white fixed"
    style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/textured-wall-background-texture_1368-6403.jpg?ga=GA1.1.1562725796.1744005327&semt=ais_country_boost&w=740)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="flex items-center justify-center p-6 ">
  <img 
    src="https://res.cloudinary.com/dunssu2gi/image/upload/v1744056928/blog-images/z2l2dmh5muyqzqwo2igr.png" 
    alt="HotelSync Logo" 
    className="h-20 w-full object-cover" 
  />
</div>
      <nav className="flex flex-col flex-1 p-4">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 text-[0.8rem] font-medium text-gray-600 rounded-md bg-orange-50">
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/tasks" className="flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium text-gray-700 hover:text-gray-900 hover:bg-bg-[#F0BB78]/20 rounded-md">
          <CheckSquare className="h-5 w-5" />
          Tasks
        </Link>
        <Link href="/staff" className="flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium text-gray-700 hover:text-gray-900 hover:bg-bg-[#F0BB78]/20 rounded-md">
          <Users className="h-5 w-5" />
          Staff
        </Link>
        <Link href="/communications" className="flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium text-gray-700 hover:text-gray-900 hover:bg-bg-[#F0BB78]/20 rounded-md">
          <MessageSquare className="h-5 w-5" />
          Communications
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium text-gray-700 hover:text-gray-900 hover:bg-bg-[#F0BB78]/20 rounded-md">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <Link href="/smartWatch" className="flex items-center gap-3 px-3 py-2 mt-1 text-[0.8rem] font-medium text-gray-700 hover:text-gray-900 hover:bg-bg-[#F0BB78]/20 rounded-md">
          <Watch className="h-5 w-5" />
          Smart Watch
        </Link>
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
  )
}