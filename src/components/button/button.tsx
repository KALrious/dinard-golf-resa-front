import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  isDisabled?: boolean;
  variant: "Danger" | "Primary" | "Secondary" | "Ghost" | "Golf";
  size: "small" | "big";
  type?: "button" | "submit" | "reset";
  onClick$?: () => void;
};

export default component$<Props>(
  ({ variant, size, onClick$, type = "button" }) => {
    return (
      <button
        class={{
          "rounded-md px-4": true,
          ["bg-golf text-white focus:bg-golfLight hover:bg-golfLight"]:
            variant === "Golf",
          ["h-10 prose-16"]: size === "small",
          ["h-14 prose-24"]: size === "big",
          ["bg-transparent text-black focus:border hover:border border-black"]:
            variant === "Ghost",
        }}
        type={type}
        onClick$={onClick$}
      >
        <Slot />
      </button>
    );
  }
);
