# Setting Up the RSDKv4 Decompilation

## Prerequisites
- A build of the RSDKv4 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv4-Decompilation/releases/latest) (Origins Plus DLC will not be accessible)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv4-Decompilation/actions) (Must be signed into GitHub to download, Origins Plus DLC will not be accessible)
- [A datapack (Data.rsdk) for Sonic 1 or 2](../../Games/Sonic1-2/Datapack.md)
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (Windows only)

## Setup
=== "Windows"

    !!! tip
        It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    Place the decompilation EXE file (and any included DLL files) in the target directory.

    !!! warning
        **DO NOT** place the decompilation in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues with the decomp, such as crashes or mods not working. It's recommended to instead place the decomp somewhere in a `Games` folder located in the root of C drive, or another drive entirely if possible.

    ![RSDKv4.exe](/assets/images/Windows/FileExplorer/Sonic1-2/Setup-EXE.png)

    Place the `Data.rsdk` file in this directory.

    ![Data.rsdk](/assets/images/Windows/FileExplorer/Sonic1-2/Setup-RSDK.png)

=== "Linux"

    TODO

=== "Android"

    TODO

## Troubleshooting

### The game runs faster than it's supposed to { id="game-runs-too-fast" }

All of the Retro Engine's logic is tied to the framerate, meaning that the speed of the game will be faster or slower depending on your device/monitor's refresh rate. You can fix this by turning off V-Sync in `settings.ini` or by changing your device's refresh rate, if possible.

### The player character softlocks or dies at the end of certain acts { id="ultrawide-end-issues" }

Sonic 1 and 2 weren't fully optimized for ultrawide, so issues like these will occur. You can [install the decompiled scripts] to fix this.

### Pausing is mapped to B instead of Start when using the mobile versions { id="b-button-pause" }

This is an intentional change (made for unknown reasons) in the mobile versions of the games. You can [install the decompiled scripts] to fix this.

### Life counter defaults to 1 instead of 3 when using the mobile versions { id="mobile-life-count" }

This is an intentional change made in the mobile versions of the games. You can [install the decompiled scripts] to fix this in most cases.

  [install the decompiled scripts]: ModSetup.md#decompiled-scripts

### Various issues related to using the Origins versions { id="origins-versions-issues" }

See [this guide](https://gamebanana.com/tuts/16686) for fixing several Origins related issues.
