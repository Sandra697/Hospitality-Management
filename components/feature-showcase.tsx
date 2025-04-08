"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Bell, AlertTriangle, CheckSquare, MapPin, Clock } from "lucide-react"

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("communication")

  const features = {
    communication: {
      title: "Two-Way Communication",
      description: "Enable instant messaging between staff members and departments with discreet vibration alerts.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      color: "from-teal-500 to-emerald-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Role-based messaging ensures the right staff receive communications",
        "Vibration alerts ensure notifications are received without disturbing guests",
        "Voice-to-text input for hands-free message creation",
        "Pre-set message templates for common situations save time",
        "Message acknowledgment tracking for accountability",
      ],
      watchScreen: (
        <div className="space-y-1.5 overflow-hidden">
          <div className="bg-white/10 rounded p-1.5">
            <div className="text-[8px] flex justify-between">
              <span className="font-medium">Front Desk</span>
              <span className="opacity-70">9:30 AM</span>
            </div>
            <div className="text-[10px]">VIP guest arriving at 2PM</div>
          </div>

          <div className="bg-white/10 rounded p-1.5">
            <div className="text-[8px] flex justify-between">
              <span className="font-medium">Maintenance</span>
              <span className="opacity-70">9:15 AM</span>
            </div>
            <div className="text-[10px]">Lobby restroom fixed</div>
          </div>

          <div className="bg-white/10 rounded p-1.5">
            <div className="text-[8px] flex justify-between">
              <span className="font-medium">Housekeeping</span>
              <span className="opacity-70">8:45 AM</span>
            </div>
            <div className="text-[10px]">Room 506 ready for check-in</div>
          </div>
        </div>
      ),
    },
    tasks: {
      title: "Task Management",
      description: "Assign, track, and complete tasks with real-time updates to management dashboards.",
      icon: <CheckSquare className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-indigo-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "One-tap task acceptance and completion",
        "Automatic task routing based on staff location and workload",
        "Task prioritization based on urgency and guest impact",
        "Photo attachment capability for maintenance tasks",
        "Task completion analytics for performance tracking",
      ],
      watchScreen: (
        <div className="bg-white/10 rounded-lg p-2 mb-2">
          <div className="text-[10px] text-blue-300 font-medium">URGENT TASK</div>
          <div className="text-xs font-medium">Room 302 - AC repair</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] opacity-80">5 min ago</span>
            <div className="flex gap-1">
              <button className="bg-blue-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
              <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
            </div>
          </div>
        </div>
      ),
    },
    emergency: {
      title: "Emergency Templates",
      description:
        "Pre-configured emergency alerts for fire, medical, and security incidents with one-touch activation.",
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      color: "from-red-500 to-orange-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "One-touch emergency alert broadcasting",
        "Location-specific emergency notifications",
        "Automatic escalation to management and security",
        "Emergency procedure instructions delivered to staff",
        "Real-time staff check-in during emergencies",
      ],
      watchScreen: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-2 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M13.5 6H5.5C4.11929 6 3 7.11929 3 8.5V15.5C3 16.8807 4.11929 18 5.5 18H18.5C19.8807 18 21 16.8807 21 15.5V12.5"></path>
              <path d="M16 12L18 10L20 12"></path>
              <path d="M18 10V3"></path>
            </svg>
          </div>
          <div className="text-xs font-bold text-red-300">FIRE EMERGENCY</div>
          <div className="text-[10px] text-center mt-1">East Wing - 3rd Floor</div>
          <button className="bg-red-500 text-[10px] px-2 py-1 rounded mt-2">Acknowledge</button>
        </div>
      ),
    },
    notifications: {
      title: "AI Notification Priority",
      description: "Smart notification system that prioritizes alerts based on urgency and staff role.",
      icon: <Bell className="h-6 w-6 text-white" />,
      color: "from-purple-500 to-pink-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Different vibration patterns indicate notification priority",
        "AI learns from staff behavior to optimize notification timing",
        "Do-not-disturb settings for staff during guest interactions",
        "Emergency alerts bypass do-not-disturb settings",
        "Notification analytics to prevent alert fatigue",
      ],
      watchScreen: (
        <div className="space-y-2">
          <div className="bg-purple-400/30 rounded-lg p-2 border-l-4 border-purple-500">
            <div className="text-[10px] text-purple-300 font-medium">HIGH PRIORITY</div>
            <div className="text-xs">VIP checkout needs assistance</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 border-l-4 border-white/30">
            <div className="text-[10px] text-gray-300 font-medium">STANDARD</div>
            <div className="text-xs">Restock mini bar in Room 420</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 border-l-4 border-white/30">
            <div className="text-[10px] text-gray-300 font-medium">LOW</div>
            <div className="text-xs">Staff meeting at 3PM today</div>
          </div>
        </div>
      ),
    },
    location: {
      title: "Location Tracking",
      description: "Real-time staff location tracking for efficient task assignment and emergency response.",
      icon: <MapPin className="h-6 w-6 text-white" />,
      color: "from-amber-500 to-yellow-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Assign tasks to the nearest available staff member",
        "Indoor positioning accurate to within 2 meters",
        "Privacy controls for off-duty staff",
        "Zone-based alerts for restricted areas",
        "Historical location data for workflow optimization",
      ],
      watchScreen: (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-black/20 rounded-lg">
            {/* Hotel floor plan mockup */}
            <div className="h-full w-full p-1">
              <div className="text-[8px] text-amber-300 font-medium mb-1">HOTEL MAP</div>
              <div className="relative h-[calc(100%-12px)] w-full bg-black/30 rounded">
                {/* Staff locations */}
                <div className="absolute top-[20%] left-[30%] h-2 w-2 bg-amber-500 rounded-full animate-ping"></div>
                <div className="absolute top-[20%] left-[30%] h-1.5 w-1.5 bg-amber-500 rounded-full"></div>

                <div className="absolute top-[45%] left-[60%] h-2 w-2 bg-green-500 rounded-full"></div>
                <div className="absolute top-[70%] left-[25%] h-2 w-2 bg-blue-500 rounded-full"></div>

                {/* Room labels */}
                <div className="absolute top-[10%] left-[10%] text-[6px] text-gray-400">Lobby</div>
                <div className="absolute top-[40%] left-[50%] text-[6px] text-gray-400">Restaurant</div>
                <div className="absolute top-[60%] left-[20%] text-[6px] text-gray-400">Rooms</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    analytics: {
      title: "Response Time Analytics",
      description: "Track and analyze response times to continuously improve service delivery.",
      icon: <Clock className="h-6 w-6 text-white" />,
      color: "from-cyan-500 to-blue-500",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Real-time performance dashboards for managers",
        "Individual and team performance metrics",
        "Historical trend analysis for continuous improvement",
        "Guest satisfaction correlation with response times",
        "Automated performance reports and insights",
      ],
      watchScreen: (
        <div className="space-y-2">
          <div className="text-[10px] text-cyan-300 font-medium">YOUR PERFORMANCE TODAY</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[8px]">
              <span>Avg. Response Time</span>
              <span className="font-medium">2.3 min</span>
            </div>
            <div className="h-1 bg-black/30 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[60%]"></div>
            </div>

            <div className="flex justify-between text-[8px]">
              <span>Tasks Completed</span>
              <span className="font-medium">12/15</span>
            </div>
            <div className="h-1 bg-black/30 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[80%]"></div>
            </div>

            <div className="flex justify-between text-[8px]">
              <span>Guest Satisfaction</span>
              <span className="font-medium">4.8/5</span>
            </div>
            <div className="h-1 bg-black/30 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[95%]"></div>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <section id="features" className="py-8 sm:px-16">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Powerful Features
          </div>
          <h2 className="text-xl font-bold tracking-tight mb-4">Smart Watch Features for Hospitality</h2>
          <p className="text-[0.8rem] text-gray-600 max-w-3xl mx-auto">
            Wrist Connect transforms hospitality operations with powerful features designed for the unique needs of
            hotel staff
          </p>
        </div>

        <Tabs defaultValue="communication" value={activeTab} onValueChange={setActiveTab} className="space-y-6 sm:mb-6 sm:px-16
        ">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-transparent h-auto p-0">
            {Object.entries(features).map(([key, feature]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`flex flex-col items-center gap-6 p-4 rounded-xl data-[state=active]:bg-gradient-to-r ${feature.color} data-[state=active]:text-white h-auto`}
              >
              <div
  className={`h-10 w-10 rounded-lg flex items-center justify-center ${
    activeTab === key 
      ? "bg-white/20 text-gray-600" 
      : "bg-gray-100 text-gray-700"
  }`}
>
  {feature.icon}
</div>
                <span className="text-xs font-medium">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-12 min-h-[60vh]  overflow-y-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[0.8rem] text-gray-600 mb-6">{feature.description}</p>

                  <ul className="space-y-3 mb-8">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`h-5 w-5 rounded-full bg-gradient-to-r ${feature.color} flex-shrink-0 flex items-center justify-center mt-0.5`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`bg-gradient-to-r ${feature.color} hover:opacity-90`}>Learn More</Button>
                </div>

                <div className="relative">
                  <div className="aspect-square max-w-[300px] mx-auto relative rounded-[2rem] overflow-hidden shadow-xl border-[10px] border-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      {/* Watch bezel */}
                      <div className="w-[90%] h-[90%] rounded-[1.5rem] bg-gradient-to-br from-gray-700 to-gray-800 p-3 flex flex-col items-center justify-center">
                        {/* Watch screen */}
                        <div className="w-full h-full bg-black rounded-[1.25rem] overflow-hidden relative flex flex-col">
                          <div className="absolute inset-0 flex flex-col text-white p-3">
                            <div className="text-xs font-medium mb-1 flex justify-between items-center">
                              <span>10:42 AM</span>
                              <span
                                className={`text-${key === "emergency" ? "red" : key === "tasks" ? "blue" : key === "notifications" ? "purple" : key === "location" ? "amber" : key === "analytics" ? "cyan" : "teal"}-400`}
                              >
                                ●
                              </span>
                            </div>

                            <div className="flex-1 overflow-hidden">{feature.watchScreen}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r ${feature.color} opacity-10 blur-3xl`}
                  ></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

