import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function InsightsPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="ASB insights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights & <em>perspectives</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore our latest thinking on technology, business, and innovation.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Featured insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "REPORT",
                title: "AI Adoption Trends 2025",
                description: "Key insights on how businesses are leveraging AI technology.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
              },
              {
                type: "ARTICLE",
                title: "The Future of Work",
                description: "How digital transformation is reshaping workplace dynamics.",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070",
              },
              {
                type: "WHITEPAPER",
                title: "Cloud Migration Strategies",
                description: "Best practices for successful cloud transformation.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
              },
            ].map((article) => (
              <Card key={article.title} className="bg-[#001233] text-white overflow-hidden">
                <div className="h-48 relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[#e4ff1a] text-sm">{article.type}</span>
                  <h3 className="text-xl font-bold my-4">{article.title}</h3>
                  <p className="text-white/70 mb-6">{article.description}</p>
                  <Button variant="outline" className="text-black">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Explore by topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Artificial Intelligence",
              "Cloud & Infrastructure",
              "Digital Experience",
              "Data & Analytics",
              "Innovation",
              "Sustainability",
              "Technology Strategy",
              "Digital Transformation",
            ].map((topic) => (
              <Button
                key={topic}
                variant="outline"
                className="text-[#001233] border-white"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest <em>research</em>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "The State of Digital Transformation 2025",
                    date: "February 2024",
                    type: "Research Report",
                  },
                  {
                    title: "Cloud Security Best Practices",
                    date: "January 2024",
                    type: "Whitepaper",
                  },
                  {
                    title: "AI in Healthcare: Opportunities and Challenges",
                    date: "December 2023",
                    type: "Industry Report",
                  },
                ].map((research) => (
                  <div key={research.title} className="group cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <span className="text-white/60 text-sm">{research.date}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#e4ff1a]">{research.title}</h3>
                        <span className="text-white/60">{research.type}</span>
                      </div>
                      <ArrowRight className="h-6 w-6 text-[#e4ff1a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="h-px bg-white/20 mt-8" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076"
                alt="Latest research"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay ahead of the curve</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and perspectives.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white"
            />
            <Button variant="outline" className="text-[#0066FF] border-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

