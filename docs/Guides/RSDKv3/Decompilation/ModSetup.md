# Setting Up Mods for the RSDKv3 Decompilation

TODO: screenshots

!!! note
    This guide assumes you have already [set up the RSDKv3 Decompilation](Setup.md).

## Decompiled Scripts

!!! info
    The decompiled scripts are required for script mods to work. When a script mod is enabled, these scripts are compiled by the decompilation at runtime and allow custom script code to function in-game.

Go to the [RSDKv3 Script Decompilation GitHub repository](https://github.com/RSDKModding/RSDKv3-Script-Decompilation) and download the master branch by clicking the green `Code` button, then selecting `Download ZIP` in the drop-down menu.

Extract the ZIP file, then copy the `Scripts` folder into the decompilation directory.

## Mods Folder

!!! warning
    Due to the original engine not being designed with mod support in mind, many mods might not be compatible with each other; using multiple mods that edit the same files/scripts can easily break the game. Only use mods together if they are completely independent of each other or are designed to be compatible with each other.

Create a folder named `mods` in the decompilation directory.

Download and extract the mod(s) you'd like to use into this folder. The file structure should look like this:
```
mods/
└── Mod Folder/
    ├── Data/
    │   └── [data assets]
    └── mod.ini
```

## Using the Mod Loader

[Enable the Dev Menu](TODO), then while the decompilation is running, press ++escape++ to open the Dev Menu. You can also select it in the pause menu or the Help & Options menu.

When the Dev Menu is open, choose `MODS` to open the Mod List.

To control the menu, press :material-gamepad-round-up: or :material-gamepad-round-down: to select a mod, and press :material-alpha-a-circle:{ .controller-a } to toggle the mod on or off.

!!! question "How do I change mod priority?"
    Mod priority is determined based on the order of the mods in the Mod List; mods get loaded from bottom to top. You can shift a mod up or down in the Mod List by holding :material-alpha-c-circle:{ .controller-c } while pressing :material-gamepad-round-up: or :material-gamepad-round-down:.