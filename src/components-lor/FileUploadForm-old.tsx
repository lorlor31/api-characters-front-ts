import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// ✅ Schéma de validation Zod
const fileSchema = z.object({
  file: z
    .custom<any>((val) => val instanceof FileList, "Vous devez sélectionner un fichier")
    .refine((files) => files.length > 0, "Un fichier est requis")
    .refine((files) => files[0]?.size <= 5 * 1024 * 1024, "Le fichier ne doit pas dépasser 5MB")
    .refine(
      (files) => ["image/png", "image/jpeg", "application/pdf"].includes(files[0]?.type),
      "Format autorisé : PNG, JPEG, PDF"
    ),
});

type FormData = z.infer<typeof fileSchema>;

export default function FileUploadForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(fileSchema),
    defaultValues: { file: undefined },
  });

  const onSubmit = async (data: FormData, event?: React.BaseSyntheticEvent) => {
    if (!data.file || data.file.length === 0) return;
  
    const formData = new FormData();
    formData.append("file", data.file[0]); // On prend le premier fichier
  
    try {
      const response = await fetch("https://api.example.com/upload", {
        method: "POST",
        body: formData, // Envoi du fichier
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du fichier");
      }
  
      const result = await response.json();
      console.log("Fichier envoyé avec succès :", result);
    } catch (error) {
      console.error("Erreur d'envoi :", error);
    }
  
    event?.target.reset(); // Réinitialiser le champ après envoi
    setPreview(null);
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Champ fichier */}
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept="image/png, image/jpeg, application/pdf"
                  onChange={(e) => {
                    const file = e.target.files;
                    field.onChange(file); // Utilisation correcte avec RHF
                    if (file && file.length > 0) {
                      setPreview(URL.createObjectURL(file[0]));
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Aperçu si c'est une image */}
        {preview && <img src={preview} alt="Aperçu" className="mt-2 w-32 h-32 object-cover rounded" />}

        {/* Bouton de soumission */}
        <Button type="submit">Envoyer</Button>
      </form>
    </Form>
  );
}









// export const CharacterFormFileUpload = () => {

//     const {register, handleSubmit} = useForm() ;

//     const onChange = (e)=> {
//         const file = e.target.files[0] ;
//     } ;

//     const onSubmit = data => {
//         const storageRef = app.storage().ref();
//         const fileRef = storageRef.child(data.image(0).name);
//         fileRef.put(data.image(0)).then(()=>
//         console.log("File uploaded !")
//     };


//     return (
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//         <Label htmlFor="picture">Avatar</Label>
//         <Input ref={register} id="avatar" name="avatar" type="file" />
//         </div>
//     )
    
    
// }

