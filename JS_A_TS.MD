
# Changement de JS à TS (pour pouvoir utiliser Shadcn.ui)

1. Recréer la trame du projet avec Vite.js et les dépendances requises
2. Nommer ts les fichiers .jsx en .tsx
3. Déclarer des props pour les composants en place
4. 

## Trame du projet vite/React/TS/TW/Shadcn 

1. Créer le projet       
npm create vite@latest 
On choisira React et TS
Aller dans ce dossier pour la suite.

Tant qu'à faire, installer les lib nécessaires :
npm install axios
` npm install react-router-dom`
ça c'est pour avoir les ernières màj des types mais noromalemt c ok
npm install @types/react @types/react-dom


2. Installer Tailwind et ses dépendances 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

3. Configurer Tailwind 

Dans src/index.css(fichier principal css) , rajouter en haut : 
@tailwind base;
@tailwind components;
@tailwind utilities;

Configurer le dossier de TW dans tailwind.config.js: 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. Config Vite pour Shadcn

Dans tsconfig.json and tsconfig.app.json, ajouter la baseUrl et paths aux options du compiler pour bien inclure le dossier /src lors de la compilation : 

{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

Mettre àjour la config de vite avec ces infos : 

npm install -D @types/node
 et dans vite.config.ts

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

6/ Lancer la CLI de shadcn

npx shadcn@latest init
et configurer
 

 cf. https://ui.shadcn.com/docs/installation/vite

 ## Choses à rajouter dans le jsx pour qu'il devienne du tsx

### Typer les props des composants

1. Soit directement après son appel :

```tsx
function MyButton({ title }: { title: string }) {
```
2. Soit en déclarant une interface :

```tsx
interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
```
On peut réutiliser cette interface et l' `extends`

3. Soit en déclarant un type Props : 

```tsx
type Props = {
  title: string;
  count: number;
};

const MyComponent: React.FC<Props> = ({ title, count }) => {
  return <h1>{title} - {count}</h1>;
};

```

Mais la solution 2 semble être la plus simple et flexible.

### Typer les hooks cf [https://react.dev/learn/typescript]

1. Exp avec useState()


const [enabled, setEnabled] = useState<boolean>(false);

ou 

type Status = "idle" | "loading" | "success" | "error";

const [status, setStatus] = useState<Status>("idle");

### Important
- Bien typer meme les arguments des hooks lors de leur définition (par exp useParams)
- Prendre en compte les cas où la variable est undefined lors de l'utilisation d'un composant sinon il y aura une erreur
- Mettre des valeurs par défaut
- Qd pad de type défini mettre `any`

### Types

boolean
number
string
array
tuple
enum
unknown
any
void
null and undefined
never
object


### Types d'event :
React.FormEvent<HTMLFormElement> : Utilisé pour les événements liés à un formulaire (<form>).
React.ChangeEvent<HTMLInputElement> : Utilisé pour les événements liés à des éléments <input>, comme lors de la modification de texte dans un champ de saisie.
React.MouseEvent<HTMLButtonElement> : Utilisé pour les événements liés à un clic sur un bouton.
