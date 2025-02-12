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
    // <footer className="border-t bg-[#1b0056] sm: px-2">
    //   <div className="container py-16 m-auto">
    //     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:ml-5 sm:ml-5">
    //       <div>
    //         <h3 className="mb-4 text-lg font-semibold text-white">About ASB Infotech</h3>
    //         <p className="text-sm text-white">
    //           A leading provider of technology solutions across multiple domains, committed to delivering excellence and
    //           innovation.
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li>
    //             <Link href="/about" className="text-white hover:underline">
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/services" className="text-white hover:underline">
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/careers" className="text-white hover:underline">
    //               Careers
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/contact" className="text-white hover:underline">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li>
    //             <Link href="/services/financial" className="text-white hover:underline">
    //               Financial Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/services/retail" className="text-white hover:underline">
    //               Retail Solutions
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/services/insurance" className="text-white hover:underline">
    //               Insurance
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/services/education" className="text-white hover:underline">
    //               Education
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li className="text-white hover:underline">Email: info@asbinfotech.com</li>
    //           <li className="text-white hover:underline">Phone: +1 (555) 123-4567</li>
    //           <li className="mt-4">
    //             <Button>Get in Touch</Button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="mt-16 border-t pt-8 text-center text-sm text-white">
    //       <p>&copy; {new Date().getFullYear()} ASB Infotech. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-0">
              Let's solve <em>together.</em>
            </h2>
            <Button variant="outline" size="lg" className="text-[#0066FF] border-white hover:bg-white hover:text-[#0066FF]">
              Get in touch →
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-white">
            <div>
              <h3 className="font-bold mb-4 uppercase">Newsroom</h3>
              <p className="mb-4">Get the latest news and updates about Slalom.</p>
              <Button variant="link" className="text-white p-0">
                Visit the newsroom →
              </Button>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase">Our locations</h3>
              <ul className="space-y-2">
                {["Australia", "Canada", "Colombia", "Germany", "Ireland", "Japan"].map((location) => (
                  <li key={location}>
                    <Link href="#" className="hover:underline">
                      {location}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase">Social</h3>
              <ul className="space-y-2">
                {["LinkedIn", "X (formerly known as Twitter)", "Instagram"].map((social) => (
                  <li key={social}>
                    <Link href="#" className="hover:underline">
                      {social}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/20 text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>ASB HUMAN CONSULTING</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Accessibility Statement
              </Link>
              <p>©2024 ASB InfoTech, INC. ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

