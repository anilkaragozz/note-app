import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const noteFormSchema = z.object({
  id: z.number(),
  text: z
    .string()
    .min(5, { message: "Note must contain at least 5 characters." }),
});

export const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof noteFormSchema>>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      id: Date.now(),
      text: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center space-x-5 space-y-4"
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-lg">Note</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your note here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="m-5" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
