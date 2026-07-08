---
name: Conditional Generator
---

# Conditional Patches and You

First off, let's define what this generator is, and does. 
The primary purpose of this generator is for checking conditions against the elements of the .

This generator has the id `defaulted:conditional`.

The fields of this generator are as follows:

1. `condition`: A patch condition to match against, see [here](#condition).
2. `patch`: A data component patch to apply when met.
3. `patch_generators`: A list of patch generators to apply when met.

<a id="condition"></a>
## Patch Conditions

A patch condition is a condition to match against, with fields added onto the conditional generator depending on which type it is, of the following types:
1. `invert`: Inverts the condition in the field `inverted`, like so:
    ```json
    ...
    {
        ...
        "condition": "invert",
        "inverted": {
            "condition": // Something
            ...
        }
        ...
    }
    ...
    ```
2. `condition_list`: Validates the conditions in field `conditions`, requiring all to be true if `all_required`, otherwise only requires one to match. This is done like so:
    ```json
    ...
    {
        ...
        "condition": "condition_list",
        "conditions": [
            {
                "condition": // Something
                ...
            },
            ...
        ],
        "all_required": true // Will require all conditions to match if true, matches if any are true if false.
        ...
    }
    ...
    ```
3. `is_item` or `is_enchantment`: Validates that the Item/Enchantment is either in a list of items or tag, done like so:
    ```json
    ...
    {
        ...
        "condition": "is_item", // Inside of a data component patch, "is_item", otherwise inside of an enchantment patch "is_enchantment"
        "items": [ // Inside of a data component patch, "items", otherwise inside of an enchantment patch "enchantments", can also be in the form of a single item/enchantment tag
            "minecraft:totem_of_undying"
        ]
        ...
    }
    ...
    ```
4. `in_tag`: Validates that the Item or Enchantment is in a list of item/enchantment tags:
    ```json
    ...
    {
        ...
        "condition": "in_tag",
        "tags": [
            "minecraft:swords"
        ]
        ...
    }
    ...
    ```
5. `has_components`: Validates components in `components` are present, requiring all to be present if `all_required`, otherwise only requires one to match. This is done like so:
    ```json
    ...
    {
        ...
        "condition": "has_components",
        "components": [
            "minecraft:attribute_modifiers",
            ...
        ],
        "all_required": true // Will require all components present if true, matches if any are true if false.
        ...
    }
    ...
    ```
6. `matches_components`: Validates components in `components` exactly match, requiring all to match if `all_required`, otherwise only requires one to match. This is done like so:
    ```json
    ...
    {
        ...
        "condition": "has_components",
        "components": {
            "minecraft:enchantable": 15
        },
        "all_required": true // Will require all components present if true, matches if any are true if false.
        ...
    }
    ...
    ```