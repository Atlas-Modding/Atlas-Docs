---
name: Patch Application Ordering
---
# Patch Ordering
Inside of the patch file, there is a field called `priority`, which in general controls ordering of the patches.
> [!NOTE]
> Priority is 1000 if not specified.

The *lower* the priority, the earlier it applies before others.

If the priority between two patches is equal, they apply based on alphabetical order for the resource location.

For example, `custom:patches` (which would be located in `data/custom/defaulted/default_component_patches/patches.json`) would apply after `custom:amazing_patches`, but before `d:amazing_patches`. If `d:amazing_patches` were to have a higher priority, say, 900 (assume default on the others), it would come before `custom:patches` AND `custom:amazing_patches`.

This should be kept in mind for how different datapacks utilising this system could interact.
