import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Navigation from "~/components/navigation/navigation";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

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
