---
name: Patch Generators
---

# Introduction to Patch Generators

Patch Generators are a way to empower the user to more easily perform common edits or context-based edits for specific components.
:::details Example Generators & Use Cases
1. `defaulted:vanilla_weapon_stats`: Easily creating weapon stats for an item, based on tool material.
2. `defaulted:tool_material`: Edit the tool material stored for this item.
3. `defaulted:modify_enchantments`: Adding or removing enchantments from an item by default.
:::

Inside of your patches data file, you can use `patch_generators`, which is a list of patch generator objects to apply.

The specific patch generators which can be used can also be registered by other mods.
> [!NOTE]
> Each patch generator object defines its type within the field `generator`
:::details Pseudocode 
```json
{
    ...
    "patch_generators": [
        {
            "generator": "<generator_id>",
            ...
        }
    ]
    ...
}
```
:::
How a specific generator is written depends on which type it is, for more information all included generators have pages here.