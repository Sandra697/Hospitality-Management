import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Flame, AmbulanceIcon as FirstAid, Shield, Droplet, Snowflake } from "lucide-react"

export default function EmergencyTemplates() {
  const emergencyTypes = [
    {
      id: "fire",
      title: "Fire Emergency",
      description: "Alert staff about fire emergency and evacuation procedures",
      icon: <Flame className="h-6 w-6 text-red-500" />,
      color: "bg-red-50 border-red-200",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
    {
      id: "medical",
      title: "Medical Emergency",
      description: "Request medical assistance for a guest or staff member",
      icon: <FirstAid className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "security",
      title: "Security Incident",
      description: "Alert security staff about a security breach or threat",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "water",
      title: "Water Leak",
      description: "Report water leak or flooding requiring immediate attention",
      icon: <Droplet className="h-6 w-6 text-cyan-500" />,
      color: "bg-cyan-50 border-cyan-200",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      id: "hvac",
      title: "HVAC Failure",
      description: "Report heating/cooling system failure in guest areas",
      icon: <Snowflake className="h-6 w-6 text-bg-[#F0BB78]/200" />,
      color: "bg-bg-[#F0BB78]/20 border-teal-200",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
    {
      id: "evacuation",
      title: "Evacuation Order",
      description: "Initiate property-wide evacuation procedures",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-50 border-amber-200",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
    },
  ]

  return (
    <div className="grid grid-cols-1 font-medium text-gray-700 text-[0.8rem] md:grid-cols-2 lg:grid-cols-3 gap-4">
      {emergencyTypes.map((emergency) => (
        <Card key={emergency.id} className={`border-2 ${emergency.color}`}>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mt-2">{emergency.icon}</div>
              <div>
                <h3 className="font-bold">{emergency.title}</h3>
                <p className="text-[0.8rem] text-gray-500 mt-1">{emergency.description}</p>
              </div>
              <Button className={`w-full ${emergency.buttonColor}`}>Send Alert</Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="border-2 border-dashed border-gray-200">
        <CardContent className="p-4">
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <Button variant="outline" className="w-full">
              Create Custom Template
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

