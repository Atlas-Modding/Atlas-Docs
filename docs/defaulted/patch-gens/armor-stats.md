---
name: Armor Stats Generator
---

# Armor Statistics Modification and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for modifying armor stats in a vanilla-like manner, based on the equipment slot the item goes in.

This will produce a `minecraft:attribute_modifiers` component, as well as `minecraft:max_damage`.
This generator has the id `defaulted:armor_stats`.

The following is an introduction to how to use it:

First off, mark whether it should maintain the previous attribute modifiers on top of its new ones.

This is defined with a boolean with the name `persist_previous`.

In addition, there are four fields which this generator will take:
1. `max_damage`: The durability of the item, taking the form of an [armor variable](#armor-variable) of type integer.
2. `armor`: The armor of the item, taking the form of an [armor variable](#armor-variable) of type integer.
3. `armor_toughness`: The armor toughness of the item, taking the form of an [armor variable](#armor-variable) of type double.
4. `knockback_resistance`: The knockback resistance of the item, taking the form of an [armor variable](#armor-variable) of type double.

<a id="armor-variable"></a>
## Armor Variable Codecs

The specific expected inputs for each field depends on where specifically it is used.
Armor Variable values represent each possible armor slot and will choose a value based on what the armor they are being parsed for goes into.

If in object form, is decoded as the following:
1. `helmet`: The value for all armors which go in the head slot.
2. `chestplate`: The value for all armors which go in the chest slot.
3. `leggings`: The value for all armors which go in the leggings slot.
4. `boots`: The value for all armors which go in the feet slot.
5. `body`: The value for all armors which go in the body slot (typically used for non-humanoid mobs).
6. `any`: The fallback value for the armor, can provide for any non-specified ones.
All Armor Variables can be written as a singular form of their expected value, becoming only the fallback.