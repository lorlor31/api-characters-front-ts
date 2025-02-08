import { useState, useEffect } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function FileUploadForm() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <FormField
      name="avatar_image"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Fichier</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/png, image/jpeg, application/pdf"
              // Nous ne passons pas de value ici car un input file doit rester non contrôlé.
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                field.onChange(file); // Met à jour la valeur dans RHF
                if (file) {
                  // Crée un aperçu et gère le nettoyage dans useEffect si besoin
                  setPreview(URL.createObjectURL(file));
                } else {
                  setPreview(null);
                }
              }}
            />
          </FormControl>
          {/* Affiche l'aperçu si un fichier est sélectionné */}
          {preview && (
            <img
              src={preview}
              alt="Aperçu"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
