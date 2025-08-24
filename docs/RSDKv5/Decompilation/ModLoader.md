# Mod Loader

!!! note
    This page documents the mod structure and format for mod developers to reference. If you are simply looking to install mods as an end-user, see the [Mod Setup guide](/Guides/RSDKv5/Decompilation/ModSetup.md).

The [RSDKv5 Decompilation](README.md) has a built-in mod loader that allows loading mods that add or replace Data files, as well as loading [GameAPI](TODO) logic files. The mod loader is a custom feature in the decompilation, however you can choose to build without it using the [`RETRO_MOD_LOADER` flag](/Guides/RSDKv5/Decompilation/Building.md#build-flags).

## Mods Directory

The mod loader will look for mods in the `mods` folder, located wherever the datapack or Data folder is located. In it, each mod is stored in its own separate folder. It's generally recommended to keep folder names short.

``` title="Example structure"
mods/
├── SpriteMod/
├── MusicMod/
└── modconfig.ini
```

### modconfig.ini

modconfig.ini is a file that the decompilation automatically creates and updates in the `mods` folder, if it exists. This file is used to store the priority order for mods (mods are loaded from bottom to top), as well as which mods are enabled. Mods are listed by their folder names.

```ini title="Example modconfig.ini"
[mods]
SpriteMod=y
MusicMod=n
```

## Mod Folder

Mod folders can include a `Data` folder to load datapack assets. Files within these directories follow the same structure as in the base asset folders.

``` title="Example mod structure"
SpriteMod/
├── Data/
│   └── Sprites/
│       └── Global/
│           └── Display.gif
└── mod.ini
```

### mod.ini

mod.ini is a file containing metadata for the mod, as well as flags that can be set for the decompilation to use. The decompilation will not detect the folder as a mod if this file is not present.

#### Metadata Tags

`Name`

:   The name of the mod. This string is what will be shown in the Mod List.

`Description`

:   A description of what the mod does.

`Author`

:   The creator of the mod.

`Version`

:   The mod's version number. There is no specific version scheme used, so use whatever you prefer.

#### Mod Flags

All of these flags take a boolean (`false`/`true`) unless stated otherwise. You do not need to include a flag in your mod.ini file if you do not intend to use it.

`LogicFile`

:   The filename of the logic file in the mod folder to load, excluding the file extension and Linux's `lib` binary name prefix. The engine will automatically use the appropriate file extension for the current platform. The mod will not load a logic file if this is not present.

`ModID`

:   The internal ID for the mod to use. Takes a string. If not present, the mod's ID will default to its folder name.

`RedirectSaveRAM`

:   When enabled, the game will save/load save and user data in the mod's folder instead of the regular directory. If this is enabled on multiple active mods, the one with the lowest priority will be used.

`DisableGameLogic`

:   When enabled, the game will not load the base game's logic. This is intended to be used for mods whose logic does not need the base game's to function.

`TargetVersion`

:   Determines the target engine version for the mod when used in RSDKv5U, which only shows mods for the currently active engine version in the Mods Menu. Should be set to `5` for RSDKv5. If not set, it will default to `5`.

`ForceVersion`

:   Forces the engine version when used in RSDKv5U. This should normally never be necessary, however. Forces RSDKv5 when set to `5`.

```ini title="Example mod.ini file"
Name=Sprite Mod
Description=My sprite mod!
Author=Me
Version=1.0.0
TargetVersion=5
ModID=SpriteMod
```
