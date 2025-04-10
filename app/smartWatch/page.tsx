"use client"

import { useState } from "react"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import HeroSection from "@/components/hero-section"
import FeatureShowcase from "@/components/feature-showcase"
import BenefitsSection from "@/components/benefits-section"
// import TestimonialSection from "@/components/testimonial-section"
// import PricingSection from "@/components/pricing-section"
import ImplementationProcess from "@/components/implementation-process"
// import FaqSection from "@/components/faq-section"
import IntegrationSection from "@/components/integration-section"
// import ClientLogos from "@/components/client-logos"
import CaseStudySection from "@/components/case-study-section"
// import Footer from "@/components/footer"
import WatchDemo from "@/components/watchDemo"
import TryNowWatch from "@/components/tryNow"
// import { Menu, X } from "lucide-react"

export default function Watch() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [tryNowWatchOpen, setTryNowWatchOpen] = useState(false)

  return (
    <div className="flex overflow-y-hidden min-h-s
    creen flex-col font-medium text-[0.8rem] ">

      

      <main className="flex-1 overflow-x-hidden  sm:p-6 p-2   pt-10">
      <div className="container py-8">
      <div className="text-center pb-3 mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[0.8rem] font-medium mb-4">
          Seamless Communication at Your Fingertips
          </div>
          <h2 className="text-xl font-bold tracking-tight mb-4">Wrist Connect transforms how hotel staff collaborate and respond to guest needs.</h2>
          <p className="text-[0.8rem] text-gray-600 max-w-3xl mx-auto">
          With instant alerts, task management, and two-way communication all delivered through an intuitive smartwatch interface, your team can provide exceptional service without delays.
          </p>
        </div>
         
          </div>
        <HeroSection />

        {/* <ClientLogos /> */}

        <FeatureShowcase />

        <BenefitsSection />

        <CaseStudySection />

        {/* <TestimonialSection /> */}

        <IntegrationSection />

        {/* <PricingSection /> */}

        <ImplementationProcess />

        {/* <FaqSection /> */}

        <section className="py-12 sm:mx-16 bg-gradient-to-r from-teal-500 to-emerald-500">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Ready to Transform Your Hotel Operations?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Join the leading hotels that have revolutionized their staff communication and guest service with Wrist
                Connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-teal-600 font-medium"
                  onClick={() => setDemoOpen(true)}
                >
                  Watch Interactive Demo
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-teal-600 font-medium"
                  onClick={() => setTryNowWatchOpen(true)}
                >
                  Try Watch Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {/* Interactive Watch Demo Modal */}
      <WatchDemo open={demoOpen} onOpenChange={setDemoOpen} />
      <TryNowWatch open={tryNowWatchOpen} onOpenChange={setTryNowWatchOpen} />
    </div>
  )
}