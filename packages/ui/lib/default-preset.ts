import { Config } from "tailwindcss";
import { defaultPlugin } from "./default-plugin";
import animatePlugin from "tailwindcss-animate";

export const defaultPreset = {
  content: [],
  plugins: [animatePlugin, defaultPlugin],
} satisfies Config;
