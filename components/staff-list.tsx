import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, MessageSquare, CheckCircle2 } from "lucide-react"

export default function StaffList() {
  // Mock data - in a real app, this would come from an API
  const staffMembers = [
    {
      id: 1,
      name: "Maria Lopez",
      role: "Housekeeping",
      department: "Housekeeping",
      status: "Active",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "maria.lopez@example.com",
        phone: "+1 (555) 123-4567",
      },
      performance: {
        tasksCompleted: 156,
        avgResponseTime: "2.8 min",
      },
    },
    {
      id: 2,
      name: "John Davis",
      role: "Maintenance Technician",
      department: "Maintenance",
      status: "Active",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "john.davis@example.com",
        phone: "+1 (555) 234-5678",
      },
      performance: {
        tasksCompleted: 98,
        avgResponseTime: "3.5 min",
      },
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Front Desk Agent",
      department: "Front Desk",
      status: "Active",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "sarah.kim@example.com",
        phone: "+1 (555) 345-6789",
      },
      performance: {
        tasksCompleted: 112,
        avgResponseTime: "1.5 min",
      },
    },
    {
      id: 4,
      name: "Robert Miller",
      role: "Food Service Supervisor",
      department: "Food Service",
      status: "Active",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "robert.miller@example.com",
        phone: "+1 (555) 456-7890",
      },
      performance: {
        tasksCompleted: 87,
        avgResponseTime: "2.2 min",
      },
    },
    {
      id: 5,
      name: "Emily Chen",
      role: "Concierge",
      department: "Concierge",
      status: "Off Duty",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "emily.chen@example.com",
        phone: "+1 (555) 567-8901",
      },
      performance: {
        tasksCompleted: 134,
        avgResponseTime: "1.8 min",
      },
    },
    {
      id: 6,
      name: "Michael Johnson",
      role: "Maintenance Supervisor",
      department: "Maintenance",
      status: "Active",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      contactInfo: {
        email: "michael.johnson@example.com",
        phone: "+1 (555) 678-9012",
      },
      performance: {
        tasksCompleted: 145,
        avgResponseTime: "2.5 min",
      },
    },
  ]

  return (
    <div className="space-y-4">
      {staffMembers.map((staff) => (
        <div
          key={staff.id}
          className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg bg-white"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Avatar>
              <AvatarImage src={staff.avatar} alt={staff.name} />
              <AvatarFallback>
                {staff.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <h4 className="font-medium min-w-[300px] max-w-[300px]">{staff.name}</h4>
              <div className="flex flex-wrap min-w-[300px] max-w-[300px] items-center gap-2 mt-1">
                <span className="text-[0.8rem] text-gray-500">{staff.role}</span>
                <Badge variant={staff.status === "Active" ? "default" : "outline"}>{staff.status}</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 md:mb-0">
            <div>
              <p className="text-xs text-gray-500">Department</p>
              <p className="text-[0.8rem] text-[#D98324]">{staff.department}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-[0.8rem] truncate max-w-[150px]">{staff.contactInfo.email}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Tasks Completed</p>
              <p className="text-[0.8rem]">{staff.performance.tasksCompleted}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Avg. Response</p>
              <p className="text-[0.8rem]">{staff.performance.avgResponseTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button size="sm">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Assign
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

