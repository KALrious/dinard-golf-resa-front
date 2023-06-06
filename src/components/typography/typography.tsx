import { Slot, component$ } from "@builder.io/qwik";
import styles from "./typography.module.css";

type TypographyProps = {
  component: "h1" | "span" | "p";
};

export default component$<TypographyProps>(({ component }) => {
  const HtmlTag = component;
  return (
    <HtmlTag class={styles[component]}>
      <Slot />
    </HtmlTag>
  );
});
