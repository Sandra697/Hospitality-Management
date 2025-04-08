"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import WatchDemo from "@/components/watchDemo"

export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="relative pt-20 pb-24  overflow-hidden p-6">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="absolute top-40 right-[20%] w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 left-[20%] w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-6">
              Hospitality Communication System
            </div>

            <h1 className="text-xl  lg:text-2xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Revolutionize Hotel Staff Communication
            </h1>

            <p className="text-[0.9rem] text-[#1A3636] mb-8 max-w-xl mx-auto lg:mx-0">
              Wrist Connect is a smart watch-based system that streamlines operations, enhances service delivery, and
              dramatically improves response times.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium">60% faster response times</span> with instant notifications delivered
                  directly to staff wrists
                </p>
              </div>

              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium">Seamless two-way communication</span> between all departments and staff
                  roles
                </p>
              </div>

              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium">AI-powered task prioritization</span> ensures critical needs are
                  addressed first
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium" onClick={() => setDemoOpen(true)}>
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-500">Trusted by 500+ hotels worldwide</div>
          </div>

          <div className="relative">
            <div className="relative z-10 mx-auto lg:ml-auto lg:mr-0 max-w-md">
              <div className="aspect-square relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Watch bezel */}
                  <div className="w-[90%] h-[90%] rounded-[2rem] bg-gradient-to-br from-gray-700 to-gray-800 p-4 flex flex-col items-center justify-center">
                    {/* Watch screen */}
                    <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden relative flex flex-col">
                      <div className="absolute inset-0 flex flex-col text-white p-3">
                        <div className="text-xs font-medium mb-1 flex justify-between items-center">
                          <span>10:42 AM</span>
                          <span className="text-teal-400">●</span>
                        </div>

                        <div className="text-[10px] font-medium mb-1">URGENT TASK</div>

                        <div className="flex-1 overflow-hidden">
                          <div className="bg-white/10 rounded-lg p-2 mb-2">
                            <div className="text-[10px] text-red-300 font-medium">URGENT</div>
                            <div className="text-xs font-medium">Room 302 - AC repair</div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-[10px] opacity-80">5 min ago</span>
                              <div className="flex gap-1">
                                <button className="bg-teal-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
                                <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between mt-1">
                          <button className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
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
                            >
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          </button>
                          <button className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
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
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                          </button>
                          <button className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
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
                            >
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch band */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[60%] h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-3xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-teal-200/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border-2 border-dashed border-emerald-200/30"></div>
          </div>
        </div>
      </div>

      {/* Interactive Watch Demo Modal */}
      <WatchDemo open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  )
}

