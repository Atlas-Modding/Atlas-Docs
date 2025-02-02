---
title: Combatify & Defaulted Version 1.2.6 and 1.1.0
author: Alexandra (Rae)
desc: Combatify Items Config update (many things get removed) and how to get around that.
---
## Current Issues With the Items Config and Why Most Gets Cut

Currently the Items Config is great, it does its job and does it well.
However, the Items Config has one big flaw: it goes way too far out of scope.

See, the Items Config simply handles too many things manually for what should be a combat-focused and non-component-editing config.

Put simply, why should the Items Config be the only place you can easily edit a tool's tier? It makes no sense.

That's part of why Defaulted should pick up the slack, and why Combatify will rely on it from now on.

## Defaulted Patch Generators: An Introduction...

In order to achieve the most fluid migration, as well as for in general utility to improve modification of items without the use of Combatify, Patch Generators are going to be added, alongside Tool Material Wrappers.

### Preface

The concept is simple: in Defaulted, the user currently has complete control over the patch, which is fine and dandy, and will not change.

However, due to this, there is a major issue: what if the user wished to do something which can be considered common practice, or wanted to modify an already-present component, without just guessing what it is due to other patches?
***
Example: Modifying Weapon Stats

Say you wanted to change the damage of a weapon in Defaulted... In theory, that is all fine and dandy, just build the patch...
However, that is messy, and in general not ideal.
***
Another Example: Adding a Default Enchantment

If, for some reason, you wanted an item to have a default enchantment, but others also added different enchantments (and perhaps you'd like to combine them), well, you can only do that if you ***KNOW*** the existing enchantment map.

### The Solution

Patch Generators are a mod-defined registry that exist to provide control over existing components *or* generate new ones, based off of information provided to the generator.

These can be used to conditionally edit patches, add default patches, etc. with ease.

However, what about different tiers of the same tool, used for defining components like `enchantable`, `repairable`, `max_damage`, `tool`, and `attribute_modifiers`? There is no reason that tiers should inherently require different files, so long as we have a way to identify which is which.

#### Tool Material Wrappers

This is a simple idea: allow the user to give items a tool material wrapper, and that wrapper is used by other Patch Gens...
However, it still is complex enough to require a full statement.

Essentially, Tool Material Wrappers are generated using the patch generator `defaulted:tool_material`...

In general, tool materials should be assigned separately in a high-priority file (which is done in Defaulted as well for built-in tiered items) and should assign all items of the tier.