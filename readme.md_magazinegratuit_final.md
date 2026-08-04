# MagazineGratuit - Plateforme de Bibliothèque Numérique Moderne

MagazineGratuit est une plateforme moderne et sécurisée de partage de magazines, livres et journaux. Inspirée par l'élégance et la simplicité, elle offre une expérience utilisateur fluide avec un thème sombre Bleu Marine et Cyan Électrique.

## 🚀 Fonctionnalités

### Frontend (Client)
- **Interface Responsive** : Optimisée pour Desktop et Mobile.
- **Galerie Illustrée** : Affichage épuré des couvertures avec titres intégrés.
- **Recherche Avancée** : Filtrage par catégorie, langue, année et type de média.
- **Espace Membre** : Historique des téléchargements et gestion du profil.
- **Animations Fluides** : Transitions douces et effets interactifs sur les cartes et boutons.

### Backend (Admin & API)
- **Tableau de Bord Admin** : Statistiques avancées, gestion des utilisateurs et modération.
- **Éditeur d'Articles** : Outil complet pour publier de nouveaux contenus.
- **Sécurité** : Protection par reCAPTCHA, gestion des rôles et sessions sécurisées.
- **Système de Plugins** : Architecture extensible pour ajouter des fonctionnalités.

## 🛠️ Installation

### Prérequis
- Node.js (v18+)
- MongoDB (ou une instance MongoDB Atlas)

### Configuration
1. Clonez le dépôt : `git clone https://github.com/votre-username/magazine-gratuit.git`
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` à la racine :
   ```env
   PORT=5000
   MONGODB_URI=votre_lien_mongodb
   JWT_SECRET=votre_secret_jwt
   RECAPTCHA_SECRET_KEY=votre_cle_recaptcha
   ```

### Lancement
```bash
npm run dev
```

## 🌐 Déploiement sur Render

1. Connectez votre dépôt GitHub à Render.
2. Créez un nouveau **Web Service**.
3. Configurez les variables d'environnement dans l'onglet **Environment**.
4. Définissez la commande de build : `npm install && npm run build`
5. Définissez la commande de start : `npm start`

## 🎨 Design System
Le projet utilise le système de design **Marine Cybernetic** :
- **Couleurs** : Bleu Marine (#051424), Cyan Électrique (#06b6d4).
- **Typographie** : Literata (Sérif moderne).
- **Style** : Dark Mode, Contraste optimisé.

---
© 2024 MagazineGratuit. Tous droits réservés.