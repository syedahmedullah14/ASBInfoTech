// "use client"

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu } from "lucide-react"
// import Link from "next/link"
// import { Button } from "./ui/button"
// import { useState } from "react"

// export function MobileMenu() {
//   const [open, setOpen] = useState(false)

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <Button variant="ghost" size="icon" className="md:hidden text-white">
//           <Menu className="h-6 w-6" />
//           <span className="sr-only">Toggle menu</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="right" className="bg-[#000B1D] text-white p-6">
//         <nav className="flex flex-col gap-4">
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Services
//           </Link>
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Industries
//           </Link>
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Insights
//           </Link>
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Stories
//           </Link>
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Who we are
//           </Link>
//           <Link href="#" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
//             Careers
//           </Link>
//           <Button className="mt-4 w-full text-black" variant="outline">
//             Let's talk
//           </Button>
//         </nav>
//       </SheetContent>
//     </Sheet>
//   )
// }

"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"

export function MobileMenu({ isScrolled = false }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#000B1D] text-white p-6">
        <nav className="flex flex-col gap-4">
          <Link href="/services" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Services
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Industries
          </Link>
          <Link href="/insights" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Insights
          </Link>
          <Link href="/stories" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Stories
          </Link>
          <Link href="/who-we-are" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Who we are
          </Link>
          <Link href="/careers" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Careers
          </Link>
          <Link href="/products" onClick={() => setOpen(false)} className="text-lg hover:text-[#e4ff1a]">
            Products
          </Link>
          <Button className="mt-4 w-full text-black" variant="outline">
            Let's talk
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

