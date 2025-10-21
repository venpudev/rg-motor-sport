declare module 'astro-icon/components' {
  // Icon is an Astro component — export as any to satisfy TS/IDE.
  // More specific typing can be added if needed.
  import type { AstroComponentFactory } from 'astro';
  const Icon: any;
  export { Icon };
  export default Icon;
}
