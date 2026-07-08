---
name: Modify Attribute Modifiers Generator
---

# Item Attribute Modifiers Modification and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for modifying attribute modifiers currently on an item.

This will produce a `minecraft:attribute_modifiers` component.
This generator has the id `defaulted:modify_attribute_modifiers`.

The fields of this generator are as follows:

1. `to_add`: Takes the form of vanilla attribute modifiers, these modifiers will be added onto the existing modifiers or replace them if already matching.
2. `to_remove`: Takes the form of a list of attribute removal entries. Modifiers matching the removal entry will not be copied over. Fields:
    - `type`: The attribute to target.
    - `id`: The identifier of the modifier to remove.