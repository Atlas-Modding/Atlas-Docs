---
name: Enchantment Patches
---

# Introduction to Enchantment Patches
The JSON files for the `defaulted:enchantment_patches` data should be put in `data/<namespace>/defaulted/enchantment_patches/<path>.json`.

For information on how patches are applied, see [ordering information](./ordering).

## Creating a File

For this tutorial, let's presume that you wish to add the `minecraft:post_attack` component with effect `minecraft:ignite` to some enchantments which do not already have it.

Let's start off with our JSON file, say we want it to be called `custom:make_cause_ignite`.

To do this, let's start off by creating a JSON file in `data/custom/defaulted/enchantment_patches/make_cause_ignite.json`

> [!IMPORTANT]
> Patches can include any enchantment effect component type, as long as it is registered. This INCLUDES modded enchantment effect component types.
> 
> Similarly, any enchantment can be patched, INCLUDING modded ones!

<a id="patch"></a>
## Adding Components

Next, in the JSON, let us create a JSON Object as our root, and define the `patch`:

```json
{
  "patch": {}
}
```
> [!IMPORTANT]
> The `patch` object is a Data Component Patch, as you would create inside of a recipe if you wanted to produce an enchantment with custom components. Syntax is thus the same as a recipe.

Following that, let's fill out the patch with our edited `post_attack` component:
```json
{
  "patch": {
    "minecraft:post_attack": [
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
}
```
Now, that looks good! Except, we have a problem...

This component patch will apply to every single enchantment that exists.

That is fine if you want to make a global change, but remember that in this example we wanted to only apply it to certain enchantments.

From this point, I will introduce the next element:
The `elements` field, which defines a list of either registered, existing enchantments or tags prefixed with # to apply the patch to.

:::details {open}
If the `elements` field is empty or absent, the patch is global, or rather, applies to every enchantment that exists.

Any enchantment which is either in the enchantments directly included in `elements` or is in a tag included in `elements` will be patched.
:::

For our example, let's say we want every damage enchantment to get this post attack component:

```json{2-4}
{
  "elements": [
    "#minecraft:exclusive_set/damage"
  ],
  "patch": {
    "minecraft:post_attack": [
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
}
```
> [!NOTE]
> This could also be done by manually listing off every damage enchantment, however best practice in this case is to use the tag since it will include modded damage enchantments by default.

Now, we are almost done.
However, just to not implant false ideas, let's say we also wanted Protection to cause this post attack effect.

The addition to make this occur, is as follows:

```json{2-4}
{
  "elements": [
    "#minecraft:exclusive_set/damage",
    "minecraft:protection"
  ],
  "patch": {
    "minecraft:post_attack": [
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
}
```

## Removing Components

Now, what if you wanted to, say, remove the damage from, say, all damage enchantments?

Ignoring the frivolity of such an idea, here is how you would do that:
```json
{
  "elements": [
    "#minecraft:exclusive_set/damage"
  ],
  "patch": {
    "!minecraft:damage": {}
  }
}
```
> [!NOTE]
> Just as removing a component from an item stack in a patch, to remove a default component here, you just append a ! in front of the component name.

<a id="overrides"></a>
## Enchantment Field Overrides

Enchantment patches modify more than just their enchantment effect components, as they represent overrides for the enchantment as a whole.
As such, they have a few more fields, largely corresponding to equivalents for enchantments themselves.

> [!NOTE]
> For the purposes of these fields, a "homogenous list" refers to a list that can either be a single tag of that type, or a list of that type.

> [!IMPORTANT]
> NONE of the fields here must be defined for the enchantment patch to work. If they are present, you are expected to be using them with intent.

1. `description`: A component to override the original enchantment's `description` with.
2. `supported_items`: A homogeneous list of items to override the original enchantment's `supported_items` with.
3. `primary_items`: A homogeneous list of items to override the original enchantment's `primary_items` with.
4. `weight`: A [Value Provider](./value-providers) to modify the original enchantment's `weight` (provided as variable `"input"`).
5. `max_level`: A [Value Provider](./value-providers) to modify the original enchantment's `max_level` (provided as variable `"input"`).
6. `min_cost`: A [cost](#cost) to modify the original enchantment's `min_cost`.
7. `max_cost`: A [cost](#cost) to modify the original enchantment's `max_cost`.
8. `anvil_cost`: A [Value Provider](./value-providers) to modify the original enchantment's `anvil_cost` (provided as variable `"input"`).
9. `slots`: A list of slots to override the original enchantment's `slots` with.
10. `added_slots`: A list of slots to add to the original enchantment's `slots` if `slots` is not present.
11. `removed_slots`: A list of slots to remove from the original enchantment's `slots` if `slots` is not present.
12. `exclusive_set`: A homogeneous list of enchantments to override the original enchantment's `exclusive_set` with.
13. `patch`: A data component patch to apply to the original enchantment's `effects`. (See [here](#patch) for usage).

<a id="cost"></a>
## Cost Override

For replacing the costs, this is used. The fields are as follows:
1. `base`: A [Value Provider](./value-providers) to modify the original cost's `base` (provided as variable `"input"`).
2. `per_level_above_first`: A [Value Provider](./value-providers) to modify the original cost's `per_level_above_first` (provided as variable `"input"`).