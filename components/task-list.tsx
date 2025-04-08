import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, Clock, AlertTriangle, MoreHorizontal } from "lucide-react"

interface TaskListProps {
  filter?: string
}

export default function TaskList({ filter }: TaskListProps) {
  // Mock data - in a real app, this would come from an API
  const tasks = [
    {
      id: 1,
      title: "Room 302 cleaning request",
      description: "Guest requested room cleaning and fresh towels",
      assignee: { name: "Maria Lopez", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Housekeeping",
      priority: "High",
      status: "In Progress",
      time: "10 min ago",
      location: "3rd Floor",
    },
    {
      id: 2,
      title: "Lobby restroom maintenance",
      description: "Regular maintenance check of lobby restrooms",
      assignee: { name: "John Davis", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Maintenance",
      priority: "Medium",
      status: "Assigned",
      time: "15 min ago",
      location: "Lobby",
    },
    {
      id: 3,
      title: "Extra towels to Room 506",
      description: "Deliver 4 extra towels to guest in Room 506",
      assignee: { name: "Sarah Kim", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Housekeeping",
      priority: "Low",
      status: "In Progress",
      time: "22 min ago",
      location: "5th Floor",
    },
    {
      id: 4,
      title: "Conference room setup",
      description: "Prepare Maple Conference Room for 20 people meeting at 2pm",
      assignee: { name: "Robert Miller", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Events",
      priority: "High",
      status: "Assigned",
      time: "30 min ago",
      location: "2nd Floor",
    },
    {
      id: 5,
      title: "Broken AC in Room 412",
      description: "Guest reported AC not working properly in Room 412",
      assignee: { name: "Michael Johnson", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Maintenance",
      priority: "High",
      status: "Pending",
      time: "45 min ago",
      location: "4th Floor",
    },
    {
      id: 6,
      title: "Restock mini bar in Room 701",
      description: "Restock all items in the mini bar for VIP guest",
      assignee: { name: "Emily Chen", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU" },
      department: "Room Service",
      priority: "Medium",
      status: "Completed",
      time: "1 hour ago",
      location: "7th Floor",
    },
  ]

  // Filter tasks based on the filter prop
  const filteredTasks = filter
    ? tasks.filter((task) => {
        if (filter === "pending") return task.status === "Pending"
        if (filter === "inprogress") return task.status === "In Progress"
        if (filter === "urgent") return task.priority === "High"
        return true
      })
    : tasks

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg bg-white"
        >
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-start gap-4">
              <div className="hidden md:block">
                {task.status === "Completed" ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : task.priority === "High" ? (
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                ) : (
                  <Clock className="h-6 w-6 text-gray-400" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{task.title}</h4>
                  <Badge
                    variant={
                      task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <p className="text-[0.8rem] text-gray-500 mt-1">{task.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                  <span className="text-xs text-gray-500">Department: {task.department}</span>
                  <span className="text-xs text-gray-500">Location: {task.location}</span>
                  <span className="text-xs text-gray-500">Created: {task.time}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback>
                  {task.assignee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-[0.8rem]">{task.assignee.name}</div>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant={
                  task.status === "Completed" ? "outline" : task.status === "In Progress" ? "secondary" : "default"
                }
              >
                {task.status}
              </Badge>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

