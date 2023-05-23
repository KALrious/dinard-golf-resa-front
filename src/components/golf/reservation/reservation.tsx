import { component$ } from "@builder.io/qwik";
import styles from "./reservation.module.css";

export default component$(() => {
  return <div class={styles.resaContainer}>
    <div class={styles.borderTop} />
  </div>;
});
