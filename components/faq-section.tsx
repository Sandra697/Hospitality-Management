"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What type of smart watches does Wrist Connect use?",
      answer:
        "Wrist Connect uses commercial-grade smart watches specifically designed for hospitality environments. They are water-resistant, durable, and feature long battery life. We provide all hardware as part of your subscription.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on the size of your property and complexity of integrations. This includes consultation, customization, integration with existing systems, hardware deployment, and staff training.",
    },
    {
      question: "Can Wrist Connect integrate with our existing PMS?",
      answer:
        "Yes, Wrist Connect integrates with most major Property Management Systems including Opera, Protel, Mews, Cloudbeds, and more. We also offer custom integrations for less common systems.",
    },
    {
      question: "How does the location tracking feature work?",
      answer:
        "Wrist Connect uses a combination of Bluetooth beacons and Wi-Fi positioning to track staff locations within your property. The system is accurate to within 2-3 meters and only tracks staff while they are on duty and wearing the device.",
    },
    {
      question: "What happens if a smart watch is damaged or lost?",
      answer:
        "Our subscription includes a hardware warranty that covers normal wear and tear. For lost devices or damage outside normal wear, replacement devices are available at a discounted rate.",
    },
    {
      question: "How secure is the Wrist Connect system?",
      answer:
        "Wrist Connect employs enterprise-grade security with end-to-end encryption for all communications. All data is stored in SOC 2 compliant data centers, and we conduct regular security audits.",
    },
    {
      question: "Can staff use Wrist Connect to communicate with guests?",
      answer:
        "While Wrist Connect is primarily designed for staff-to-staff communication, it can be integrated with guest messaging platforms to allow staff to receive and respond to guest requests directly from their smart watches.",
    },
    {
      question: "What kind of training do you provide?",
      answer:
        "We provide comprehensive training for all staff levels. This includes hands-on device training, role-specific workflow training, and management dashboard training. We also provide training materials and video tutorials for ongoing reference.",
    },
  ]

  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about Wrist Connect</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}

