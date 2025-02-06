"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cva } from "class-variance-authority"

const products = [
  {
    title: "Financial Services",
    href: "/products/financial",
    description: "Enterprise solutions for banking and financial institutions",
  },
  {
    title: "Retail Solutions",
    href: "/products/retail",
    description: "Digital transformation for retail businesses",
  },
  {
    title: "Insurance Tech",
    href: "/products/insurance",
    description: "Modern solutions for insurance providers",
  },
]

const solutions = [
  {
    title: "E-Commerce",
    href: "/solutions/ecommerce",
    description: "Complete e-commerce platform solutions",
  },
  {
    title: "Healthcare",
    href: "/solutions/healthcare",
    description: "Medical and pharmaceutical technology",
  },
  {
    title: "Education",
    href: "/solutions/education",
    description: "Digital solutions for educational institutions",
  },
]

export function Navbar() {
  return (
    // <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 overflow-hidden">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abslogo-5F0cct4TGhJpAE2xatFERZans7drxc.webp"
            alt="ASB Infotech Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black text-lg">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products.map((product) => (
                    <ListItem key={product.title} title={product.title} href={product.href}>
                      {product.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black text-lg">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions.map((solution) => (
                    <ListItem key={solution.title} title={solution.title} href={solution.href}>
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/company" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Company</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <div className="ml-auto flex items-center"> */}
          {/* <Button variant="ghost" className="text-sm font-medium text-primary">
            Sign In
          </Button>
          <Button className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up Free
          </Button> */}
        {/* </div> */}
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const navigationMenuTriggerStyle = cva(
  "text-lg text-black group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-/10 hover:text-black",
)

