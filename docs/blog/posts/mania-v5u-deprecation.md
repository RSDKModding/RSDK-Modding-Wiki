---
title: RSDKv5U support for the Sonic Mania decomp is being deprecated
date: 2026-10-25
authors:
  - megami
slug: mania-v5u-deprecation
description: >
  The Sonic Mania decompilation will soon be updated to remove support for
  running the game in RSDKv5U
categories:
  - Decompilations
  - RSDKv5
---

# RSDKv5U support for the Sonic Mania decomp is being deprecated

**The Sonic Mania decompilation will soon be updated to remove support for running
the game in RSDKv5U.** This change is being made due to several upcoming fixes and
ModAPI features for the RSDKv5U engine decomp that will make v5U Mania difficult,
if not impossible, to support.

This change doesn't just affect the Mania decomp; **it also affects GameAPI logic
mods made for it**, as mods built for one engine revision are not compatible with
game or engine builds for another engine revision. As such, we are warning logic
mod creators and end users of what this deprecation will mean to you and what you
can do to prepare for it.

<!-- more -->

## What exactly will be changed?

When the updates to the RSDKv5U and Sonic Mania decompilations release (no exact date
planned, but sometime soon), most code for running the latter decomp in RSDKv5U will
be removed, REV02 will be the new default engine revision when building Sonic Mania,
and only binaries for REV02 will be provided in releases for Mania. The RSDKv5U engine decomp
itself will still be supported and maintained; it just won't be able to run Mania anymore.
GameAPI will also be updated to build Mania mods for REV02 by default.

Due to these changes, **any GameAPI logic mods for Mania that are built for v5U will no
longer work**. They will need to be built for REV02 instead; keep reading for more information.

## What should I do right now?

We recommend switching from v5U (REV0U) builds of Mania to standalone v5 (REV02) ones. If
you use the release builds or autobuilds, simply use the build files in the `v5` folder
in the downloads rather than the `v5U` one. If you build the decomps manually, you will
need to add [`-DRETRO_REVISION=2`](../../Guides/RSDKv5/Decompilation/Building.md#build-flags)
to the end of the first CMake build command to build REV02.

Note that any GameAPI logic mods that you use will also have to be built for REV02. If the
release(s) of a mod includes a REV02 build, you can use that. If not, it may still provide the
source code, in which case you can [build the mod yourself](https://github.com/MegAmi24/Mania-Decomp-Mods/blob/main/BUILDING.md)
using the `-DRETRO_REVISION=2` flag in the first CMake build command. If neither options are
available, you will have to **politely** ask the mod creator to provide the source code and
REV02 builds.

If you're a GameAPI logic mod creator and aren't already doing so, we strongly recommend
updating your mod pages to provide builds of your mods for REV02, or at the very least
publishing your mod's source code on a site such as GitHub and linking the repository
in the mod page.

## What should I do when the updates release?

When updating from older builds of the decomps, make sure you use RSDKv5 (REV02) for
Sonic Mania rather than RSDKv5U (REV0U). You can see instructions on how to do this in
the previous section. If you build the decomps manually from the `Sonic-Mania-Decompilation`
repository, it will build REV02 by default after the update releases and you [pull the
latest commits to your cloned repository](../../Guides/RSDKv5/Decompilation/Building.md#update-build).
(You'll still have to specify the engine revision if you build the engine from the `RSDKv5-Decompilation`
repository.)

## I'm a GameAPI logic mod developer. Will I have to update my mod(s)?

After the decomp updates release, you will have to rebuild your mod using the latest GameAPI and update
the CMake build configuration for it. You can do this by updating the GameAPI repository clone/submodule,
then changing the default values for the following build flags (`set(FLAG_NAME # ...)`) in `CMakeLists.txt`:

- `RETRO_REVISION`: `3` :material-arrow-right: `2`
- `RETRO_MOD_LOADER_VER`: `2` :material-arrow-right: `3`

After that, rebuild your mod, make sure it still compiles and functions as intended, and publish
your updated mod.
