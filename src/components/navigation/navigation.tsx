import { component$ } from "@builder.io/qwik";
import MainLogo from "~/components/main-logo/main-logo";

export default component$(() => {
  return (
    <nav class="px-6 py-8">
      <MainLogo />
    </nav>
  );
});
