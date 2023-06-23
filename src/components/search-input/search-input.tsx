import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import Button from "~/components/button/button";
import SearchIcon from "~/components/search-input/serach-icon";

type Props = {
  onChange$?: PropFunction<() => void>;
  onClick$?: PropFunction<() => void>;
  onSearchClick$?: PropFunction<() => void>;
  placeholder: string;
};

export default component$<Props>(
  ({ placeholder, onChange$, onClick$, onSearchClick$ }) => {
    return (
      <div class="flex gap-8">
        <div class="flex px-4 py-3 rounded-lg gap-2 bg-white text-gray-600 items-center">
          <SearchIcon />
          <input
            class="focus:outline-none"
            onClick$={onClick$}
            onChange$={onChange$}
            placeholder={placeholder}
          />
        </div>
        <Button size="big" variant="Golf" onClick$={onSearchClick$}>
          Rechercher
        </Button>
      </div>
    );
  }
);
