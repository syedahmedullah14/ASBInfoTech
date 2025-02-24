import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="bg-[#000B1D] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <em>Products</em>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Innovative identity and access management solutions designed for modern enterprises.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {/* Identity Central */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg inline-block">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product1-FVwbYyqSIo2FR0luCbOCjHd3hRMdy5.webp"
                    alt="Identity Central Logo"
                    width={300}
                    height={80}
                    className="h-12 w-auto"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Identity Central</h2>
                  <p className="text-white/90 text-lg">
                    A comprehensive central Request and Review Portal designed for enterprise-wide identity governance.
                  </p>
                  <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-8">
                <Card className="bg-[#001233] text-white p-8">
                  <h3 className="text-xl font-bold mb-4">Central Reviews Portal</h3>
                  <p className="text-white/80">
                    Organizations need to follow compliance and regulations through various reviews including Identity
                    and Access, Data Governance, Ownership reviews, and data sanity reviews. Identity Central provides a
                    seamless, unified platform for all these review types in one place.
                  </p>
                </Card>
                <Card className="bg-[#001233] text-white p-8">
                  <h3 className="text-xl font-bold mb-4">Mergers & Acquisitions (M&A)</h3>
                  <p className="text-white/80">
                    During M&A processes, Identity Central provides a unified view of identities, access, and reviews
                    across all acquired entities. It enables faster go-to-market on Identity, Governance, and compliance
                    controls/standards after M&A by integrating with existing IGA platforms.
                  </p>
                </Card>
              </div>
            </div>

            {/* Ident5y */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <Card className="bg-[#001233] text-white p-8">
                  <h3 className="text-xl font-bold mb-4">Identity Verification Integration</h3>
                  <p className="text-white/80">
                    Ident5y enables seamless integration with third-party Identity Verification tools for faster
                    onboarding of Enterprise, Vendor, and Customer identities. It provides organizations with a rapid
                    go-to-market strategy for all self-service and help desk-based security features.
                  </p>
                </Card>
                <Card className="bg-[#001233] text-white p-8">
                  <h3 className="text-xl font-bold mb-4">Enterprise Integration</h3>
                  <p className="text-white/80">
                    Integrate with enterprise ITSM products to create a seamless identity verification process for any
                    help desk-related user verification processes. Streamline your identity management workflow with our
                    comprehensive solution.
                  </p>
                </Card>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="bg-black p-6 rounded-lg inline-block">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product2-E9h4AjN7rTrAdfAGqON0vaQPfzUG73.webp"
                    alt="Ident5y Logo"
                    width={300}
                    height={300}
                    className="h-32 w-auto"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Ident5y</h2>
                  <p className="text-white/90 text-lg">
                    Advanced identity verification platform enabling seamless integration with third-party verification
                    tools.
                  </p>
                  <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to transform your identity management?
          </h2>
          <Button variant="outline" size="lg" className="text-[#0066FF] border-white hover:bg-white">
            Contact us
          </Button>
        </div>
      </section>
    </main>
  )
}

