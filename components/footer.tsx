// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export function Footer() {
//   return (
//     <footer className="border-t bg-background/95">
//       <div className="container py-16">
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">About ASB Infotech</h3>
//             <p className="text-sm text-muted-foreground">
//               A leading provider of technology solutions across multiple domains, committed to delivering excellence and
//               innovation.
//             </p>
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/about" className="text-muted-foreground hover:text-foreground">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-muted-foreground hover:text-foreground">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/careers" className="text-muted-foreground hover:text-foreground">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-muted-foreground hover:text-foreground">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Services</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/services/financial" className="text-muted-foreground hover:text-foreground">
//                   Financial Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/retail" className="text-muted-foreground hover:text-foreground">
//                   Retail Solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/insurance" className="text-muted-foreground hover:text-foreground">
//                   Insurance
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/education" className="text-muted-foreground hover:text-foreground">
//                   Education
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
//             <ul className="space-y-2 text-sm">
//               <li className="text-muted-foreground">Email: info@asbinfotech.com</li>
//               <li className="text-muted-foreground">Phone: +1 (555) 123-4567</li>
//               <li className="mt-4">
//                 <Button>Get in Touch</Button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} ASB Infotech. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-[#1b0056] sm: ml-2">
      <div className="container py-16 m-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:ml-5 sm:ml-5">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About ASB Infotech</h3>
            <p className="text-sm text-white">
              A leading provider of technology solutions across multiple domains, committed to delivering excellence and
              innovation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/financial" className="text-white hover:underline">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/services/retail" className="text-white hover:underline">
                  Retail Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="text-white hover:underline">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/education" className="text-white hover:underline">
                  Education
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white hover:underline">Email: info@asbinfotech.com</li>
              <li className="text-white hover:underline">Phone: +1 (555) 123-4567</li>
              <li className="mt-4">
                <Button>Get in Touch</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} ASB Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

