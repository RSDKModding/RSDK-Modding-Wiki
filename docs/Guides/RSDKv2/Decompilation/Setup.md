# Setting Up the RSDKv2 Decompilation

## Prerequisites
- A build of the RSDKv2 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv2-Decompilation/releases)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv2-Decompilation/actions)
- [Sonic Nexus (specficially the data.bin file from the downloaded archive)](https://info.sonicretro.org/Sonic_Nexus)
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (Windows only)

## Setup
=== "Windows"

    !!! tip
        It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    !!! warning
        **DO NOT** place the decompilation in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues with the decomp, such as crashes or mods not working. It's recommended to instead place the decomp somewhere in a `Games` folder located in the root of C drive, or another drive entirely if possible.

    Place the decompilation EXE file in the target directory.

    ![Nexus.exe](/assets/images/Windows/FileExplorer/SonicNexus/Setup-EXE.png)

    Copy the `data.bin` and the `bass.dll` file from the Sonic Nexus root

    ![Data.bin and bass.dll](/assets/images/Windows/FileExplorer/SonicNexus/Setup-DATA.png)

=== "Linux"

    TODO

=== "MacOS"

    TODO

## Troubleshooting

If some error appears during the gameplay of the decompilation, then please let us know at [our discord server](https://dc.railgun.works/retroengine), as we might be able to help you with whatever error you might have.

## FAQ

### Why isn't there the Mod Setup guide?

This is because, unlike other decompilation versions, not many mods were made for the decompilation version, thus, there is no Mod Setup guide, once many modders jump on this fossil of the decompilation version, then it might be added.