# Setting Up the RSDKv3 Decompilation

## Prerequisites
- A build of the RSDKv3 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv3-Decompilation/releases/latest) (Origins Plus DLC will not be accessible)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv3-Decompilation/actions) (Must be signed into GitHub to download, Origins Plus DLC will not be accessible)
- [A datapack (Data.rsdk) for Sonic CD](../../Games/SonicCD/Datapack.md)
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (Windows only)

## Setup
=== "Windows"

    !!! tip
        It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    !!! warning
        **DO NOT** place the decompilation in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues with the decomp, such as crashes or mods not working. It's recommended to instead place the decomp somewhere in a `Games` folder located in the root of C drive, or another drive entirely if possible.

    Place the decompilation EXE file (and any included DLL files) in the target directory.

    ![RSDKv3.exe](/assets/images/Windows/FileExplorer/SonicCD/Setup-EXE.png)

    Place the `Data.rsdk` file in this directory. If you have the Blit release of Sonic CD, you can copy its `videos` folder here as well.

    ![Data.rsdk](/assets/images/Windows/FileExplorer/SonicCD/Setup-RSDK.png)

=== "Linux"

    TODO

=== "Android"

    TODO

## Troubleshooting

### Some options in Sonic CD's menu don't work { id="cd-menu-options" }

Certain buttons in Sonic CD's menu call for functionality or menus that are either part of the system's OS or hardcoded in the game's executable. These include:

- The Leaderboards and Achievements menus
- The How to Play, Controls, and Settings screens in the Blit version
- The legal/privacy buttons in the mobile version's About screen

This functionality is not implemented in the decompilation, but you can use mods to restore/add some of these menus.

### The game runs faster than it's supposed to { id="game-runs-too-fast" }

All of the Retro Engine's logic is tied to the framerate, meaning that the speed of the game will be faster or slower depending on your device/monitor's refresh rate. You can fix this by turning off V-Sync in `settings.ini` or by changing your device's refresh rate, if possible.

### The title screen and level title cards have visual oddities when using the Blit release in widescreen { id="blit-widescreen-bugs" }

The Blit release of Sonic CD wasn't fully optimized for widescreen, so issues like this will occur. You can [install the decompiled scripts] to fix this.

### Pausing is mapped to B instead of Start when using the mobile version { id="b-button-pause" }

This is an intentional change (made for unknown reasons) in the mobile version of the game. You can [install the decompiled scripts] to fix this.

  [install the decompiled scripts]: ModSetup.md#decompiled-scripts

### The title screen splash logos and instructions graphics are low resolution when using the mobile version { id="low-res-graphics" }

Enable `HardwareRenderer` in `settings.ini`.

### Various issues related to using the Origins version { id="origins-version-issues" }

See [this guide](https://gamebanana.com/tuts/16686) for fixing several Origins related issues.

## FAQ

### I don't have access to the Blit release of Sonic CD. Can I use video files from the mobile or Origins versions? { id="blit-cd-videos" }

The decompilation only works with video files from the Blit release of the game. If you don't have this version, you can choose from the [FMV mods](https://gamebanana.com/mods/cats/19077) available on GameBanana and use one of those instead.
