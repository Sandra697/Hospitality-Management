
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Bell, CheckSquare, Hotel, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen text-[0.8rem] font-medium p-6 text-gray-700 flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h2 className="text-[0.9rem] font-bold tracking-tight">Welcome back, Manager</h2>
            <p className="text-[#265073] text-[0.8rem]">Monitor your hotel operations and staff in real-time</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[0.8rem] font-medium">Active Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">24/30</div>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">6 staff members off duty</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[0.8rem] font-medium">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">12</div>
                  <CheckSquare className="h-5 w-5 text-[#820300]" />
                </div>
                <p className="text-xs text-[#820300] mt-1">4 high priority tasks</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[0.8rem] font-medium">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">3.2 min</div>
                  <Clock className="h-5 w-5 text-[#493628]" />
                </div>
                <p className="text-xs text-[#493628] mt-1">Average task response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[0.8rem] font-medium">Communications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">86</div>
                  <MessageSquare className="h-5 w-5 text-[#3C552D]" />
                </div>
                <p className="text-xs text-[#3C552D] mt-1">Messages sent today</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Active Tasks</CardTitle>
                <CardDescription>Real-time view of current tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Room 302 cleaning request",
                      assignee: "Maria L.",
                      priority: "High",
                      status: "In Progress",
                      time: "10 min ago",
                    },
                    {
                      id: 2,
                      title: "Lobby restroom maintenance",
                      assignee: "John D.",
                      priority: "Medium",
                      status: "Assigned",
                      time: "15 min ago",
                    },
                    {
                      id: 3,
                      title: "Extra towels to Room 506",
                      assignee: "Sarah K.",
                      priority: "Low",
                      status: "In Progress",
                      time: "22 min ago",
                    },
                    {
                      id: 4,
                      title: "Conference room setup",
                      assignee: "Robert M.",
                      priority: "High",
                      status: "Assigned",
                      time: "30 min ago",
                    },
                    {
                      id: 5,
                      title: "Room 804 water Repair",
                      assignee: "Moses M.",
                      priority: "High",
                      status: "Assigned",
                      time: "37 min ago",
                    },
                    {
                      id: 6,
                      title: " Baby Bed room 306",
                      assignee: "Jonathan k.",
                      priority: "low",
                      status: "Assigned",
                      time: "3 min ago",
                    },
                    {
                      id: 7,
                      title: "Conference room clean Up",
                      assignee: "Susan M",
                      priority: "High",
                      status: "Assigned",
                      time: "1 min ago",
                    },
                  ].map((task) => (
                    <div key={task.id} className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h4 className="font-medium text-[#3D0301] text-[0.75rem]">{task.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">Assigned to: {task.assignee}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            task.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {task.status}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Staff Location</CardTitle>
                <CardDescription>Track staff positions in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                  <div className="absolute inset-0 p-4">
                    <div className="w-full h-full relative border-2 border-dashed border-gray-300 rounded-md">
                      {/* Hotel floor plan would go here */}
                      <div className="absolute top-[20%] left-[30%] h-3 w-3 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-[45%] left-[60%] h-3 w-3 bg-green-500 rounded-full"></div>
                      <div className="absolute top-[70%] left-[25%] h-3 w-3 bg-purple-500 rounded-full"></div>
                      <div className="absolute top-[35%] left-[80%] h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="absolute top-[60%] left-[50%] h-3 w-3 bg-red-500 rounded-full"></div>

                      {/* Room labels */}
                      <div className="absolute top-[10%] left-[10%] text-xs text-gray-500">Lobby</div>
                      <div className="absolute top-[30%] left-[40%] text-xs text-gray-500">Restaurant</div>
                      <div className="absolute top-[60%] left-[70%] text-xs text-gray-500">Rooms</div>
                      <div className="absolute top-[80%] left-[20%] text-xs text-gray-500">Pool</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-1"></span>
                      Maria L.
                    </span>
                    <span>Lobby</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                      John D.
                    </span>
                    <span>Restaurant</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <span className="h-2 w-2 bg-purple-500 rounded-full mr-1"></span>
                      Sarah K.
                    </span>
                    <span>Pool Area</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

