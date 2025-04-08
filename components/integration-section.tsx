import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function IntegrationSection() {
  const integrations = [
    {
      name: "Property Management Systems",
      description: "Seamlessly connect with leading PMS solutions",
      logos: ["Opera", "Protel", "Mews", "Cloudbeds", "Infor"],
    },
    {
      name: "Point of Sale Systems",
      description: "Integrate with restaurant and retail POS",
      logos: ["Oracle", "Toast", "Lightspeed", "Square", "Aloha"],
    },
    {
      name: "Maintenance Management",
      description: "Connect with maintenance tracking systems",
      logos: ["HotSOS", "Quore", "Alice", "Flexkeeping", "Knowcross"],
    },
    {
      name: "Communication Platforms",
      description: "Integrate with existing communication tools",
      logos: ["Teams", "Slack", "Beekeeper", "Zinc", "Relay"],
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Seamless Integration
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Works With Your Existing Systems</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wrist Connect integrates with your existing hospitality systems for a unified operational experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {integrations.map((integration, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>

                <div className="flex flex-wrap gap-4">
                  {integration.logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="h-10 px-4 bg-white rounded-md border border-gray-200 flex items-center justify-center text-gray-500 font-medium text-[0.8rem]"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your system? Our team can build custom integrations for your specific needs.
          </p>
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
            Contact Us About Custom Integrations
          </Button>
        </div>
      </div>
    </section>
  )
}

