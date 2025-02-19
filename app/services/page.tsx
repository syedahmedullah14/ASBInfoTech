import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20" id="services">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salom5.JPG-9jQnJYVd16M6Jwd3C1c61ps2wU5ubK.jpeg"
          alt="Slalom services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            End-to-end <em>services</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            From strategy to digital product building and beyond, we bring the right mix of services to accelerate your
            vision with holistic, practical solutions.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy & Advisory",
                description: "Shape your future with data-driven strategies and roadmaps.",
                items: ["Digital Strategy", "Technology Strategy", "Data Strategy", "Cloud Strategy"],
              },
              {
                title: "Technology Solutions",
                description: "Build and modernize your technology landscape.",
                items: [
                  "Cloud & Infrastructure",
                  "Application Development",
                  "Data & Analytics",
                  "AI & Machine Learning",
                ],
              },
              {
                title: "Experience Design",
                description: "Create exceptional digital experiences.",
                items: ["UX/UI Design", "Service Design", "Product Design", "Design Systems"],
              },
              {
                title: "Data & Analytics",
                description: "Transform data into actionable insights.",
                items: ["Data Engineering", "Business Intelligence", "Advanced Analytics", "Data Governance"],
              },
              {
                title: "Cloud Solutions",
                description: "Accelerate innovation with cloud technologies.",
                items: ["Cloud Migration", "Cloud Native Development", "DevOps", "Cloud Security"],
              },
              {
                title: "Digital Transformation",
                description: "Modernize your business for the digital age.",
                items: ["Process Automation", "Legacy Modernization", "Digital Operations", "Change Management"],
              },
            ].map((category) => (
              <Card
                key={category.title}
                className="bg-[#001233] text-white p-8 hover:bg-[#001233]/80 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-white/70 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#e4ff1a] rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#e4ff1a] font-medium">FEATURED CASE STUDY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Transforming clinical trials for speed, efficiency, and patient impact
              </h2>
              <p className="text-white/90">
                Learn how we helped a leading pharmaceutical company modernize their clinical trial processes using AI
                and automation, reducing trial duration by 40%.
              </p>
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">Read the case study</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salom3.JPG-nj3X6Rmw4Kr0OnxoPLZhG6CuHYN2am.jpeg"
                alt="Clinical trials transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Our capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {["St", "Da", "Ai", "Cl", "Si", "Ex", "Dp", "Pd", "Oc", "Op", "Su", "Ps"].map((code) => (
              <div
                key={code}
                className="aspect-square flex items-center justify-center text-sm font-medium rounded bg-[#e4ff1a] text-[#000B1D] hover:bg-white transition-colors cursor-pointer"
              >
                {code}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to transform your business?</h2>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#0066FF]">
            Let's talk
          </Button>
        </div>
      </section>
    </main>
  )
}

