## Documentation des APIs publiques

Ce projet est une application **Next.js (App Router)** qui expose principalement :

- des **composants React** réutilisables dans `components/` et `components/ui/`
- une **fonction utilitaire** dans `lib/utils.ts`
- des **routes/pages** publiques dans `app/`

> Note : un fichier `core` est présent à la racine, mais c’est un **core dump** (pas une API / pas du code source).

### Démarrage rapide

- **Installer** : `pnpm install`
- **Développement** : `pnpm dev`
- **Build** : `pnpm build`
- **Lint** : `pnpm lint`

### Aliases d’import

Le projet configure l’alias TypeScript `@/*` → `./*` (voir `tsconfig.json`). Exemples :

- `@/components/Navbar` → `components/Navbar.tsx`
- `@/components/ui/button` → `components/ui/button.tsx`
- `@/lib/utils` → `lib/utils.ts`

## Utilitaires (lib)

### `cn(...inputs)`

- **Fichier** : `lib/utils.ts`
- **Export** : `export function cn(...inputs: ClassValue[]): string`
- **Rôle** : concatène des classes conditionnelles (via `clsx`) et **fusionne intelligemment** les classes Tailwind (via `tailwind-merge`).

Exemple :

```ts
import { cn } from "@/lib/utils";

const className = cn(
  "px-4 py-2",
  isActive && "bg-primary text-primary-foreground",
  isDisabled ? "opacity-50" : "opacity-100"
);
```

## Composants UI (design system)

Les composants de `components/ui/*` suivent un style **shadcn/ui** (voir `components.json`) et sont pensés pour être importés directement par les pages et composants.

### `Button`

- **Fichier** : `components/ui/button.tsx`
- **Exports** : `Button`, `buttonVariants`

#### Import

```tsx
import { Button } from "@/components/ui/button";
```

#### Props

`Button` accepte :

- **Toutes les props natives** de `button` (`React.ComponentProps<"button">`)
- **`variant`** : `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`
- **`size`** : `"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"`
- **`asChild?: boolean`** : si `true`, rend un `Slot` Radix pour « habiller » un composant enfant (ex: `Link`).

#### Exemples

Bouton simple :

```tsx
<Button variant="default">Commencer</Button>
```

Bouton “link” :

```tsx
<Button variant="link">En savoir plus</Button>
```

Bouton qui rend un `next/link` via `asChild` :

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link href="/pricing">Voir les tarifs</Link>
</Button>
```

Utiliser `buttonVariants` pour styler un autre élément :

```tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Link
  href="/contact"
  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
>
  Contact
</Link>
```

### `Card` et sous-composants

- **Fichier** : `components/ui/card.tsx`
- **Exports** : `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardAction`, `CardDescription`, `CardContent`

#### Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
```

#### Exemple

```tsx
<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Plan Pro</CardTitle>
    <CardDescription>Pour les équipes qui livrent vite.</CardDescription>
    <CardAction>
      <span className="text-sm text-muted-foreground">€29/mois</span>
    </CardAction>
  </CardHeader>

  <CardContent>
    <ul className="list-disc pl-5 text-sm">
      <li>Support prioritaire</li>
      <li>Accès aux fonctionnalités avancées</li>
    </ul>
  </CardContent>

  <CardFooter>
    <Button className="w-full">Choisir</Button>
  </CardFooter>
</Card>
```

## Composants applicatifs (components)

### `Navbar` (default export)

- **Fichier** : `components/Navbar.tsx`
- **Export** : `export default function Navbar(): JSX.Element`
- **Props** : aucune (composant “statique” pour l’instant)

#### Comportement

- Affiche une barre d’annonce (icône `Bell`) + un header avec navigation.
- Utilise `Button` de `@/components/ui/button`.
- Utilise `next/link`.

#### Routes référencées

Le composant pointe vers :

- `/` (existe)
- `/about` (existe)
- `/blog` (existe)
- `/contact` (existe)
- `/news` (**non implémentée dans `app/` actuellement**)
- `/emploi` (**non implémentée dans `app/` actuellement**)

### `Footer` (default export)

- **Fichier** : `components/Footer.tsx`
- **Export** : `export default function Footer(): JSX.Element`
- **Props** : aucune

#### Routes référencées

- `/mentions-legales` (existe)
- `/politique-de-confidentialite` (existe)
- `/termes-et-conditions-d-utilisation` (existe)

### `Hero` (default export)

- **Fichier** : `components/Hero.tsx`
- **Export** : `export default function Hero(): JSX.Element`
- **Props** : aucune

#### Points d’attention

- Le composant utilise `next/image` avec `src="/prev2.png"`.
- Dans `public/`, le dépôt contient `preview.png`, `preview.webp`, `preview.mp4` (mais **pas** `prev2.png`).

Recommandation : soit ajouter `public/prev2.png`, soit remplacer `src` par un asset existant (ex. `/preview.png`).

### `NewsBarre` (default export)

- **Fichier** : `components/News.tsx`
- **Export** : `export default function NewsBarre(): JSX.Element`
- **Props** : aucune
- **Rôle** : composant placeholder (“News Barre”).

## APIs Next.js (App Router)

### `metadata`

- **Fichier** : `app/layout.tsx`
- **Export** : `export const metadata: Metadata`

Définit le `title` et la `description` (SEO / metadata Next).

### `RootLayout` (default export)

- **Fichier** : `app/layout.tsx`
- **Signature** : `({ children }: { children: React.ReactNode })`

#### Comportement

- Charge `app/globals.css`
- Encapsule toutes les pages avec `Navbar` + `Footer`
- Ajoute les scripts/collecteurs : `@vercel/analytics` et `@vercel/speed-insights`

### `NotFound` (default export)

- **Fichier** : `app/not-found.tsx`
- **Rôle** : page 404, utilise `Card` et `Button asChild` avec `next/link`.

Pour la liste complète des routes, voir `docs/routes.md`.
