import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Essentials",
      description: "For small hotels up to 50 rooms",
      price: "$29",
      unit: "per user / month",
      features: [
        "Two-way communication",
        "Basic task management",
        "Standard notifications",
        "Email support",
        "1 admin dashboard",
        "Basic reporting",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "For mid-size hotels up to 200 rooms",
      price: "$49",
      unit: "per user / month",
      features: [
        "Everything in Essentials",
        "Advanced task management",
        "AI notification prioritization",
        "Emergency templates",
        "Basic location tracking",
        "PMS integration",
        "Phone & email support",
        "Advanced analytics",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large hotels & hotel groups",
      price: "Custom",
      unit: "contact for pricing",
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Custom integrations",
        "Advanced location tracking",
        "Custom emergency protocols",
        "Multi-property management",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting & analytics",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-12">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            Pricing Plans
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your hotel's needs with no hidden fees
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`border ${plan.popular ? "border-teal-500 shadow-xl" : "shadow-lg"} relative`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.unit}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-[#FEFAE0]  flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">All plans include hardware setup and onboarding support</p>
          <p className="text-gray-500 text-[0.8rem]">
            Prices shown are billed annually. Monthly billing available at higher rates.
          </p>
        </div>
      </div>
    </section>
  )
}

