/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  // add other VITE_ vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
