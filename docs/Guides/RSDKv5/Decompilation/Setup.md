# Setting Up the RSDKv5 & Sonic Mania Decompilations

## Prerequisites
- A build of the RSDKv5 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv5-Decompilation/releases/latest) (Mania/Origins Plus DLC will not be accessible)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv5-Decompilation/actions) (Must be signed into GitHub to download, Mania/Origins Plus DLC will not be accessible)
- A build of the Sonic Mania Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/Sonic-Mania-Decompilation/releases/latest)
    - [Downloading an autobuild](https://github.com/RSDKModding/Sonic-Mania-Decompilation/actions) (Must be signed into GitHub to download)
- [A datapack (Data.rsdk) for Sonic Mania](../../Games/SonicMania/Datapack.md)
    - The decompilations are not compatible with datapacks from the Netflix Games releases of the game.
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (Windows only)

## Setup
=== "Windows"

    !!! tip
        It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    Place the decompilation EXE file (and any included DLL files) in the target directory.

    !!! warning
        **DO NOT** place the decompilation in the directory of an official Mania release. Doing this is known to cause issues.

    ![RSDKv5(U).exe](/assets/images/Windows/FileExplorer/SonicMania/Setup-EXE.png)

    Place the `Data.rsdk` and `Game.dll` files in this directory.

    ![Data.rsdk and Game.dll](/assets/images/Windows/FileExplorer/SonicMania/Setup-RSDK-DLL.png)

    !!! tip
        If you're not using either DirectX subsystem, it's highly recommended to [install the custom shaders mod](ShadersSetup.md).

=== "Linux"

    TODO

=== "Nintendo Switch"

    TODO

=== "Android"

    TODO

## Troubleshooting

### The game runs faster than it's supposed to { id="game-runs-too-fast" }

All of the Retro Engine's logic is tied to the framerate, meaning that the speed of the game will be faster or slower depending on your device/monitor's refresh rate. You can fix this by turning off V-Sync in `settings.ini` or by changing your device's refresh rate, if possible.

### Non-Xbox controllers not working on Windows { id="windows-direct-input" }

By default, Windows builds of the decompilation use DirectX 9, which only supports XInput controllers (i.e. Xbox controllers). To use other types of controllers, you will need to [build the decompilation](Building.md) with the OpenGL backend by setting the [`RETRO_SUBSYSTEM` build flag](Building.md#build-flags) to [`OGL`](Building.md#subsystems). It's also recommended to download a [`gamecontrollerdb.txt`](https://github.com/mdqinc/SDL_GameControllerDB/blob/master/gamecontrollerdb.txt) file and place it next to the executable file.

### Various issues related to using the Origins games { id="origins-games-issues" }

See [this guide](https://gamebanana.com/tuts/16686) for fixing several Origins related issues.

## FAQ

### What's the difference between RSDKv5 and RSDKv5U? { id="v5-vs-v5u" }

RSDKv5U adds compatibility for playing RSDKv3 (i.e. Sonic CD) and RSDKv4 (i.e. Sonic 1 & 2) games, including support for local multiplayer. The v5 side of the engine also recieves minor changes, such as altered collision and additional functionality.

### How do I change the username? { id="change-username" }

In the `Game` category of `settings.ini`, add a tag called `username` and enter the desired username in it, like so:

``` ini hl_lines="4"
; Retro Engine Config File

[Game]
username=MyUsername ; (1)!
language=0

...
```

1. The setting names in settings.ini are case-sensitive; the username setting will not apply if the capitalization is incorrect.