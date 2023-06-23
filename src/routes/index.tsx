import { component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import SearchInput from "~/components/search-input/search-input";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div class="relative">
      <div class="absolute top-52 left-14 flex flex-col gap-6">
        <h1 class="prose-60 text-white">
          Programme facilement à l'avance<p>Vos parties de golfs</p>
        </h1>
        <SearchInput
          placeholder="Rechercher un Golf"
          onClick$={() => nav("/golf")}
          onSearchClick$={() => nav("/golf")}
        />
      </div>
      <Image
        src="acceuil.jpeg"
        layout="fullWidth"
        objectFit="cover"
        alt="Golf course during sunset"
        class="w-[100vw]"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bienvenue sur le site de réservation pour membre de golf",
  meta: [
    {
      name: "description",
      content: `Réserver à l'avance vos parties de golf grâce à notre system de réservation simplifié`,
    },
  ],
};
