import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mt-24">
      <div class="flex gap-24">
        <h1 class="prose-60">Dans quel golf es-tu menbre ?</h1>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Rechercher le golf partenaire ou vous êtes membre",
  meta: [
    {
      name: "description",
      content: `Choisissez votre golf partenaire et réservez vos parties de golf à l'avance`,
    },
  ],
};
