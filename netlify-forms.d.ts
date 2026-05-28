// netlify-forms.d.ts
import "astro";

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes {
      netlify?: boolean;
      "data-netlify"?: boolean;
    }
  }
}

// Para evitar errores en archivos .astro con TypeScript
export {};
