import { Card, CardContent } from "@/components/ui/card"

export default function ImplementationProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We analyze your hotel's specific needs and operational challenges",
      details:
        "Our team works with your management to understand your current workflows, pain points, and goals for improvement.",
    },
    {
      number: "02",
      title: "Customization",
      description: "We configure Wrist Connect to match your hotel's unique requirements",
      details:
        "From department structures to task types and notification priorities, everything is tailored to your operations.",
    },
    {
      number: "03",
      title: "Integration",
      description: "We connect Wrist Connect with your existing hotel systems",
      details:
        "Seamless integration with your PMS, maintenance systems, and other operational tools ensures a unified workflow.",
    },
    {
      number: "04",
      title: "Deployment",
      description: "We provide the hardware and set up the entire system",
      details:
        "Smart watches are configured, tested, and prepared for your staff with all necessary software pre-installed.",
    },
    {
      number: "05",
      title: "Training",
      description: "We train your team to ensure smooth adoption",
      details:
        "Comprehensive training sessions for staff and management ensure everyone is comfortable with the new system.",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "We provide continuous support and optimization",
      details:
        "Regular check-ins, performance reviews, and system updates ensure you get maximum value from Wrist Connect.",
    },
  ]

  return (
    <section className="py-8 sm:px-16">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Implementation
          </div>
          <h2 className="text-xl font-bold tracking-tight mb-4">Simple 6-Step Process</h2>
          <p className="text-[0.8rem] text-gray-600 max-w-3xl mx-auto">
            We handle everything from consultation to ongoing support for a smooth transition
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-none pb-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-[0.9rem] font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-medium mb-2">{step.description}</p>
                    <p className="text-gray-500 text-[0.8rem]">{step.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">Typical implementation time: 2-4 weeks depending on hotel size and complexity</p>
        </div>
      </div>
    </section>
  )
}

