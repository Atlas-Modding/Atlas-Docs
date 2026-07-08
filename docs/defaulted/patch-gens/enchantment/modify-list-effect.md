---
name: Modify List Effect Generator
---

# Enchantment Effect List Modification and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for modifying enchantment effect components currently on an enchantment.

This generator has the id `defaulted:modify_list_effect`.

The fields of this generator are as follows:

1. `component`: The component to modify, MUST be a valid type, of which they are hardcoded. Compat mods may add valid types so long as they are lists.
2. `to_add`: Takes the form of a list of the type of enchantment effect, which will be added to the component.
3. `to_remove`: Takes the form of a list of the type of enchantment effect, all identical effects that exist will be removed.

The following is an example of how to use this patch generator:
```json
{
  "elements": [
    "#minecraft:exclusive_set/damage"
  ],
  "patch": {
    "!minecraft:damage": {}
  },
  "patch_generators": [
    {
      "generator": "defaulted:modify_list_effect",
      "component": "minecraft:post_attack",
      "to_add": [
        {
          "affected": "victim",
          "effect": {
            "type": "minecraft:ignite",
            "duration": {
              "type": "minecraft:linear",
              "base": 1.0,
              "per_level_above_first": 0.25
            }
          },
          "enchanted": "attacker",
          "requirements": {
            "condition": "minecraft:damage_source_properties",
            "predicate": {
              "is_direct": true
            }
          }
        }
      ]
    }
  ]
}
```