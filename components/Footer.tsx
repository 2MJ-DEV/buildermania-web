import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24 py-4 bg-white">
      <div className="w-[80vw] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BuilderMania. Tous droits réservés.
          </p>

          <nav className="flex gap-6 mt-6 md:mt-0 text-sm text-gray-600">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/termes-et-conditions-d-utilisation">CGU</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}