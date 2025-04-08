import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CaseStudySection() {
  return (
    <section className="py-16 px-6 rounded-md bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-teal-300 text-[0.8rem] font-medium mb-4">
              Case Study
            </div>
            <h2 className="text-xl font-bold tracking-tight mb-6">
              How Grand Plaza Hotel Reduced Response Times by 58%
            </h2>
            <p className="text-[0.9rem] opacity-80 mb-8">
              Grand Plaza Hotel, a 350-room luxury property in New York, implemented Wrist Connect to address
              communication challenges and improve guest service.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                  <p className="opacity-80">
                    Staff were relying on radios and phone calls, leading to delayed responses and missed
                    communications. Guest satisfaction scores were suffering as a result.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Solution</h3>
                  <p className="opacity-80">
                    Wrist Connect was deployed to all 120 staff members with customized workflows for each department
                    and integration with their existing PMS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Results</h3>
                  <p className="opacity-80">
                    Within 3 months, response times decreased by 58%, guest satisfaction scores increased by 24%, and
                    staff reported higher job satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="text-teal-600 font-medium">
              Read Full Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                {/* This would be a video or image in a real implementation */}
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Watch the Grand Plaza Hotel Story</p>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg sm:p-2 p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold">58%</div>
                  <div className="text-[0.8rem] opacity-80">Faster Response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">24%</div>
                  <div className="text-[0.8rem] opacity-80">Higher Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

