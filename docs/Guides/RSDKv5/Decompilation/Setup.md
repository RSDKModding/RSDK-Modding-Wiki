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
