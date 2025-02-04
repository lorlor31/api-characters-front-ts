"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUploadForm } from "../../components-lor/FileUploadForm"; // Assurez-vous du bon chemin d'importation
import apiUrl from "../../apiUrl.js";

// Exemple de schéma Zod avec fichier obligatoire
const formSchema = z.object({
  nickname: z.string().min(1, { message: "Le pseudo est requis." }).max(255),
  abstract: z.string().min(1, { message: "Le résumé est requis." }).max(255),
  long_description: z.string().min(1, { message: "La description est requise." }).max(10000),
  birthDate: z.string(),
  deathDate: z.string().nullable(),
  file: z.instanceof(File, { message: "Veuillez sélectionner un fichier." }).optional(),
});

export const NewCharacterPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit", // ou "onTouched" si vous préférez
    defaultValues: {
      nickname: "",
      abstract: "",
      long_description: "",
      birthDate: "",
      deathDate: null,
      file: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Envoi du formulaire...", values);

    const formData = new FormData();
    formData.append("nickname", values.nickname);
    formData.append("abstract", values.abstract);
    formData.append("long_description", values.long_description);
    formData.append("birthDate", values.birthDate);
    if (values.deathDate) {
      formData.append("deathDate", values.deathDate);
    }
    if (values.file) {
      formData.append("file", values.file);
    }

    try {
      const response = await axios.post(`${apiUrl}/characters/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Personnage créé avec succès :", response.data);
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Utilisation du FileUploadForm */}
        <FileUploadForm />

        <FormField
          control={form.control}
          name="nickname"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Pseudo</FormLabel>
              <FormControl>
                <Input placeholder="Votre pseudo" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="abstract"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Résumé</FormLabel>
              <FormControl>
                <Input placeholder="Un résumé..." {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="long_description"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description détaillée" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit">Enregistrer</Button>
      </form>
    </Form>
  );
};

export default NewCharacterPage;
