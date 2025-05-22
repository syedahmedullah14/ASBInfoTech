import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IndustriesPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Industry expertise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Industry <em>expertise</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Deep industry knowledge combined with cutting-edge technology solutions to help you stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Services",
                description: "Digital transformation solutions for banks, insurers, and investment firms.",
                image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070",
              },
              {
                title: "Healthcare & Life Sciences",
                description: "Innovation in patient care, clinical trials, and medical research.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
              },
              {
                title: "Technology",
                description: "Cutting-edge solutions for software, hardware, and tech service providers.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
              },
              {
                title: "Retail & Consumer Goods",
                description: "Digital commerce and supply chain optimization solutions.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
              },
              {
                title: "Manufacturing",
                description: "Smart factory and Industry 4.0 transformation solutions.",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070",
              },
              {
                title: "Energy & Utilities",
                description: "Sustainable and efficient solutions for the energy sector.",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
              },
            ].map((industry) => (
              <Card
                key={industry.title}
                className="bg-[#001233] text-white overflow-hidden hover:bg-[#001233]/80 transition-colors"
              >
                <div className="h-48 relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-white/70 mb-6">{industry.description}</p>
                  <Button variant="outline" className="text-black">
                    Learn more →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "Major Bank",
                title: "Digital Banking Transformation",
                description: "Modernized core banking systems and launched new digital services.",
              },
              {
                client: "Healthcare Provider",
                title: "Patient Experience Revolution",
                description: "Implemented AI-powered patient care coordination platform.",
              },
              {
                client: "Retail Giant",
                title: "E-commerce Acceleration",
                description: "Built scalable digital commerce platform with personalization.",
              },
            ].map((story) => (
              <Card key={story.title} className="bg-transparent border border-white/20 text-white p-6">
                <span className="text-[#e4ff1a] text-sm">{story.client}</span>
                <h3 className="text-xl font-bold my-4">{story.title}</h3>
                <p className="text-white/70 mb-6">{story.description}</p>
                <Button variant="outline" className="text-black">
                  Read case study →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Industry <em>insights</em>
              </h2>
              <p className="text-white/90">
                Stay ahead of industry trends with our latest research and thought leadership.
              </p>
              <div className="space-y-4">
                {[
                  "2025 Banking & Financial Services Outlook",
                  "Healthcare Innovation Report",
                  "Retail Technology Trends",
                  "Manufacturing Digital Transformation Guide",
                ].map((insight) => (
                  <div key={insight} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-[#e4ff1a] rounded-full" />
                    <span className="text-white">{insight}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">Explore insights</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                alt="Industry insights"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's solve industry challenges together</h2>
          <Button variant="outline" size="lg" className="text-[#0066FF] border-white">
            Contact us
          </Button>
        </div>
      </section>
    </main>
  )
}

