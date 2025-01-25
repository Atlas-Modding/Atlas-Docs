---
name: Default Component Patches Registry
---

# Introduction to Default Component Patches
The JSON files for the defaulted:default_component_patches registry should be put in `data/<namespace>/defaulted/default_component_patches/<path>.json`.

:::details Extra Registry Information {open}
All changes for the registry will be applied alphabetically, namespace before path.

For example, `custom:patches` (which would be located in `data/custom/defaulted/default_component_patches/patches.json`) would apply after `custom:amazing_patches`, but before `d:amazing_patches`.

This should be kept in mind for how different datapacks utilising this system could interact.
:::

## Creating a File

For this tutorial, let's presume that you wish to add the `minecraft:blocks_attacks` component to some items by default.

Let's start off with our JSON file, say we want it to be called `custom:sword_blocking`.

To do this, let's start off by creating a JSON file in `data/custom/defaulted/default_component_patches/sword_blocking.json`

:::warning
This example will ONLY work on 25w04a and above, as the component does not exist in 1.21.4

Keep in mind that all components modified must exist in the version in question with the mods you have installed.
:::

> [!IMPORTANT]
> Patches can include any data component type, as long as it is registered. This INCLUDES modded data component types.
> 
> Similarly, any item can be patched, INCLUDING modded ones!

## Adding Components

Next, in the JSON, let us create a JSON Object as our root, and define the `patch`:

```json
{
  "patch": {}
}
```
> [!IMPORTANT]
> The `patch` object is a Data Component Patch, as you would create inside of a recipe if you wanted to produce an item with custom components. Syntax is thus the same as a recipe.

Following that, let's fill out the patch with our edited `blocks_attacks` component:
```json
{
  "patch": {
    "minecraft:blocks_attacks": {
      "block_delay_seconds": 0,
      "disable_cooldown_scale": 0,
      "damage_reductions": [
        {
          "factor": 0.5,
          "base": -0.5
        }
      ],
      "item_damage": {
        "threshold": 0,
        "base": 0,
        "factor": 0
      },
      "block_sound": "minecraft:entity.player.hurt"
    }
  }
}
```
Now, that looks good! Except, we have a problem...

This component patch will apply to every single item that exists.

That is fine if you want to make a global change, but remember that in this exemple we wanted to only apply it to certain items.

From this point, I will introduce the next element:
The `items` and `tag` fields.

1. `items` defines a set of registered, existing items to apply the patch to.
2. `tag` defines a list of item tags to apply the patch to.

:::details {open}
If both are absent, the patch is global, or rather, applies to every item that exists.

Either `items` or `tag` can be absent, items which are patched depend solely on if the item is in the `items` set or is within a tag in the `tag` list.

If both are present, then any item within either `items` or `tag` will be patched, so including items which are within a tag which is defined, is generally redundant.
:::

For our example, let's say we want every sword to get this blocking component:

```json{2-4}
{
  "tag": [
    "minecraft:swords"
  ],
  "patch": {
    "minecraft:blocks_attacks": {
      "block_delay_seconds": 0,
      "disable_cooldown_scale": 0,
      "damage_reductions": [
        {
          "factor": 0.5,
          "base": -0.5
        }
      ],
      "item_damage": {
        "threshold": 0,
        "base": 0,
        "factor": 0
      },
      "block_sound": "minecraft:entity.player.hurt"
    }
  }
}
```
> [!NOTE]
> This could also be done by manually listing off every sword, however best practice in this case is to use the tag since it will include modded swords by default.

Now, we are almost done.
However, just to not implant false ideas, let's say we also wanted Totems of Undying to be able to block.

The addition to make this occur, is as follows:

```json{2-4}
{
  "items": [
    "minecraft:totem_of_undying"
  ],
  "tag": [
    "minecraft:swords"
  ],
  "patch": {
    "minecraft:blocks_attacks": {
      "block_delay_seconds": 0,
      "disable_cooldown_scale": 0,
      "damage_reductions": [
        {
          "factor": 0.5,
          "base": -0.5
        }
      ],
      "item_damage": {
        "threshold": 0,
        "base": 0,
        "factor": 0
      },
      "block_sound": "minecraft:entity.player.hurt"
    }
  }
}
```

## Removing Components

Now, what if you wanted to, say, remove the attribute modifiers from, say, a wooden axe and every pickaxe?

Ignoring the frivolity of such an idea, here is how you would do that:
```json
{
  "items": [
    "minecraft:wooden_axe"
  ],
  "tag": [
    "minecraft:pickaxes"
  ],
  "patch": {
    "!minecraft:attribute_modifiers": {}
  }
}
```
> [!NOTE]
> Just as removing a component from an item stack in a patch, to remove a default component here, you just append a ! in front of the component name.