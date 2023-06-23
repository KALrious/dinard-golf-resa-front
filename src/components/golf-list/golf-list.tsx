import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import ArrowIcon from "~/components/golf-list/arrow-icon";

type Props = {
  onClick$: PropFunction<() => void>;
};

export default component$<Props>(({ onClick$ }) => {
  return (
    <div
      class="flex rounded-xl p-3 gap-3 w-full bg-white shadow-sm hover:cursor-pointer items-center"
      onClick$={onClick$}
    >
      <Image
        width={143}
        height={143}
        src="../dinard.png"
        class="rounded-md overflow-hidden"
        layout="responsive"
        objectFit="cover"
        alt="image du golf de dinard"
      />
      <div class="flex flex-col gap-2 justify-center w-full">
        <h2 class="prose-24">Dinard Golf</h2>
        <p class="prose-body18">53 Bd de la Houle, 35800 Saint-Briac-sur-Mer</p>
      </div>
      <div class="rounded-full text-white w-12 h-10 flex items-center justify-center">
        <ArrowIcon />
      </div>
    </div>
  );
});
