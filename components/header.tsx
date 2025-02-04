import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavigationMenu } from "./navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abslogo-5F0cct4TGhJpAE2xatFERZans7drxc.webp"
            alt="ASB Infotech Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>
        <NavigationMenu />
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium">
            Sign In
          </Button>
          <Button className="text-sm font-medium">Sign Up for Free</Button>
        </div>
      </div>
    </header>
  )
}

