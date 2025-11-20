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
            { text: 'Introduction to Default Component Patches', link: '/defaulted/intro' },
            { text: 'Patch Ordering', link: '/defaulted/ordering' },
            {
              text: "Patch Generators",
              collapsed: false,
              items: [
                { text: 'Introduction to Patch Generators', link: '/defaulted/patch-gens/introducing-patch-gens' },
                { text: `Armor Stats Generator`, link: '/defaulted/patch-gens/armor-stats'},
                { text: `Vanilla Weapon Stats Generator`, link: '/defaulted/patch-gens/weapon-stats'},
                { text: `Combat Test Weapon Stats Generator`, link: '/defaulted/patch-gens/combat-test-weapon-stats'}
              ]
            }
          ]
        }
      ]
    }
  }
});
