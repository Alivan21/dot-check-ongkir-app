import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Save, Search, Truck } from "lucide-react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      <header className="flex h-14 items-center px-4 py-5 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Truck className="mr-2 size-6" />
          <span className="font-bold">Cek RajaOngkir</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#features">
            Features
          </Link>
          <SignedOut>
            <Button asChild>
              <Link className="text-sm font-medium underline-offset-4" href="/sign-in">
                Get Started
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link className="text-sm font-medium underline-offset-4" href="/dashboard">
                Dashboard
              </Link>
            </Button>
          </SignedIn>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Check Shipping Prices Across Indonesia
                </h1>
                <p className="mx-auto max-w-xl text-gray-500 dark:text-gray-400 md:text-xl">
                  Easily compare and save shipping rates for different cities with Cek RajaOngkir.
                </p>
              </div>
              <div className="space-x-4">
                <SignedOut>
                  <Button asChild>
                    <Link href="/sign-in">Get Started</Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                </SignedIn>
                <Button asChild variant="outline">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
          id="features"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="mb-2 size-8" />
                  <CardTitle>Check Shipping Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily compare shipping prices between different cities across Indonesia.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Save className="mb-2 size-8" />
                  <CardTitle>Save Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Store and manage your frequently checked routes for quick access.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="mb-2 size-8" />
                  <CardTitle>Multiple Couriers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Compare rates from various courier services in one place.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cek RajaOngkir. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
