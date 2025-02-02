"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
    nickname: z.string().min(1).max(255,{
        message: "nickname must be at max 255 characters.",
      }),
    abstract: z.string().min(1).max(255),
    long_description: z.string().min(1).max(10000),
    birthDate: z.string(),
    deathDate: z.string(),
/*   nickname: string;
  birthDate: string;
  deathDate?: string;
  abstract: string;
  long_description: string;
  backgroundImage?: string;
  avatarImage?: string;
  personalities?: Array<object>; */
})

 
export function CharacterForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        nickname: "toto",
        abstract: "toto",
        long_description: "toto",
        birthDate: "2020-01-01",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }


  return (
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
nom de vot perso              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">enregistrer</Button>
      </form>
    </Form>
  )
  }
  