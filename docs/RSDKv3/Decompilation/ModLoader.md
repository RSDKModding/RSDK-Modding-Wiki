# Mod Loader

!!! note
    This page documents the mod structure and format for mod developers to reference. If you are simply looking to install mods as an end-user, see the [Mod Setup guide](/Guides/RSDKv3/Decompilation/ModSetup.md).

The [RSDKv3 Decompilation](README.md) has a built-in mod loader, introduced in Version 1.1.2. It allows loading mods that add or replace Data and/or script files. The mod loader is a custom feature in the decompilation, however you can choose to build without it using the [`RETRO_MOD_LOADER` flag](/Guides/RSDKv3/Decompilation/Building.md#build-flags).

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
│   │   └── Global/
│   │       └── HUD.txt
│   └── Sprites/
│       └── Global/
│           └── Display.gif
└── mod.ini
```

### mod.ini

mod.ini is a file containing metadata for the mod, as well as flags that can be set for the decompilation to use. The decompilation will not detect the folder as a mod if this file is not present.

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

#### Mod Flags

All of these flags take a boolean (`false`/`true`) unless stated otherwise. You do not need to include a flag in your mod.ini file if you do not intend to use it.

`TxtScripts`

:   Forces the decompilation to load the decompiled scripts. This is required to load modified scripts.

`DisableFocusPause`

:   Overrides the `DisableFocusPause` setting in [settings.ini]. See [that setting's values](SettingsINI.md#disablefocuspause) for valid options.

`RedirectSaveRAM`

:   When enabled, the game will save/load save and user data in the mod's folder instead of the regular directory. If this is enabled on multiple active mods, the one with the lowest priority will be used.

`DisableSaveIniOverride`

:   When enabled, disables the `BGMVolume`, `SFXVolume`, and `OriginalControls` settings in [settings.ini].

  [settings.ini]: SettingsINI.md

`TargetVersion`

:   Determines the target engine version for the mod when used in the [RSDKv5U Decompilation], which only shows mods for the currently active engine version in the Mods Menu. Should be set to `3` for RSDKv3. If not set, it will default to `5`.

`ForceVersion`

:   Forces the engine version when used in the [RSDKv5U Decompilation]. This should normally never be necessary, however. Forces RSDKv3 when set to `3`.

  [RSDKv5U Decompilation]: /RSDKv5/Decompilation/README.md

!!! info
    Versions of the decompilation prior to 1.3.0 used an `Active` flag to determine whether or not the mod is enabled. This flag has since been deprecated and is no longer used.

```ini title="Example mod.ini file"
Name=Sprite Mod
Description=My sprite mod!
Author=Me
Version=1.0.0
TxtScripts=true
TargetVersion=3
```
