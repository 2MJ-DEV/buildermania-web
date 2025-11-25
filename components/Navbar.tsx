import { Bell, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <div className="bg-zinc-900 flex items-center justify-center text-zinc-200 text-center text-sm py-2">
          <Bell color="#ffffff" size={18} />
          <span className="ml-2">
            Bienvenue sur BuilderMania! Découvrez nos nouvelles fonctionnalités
            et offres spéciales.{" "}
            <Link
              href="/news"
              className="underline underline-offset-2 font-semibold"
            >
              En savoir plus
            </Link>
          </span>
        </div>
      </div>
      <header className="fixed z-50 w-full py-4 top-8">
        <div className="flex items-center w-[80vw] mx-auto justify-between">
          <div className="flex justify-center items-center backdrop-blur supports-[backdrop-filter]:bg-white/40 px-6 py-2 rounded-xl border">
            <Link
              href="/"
              className="flex items-center uppercase gap-1 font-semibold text-sm capitalize border-r pr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-icon lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>bmania</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-zinc-600 pl-5">
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/emploi"
              >
                Emploi
              </Link>
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/about"
              >
                À propos
              </Link>
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="">
              <Button
                className="cursor-pointer hover:shadow-xl duration-300"
                variant="outline"
              >
                Se connecter
              </Button>
            </Link>

            <Link href="#" className="">
              <Button
                variant="default"
                className="flex justify-center items-center cursor-pointer hover:shadow-xl duration-300"
              >
                <span>Commencer</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}