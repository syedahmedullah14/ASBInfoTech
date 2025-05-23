import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="ASB careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join our <em>team</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Build your career at a company that puts people first and values innovation, inclusion, and growth.
          </p>
          <div className="flex gap-4 max-w-md">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white"
              />
            </div>
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">Search</Button>
          </div>
        </div>
      </section>

      {/* Why ASB */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Why ASB</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Growth & Development",
                description: "Continuous learning and career advancement opportunities.",
              },
              {
                title: "Innovation Culture",
                description: "Freedom to explore new ideas and technologies.",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible work arrangements and wellness programs.",
              },
              {
                title: "Global Opportunities",
                description: "Work with clients and teams around the world.",
              },
              {
                title: "Inclusive Environment",
                description: "Diverse perspectives are valued and celebrated.",
              },
              {
                title: "Meaningful Work",
                description: "Make an impact on businesses and communities.",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="bg-[#001233] text-white p-6">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Open positions</h2>
          <div className="space-y-4">
            {[
              {
                title: "Software Developer",
                location: "New York, NY",
                type: "Full-time",
              },
              {
                title: "Business Systems Analyst",
                location: "San Francisco, CA",
                type: "Full-time",
              },
              {
                title: "Computer System Analyst",
                location: "London, UK",
                type: "Full-time",
              },
              {
                title: "Technology Consultant",
                location: "Chicago, IL",
                type: "Full-time",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="bg-[#000B1D] p-6 rounded-lg flex items-center justify-between group hover:bg-[#000B1D]/80 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-white/60">{job.location}</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60">{job.type}</span>
                  </div>
                </div>
                <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#000B1D]">
                  Apply now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Life at ASB</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Software Engineer",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070",
                profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522",
                testimonial: "The innovative culture at ASB has allowed me to work with cutting-edge technologies while solving complex challenges. The support for continuous learning has been incredible."
              },
              {
                name: "Marcus Rodriguez",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
                profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587",
                testimonial: "What sets ASB apart is the emphasis on collaboration and innovation. I've had the opportunity to lead transformative projects that make a real impact on our clients' businesses."
              },
              {
                name: "Priya Patel",
                role: "Technology Consultant",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
                profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587",
                testimonial: "The global exposure and diverse project portfolio at ASB has accelerated my professional growth. The inclusive culture makes everyone feel valued and heard."
              }
            ].map((story) => (
              <Card key={story.name} className="bg-[#001233] text-white overflow-hidden">
                <div className="h-48 relative">
                  <Image src={story.image} alt={`${story.name}'s story`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Employee Story</h3>
                  <p className="text-white/70 mb-6">"{story.testimonial}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full relative overflow-hidden">
                      <Image src={story.profileImage} alt={story.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">{story.name}</p>
                      <p className="text-white/60">{story.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to join us?</h2>
          <Button variant="outline" size="lg" className="text-[#0066FF] border-white">
            View all positions
          </Button>
        </div>
      </section>
    </main>
  )
}

