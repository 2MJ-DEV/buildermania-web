import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col gap-4 items-center text-center py-40">
        <h1 className="text-primary/80 w-[50vw] mx-auto text-center text-4xl font-semibold">
          Donnez vie à vos idées. Collaborez avec les bons talents.
        </h1>

        <p className="text-muted-foreground max-w-lg text-center">
          Nous sommes encore en phase de développement préliminaire, mais vous
          pouvez déjà accéder à la plateforme et tester ses fonctionnalités.
        </p>

        <div className="flex gap-4 mt-8">
          <Link href="#" className="hover:shadow-md duration-300">
            <Button variant="default">
              <ShieldCheck color="#fff" />
              <span>Accedez a l&#39;application</span>
            </Button>
          </Link>
        </div>
      </section>
      
      <section className="">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Fenêtre macOS */}
          <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-[#f5f5f7] dark:bg-[#1a1a1c] shadow-md">
            {/* Barre du haut (style macOS) */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#e8e8ed] dark:bg-[#2a2a2c] border-b border-black/10 dark:border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            </div>

            {/* Image responsive */}
            <div className="relative aspect-video w-full">
              <Image
                src="/prev2.png"
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}