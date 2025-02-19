import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import Image from "next/image"

export function Navbar2() {
return(
    <header className="fixed w-full z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl font-bold">
              ASB InfoTech
              {/* <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abslogo-5F0cct4TGhJpAE2xatFERZans7drxc.webp"
                          alt="ASB Infotech Logo"
                          width={190}
                          height={37}
                          className="object-contain"
                        /> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-bold text-lg">
              {["Services", "Industries", "Insights", "Stories", "Who we are", "Careers"].map((item) => (
                <Link key={item} href="#" className="text-white hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex text-black border-white hover:bg-white hover:text-black"
              >
                Let's talk
              </Button>
              {/* <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Globe className="h-5 w-5" />
              </Button> */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
)
}