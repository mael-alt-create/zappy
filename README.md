# 🇧🇯 Atata — Template Officiel des Sites Web des Communes du Bénin
> **Challenge Week-End • Prêt pour présentation Lundi Matin**  
> *Atata est un template moderne, réutilisable, conçu dans l'esprit d'un thème WordPress et conforme à la réforme structurelle de la décentralisation au Bénin.*

---

## 🎯 1. Vision & Objectifs du Projet

Au Bénin, la décentralisation a franchi une étape historique avec la **Loi n°2021-14 portant Code de l'Administration Territoriale**. Les communes ont besoin d'outils numériques modernes qui :
1. **Rapprochent l'administration du citoyen** grâce à un guichet unique dématérialisé (interfaçage ANIP & `service-public.bj`).
2. **Reflètent la nouvelle gouvernance locale** en valorisant le duo exécutif : le **Maire** (représentant politique) et le **Secrétaire Exécutif (SE)** (ordonnateur unique du budget).
3. **Rayonnent à l'international** en offrant une vitrine touristique et patrimoniale immersive (inspirée des meilleures références mondiales : *VisitGuernica*, *Chania*, *Pas-de-Calais*, *Montréal*).
4. **Sont réutilisables instantanément** pour les **77 communes du Bénin** (des métropoles à statut particulier comme Cotonou, Porto-Novo, Parakou jusqu'aux communes historiques comme Ouidah, Abomey, Nikki et Natitingou).

---

## 🌟 2. Les 5 Piliers Clés du Template

### 🏛️ Pilier 1 : e-Services & Guichet Unique Citoyen
- Extrait d'acte de naissance sécurisé & NPI (passerelle ANIP).
- Certificat de résidence communal, célébration de mariage civil.
- Permis de construire (PC) & Autorisation d'Occupation du Domaine Public (AODP).
- Légalisation et certification conforme instantanée.
- Filtres par catégorie et fiches avec délais, coûts et pièces requises.

### ⚖️ Pilier 2 : Gouvernance & Réforme de la Décentralisation (2022)
- Mise en avant du binôme **Maire & Secrétaire Exécutif (SE)**.
- Transparence budgétaire (Budget certifié CONAFIL).
- Téléchargement du Plan de Développement Communal (PDC 4) et des délibérations.

### 🌍 Pilier 3 : Découverte Territoriale & Trésors Communaux
- **Bento Grid immersive** avec zoom cinématique et reflets lumineux (*Spotlight Cards*).
- Focus sur les hauts lieux : *Esplanade des Amazones*, *Porte du Non-Retour*, *Palais Royaux d'Abomey (UNESCO)*, *Gaani de Nikki*, *Tata Somba de l'Atacora*.
- Circuits touristiques suggérés pas-à-pas (durées, distances, étapes).

### 🚨 Pilier 4 : Participation Citoyenne "Allô Mairie"
- Signalement rapide d'anomalies en 3 clics : Voirie/Nids-de-poule, éclairage public, dépotoirs sauvages, inondations/caniveaux.
- Génération automatique d'un numéro de ticket citoyen (ex: `#CTN-2026-8412`).
- Animation vectorielle de célébration (burst confetti).

### ⚡ Pilier 5 : Expérience Utilisateur & Design Engineering (Emil Kowalski)
- **Palette de Commande Globale (⌘K / Ctrl+K)** : recherche instantanée dans les démarches et changement de commune au clavier.
- **Armoiries & Blason 3D Interactif** : effet gyroscope / tracking souris avec reflet spéculaire dynamique et parallaxe SVG (inspiré de Rive & KavinduW1).
- **Chiffres clés animés** avec physique de ressorts (*Spring easing*).
- **Mode Sombre / Clair** haute fidélité avec bascule instantanée.
- **100% accessible et optimisé bande passante** (Score Core Web Vitals visé : 100/100, respect des directives *Chrome Modern Web Guidance*).

---

## 🎨 3. Communes Pré-Profilées & Démonstration

Le template intègre un **Sélecteur de Commune en Direct** (*Floating Switcher*) qui adapte instantanément les couleurs thématiques, slogans, armoiries, maires, SE, données et patrimoine :

| Commune | Statut | Département | Palette Thématique | Emblème & Spécificité |
| :--- | :--- | :--- | :--- | :--- |
| **Cotonou** | Statut particulier | Littoral | Vert Émeraude & Or (#059669) | Métropole économique, Amazone, Dantokpa |
| **Porto-Novo** | Statut particulier | Ouémé | Indigo Royal & Or (#1E3A8A) | Capitale politique, Mosquée Afro-Brésilienne, Zangbéto |
| **Parakou** | Statut particulier | Borgou | Vert Baobab & Ocre (#0D9488) | Métropole du Nord, Marché Arzèkè, Carrefour sahélien |
| **Ouidah** | Touristique & Historique | Atlantique | Rouge Latérite & Or (#DC2626) | Capitale mondiale Vodun, Route des Esclaves, Vodun Days |
| **Abomey** | Historique & Culturelle | Zou | Ocre Royal & Terre (#B45309) | Cité des Dynasties Danxomè, Palais UNESCO, Béhanzin |
| **Nikki** | Impériale & Historique | Borgou | Pourpre Impérial & Cuir (#7C3AED) | Capitale Bariba, Fête de la Gaani, Cour Sina Boko |
| **Natitingou**| Écotouristique | Atacora | Ocre Grès & Vert (#EA580C) | Châteaux Tata Somba, Chutes de Kota, Parc Pendjari |

*(Extensible aux 77 communes du Bénin répertoriées dans `js/communes-data.js`)*.

---

## 📂 4. Structure des Fichiers

```
communes-benin-template/
├── index.html                   # Application web complète et interactive (zéro dépendance)
├── css/
│   ├── main.css                 # Système de design tokens, layouts bento, dark mode
│   └── animations.css           # Moteur d'animations (compositing GPU, spring, prefers-reduced-motion)
├── js/
│   ├── communes-data.js         # Base territoriale des 12 départements, 77 communes et profils
│   ├── vector-interactions.js   # Micro-interactions vectorielles (Blason 3D, spotlight, squish)
│   └── app.js                   # Orchestration réactive, sélecteur de commune, recherche ⌘K
│
├── wordpress-theme/             # Thème WordPress officiel prêt au déploiement
│   ├── style.css                # Métadonnées du thème WordPress
│   ├── functions.php            # Support CPT (Démarches, Tourisme), Menus, Enqueue
│   ├── header.php               # En-tête institutionnel & navigation responsive
│   ├── footer.php               # Pied de page institutionnel
│   ├── index.php                # Boucle de publication WordPress
│   └── inc/
│       └── customizer.php       # Panneau de personnalisation WordPress (Sélection de commune)
│
├── .agents/skills/              # Compétences Design Engineering intégrées
│   ├── emil-design-eng/         # Règles de craft, hiérarchie et polish (Emil Kowalski)
│   ├── animate/                 # Arbre de décision d'animation et courbes cubic-bezier
│   └── animation-performance/   # Règles 60/120fps budget et compositing GPU
│
└── README.md                    # Présentation exécutive du projet
```

---

## 🚀 5. Démonstration pour Lundi Matin

1. **Lancement instantané :**
   Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur moderne (Google Chrome, Edge, Firefox, Safari). Aucun serveur lourd ni build préalable n'est requis.
2. **Tester le basculement territorial :**
   - Cliquez sur le bouton flottant en bas à droite **"🇧🇯 Changer de Commune"** ou sur le sélecteur dans le menu.
   - Sélectionnez par exemple **Ouidah**, **Abomey**, ou **Nikki** : observez comment l'ensemble du site adapte ses couleurs, son blason 3D, ses slogans, son équipe municipale et ses attractions touristiques.
3. **Tester la recherche globale (⌘K) :**
   - Appuyez sur `Ctrl + K` (ou `Cmd + K` sur Mac) ou cliquez sur la loupe.
   - Tapez "Permis", "Vodun", ou "Parakou" pour naviguer instantanément.
4. **Tester le signalement citoyen "Allô Mairie" :**
   - Rendez-vous dans la section signalement, choisissez un type d'incident et validez : admirez l'explosion de confettis vectoriels et la création du ticket.
5. **Présentation de l'intégration WordPress :**
   - Montrez le dossier `wordpress-theme/` prêt à être zippé et installé dans le panneau d'administration WordPress d'une mairie.

---

*Fait avec passion pour le développement territorial et la modernisation numérique des communes du Bénin 🇧🇯.*
