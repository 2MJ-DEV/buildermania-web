## Routes publiques (App Router)

Cette application utilise l’**App Router** de Next.js : chaque dossier sous `app/` correspond à une route.

### Tableau des routes

- **`/`** → `app/page.tsx` (`HomePage`) : affiche `Hero`.
- **`/about`** → `app/about/page.tsx` (`AboutPage`) : placeholder.
- **`/blog`** → `app/blog/page.tsx` (`BlogPage`) : placeholder.
- **`/client`** → `app/client/page.tsx` (`ClientPage`) : contenu simple (texte).
- **`/contact`** → `app/contact/page.tsx` (`ContactPage`) : placeholder.
- **`/demo`** → `app/demo/page.tsx` (`DemoPage`) : placeholder.
- **`/features`** → `app/features/page.tsx` (`FeaturesPage`) : placeholder.
- **`/mentions-legales`** → `app/mentions-legales/page.tsx` (`MentionsLegalesPage`) : placeholder.
- **`/metier-freelance`** → `app/metier-freelance/page.tsx` (`MetierFreelance`) : placeholder.
- **`/politique-de-confidentialite`** → `app/politique-de-confidentialite/page.tsx` (`PolitiqueDeConfidentialitePage`) : placeholder.
- **`/pricing`** → `app/pricing/page.tsx` (`PricingPage`) : page simple (titre + paragraphe).
- **`/termes-et-conditions-d-utilisation`** → `app/termes-et-conditions-d-utilisation/page.tsx` (`TermesEtConditionsDUtilisationPage`) : placeholder.

### Route 404

- **`not-found`** → `app/not-found.tsx` (`NotFound`) : utilisée par Next.js quand une page n’existe pas.

### Routes référencées mais non implémentées

Le composant `components/Navbar.tsx` référence :

- **`/news`** : non présent dans `app/`.
- **`/emploi`** : non présent dans `app/`.

Si ces routes doivent exister, ajouter par exemple :

- `app/news/page.tsx`
- `app/emploi/page.tsx`
