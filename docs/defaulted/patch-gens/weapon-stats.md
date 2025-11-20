---
name: Vanilla Weapon Stats Generator
---

# Weapon Statistics Modification and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for modifying weapon stats in a vanilla-expected manner.

This will produce a `minecraft:attribute_modifiers` component.

The following is an introduction to how to use it:

:::details Pseudocode 
```json
{
    ...
    "patch_generators": [
        {
            "generator": "defaulted:vanilla_weapon_stats",
            ...
        }
    ]
    ...
}
```
:::

First off, mark whether it should maintain the previous attribute modifiers on top of its new ones.

This is defined with a boolean with the name `persist_previous`.

If you wish to add damage or speed, you may add `attack_damage` or `attack_speed`. This may be stated as a weapon-level-based value, see [here](#weapon-level-based).

Note that the level passed in to the weapon-level-based value will be either the `weapon_level` for the tier of the weapon (3 if not otherwise associated with a tier) or the tier's `speed_level` (used only for speed, if in versions past 1.21.9, will be 4 if no tier is associated, otherwise matching `weapon_level`).

Below is an example of both damage and speed:

:::details Pseudocode 
```json
{
    ...
    "patch_generators": [
        {
            "generator": "defaulted:vanilla_weapon_stats",
            "attack_damage": 2,
            "attack_speed": {
                "values": [
                    {
                        "value": -1,
                        "condition": {
                            "min": 6,
                            "max": 7,
                            "type": "clamped"
                        }
                    },
                    {
                        "value": -2,
                        "condition": 5 // Conditions in integer form will become clamped between one number as both min and max
                    },
                    {
                        "value": -3,
                        "condition": {
                            "values": [
                                10,
                                12,
                                14
                            ],
                            "type": "list"
                        }
                    }
                ],
                "fallback": {
                    "base": -1,
                    "per_level_above_first": 0.1,
                    "type": "linear"
                },
                "type": "lookup"
            },
            "persist_previous": false
        }
    ]
    ...
}
```
:::

In addition, one might control the attack damage bonus of the tier applying to the damage by adding the field `apply_tier_to_damage`.

Additional modifiers can be added using vanilla formatting under `additional_modifiers`.

The ids for the damage and speed modifiers can be overridden with `damage_id_override` and `speed_id_override` respectively.

<a id="weapon-level-based"></a>
## Weapon-Level-Based Values

If in object form, requires field `type`. Can have the following values, `constant`, `lookup`, and `linear`
    * Constant has the following fields:
        1. `value`: A floating-point value.
        2. `applies_additional`: Whether to apply a bonus provided to it, tier damage in the case of attack damage, 0 otherwise.
    * Lookup has the following fields:
        1. `values`: A list of level-matching conditions, which themselves are an object with two fields: a weapon-level-based value of name `value` (taking the same form seen here), and a level condition named `condition`, of a `type` either `clamped`, which takes an integer `min` and integer `max`, and will be satisfied for all numbers between the two (inclusive), or a type `list`, which is a list of accepted levels to match.
        2. `fallback`: A weapon-level-based value which will be used in the case no value matches.
    * Linear has the following fields:
        1. `base`: A weapon-level-based value which will be the base.
        2. `per_level_above_first`: The weapon-level-based value to add to the base for each level above the first.
All weapon-level-based values mentioned above can either be in object form or as a single floating-point value resolving to a constant.