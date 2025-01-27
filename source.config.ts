import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
 
// define `docs` and `meta` collections
export const { docs, meta } = defineDocs({
  dir: 'src/content/docs',
});