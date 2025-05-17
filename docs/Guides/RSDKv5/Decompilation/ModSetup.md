# Setting Up Mods for the RSDKv5 & Sonic Mania Decompilations

TODO: screenshots

!!! note
    This guide assumes you have already [set up the RSDKv5 & Sonic Mania decompilations](Setup.md).

## Mods Folder

Create a folder named `mods` in the decompilation directory.

![mods](/assets/images/Windows/FileExplorer/SonicMania/ModSetup-mods.png)

Download and extract the mod(s) you'd like to use into this folder. The file structure should look like this:
```
mods/
└── Mod Folder/
    ├── Data/
    │   └── [data assets]
    ├── [logic file]
    └── mod.ini
```

## Using the Mod Loader

[Enable the Dev Menu](/RSDKv5/Overview/DevMenu.md#enabling), then while the decompilation is running, press ++escape++ to open the Dev Menu. You can also click/touch the top left corner of the window/screen.

When the Dev Menu is open, choose `Mods` to open the Manage Mods menu.

![Dev Menu](/assets/images/SonicMania/DevMenu/MainMenu-Decomp.png){ width="40%" } ![Mod List](/assets/images/SonicMania/DevMenu/Mods.png){ width="40%" }

To control the menu, press :material-gamepad-round-up: or :material-gamepad-round-down: to select a mod, and press :material-alpha-a-circle:{ .controller-a } to toggle the mod on or off.

!!! question "How do I change mod priority?"
    Mod priority is determined based on the order of the mods in the mod list; mods get loaded from bottom to top. You can shift a mod up or down in the mod list by holding :material-alpha-c-circle:{ .controller-c } while pressing :material-gamepad-round-up: or :material-gamepad-round-down:.

## Troubleshooting

### Mod gets disabled automatically when starting the game { id="mod-gets-disabled" }

This could be for several reasons. The `log.txt` file that the decomp generates[^1] will contain an error message explaining why the mod couldn't be loaded. If you can't find the error within the file, try deleting it right before trying to load the mod in the decomp.

[^1]: The Android version of the decomp does not create or write to a log file.

The common reasons for this occuring are:

- The mod's `TargetVersion` (which defaults to 5 if one isn't specified in `mod.ini`) does not match the engine version currently loaded
- The mod tries to load a logic file it can't find
- The mod's logic file does not have a [LinkModLogic](TODO) function (i.e. the mod does not use [GameAPI])
- The mod's logic file does not match the engine's revision or mod loader version

## FAQ

### Can I use mods made for the Steam version of Sonic Mania? { id="steam-mania-mods" }

Steam Mania mods that use DLL files will not work with the decompilation, as they use a different modding API that is not compatible. These mods will need to be rewritten to use [GameAPI] instead.

Even if a mod doesn't contain a DLL file, it may still use features provided by Mania Mod Manager, such as codes or the BASS audio library. In this case, the mod may not behave correctly when used on the decompilation, as it does not support this functionality.

  [GameAPI]: TODO
