import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function ArrowIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="9"
      height="11"
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path id="Vector" d="M0.5 10L7.5 5.5L0.5 1" stroke="black" />
    </svg>
  );
}
export default ArrowIcon;
