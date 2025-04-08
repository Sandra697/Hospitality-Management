export default function ClientLogos() {
  return (
    <section className="py-12 border-y border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-[0.8rem] text-gray-500 uppercase tracking-wider font-medium">
            Trusted by leading hospitality brands
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* These would be actual logos in a real implementation */}
          <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
            HILTON
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
            MARRIOTT
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
            HYATT
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
            FOUR SEASONS
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
            RITZ-CARLTON
          </div>
        </div>
      </div>
    </section>
  )
}

