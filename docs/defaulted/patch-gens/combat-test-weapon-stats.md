---
name: Combat Test Weapon Stats Generator
---

# Weapon Statistics Modification and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for modifying weapon stats in a combat-test-expected manner.

> [!NOTE]
> This patch generator ONLY EXISTS with Combatify installed.

This will produce a `minecraft:attribute_modifiers` component.

The following is an introduction to how to use it:

:::details Pseudocode 
```json
{
    ...
    "patch_generators": [
        {
            "generator": "defaulted:combat_test_weapon_stats",
            ...
        }
    ]
    ...
}
```
:::

First off, mark whether it should maintain the previous attribute modifiers on top of its new ones.

This is defined with a boolean with the name `persist_previous`.

If you wish to add damage, speed, or reach, you may add `attack_damage`, `attack_speed`, or `attack_reach`. This may be stated as a weapon-level-based value, see [here](./weapon-stats#weapon-level-based).

Note that the level passed in to the weapon-level-based value will be either the `weapon_level` for the tier of the weapon (3 if not otherwise associated with a tier) or the tier's `speed_level` (used only for speed, if in versions past 1.21.9, will be 4 if no tier is associated, otherwise matching `weapon_level`).

Below is an example of both damage and speed:

:::details Example Code
```json
{
    ...
    "patch_generators": [
        {
            "generator": "defaulted:combat_test_weapon_stats",
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
            "attack_reach": {
                "base": 0,
                "per_level_above_first": 0.25
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

The ids for the damage, speed, and reach modifiers can be overridden with `damage_id_override`, `speed_id_override`, and `reach_id_override` respectively.