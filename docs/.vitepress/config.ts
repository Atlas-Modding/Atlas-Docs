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
          { text: 'Defaulted', link: '/defaulted/item-intro' },
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
            { text: 'Introduction to Default Component Patches', link: '/defaulted/item-intro' },
            { text: 'Introduction to Enchantment Patches', link: '/defaulted/enchantment-intro' },
            { text: 'Patch Ordering', link: '/defaulted/ordering' },
            { text: 'Value Providers', link: '/defaulted/value-providers' },
            {
              text: "Patch Generators",
              collapsed: false,
              items: [
                { text: 'Introduction to Patch Generators', link: '/defaulted/patch-gens/introducing-patch-gens' },
                {
                  text: 'Items',
                  collapsed: false,
                  items: [
                    { text: `Armor Stats Generator`, link: '/defaulted/patch-gens/item/armor-stats'},
                    { text: `Modify Attribute Modifiers Generator`, link: '/defaulted/patch-gens/item/modify-attribute-modifiers'},
                    { text: `Vanilla Weapon Stats Generator`, link: '/defaulted/patch-gens/item/weapon-stats'},
                    { text: `Combat Test Weapon Stats Generator`, link: '/defaulted/patch-gens/item/combat-test-weapon-stats'},
                    { text: `Conditional Patch Generator`, link: '/defaulted/patch-gens/item/conditional-patch'}
                  ]
                },
                {
                  text: 'Enchantments',
                  collapsed: false,
                  items: [
                    { text: `Conditional Patch Generator`, link: '/defaulted/patch-gens/enchantment/conditional-patch'},
                    { text: `Modify List Effect Generator`, link: '/defaulted/patch-gens/enchantment/modify-list-effect'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
});
