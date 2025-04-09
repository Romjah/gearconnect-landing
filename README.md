# GearConnect Landing Page

Landing page officielle de GearConnect, développée avec Next.js et déployée sur Vercel.

## Configuration du projet

### Prérequis
- Node.js
- npm ou yarn
- Compte Vercel

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Déploiement
Le projet est configuré pour un déploiement automatique sur Vercel. Les paramètres de déploiement sont :

- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `next dev`
- **Root Directory**: `gearconnect-landing`

### Branches
- `main`: Branche de production
- Les push sur `main` déclenchent automatiquement un nouveau déploiement

### Monitoring
- Speed Insights de Vercel est configuré pour suivre les performances du site
- Les métriques sont disponibles dans le dashboard Vercel

## Structure du projet
```
gearconnect-landing/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── contact/
│   │   ├── download/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── public/
├── package.json
├── next.config.ts
└── vercel.json
```

## Technologies utilisées
- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel (hébergement et monitoring)

## Variables d'environnement
Aucune variable d'environnement n'est requise pour le moment.

## Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs) 