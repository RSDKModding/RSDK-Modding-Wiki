# Setting Up the RSDKv2 Decompilation

## Prerequisites
- A build of the RSDKv2 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv2-Decompilation/releases)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv2-Decompilation/actions) (Must be signed into GitHub to download)
- [The datapack (Data.bin) for Sonic Nexus](https://info.sonicretro.org/Sonic_Nexus)
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (Windows only)

## Setup
=== "Windows"

    !!! tip
        It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    !!! warning
        **DO NOT** place the decompilation in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues with the decomp, such as crashes or mods not working. It's recommended to instead place the decomp somewhere in a `Games` folder located in the root of C drive, or another drive entirely if possible.

    Place the decompilation EXE file in the target directory.

    ![Nexus.exe](/assets/images/Windows/FileExplorer/SonicNexus/Setup-EXE.png)

    Copy the `Data.bin` file from Sonic Nexus in this directory.

    ![Data.bin](/assets/images/Windows/FileExplorer/SonicNexus/Setup-BIN.png)

=== "Linux"

    TODO
