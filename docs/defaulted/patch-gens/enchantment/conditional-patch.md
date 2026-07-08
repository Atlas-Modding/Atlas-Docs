---
name: Conditional Generator
---

# Conditional Patches and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for checking conditions against the elements of the .

This generator has the id `defaulted:conditional`.

The fields of this generator are as follows:

1. `condition`: A patch condition to match against, see [here](../item/conditional-patch#condition).
2. `patch_generators`: A list of patch generators to apply when met.

As well, this inherits all fields from [enchantment overrides](../../enchantment-intro#overrides).