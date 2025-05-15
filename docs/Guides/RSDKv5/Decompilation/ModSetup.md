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