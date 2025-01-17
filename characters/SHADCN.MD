# SHADCN.UI

## Configuration : components.json

Ce fichier a été **généré** lors de la commande `npx shadcn@latest init`.
Certaines parties ne st pas modifiables après : `style`,`tailwind.baseColor
`,`cssVariables`.
Il suffit de relancer la commande pour recréer le fichier.
Mais attention car après ça définit comment on va styliser les composants.
Il est **utile uniquemt si on utilise le CLI**.

## Configuration : Theming [https://ui.shadcn.com/docs/theming]

--> dans tailwind.config.js qd on utilise les classes utilitaires de TW
--> CSS variables à configurer dans ?? app/globals.css
 peut être
--> ajout de nvelles couleurs ds 

## CLI

npx shadcn@latest add [component]

```shell
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -a, --all          add all available components. (default: false)
  -p, --path <path>  the path to add the component to.
  -h, --help         display help for command

```