import type { QwikChangeEvent } from "@builder.io/qwik";
import { component$, useSignal, $ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  const email = useSignal<string>();
  const mdp = useSignal<string>();

  const handleEmailChange = $(
    (e: QwikChangeEvent<HTMLInputElement>) => (email.value = e.target.value)
  );

  const handlePassWordChange = $(
    (e: QwikChangeEvent<HTMLInputElement>) => (mdp.value = e.target.value)
  );

  return (
    <>
      <div>
        <h1>Se Connecter</h1>
      </div>
      <Form>
        <input
          type="text"
          name="text"
          required
          placeholder="mon.email@email.com"
          bind:value={email}
          onChange$={handleEmailChange}
        />
        <input
          type="text"
          name="password"
          required
          bind:value={mdp}
          onChange$={handlePassWordChange}
        />
        <button type="submit">Login</button>
      </Form>
    </>
  );
});
