import type { Config } from "tailwindcss";
import { defaultPreset } from "./lib/default-preset";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  presets: [defaultPreset],
} satisfies Config;

export default config;
