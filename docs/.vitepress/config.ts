import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Atlas Development',
  description: 'Development team for Minecraft mods.',
  base: `/Atlas-Docs/`,
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: `/logo.png`,
    nav: [
      {
        text: 'Mods',
        items: [
          { text: 'Defaulted', link: '/defaulted/intro' },
          { text: 'Atlas Core', link: '/core/intro' }
        ]
      }
    ],

    sidebar: {
      '/core/': [
        {
          text: "Atlas Core",
          items: [
            { text: 'Introduction', link: '/core/intro' }
          ]
        }
      ],
      '/defaulted/': [
        {
          text: "Defaulted",
          items: [
            { text: 'Introduction', link: '/defaulted/intro' }
          ]
        }
      ]
    }
  }
});
