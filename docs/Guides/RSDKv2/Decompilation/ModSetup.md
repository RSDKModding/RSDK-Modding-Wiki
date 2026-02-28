# Setting Up Mods for the RSDKv2 Decompilation

!!! note
    This guide assumes you have already [set up the RSDKv2 Decompilation](Setup.md).

## Mods Folder

!!! warning
    Due to the original engine not being designed with mod support in mind, many mods might not be compatible with each other; using multiple mods that edit the same files/scripts can easily break the game. Only use mods together if they are completely independent of each other or are designed to be compatible with each other.

Create a folder named `mods` in the decompilation directory.

![mods](/assets/images/Windows/FileExplorer/SonicNexus/ModSetup-mods.png)

Download and extract the mod(s) you'd like to use into this folder. The file structure should look like this:
```
mods/
└── Mod Folder/
    ├── Data/
    │   └── [data assets]
    └── mod.ini
```

## Using the Mod Loader

[Enable the Default Menu](/RSDKv2/Overview/DefaultMenu.md#enabling), which will automatically load when opening the game. You can also open the Default Menu at any time by pressing ++escape++.

When the Default Menu is open, choose `MODS` to open the Mod List.

![Default Menu](/assets/images/SonicNexus/DefaultMenu/MainMenu-Decomp.png){ width="40%" } ![Mod List](/assets/images/SonicNexus/DefaultMenu/Mods.png){ width="40%" } 

To control the menu, press :material-gamepad-round-up: or :material-gamepad-round-down: to select a mod, and press :material-alpha-a-circle:{ .controller-a } to toggle the mod on or off.

!!! question "How do I change mod priority?"
    Mod priority is determined based on the order of the mods in the Mod List; mods get loaded from bottom to top. You can shift a mod up or down in the Mod List by holding :material-alpha-c-circle:{ .controller-c } while pressing :material-gamepad-round-up: or :material-gamepad-round-down:.
