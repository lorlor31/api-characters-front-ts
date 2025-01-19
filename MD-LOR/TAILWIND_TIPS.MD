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