import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function WhoWeArePage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="business3.webp"
          alt="ASB team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who we <em>are</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We're a global consulting firm focused on strategy, technology, and business transformation.
          </p>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto">
            Our purpose is to help people and organizations dream bigger, move faster, and{" "}
            <em className="text-[#e4ff1a] not-italic">build better</em>
          </h2>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Our values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Do what is right",
                description: "We act with integrity and put our clients first.",
              },
              {
                title: "Drive innovation",
                description: "We embrace new ideas and challenge the status quo.",
              },
              {
                title: "Take ownership",
                description: "We take responsibility and deliver on our promises.",
              },
              {
                title: "Focus on outcomes",
                description: "We measure success by the value we create.",
              },
            ].map((value) => (
              <Card key={value.title} className="bg-transparent border border-white/20 text-white p-6">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Leadership team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((leader) => (
              <Card key={leader} className="bg-[#001233] text-white overflow-hidden">
                <div className="h-64 relative">
                  <Image src="/placeholder.svg" alt="Leadership team member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-white/60">Chief Executive Officer</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Global presence</h2>
              <p className="text-white/90">
                With offices in over 40 markets around the world, we bring global expertise with local understanding.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["North America", "Europe", "Asia Pacific", "Latin America"].map((region) => (
                  <div key={region} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e4ff1a] rounded-full" />
                    <span className="text-white">{region}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Global presence" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join our team</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our values and passion for helping organizations
            transform.
          </p>
          <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">View careers</Button>
        </div>
      </section>
    </main>
  )
}

