"use client";
import React, { useState, useEffect, forwardRef, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming you have this from the previous step
import {
  Menu,
  Newspaper,
  Mail,
  TrendingUp,
  Share2,
  Headset,
  Database,
  Store,
  ShoppingCart,
  Code,
  Smartphone,
  BrainCircuit,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsSheetOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "h-16 bg-white/80 backdrop-blur-sm shadow-md"
          : "h-20 bg-white/95"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4   md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Samprakshi Infinity Solution"
            width={160}
            height={40}
            priority
            // Assuming logo.png has a blue tone, we'll use blue for accents
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  <span className="font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200">
                    Home
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Development</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px] list-none">
                   <div className="row-span-3 flex flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Code className="h-8 w-8 text-blue-700" />
                    <div className="mt-4 mb-2 text-lg font-semibold text-blue-700">
                      Build & Innovate
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Custom development solutions to bring your ideas to life.
                    </p>
                  </div>
                  <Link href="/development/web-development">
                  <ListItem icon={<Code className="h-5 w-5 text-blue-600" />} title="Web Development" />
                  </Link>
                 
                 <Link href="/development/app-development">
                  <ListItem icon={<Smartphone className="h-5 w-5 text-blue-600" />} title="App Development" />
                </Link>
                <Link href="/development/machine-learning-ai">
                  <ListItem icon={<BrainCircuit className="h-5 w-5 text-blue-600" />}  title="Machine Learning & AI" />
                </Link>
                </div>
                
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Digital Marketing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px] list-none">
                  <div className="row-span-4 flex flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <TrendingUp className="h-8 w-8 text-muted-foreground" />
                    <div className="mt-4 mb-2 text-lg font-semibold text-blue-700">
                      Boost Your Reach
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Drive growth with our data-driven digital marketing strategies.
                    </p>
                  </div>
                  <Link href="/digital-marketing/content-marketing">
                  <ListItem icon={<Newspaper className="h-5 w-5 text-blue-600" />}  title="Content Marketing">
                    Engage your audience with compelling, high-quality content.
                  </ListItem>
                   </Link>
                   <Link href="/digital-marketing/email-marketing">
                  <ListItem icon={<Mail className="h-5 w-5 text-blue-600" />}  title="Email Marketing">
                    Nurture leads and build customer loyalty with targeted campaigns.
                  </ListItem>
                  </Link>
                  <Link href="/digital-marketing/seo">
                  <ListItem icon={<TrendingUp className="h-5 w-5 text-blue-600" />}  title="SEO">
                    Improve your search engine rankings and drive organic traffic.
                  </ListItem>
                  </Link>
                  <Link href="/digital-marketing/social-media-marketing">
                  <ListItem icon={<Share2 className="h-5 w-5 text-blue-600" />}  title="Social Media Marketing">
                    Build a strong social presence and connect with your community.
                  </ListItem>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Back Office</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px] list-none">
                   <div className="row-span-4 flex flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Headset className="h-8 w-8 text-blue-700" />
                    <div className="mt-4 mb-2 text-lg font-semibold text-blue-700">
                      Streamline Operations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Efficient back-office support to keep your business running smoothly.
                    </p>
                  </div>
                  <Link href="/back-office/customer-support">
                  <ListItem  icon={<Headset className="h-5 w-5 text-blue-600" />} title="Customer Support">
                    Provide exceptional support to retain your valuable customers.
                  </ListItem>
                  </Link>
                  <Link href="/back-office/data-entry-management">
                  <ListItem icon={<Database className="h-5 w-5 text-blue-600" />}  title="Data Entry Management">
                    Accurate and efficient data management to power your business.
                  </ListItem>
                  </Link>
                  {/* <Link href="/back-office/account-management-services-for-amazon">
                  <ListItem icon={<Store className="h-5 w-5 text-blue-600" />}  title="Amazon Account Management">
                    Optimize your Amazon store for maximum visibility and sales.
                  </ListItem>
                  </Link>
                  <Link href="/back-office/ecommerce-support">
                  <ListItem icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}  title="Ecommerce Support">
                    Comprehensive support for your entire ecommerce operation.
                  </ListItem>
                  </Link> */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          
           
            <NavigationMenuItem>
              <NavigationMenuTrigger>E-commerce</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px] list-none">
                   <div className="row-span-4 flex flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Headset className="h-8 w-8 text-blue-700" />
                    <div className="mt-4 mb-2 text-lg font-semibold text-blue-700">
                      Streamline Operations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Efficient back-office support to keep your business running smoothly.
                    </p>
                  </div>
                 
                  <Link href="/back-office/account-management-services-for-amazon">
                  <ListItem icon={<Store className="h-5 w-5 text-blue-600" />}  title="Amazon Account Management">
                    Optimize your Amazon store for maximum visibility and sales.
                  </ListItem>
                  </Link>
                  <Link href="/e-commerce">
                  <ListItem icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}  title="Ecommerce Support">
                    Comprehensive support for your entire ecommerce operation.
                  </ListItem>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/e-commerce" className={navigationMenuTriggerStyle()}>
                    E-commerce
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about-us" className={navigationMenuTriggerStyle()}>
                  <span className="font-semibold transition-colors duration-200 hover:text-blue-700">
                    About Us
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                <Link
                  href="/contact-us"
                  className={cn(navigationMenuTriggerStyle(), "text-white transition-colors duration-200 rounded-md px-4 py-2")}
                  style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', backgroundRepeat: 'no-repeat' }}
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                  <Image src="/logo.png" alt="Logo" width={120} height={30} />
                </Link>
              </div>
              <nav className="flex flex-col flex-grow mt-4 px-2 text-lg overflow-y-auto">
                <Link href="/" className="py-3 text-base font-medium border-b border-gray-100" onClick={closeMobileMenu}>Home</Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="digital-marketing" className="border-b border-gray-100">
                    <AccordionTrigger className="py-3 text-base font-medium">Digital Marketing</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/digital-marketing/content-marketing" onClick={closeMobileMenu}>Content Marketing</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/digital-marketing/email-marketing" onClick={closeMobileMenu}>Email Marketing</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/digital-marketing/seo" onClick={closeMobileMenu}>SEO</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/digital-marketing/social-media-marketing" onClick={closeMobileMenu}>Social Media Marketing</Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="back-office" className="border-b border-gray-100">
                    <AccordionTrigger className="py-3 text-base font-medium">Back Office</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/back-office/customer-support" onClick={closeMobileMenu}>Customer Support</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/back-office/data-entry-management" onClick={closeMobileMenu}>DATA ENTRY MANAGEMENT</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/back-office/amazon-account-management" onClick={closeMobileMenu}>Amazon Account Management</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/back-office/ecommerce-support" onClick={closeMobileMenu}>Ecommerce Support</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
               
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="development" className="border-b border-gray-100">
                    <AccordionTrigger className="py-3 text-base font-medium">Development</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/development/web-development" onClick={closeMobileMenu}>Web Development</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/development/app-development" onClick={closeMobileMenu}>App Development</Link>
                      <Link className="block py-2 text-sm text-gray-700 hover:text-blue-600" href="/development/machine-learning-ai" onClick={closeMobileMenu}>Machine Learning & AI</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                 <Link href="/e-commerce" className="py-3 text-base font-medium border-b border-gray-100" onClick={closeMobileMenu}>E-commerce</Link>
                <Link href="/about-us" className="py-3 text-base font-medium border-b border-gray-100" onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link href="/contact-us" className="py-3 text-base font-medium border-b border-gray-100" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = forwardRef(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none  items-start space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50 hover:text-blue-700 focus:text-blue-700",
            className
          )}
          {...props}
        >
          <div className="flex-shrink-0 text-accent-foreground/70">{icon}</div>
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;