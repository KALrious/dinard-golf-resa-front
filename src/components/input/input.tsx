import type {
  PropFunction,
  QwikChangeEvent,
  QwikFocusEvent,
} from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type TextInputProps = {
  name: string;
  type: "text" | "email" | "tel" | "password" | "url" | "date";
  label: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
  ref: PropFunction<(element: Element) => void>;
  onInput$: PropFunction<(event: Event, element: HTMLInputElement) => void>;
  onChange$: PropFunction<
    (
      event: QwikChangeEvent<HTMLInputElement>,
      element: HTMLInputElement
    ) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<HTMLInputElement>, element: HTMLInputElement) => void
  >;
};

export default component$(({ label, error, ...props }: TextInputProps) => {
  const { name } = props;
  return (
    <div class="flex gap-2 flex-col w-full">
      <label for={name}>
        <span class="label_text prose-body16 text-gray-500">{label}</span>
      </label>
      <input
        class="px-4 py-3 rounded-lg border border-solid border-gray-200 focus:outline-none focus:border-gray-400"
        {...props}
        id={name}
        aria-invalid={!!error}
        aria-errormessage={`${name}-error`}
      />
      {error && (
        <div id={`${name}-error`} class="text-red-500">
          {error}
        </div>
      )}
    </div>
  );
});
