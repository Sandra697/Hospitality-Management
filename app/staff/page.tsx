import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Search, MapPin } from "lucide-react"
import StaffList from "@/components/staff-list"
import StaffPerformance from "@/components/staff-performance"

export default function StaffPage() {
  return (
    <div className="flex min-h-screen text-[0.8rem] font-medium flex-col">
      <header className="sticky top-0 z-10 ">
        <div className="container flex h-16 px-4 py-3 items-center justify-between ">
          <h1 className="text-xl font-bold"></h1>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Staff Member
          </Button>
        </div>
      </header>

      <main className="flex-1 py-2 px-6">
        <div className="container ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="relative w-full md:w-64">
              <Input placeholder="Search staff..." className="pl-8" />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Department
              </Button>
              <Button variant="outline" size="sm">
                Role
              </Button>
              <Button variant="outline" size="sm">
                Status
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Staff</TabsTrigger>
              <TabsTrigger value="active">Active Now</TabsTrigger>
              <TabsTrigger value="departments">By Department</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div>
                <CardHeader>
                  <CardTitle>Staff Directory</CardTitle>
                  <CardDescription>View and manage all staff members</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaffList />
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              <div>
                <CardHeader>
                  <CardTitle>Currently Active Staff</CardTitle>
                  <CardDescription>Staff members currently on duty</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Maria Lopez",
                        role: "Housekeeping",
                        location: "3rd Floor",
                        status: "Cleaning Room 302",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
                      },
                      {
                        id: 2,
                        name: "John Davis",
                        role: "Maintenance",
                        location: "Lobby",
                        status: "Fixing AC Unit",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
                      },
                      {
                        id: 3,
                        name: "Sarah Kim",
                        role: "Front Desk",
                        location: "Reception",
                        status: "Checking in guests",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
                      },
                      {
                        id: 4,
                        name: "Robert Miller",
                        role: "Food Service",
                        location: "Restaurant",
                        status: "Setting up for lunch",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
                      },
                      {
                        id: 5,
                        name: "Emily Chen",
                        role: "Concierge",
                        location: "Lobby",
                        status: "Assisting guests",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
                      },
                    ].map((staff) => (
                      <div key={staff.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                        <div className="flex items-center gap-4">
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
                            <h4 className="font-medium">{staff.name}</h4>
                            <div className="flex items-center text-[0.8rem] text-gray-500">
                              <span className="mr-2">{staff.role}</span>
                              <Badge variant="outline">{staff.status}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[0.8rem] text-[#690B22] flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {staff.location}
                          </div>
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                          <Button size="sm">Assign Task</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="space-y-4">
              <div className="grid gasm:p-2 p-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Housekeeping</CardTitle>
                    <CardDescription>8 staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[0.8rem]">
                        <span>Active now:</span>
                        <span className="font-medium">6/8</span>
                      </div>
                      <div className="flex items-center text-orange-600 justify-between text-[0.8rem]">
                        <span>Tasks completed today:</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex items-center text-[#1F4529] justify-between text-[0.8rem]">
                        <span>Avg. response time:</span>
                        <span className="font-medium">2.8 min</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Department
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Front Desk</CardTitle>
                    <CardDescription>6 staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[0.8rem]">
                        <span>Active now:</span>
                        <span className="font-medium">4/6</span>
                      </div>
                      <div className="flex items-center text-orange-600 justify-between text-[0.8rem]">
                        <span>Tasks completed today:</span>
                        <span className="font-medium">32</span>
                      </div>
                     <div className="flex items-center text-[#1F4529] justify-between text-[0.8rem]">
                        <span>Avg. response time:</span>
                        <span className="font-medium">1.5 min</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Department
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Maintenance</CardTitle>
                    <CardDescription>5 staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[0.8rem]">
                        <span>Active now:</span>
                        <span className="font-medium">3/5</span>
                      </div>
                      <div className="flex items-center text-orange-600 justify-between text-[0.8rem]">
                        <span>Tasks completed today:</span>
                        <span className="font-medium">12</span>
                      </div>
                     <div className="flex items-center text-[#1F4529] justify-between text-[0.8rem]">
                        <span>Avg. response time:</span>
                        <span className="font-medium">4.2 min</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Department
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Food Service</CardTitle>
                    <CardDescription>7 staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[0.8rem]">
                        <span>Active now:</span>
                        <span className="font-medium">7/7</span>
                      </div>
                      <div className="flex items-center text-orange-600 justify-between text-[0.8rem]">
                        <span>Tasks completed today:</span>
                        <span className="font-medium">18</span>
                      </div>
                     <div className="flex items-center text-[#1F4529] justify-between text-[0.8rem]">
                        <span>Avg. response time:</span>
                        <span className="font-medium">2.1 min</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Department
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Concierge</CardTitle>
                    <CardDescription>4 staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[0.8rem]">
                        <span>Active now:</span>
                        <span className="font-medium">2/4</span>
                      </div>
                      <div className="flex items-center text-orange-600 justify-between text-[0.8rem]">
                        <span>Tasks completed today:</span>
                        <span className="font-medium">15</span>
                      </div>
                     <div className="flex items-center text-[#1F4529] justify-between text-[0.8rem]">
                        <span>Avg. response time:</span>
                        <span className="font-medium">1.8 min</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Department
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Staff Performance Metrics</CardTitle>
                  <CardDescription>Track and analyze staff efficiency and response times</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaffPerformance />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

