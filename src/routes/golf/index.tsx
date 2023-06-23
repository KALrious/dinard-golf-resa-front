import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GolfList from "~/components/golf-list/golf-list";
import SignInModal from "~/components/sign-in-modal/sign-in-modal";

export default component$(() => {
  const isOpen = useSignal(false);
  return (
    <div class="mt-24">
      <div class="flex gap-24 flex-col px-24 items-center">
        <h1 class="prose-60">Dans quel golf êtes vous menbres ?</h1>
        <GolfList
          onClick$={() => {
            isOpen.value = true;
          }}
        />
      </div>
      <SignInModal
        onClose$={() => {
          isOpen.value = false;
        }}
        isOpen={isOpen.value}
      />
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
