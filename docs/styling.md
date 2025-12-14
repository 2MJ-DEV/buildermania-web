## Styling, thème et conventions UI

### Tailwind CSS v4

Le projet utilise **Tailwind CSS v4** via :

- `app/globals.css` : importe Tailwind et définit les variables CSS et styles de base
- `postcss.config.mjs` : active le plugin `@tailwindcss/postcss`

### Tokens (variables CSS)

`app/globals.css` définit des variables CSS (ex. `--background`, `--foreground`, `--primary`, etc.) et les expose en variables Tailwind via `@theme inline` (ex. `--color-background: var(--background)`).

Conséquences :

- Les classes Tailwind comme `bg-background`, `text-foreground`, `bg-primary`, etc. se basent sur ces variables.
- Pour modifier le thème, il faut surtout ajuster les variables dans `:root` et `.dark`.

### Mode sombre

- Le fichier définit `@custom-variant dark (&:is(.dark *));`.
- Le mode sombre est activé quand un parent (souvent `html` ou `body`) possède la classe `dark`.

Exemple (pattern courant) :

```tsx
// app/layout.tsx (exemple de pattern)
<html lang="fr" className="dark">
  <body>...</body>
</html>
```

### shadcn/ui

Le fichier `components.json` indique que les composants UI suivent le style **shadcn/ui** :

- **`ui`** : alias `@/components/ui`
- **`utils`** : alias `@/lib/utils`
- **`rsc`** : `true` (compatible React Server Components)

### Utilitaire `cn`

Les composants UI utilisent `cn()` pour :

- gérer des classes conditionnelles
- éviter les conflits Tailwind (ex. `px-2` vs `px-4`)

### Scrollbar

`app/globals.css` inclut un styling WebKit pour la scrollbar (`::-webkit-scrollbar*`).
