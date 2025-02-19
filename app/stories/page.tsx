import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function StoriesPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salom3.JPG-nj3X6Rmw4Kr0OnxoPLZhG6CuHYN2am.jpeg"
          alt="Customer stories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Customer <em>stories</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Real stories of transformation and innovation from our clients around the world.
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "The Home Depot",
                title: "Building the future of retail with BlackLocus",
                type: "CUSTOMER STORY",
                image: "/placeholder.svg",
              },
              {
                client: "Protas",
                title: "Transforming clinical trials for speed and efficiency",
                type: "CASE STUDY",
                image: "/placeholder.svg",
              },
              {
                client: "Clean Up Australia",
                title: "Digital transformation for environmental impact",
                type: "SUCCESS STORY",
                image: "/placeholder.svg",
              },
            ].map((story) => (
              <Card key={story.title} className="bg-[#001233] text-white overflow-hidden">
                <div className="h-48 relative">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[#e4ff1a] text-sm">{story.type}</span>
                  <h3 className="text-xl font-bold my-4">{story.title}</h3>
                  <p className="text-white/60 mb-6">{story.client}</p>
                  <Button variant="outline" className="text-white hover:text-[#e4ff1a] p-0">
                    Read story →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Impact by the numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "40%", description: "Average reduction in development time" },
              { metric: "2x", description: "Increase in customer satisfaction" },
              { metric: "$500M", description: "Client cost savings achieved" },
              { metric: "300+", description: "Successful transformations" },
            ].map((stat) => (
              <div key={stat.metric} className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-[#e4ff1a]">{stat.metric}</span>
                <p className="text-white/90 mt-4">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Stories by industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Financial Services", "Healthcare", "Retail", "Technology", "Manufacturing", "Energy"].map((industry) => (
              <Button
                key={industry}
                variant="outline"
                className="h-32 text-xl font-bold text-white border-white/20 hover:bg-white hover:text-[#001233]"
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl text-white italic mb-8">
            "The mix of digital expertise, delivery focus, and client-focused culture contributed directly to our
            accelerated digital journey."
          </blockquote>
          <cite className="text-white/90 not-italic">- VP, Digital Technology, Fortune 500 Company</cite>
        </div>
      </section>
    </main>
  )
}

