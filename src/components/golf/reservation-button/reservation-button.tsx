import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <button onClick$={() => nav("/nouvelle-reservation")} class="button-dark">
      Réserve ta prochaine partie
    </button>
  );
});
