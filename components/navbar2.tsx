// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { MobileMenu } from "./mobile-menu"
// import Image from "next/image"
// import { useEffect, useState } from "react"


// export function Navbar2() {
// return(
    
//     <header 
//     className="fixed w-full z-50 bg-transparent"
//     >
//         <div className="container mx-auto px-4">
//           <div className="h-20 flex items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="text-white text-2xl font-bold">
//               <Image
//                           src="logo1.png"
//                           alt="ASB Infotech Logo"
//                           width={190}
//                           height={37}
//                           className="object-contain"
//                         />
//             </Link>

//           <nav className="hidden md:flex items-center space-x-8 font-bold text-lg">
//             {[
//               { name: "Services", path: "/services" },
//               { name: "Industries", path: "/industries" },
//               { name: "Insights", path: "/insights" },
//               { name: "Stories", path: "/stories" },
//               { name: "Who we are", path: "/who-we-are" },
//               { name: "Careers", path: "/careers" },
//             ].map((item) => (
//               <Link 
//                 key={item.name} 
//                 href={item.path} 
//                 className="text-white hover:text-white transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>


//             {/* Right Side Actions */}
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="outline"
//                 className="hidden md:inline-flex text-black border-white hover:bg-white hover:text-black"
//               >
//                 Let's talk
//               </Button>
             
//               <MobileMenu />
//             </div>
//           </div>
//         </div>
//       </header>
// )
// }

// "use client"
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { MobileMenu } from "./mobile-menu";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export function Navbar2() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-colors duration-300 ${
//         isScrolled ? "bg-[white] shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold">
//             <Image
//               src="Logo5.png"
//               alt="ASB Infotech Logo"
//               width={190}
//               height={37}
//               className="object-contain"
//             />
//           </Link>

//           <nav className="hidden md:flex items-center space-x-8 font-bold text-lg">
//             {[
//               { name: "Services", path: "/services" },
//               { name: "Industries", path: "/industries" },
//               { name: "Insights", path: "/insights" },
//               { name: "Stories", path: "/stories" },
//               { name: "Who we are", path: "/who-we-are" },
//               { name: "Careers", path: "/careers" },
//               { name: "Products", path: "/products" },
//             ].map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className={`transition-colors ${
//                   isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side Actions */}
//           <div className="flex items-center gap-4">
//             <Button
//               variant="outline"
//               className={`hidden md:inline-flex border ${
//                 isScrolled
//                   ? "text-black border-black hover:bg-black hover:text-white"
//                   : "text-black border-white hover:bg-white hover:text-black"
//               }`}
//             >
//               Let's talk
//             </Button>

//             <MobileMenu />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
// import { ContactFormModal } from "./contact-form-modal"

export function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-lg" : isHomePage ? "bg-transparent" : "bg-[#000B1D]"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              {isHomePage ? (
                <>
                  {/* Homepage: Two different logos based on scroll state */}
                  <Image
                    src="/Logo5.png"
                    alt="ASB Infotech Logo Dark"
                    width={190}
                    height={37}
                    className={`object-contain transition-opacity duration-300 absolute ${
                      isScrolled ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Image
                    src="/logo2.png"
                    alt="ASB Infotech Logo Light"
                    width={190}
                    height={37}
                    className={`object-contain transition-opacity duration-300 ${
                      isScrolled ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </>
              ) : (
                // Other pages: Single logo
                <Image
                  src={isScrolled ? "/Logo5.png" : "/logo2.png"}
                  alt="ASB Infotech Logo"
                  width={190}
                  height={37}
                  className="object-contain"
                />
              )}
            </Link>

            <nav className="hidden md:flex items-center space-x-8 font-bold text-lg">
              {[
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Insights", path: "/insights" },
                { name: "Stories", path: "/stories" },
                { name: "Who we are", path: "/who-we-are" },
                { name: "Careers", path: "/careers" },
                { name: "Products", path: "/products" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`transition-colors ${
                    isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(true)}
                className={`hidden md:inline-flex border ${
                  isScrolled
                    ? "text-black border-black hover:bg-black hover:text-white"
                    : "text-black border-white hover:bg-white hover:text-black"
                }`}
              >
                Let's talk
              </Button>

              <MobileMenu isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </header>

      {/* <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} /> */}
    </>
  )
}

