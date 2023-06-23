import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, z } from "@builder.io/qwik-city";
import type { InitialValues } from "@modular-forms/qwik";
import Navigation from "~/components/navigation/navigation";

export const loginSchema = z.object({
  email: z.string().min(1, "Renseignez votre identifiant"),
  password: z.string().min(1, "Renseignez votre mot de passe"),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

export default component$(() => {
  return (
    <>
      <main class="w-[100vw] h-[100vh] overflow-hidden bg-[#FAFAFA]">
        <Navigation />
        <Slot />
      </main>
    </>
  );
});
