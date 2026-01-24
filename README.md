# Portfolio React Moderne - Johann

Portfolio personnel développeur web, construit avec React et Vite. Design moderne avec theme beige, doré et sombre.

## 🚀 Technologies

- **React** 18.2.0
- **Vite** 5.0.8
- **CSS** vanilla avec variables modernes
- **GitHub Pages** pour le déploiement

## 🎨 Design

- Thème beige, doré et sombre premium
- Animations fluides et micro-interactions
- Design responsive (mobile-first)
- Typographie élégante (Playfair Display + Inter)

## 📦 Installation

```bash
# Installer Node.js (https://nodejs.org/)

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🌐 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main` via GitHub Actions.

**URL du portfolio**: https://Zideee.github.io/Portfolio/

## 📝 Personnalisation

### Modifier les informations personnelles

1. **Coordonnées** : Éditer `src/components/Contact.jsx`
2. **Projets** : Ajouter/modifier dans `src/components/Projects.jsx`
3. **Compétences** : Mettre à jour `src/components/Skills.jsx`
4. **À propos** : Personnaliser `src/components/About.jsx`

### Modifier le thème

Les couleurs et le design sont définis dans `src/styles/variables.css`. Modifier les variables CSS pour personnaliser le thème.

## 📂 Structure du projet

```
Portfolio/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.jsx   # Navigation
│   │   ├── Hero.jsx     # Section d'accueil
│   │   ├── About.jsx    # À propos
│   │   ├── Skills.jsx   # Compétences
│   │   ├── Projects.jsx # Projets
│   │   ├── Contact.jsx  # Contact
│   │   └── Footer.jsx   # Footer
│   ├── styles/          # Styles CSS
│   │   ├── variables.css # Variables de design
│   │   └── global.css    # Styles globaux
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── .github/
│   └── workflows/       # GitHub Actions
├── index.html           # HTML principal
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances

```

## 🛠️ Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run preview` | Prévisualise le build de production |

## 📄 Licence

© 2026 Johann. Tous droits réservés.

---

Conçu et développé avec ♥ en React
