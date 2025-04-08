import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function MessageList() {
  // Mock data - in a real app, this would come from an API
  const messages = [
    {
      id: 1,
      sender: { name: "System", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "system" },
      content: "Fire alarm test will be conducted today at 2:00 PM. This is only a test.",
      time: "10:15 AM",
      priority: "High",
      recipients: "All Staff",
    },
    {
      id: 2,
      sender: { name: "Maria Lopez", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "staff" },
      content: "Room 302 cleaning completed. Guest requested extra pillows which have been delivered.",
      time: "10:32 AM",
      priority: "Normal",
      recipients: "Housekeeping Supervisors",
    },
    {
      id: 3,
      sender: { name: "John Davis", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "staff" },
      content: "Lobby restroom maintenance completed. Replaced paper towel dispenser.",
      time: "10:45 AM",
      priority: "Normal",
      recipients: "Maintenance Supervisors",
    },
    {
      id: 4,
      sender: { name: "Sarah Kim", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "supervisor" },
      content: "VIP guest arriving at 3:00 PM. Please ensure all preparations are complete.",
      time: "11:15 AM",
      priority: "High",
      recipients: "Front Desk, Concierge",
    },
    {
      id: 5,
      sender: { name: "Robert Miller", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "manager" },
      content: "Staff meeting scheduled for tomorrow at 9:00 AM in the conference room.",
      time: "11:30 AM",
      priority: "Normal",
      recipients: "All Department Heads",
    },
    {
      id: 6,
      sender: { name: "Emily Chen", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU", role: "staff" },
      content: "Guest in Room 701 requested late checkout at 2:00 PM. Approved by front desk.",
      time: "11:45 AM",
      priority: "Normal",
      recipients: "Housekeeping",
    },
  ]

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="p-4 border rounded-lg bg-white">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
              <AvatarFallback>
                {message.sender.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-6">
                <h4 className="font-medium">{message.sender.name}</h4>
                <Badge
                  variant={
                    message.sender.role === "system"
                      ? "destructive"
                      : message.sender.role === "manager"
                        ? "default"
                        : message.sender.role === "supervisor"
                          ? "secondary"
                          : "outline"
                  }
                >
                  {message.sender.role.charAt(0).toUpperCase() + message.sender.role.slice(1)}
                </Badge>
                {message.priority === "High" && <Badge variant="destructive">High Priority</Badge>}
              </div>

              <p className="text-[0.8rem] mt-2">{message.content}</p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">To: {message.recipients}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

