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
// import { Menu, X } from "lucide-react"

export default function Watch() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="flex overflow-y-hidden min-h-s
    creen flex-col font-medium text-[0.8rem] ">

      <main className="flex-1 overflow-x-hidden sm:p-2 p-6  pt-10">
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

        <section className="py-12 bg-gradient-to-r from-teal-500 to-emerald-500">
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
    </div>
  )
}