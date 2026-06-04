# Refonte couleurs (crème) + ordre de la prise de RDV

Date : 2026-06-04

## Demande
1. Enlever le noir et passer le site en **blanc / blanc cassé / crème**.
2. Sur la page **Prendre rendez-vous**, afficher la **consultation en cabinet en premier**
   (auparavant c'était « À domicile » qui était sélectionné par défaut).

## Modifications

### 1. Palette crème (suppression du noir)
- `tailwind.config.js` : ajout des teintes `creme` (`#F5F1E8`) et `creme_hover` (`#EDE7DA`).
- `components/Header.vue` : fond `bg-noir` → `bg-creme` (+ `shadow-sm`), texte de nav et
  bouton menu `text-blanc` → `text-noir`, menu mobile `bg-noir` → `bg-creme`,
  hover `bg-noir/50` → `bg-vert/10`, bordures `border-vert/10` → `border-noir/10`.
- `components/Footer.vue` : `bg-noir text-blanc` → `bg-creme text-noir` (+ bordure haute),
  textes secondaires `text-blanc/80` → `text-noir/70`, séparateur `border-blanc/10` → `border-noir/10`.
- `pages/index.vue` (hero d'accueil, en dur dans la page) : overlay sombre
  `rgba(0,0,0,0.3)` → voile clair `rgba(255,255,255,0.15)`, carte du hero passée en
  `bg-creme/80` avec texte `text-noir`, bordure `border-white/10` → `border-noir/10`.
- `components/LandingHero.vue` : même traitement crème (composant **non utilisé**
  actuellement, modifié par cohérence si réactivé un jour).

> Le fond général des pages était déjà `bg-blanc` (`#FAF9F6`). Les boutons verts de la
> marque (`vert` / `#47855A`) sont conservés.

### 2. Cabinet en premier sur /priseRdv
- `pages/priseRdv.vue` :
  - Boutons du sélecteur réordonnés : **« En cabinet » à gauche**, « À domicile » à droite.
  - Indicateur coulissant (fond vert) adapté au nouvel ordre.
  - Valeur par défaut `isDomicile: true` → **`isDomicile: false`** pour afficher
    directement le créneau Calendly du cabinet.

## Vérification
Serveur de dev Nuxt (port 3000) lancé et contrôlé dans le navigateur :
- Accueil : en-tête + carte hero en crème, texte foncé lisible, photo non assombrie. ✅
- Pied de page : `background-color: rgb(245,241,232)` (crème), texte `rgb(43,43,42)`. ✅
- /priseRdv : « En cabinet » premier et actif par défaut, bloc « Consultation en cabinet »
  (iframe Calendly) affiché, bloc domicile masqué. ✅
- Aucune erreur serveur ni console.

## À faire (non couvert ici)
- Modifications **non commitées** (en attente de validation avant `git add`/commit/push).
