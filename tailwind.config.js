/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    typography: ({ _theme }) => ({
      60: {
        css: {
          "font-size": "60px",
          "font-weight": 700,
          "line-height": "72px",
        },
      },
      24: {
        css: {
          "font-size": "24px",
          "font-weight": 600,
          "line-height": "36px",
        },
      },
      16: {
        css: {
          "font-size": "16px",
          "font-weight": 600,
          "line-height": "24px",
        },
      },
    }),
    extend: {
      colors: {
        golf: "#0B7B16",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
