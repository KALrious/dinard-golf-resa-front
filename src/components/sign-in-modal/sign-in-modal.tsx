import type { PropFunction, QwikMouseEvent } from "@builder.io/qwik";
import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import Button from "~/components/button/button";
import Input from "~/components/input/input";
import type { LoginForm } from "~/routes/golf/layout";
import { loginSchema, useFormLoader } from "~/routes/golf/layout";

type Props = {
  onClose$: PropFunction<() => void>;
  isOpen: boolean;
};

export default component$<Props>(({ onClose$, isOpen }) => {
  const modalRef = useSignal<Element | undefined>();
  const nav = useNavigate();
  const [_loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    validate: zodForm$(loginSchema),
  });

  const clickOutside = $((event: QwikMouseEvent) => {
    if (
      modalRef?.value &&
      // eslint-disable-next-line spaced-comment
      //@ts-ignore
      !modalRef?.value?.contains(event.target)
    ) {
      onClose$();
    }
  });

  const formSubmit = $(() => {
    nav("/reservation");
  });

  return (
    <>
      {isOpen && (
        <div
          id="dialog_layer"
          class="absolute top-0 w-[100vw] h-[100vh] flex items-center justify-center bg-slate-900 bg-opacity-50 z-10"
          onClick$={clickOutside}
        >
          <div
            ref={modalRef}
            role="dialog"
            id="dialog1"
            aria-labelledby="dialog1_label"
            aria-modal="true"
            class="relative bg-white rounded-lg shadow-lg w-[500px] h-[500px] flex flex-col opacity-100 z-20 px-8 py-4"
          >
            <div class="flex flex-col items-center gap-14">
              <h2 class="prose-48 text-center">
                Connect toi avec tes Identifiants
              </h2>
              <Form class="flex gap-8 flex-col w-full" onSubmit$={formSubmit}>
                <Field name="email">
                  {(field, props) => (
                    <>
                      <Input
                        {...props}
                        label="Ton identifiant"
                        type="text"
                        placeholder="Rentre ton identifiant unique"
                        value={field.value}
                        error={field.error}
                      />
                    </>
                  )}
                </Field>
                <Field name="password">
                  {(field, props) => (
                    <>
                      <Input
                        {...props}
                        label="Ton mots de passe"
                        type="password"
                        placeholder="Renseigne ton mots de passe associé"
                        value={field.value}
                        error={field.error}
                      />
                    </>
                  )}
                </Field>
                <div class="absolute bottom-4 flex gap-3 right-8">
                  <Button size="small" variant="Ghost" onClick$={onClose$}>
                    Cancel
                  </Button>
                  <Button size="small" variant="Golf" type="submit">
                    Me Connecter
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
