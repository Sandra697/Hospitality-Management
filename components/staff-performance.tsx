import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StaffPerformance() {
  // Mock data - in a real app, this would come from an API
  const performanceData = [
    {
      id: 1,
      name: "Maria Lopez",
      role: "Housekeeping",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      metrics: {
        tasksCompleted: 156,
        avgResponseTime: 2.8,
        efficiency: 92,
        guestSatisfaction: 4.8,
      },
    },
    {
      id: 2,
      name: "John Davis",
      role: "Maintenance Technician",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      metrics: {
        tasksCompleted: 98,
        avgResponseTime: 3.5,
        efficiency: 85,
        guestSatisfaction: 4.5,
      },
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Front Desk Agent",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      metrics: {
        tasksCompleted: 112,
        avgResponseTime: 1.5,
        efficiency: 95,
        guestSatisfaction: 4.9,
      },
    },
    {
      id: 4,
      name: "Robert Miller",
      role: "Food Service Supervisor",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      metrics: {
        tasksCompleted: 87,
        avgResponseTime: 2.2,
        efficiency: 88,
        guestSatisfaction: 4.6,
      },
    },
    {
      id: 5,
      name: "Emily Chen",
      role: "Concierge",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmDFOpRqmQmU64T6__2MDOl6NLaCK4I-10MHVrCGltXOSeXcl56_sD59-0ddr4M9aNc0&usqp=CAU",
      metrics: {
        tasksCompleted: 134,
        avgResponseTime: 1.8,
        efficiency: 93,
        guestSatisfaction: 4.9,
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">Top Performer</h3>
              <div className="flex justify-center mt-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNK5qIGHxEuXbc-NeWAow3yYpp0YswUb8_yJrZd7UgpE0HDSwvKYnhIU0RttZCTdhIHU&usqp=CAU" alt="Sarah Kim" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="font-medium mt-2">Sarah Kim</h4>
              <p className="text-[0.8rem] text-gray-500">Front Desk Agent</p>
              <div className="mt-2 text-[0.8rem]">
                <p>Response Time: 1.5 min</p>
                <p>Efficiency: 95%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">Most Tasks</h3>
              <div className="flex justify-center mt-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTefyZ2KoKlODzFv3fHEXaa4geVdhMSqzaGMzy1frs0avhXFq6Aqh0_A6e9kVCnC2cH58&usqp=CAU" alt="Maria Lopez" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="font-medium mt-2">Maria Lopez</h4>
              <p className="text-[0.8rem] text-gray-500">Housekeeping</p>
              <div className="mt-2 text-[0.8rem]">
                <p>Tasks Completed: 156</p>
                <p>Efficiency: 92%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">Fastest Response</h3>
              <div className="flex justify-center mt-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9HgNh26GqGIj4t9Nj1Um7h7_nR4xmgQ-88MEpupwTZRz73puroG7DbCkJL7e_Eg2hAU&usqp=CAU" alt="Sarah Kim" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="font-medium mt-2">Sarah Kim</h4>
              <p className="text-[0.8rem] text-gray-500">Front Desk Agent</p>
              <div className="mt-2 text-[0.8rem]">
                <p>Response Time: 1.5 min</p>
                <p>Tasks Completed: 112</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">Highest Satisfaction</h3>
              <div className="flex justify-center mt-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="Emily Chen" />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="font-medium mt-2">Emily Chen</h4>
              <p className="text-[0.8rem] text-gray-500">Concierge</p>
              <div className="mt-2 text-[0.8rem]">
                <p>Guest Satisfaction: 4.9/5</p>
                <p>Efficiency: 93%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Staff Performance Comparison</h3>

        <div className="space-y-6">
          {performanceData.map((staff) => (
            <div key={staff.id} className="space-y-2">
              <div className="flex items-center gap-2">
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
                  <p className="text-[0.8rem] text-gray-500">{staff.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <span>Response Time</span>
                    <span>{staff.metrics.avgResponseTime} min</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F0BB78] "
                      style={{ width: `${Math.max(0, 100 - staff.metrics.avgResponseTime * 10)}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <span>Efficiency</span>
                    <span>{staff.metrics.efficiency}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F0BB78] " style={{ width: `${staff.metrics.efficiency}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <span>Guest Satisfaction</span>
                    <span>{staff.metrics.guestSatisfaction}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F0BB78] "
                      style={{ width: `${(staff.metrics.guestSatisfaction / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <span>Tasks Completed</span>
                    <span>{staff.metrics.tasksCompleted}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F0BB78] "
                      style={{ width: `${(staff.metrics.tasksCompleted / 160) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

