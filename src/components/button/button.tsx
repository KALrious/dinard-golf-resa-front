import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  isDisabled?: boolean;
  variant: "Danger" | "Primary" | "Secondary" | "Ghost" | "Golf";
  size: "small" | "big";
  onClick$?: () => void;
};

export default component$<Props>(({ variant, size, onClick$ }) => {
  return (
    <button
      class={{
        "rounded-md px-4": true,
        ["bg-golf text-white"]: variant === "Golf",
        ["h-10 prose-16"]: size === "small",
        ["h-14 prose-24"]: size === "big",
      }}
      onClick$={onClick$}
    >
      <Slot />
    </button>
  );
});
