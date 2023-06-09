import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function SearchIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        d="M15 14.4722C16.2275 13.3736 17 11.777 17 10C17 6.68629 14.3137 4 11 4C7.68629 4 5 6.68629 5 10C5 13.3137 7.68629 16 11 16C12.5367 16 13.9385 15.4223 15 14.4722ZM15 14.4722L19.5278 19"
        stroke="#52525C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SearchIcon;
