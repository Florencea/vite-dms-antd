import "dotenv/config";
import type { Config } from "tailwindcss";

export default {
  important: `#${process.env.VITE_REACT_ROOT_ID}`,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#722ed1",
      },
    },
  },
  plugins: [],
} satisfies Config;
