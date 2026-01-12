/// <reference types="vite/client" />
interface ImportMeta {
  readonly env: {
    [key: string]: string | boolean | number | undefined;
  };
}