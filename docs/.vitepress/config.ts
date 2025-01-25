import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Atlas Development',
  description: 'Development team for Minecraft mods.',

  themeConfig: {
    nav: [
      {
        text: 'Mods',
        items: [
          { text: 'Defaulted', link: '/defaulted' }
        ]
      }
    ],

    sidebar: [
      {
        items: [
          { text: 'Defaulted Usage', link: '/defaulted' }
        ]
      }
    ]
  }
});
