import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star, TrendingUp, DollarSign, Shield } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-teal-600" />,
      title: "Faster Response Times",
      description: "Reduce response time by up to 60% with instant notifications delivered directly to staff wrists",
      stats: [
        { label: "Before Wrist Connect", value: "8.5 min", percentage: 85 },
        { label: "With Wrist Connect", value: "3.2 min", percentage: 32 },
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Staff Coordination",
      description: "Optimize staff deployment and task assignment with real-time location tracking",
      stats: [
        { label: "Staff Efficiency", value: "+35%", percentage: 85 },
        { label: "Task Completion Rate", value: "+28%", percentage: 92 },
      ],
    },
    {
      icon: <Star className="h-6 w-6 text-teal-600" />,
      title: "Guest Experience",
      description: "Enhance guest satisfaction with faster service and seamless staff coordination",
      stats: [
        { label: "Guest Satisfaction", value: "+24%", percentage: 75 },
        { label: "Service Quality Ratings", value: "+32%", percentage: 85 },
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-teal-600" />,
      title: "Operational Efficiency",
      description: "Streamline workflows and reduce operational bottlenecks with real-time communication",
      stats: [
        { label: "Operational Efficiency", value: "+40%", percentage: 80 },
        { label: "Staff Productivity", value: "+25%", percentage: 75 },
      ],
    },
    {
      icon: <DollarSign className="h-6 w-6 text-teal-600" />,
      title: "ROI & Cost Savings",
      description: "Measurable return on investment through operational efficiency and staff productivity",
      stats: [
        { label: "Operational Cost Reduction", value: "-18%", percentage: 65 },
        { label: "ROI Timeline", value: "6-8 months", percentage: 80 },
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: "Emergency Preparedness",
      description: "Improve emergency response with instant alerts and staff location tracking",
      stats: [
        { label: "Emergency Response Time", value: "-45%", percentage: 90 },
        { label: "Staff Safety Confidence", value: "+65%", percentage: 85 },
      ],
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Measurable Results
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Operational Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Wrist Connect transforms hotel operations and enhances guest satisfaction with measurable results
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>

                <div className="space-y-4">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.8rem] text-gray-600">{stat.label}</span>
                        <span className="text-[0.8rem] font-medium">{stat.value}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                          style={{ width: `${stat.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

