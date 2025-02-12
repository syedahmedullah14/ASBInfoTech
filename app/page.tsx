import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <><div className="m-0 overflow-hidden bg-[#000b24]">
      {/* Hero Section with Tech Background */}
      {/* <section className="relative min-h-[800px] overflow-hidden "> */}
        {/* Background Image with Overlay */}

        {/* Hero Content */}
        {/* <div className="flex flex-col-2 container relative min-h-[800px] items-center justify-center space-x-10 py-24 m-auto"> */}
        {/* <div className="container relative flex min-h-[800px] flex-col items-center justify-center py-24 m-auto"> */}
        {/* <div>
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="text-7xl font-bold tracking-tight">
              <span className="text-primary">Welcome to</span>
              <br />
              ABS InfoTech
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-xl text-muted-foreground">
              Transforming businesses through innovative technology and digital solutions
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Button size="lg" className="h-12 px-8 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="/tech3.jpeg?height=1080&width=1920"
            alt="Technology Background"
            
            className="object-cover"
            priority
            fill
          /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-tl from-background/40 via-background/80 to-background/40" /> */}
          {/* Abstract Pattern Overlay */}
          {/* <div className="absolute inset-0 bg-grid-white/[0.02]" /> */}
{/*         

        </div>
        </div>
       */}

        {/* Floating Tech Elements */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent m-auto" />
      </section> */}
{/* Hero Section */}
      <section className=" overflow-hidden ">
        <div className="w-auto h-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Image on the left */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:h-auto">
              <Image
                src="/tech3.jpeg?height=1080&width=1920"
                alt="ASB Infotech Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Text content on the right */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-[#341d55]  min-h-[400px] lg:min-h-[800px]">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-white">Welcome to</span>
                <span className="block text-white">ASB InfoTech</span>
              </h1>
              <p className="mt-6 max-w-xl text-xl text-gray-300">
                Transforming businesses through innovative technology and digital solutions. We deliver cutting-edge AI
                and machine learning capabilities to drive your success.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" className="h-12 px-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section with Tech Image */}
      <section className="overflow-hidden border-t bg-[#111111]">
        <div className="container py-24 m-auto sm: px-2">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4 md:ml-5 sm:ml-5">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">About Us</h2>
              <div className="space-y-4">
                <p className="text-white">
                  Built on strong pillars of integrity, honesty and perseverance, ASB Infotech is led by talented
                  individuals committed to providing optimum solutions across the IT Services Industry.
                </p>
                <p className="text-white">
                  We cater to client services across Business and Technology needs in Financial, Retail, Insurance,
                  Educational, E-Commerce, Security, and Medical/Pharmaceutical domains.
                </p>
                <p className="text-white">
                  Following true Agile principles, we embrace change through continuous learning, adaptation, and
                  process improvements.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[600px] md:mr-5 sm:mr-5">
              <Image
                src="/tech5.jpg?height=1200&width=1200"
                alt="Technology Innovation"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="border-t bg-slate-300">
        <div className="container py-24 m-auto sm: px-2">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold">Enterprise Solutions for Modern Businesses</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive technology solutions across multiple domains
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-lg border bg-background p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-4">
          {/* Business Trends Section */}
          <div className="relative group cursor-pointer h-[400px] ">
            <Image src="/business1.jpg" alt="Person looking at horizon" fill className="object-cover" />
            {/* <div className="absolute inset-0 bg-[#0077C8] bg-opacity-90 p-8 flex flex-col justify-between"> */}
              {/* <div> */}
                {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AHEAD OF THE CURVE : 2025 BUSINESS TRENDS
                </h2> */}
                {/* <p className="text-white/90">
                  Wipro experts forecast how top organizations can capitalize on opportunities for growth.
                </p> */}
              {/* </div> */}
              {/* <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            {/* </div> */}
          </div>
          <div className="relative group cursor-pointer h-[400px]">
            <div className="absolute inset-0 bg-[#746FA8] p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AHEAD OF THE CURVE : 2025 BUSINESS TRENDS
                </h2>
                <p className="text-white/90">
                  ASB experts forecast how top organizations can capitalize on opportunities for growth.
                </p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative group cursor-pointer h-[400px] ">
            <Image src="/business2.webp" alt="Person looking at horizon" fill className="object-cover" />
            
          </div>

          {/* AI & Industry Cloud Section */}
          <div className="relative group cursor-pointer h-[400px]">
           
            <div className="absolute inset-0 bg-[#1B6AA8] p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  HOW AI & INDUSTRY CLOUD COMBINE INNOVATION & POWER BUSINESS VALUE
                </h2>
                <p className="text-white/90">An insight report by ASB FullStride Cloud and Forbes.</p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Telecom Innovation Section */}
          <div className="relative group cursor-pointer h-[400px]">
            <div className="absolute inset-0 bg-[#3398B3]  p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  STAYING COMPETITIVE IN TELECOM WITH AI & PLATFORM INNOVATION
                </h2>
                <p className="text-white/90">
                  By adopting technology-driven platforms, leveraging AI, and expanding partnerships, companies can
                  position themselves for success.
                </p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Business Outcomes Section */}
          <div className="relative group cursor-pointer h-[400px]">
           
            <Image src="/business3.webp" alt="Analytics visualization" fill className="object-cover" />
            
          </div>
          <div className="relative group cursor-pointer h-[400px]">
            
            <div className="absolute inset-0 bg-[#341d55] p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">DRIVING BUSINESS OUTCOMES WITH AI</h2>
                <p className="text-white/90">
                  A Harvard Business Review analytic services report in association with ASB FullStride Cloud.
                </p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative group cursor-pointer h-[400px]">              
            <Image src="/business4.webp" alt="Analytics visualization" fill className="object-cover" />
            
          </div>
       
          <div className="relative group cursor-pointer h-[400px]">
            
            <Image src="/business5.jpg" alt="Analytics visualization" fill className="object-cover" />
           
          </div>
          <div className="relative group cursor-pointer h-[400px]">
        
            <div className="absolute inset-0 bg-[#2f8fd0]  p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ASB NAMED LEADER IN ISG'S HEALTHCARE DIGITAL SERVICES REPORT</h2>
                <p className="text-white">
                A research report comparing provider strengths, challenges and competitive differentiators.                </p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative group cursor-pointer h-[400px]">
          
            <Image src="/business6.jpg" alt="Analytics visualization" fill className="object-cover" />
          
          </div>
          <div className="relative group cursor-pointer h-[400px]">
          
            <div className="absolute inset-0 bg-[#00a796]  p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-proxima-nova text-white mb-4">NEXT-GEN AI ASSISTANT FOR TOURISM IN THAILAND</h2>
                <p className="text-white">
                The exciting initiative is set to leverage NVIDIA's technology to transform the tourism experience in Thailand.                </p>
              </div>
              <Button variant="link" className="text-white w-fit p-0 group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
          
      {/* Testimonial's section*/}
      <section className="relative overflow-hidden">
        {/* <div className="container py-24 m-auto sm: px-2"> */}
          {/* <div className="mx-auto max-w-[800px] text-center"> */}
            <h2 className="text-3xl font-bold py-10 m-auto sm: px-2 text-center text-white/90">What our customers say</h2>
          {/* </div> */}
          <div className="container grid grid-cols-1 md:grid-cols-4 justify-between mx-auto max-w-[1200px]">
              <p className="mt-4 text-lg text-white/80">
                We use cutting-edge technologies to deliver exceptional solutions
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We use cutting-edge technologies to deliver exceptional solutions
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We use cutting-edge technologies to deliver exceptional solutions
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We use cutting-edge technologies to deliver exceptional solutions
              </p>
            </div>
        {/* </div> */}
      </section>

      {/* Tech Stack Section */}
      <section className="relative overflow-hidden">
        <div className="container py-24 m-auto sm: px-2">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold text-white/90">Powered by Latest Technology</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We use cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center rounded-lg border bg-background p-8 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <tech.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{tech.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-secondary/30">
        <div className="container py-24 m-auto">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Join thousands of companies using our solutions</p>
            <Button size="lg" className="mt-8 h-12 px-8 text-lg">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

const features = [
  {
    title: "Financial Services",
    description: "Enterprise solutions for banking and financial institutions with advanced security features.",
  },
  {
    title: "Retail Solutions",
    description: "Digital transformation solutions for retail businesses to enhance customer experience.",
  },
  {
    title: "Insurance Tech",
    description: "Modern solutions for insurance providers to streamline operations and improve service delivery.",
  },
  {
    title: "Healthcare",
    description: "Cutting-edge technology solutions for healthcare providers and pharmaceutical companies.",
  },
  {
    title: "Education",
    description: "Digital solutions for educational institutions to enhance learning experiences.",
  },
  {
    title: "E-Commerce",
    description: "Complete e-commerce platform solutions for businesses of all sizes.",
  },
]

import { Cloud, Shield, Smartphone, Database } from "lucide-react"

const techStack = [
  {
    name: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    icon: Cloud,
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols",
    icon: Shield,
  },
  {
    name: "Mobile First",
    description: "Responsive mobile solutions",
    icon: Smartphone,
  },
  {
    name: "Big Data",
    description: "Advanced data analytics",
    icon: Database,
  },
]

