# Mod Loader

!!! note
    This page documents the mod structure and format for mod developers to reference. If you are simply looking to install mods as an end-user, see the [Mod Setup guide](/Guides/RSDKv2/Decompilation/ModSetup.md).

The [RSDKv2 Decompilation](README.md) has a built-in mod loader. It allows loading mods that add or replace Data and/or script files. The mod loader is a custom feature in the decompilation, however you can choose to build without it using the [`RETRO_MOD_LOADER` flag](/Guides/RSDKv2/Decompilation/Building.md#build-flags).

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
SpriteMod=true
MusicMod=false
```

## Mod Folder

Mod folders can include the following folders within them:

- `Data` - Datapack assets.
    - `Scripts` - TXT script files. This folder should be placed in the `Data` folder.
- `Videos` - OGV Video files.

Files within these directories follow the same structure as in the base asset folders.

``` title="Example mod structure"
SpriteMod/
├── Data/
│   ├── Scripts/
│   │   └── NexusGlobals/
│   │       └── HUD.txt
│   └── Sprites/
│       └── NexusGlobals/
│           └── Display.gif
└── mod.ini
```

### mod.ini

mod.ini is a file containing metadata for the mod. The decompilation will not detect the folder as a mod if this file is not present.

#### Metadata Tags

!!! warning
    Keep these strings short. Making them too long will cause the decompilation to crash.

`Name`

:   The name of the mod. This string is what will be shown in the Mod List.

`Description`

:   A description of what the mod does.

`Author`

:   The creator of the mod.

`Version`

:   The mod's version number. There is no specific version scheme used, so use whatever you prefer.

```ini title="Example mod.ini file"
Name=Sprite Mod
Description=My sprite mod!
Author=Me
Version=1.0.0
```
