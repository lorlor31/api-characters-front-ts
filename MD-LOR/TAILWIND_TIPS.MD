# TAILWIND_TIPS

## Background-image
-> charger l'image dans /public/images par exemple
-> Dans Tailwind.config, rajouter :
```
extend: {
		backgroundImage: {//prend comme réf le dossier public/
			'wave': "url('/images/wave.svg')",
		},
```
--> on pourra utiliser la classe `bg-wave`

## Classes dynamiques
- J'ai galéré pour faire fonctionner les classes dynamiques pour les couleurs des tags
Au début j'ai essayé avec un objet qui contenait en clé la "personality.value" et en value la couleur et de faire un template literal string avec comme class pour faire un truc du genre bg-red-400 mais ça a pas bien marché
Du coup je suis partie sur une logique extérieure pour que la classe soit pas calculée dans l'élément mais avant.
> En fait il faut créer  une safe list dans tailwind.config où on mettra des pattern des class qu'in veut aps que tw purge

