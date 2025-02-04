"use client"
import { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod" 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import FileUploadForm from '../components-lor/FileUploadForm.tsx' ;

export const NewCharacterPage = () => {
	// Zod form schema for validation constraints and error messages
	const formSchema = z.object({
		nickname: z.string().min(1).max(255,{
			message: "nickname must be at max 255 characters.",
		}),
		abstract: z.string().min(1).max(255),
		long_description: z.string().min(1).max(10000),
		birthDate: z.string(),
		deathDate: z.string().nullable(),
	})
	// Form definition and default values
	const form = useForm<z.infer<typeof formSchema>>({
	resolver: zodResolver(formSchema),
	defaultValues: {
		nickname: "toto",
		abstract: "toto",
		long_description: "toto",
		birthDate: "2020-01-01",
		deathDate: "2020-01-01",
	},
	})
    // Form submit handler
	// This handler dont need event in arg cause it is already used by handlesubmit(onSubmit)
    // It will use useForm.handleSubmit
	const onSubmit = 
	async ( values: z.infer<typeof formSchema>) => {
		console.log("submission");
        const characterData = {
		// Take the values of useForm (no need useState())
		nickname: values.nickname,  // ✅ Prend la valeur de useForm
      	abstract: values.abstract,
		long_description: values.abstract,
      	birthDate: values.birthDate,
      	deathDate: values.deathDate,
      	};
      	console.log(`${apiUrl}/characters/create`);
		try {
			const response = await axios.post(`${apiUrl}/characters/create`, characterData);	
			console.log('Personnage créé avec succès:', response.data);
			// Vous pouvez ajouter des actions après la soumission réussie
		} catch (error) {
			console.error('Erreur lors de la création du personnage:', error);
		}
		console.log("values est : " ,values) ;
		console.log("🚀 Données envoyées :", JSON.stringify(characterData, null, 2));

    }

	{console.log("❌ Erreurs de validation :", form.formState.errors);}
	return (
		<>
		<FileUploadForm/>
	<Form {...form}>
	<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

		<FormField
		control={form.control}
		name="nickname"
		render={({ field }) => (
			<FormItem>
				<FormLabel>pseudo</FormLabel>
				<FormControl>
					<Input placeholder="shadcn" {...field} />
				</FormControl>
				<FormDescription>
					nom de vot perso              
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
		/>
		<FormField
		control={form.control}
		name="long_description"
		render={({ field }) => (
			<FormItem>
				<FormLabel>Description</FormLabel>
				<FormControl>
					<Input placeholder="shadcn" {...field} />
				</FormControl>
				<FormDescription>
					Décrivez précisément :       
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
		/>
		<FormField
		control={form.control}
		name="abstract"
		render={({ field }) => (
			<FormItem>
				<FormLabel>Résumé</FormLabel>
				<FormControl>
					<Input placeholder="shadcn" {...field} />
				</FormControl>
				<FormDescription>
					Votre perso, en une phrase :        
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
		/>
		<Button type="submit">Enregistrer</Button>
	</form>
	</Form>
	</>

);
}

  export default NewCharacterPage;
