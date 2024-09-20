# Setting Up the RSDKv3 Decompilation

## Prerequisites
- A build of the RSDKv3 Decompilation for the target platform. You can get one by:
    - [Building the source code](Building.md) (Recommended)
    - [Downloading the latest release](https://github.com/RSDKModding/RSDKv3-Decompilation/releases/latest) (Origins Plus DLC will not be accessible)
    - [Downloading an autobuild](https://github.com/RSDKModding/RSDKv3-Decompilation/actions) (Must be signed into GitHub to download, Origins Plus DLC will not be accessible)
- [A datapack (Data.rsdk) for Sonic CD](../../Games/SonicCD/Datapack.md)
- [Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (Windows only)

## Setup
=== "Windows"

    TODO: screenshots

    !!! tip
	    It's highly recommended to [enable file extensions in File Explorer](https://www.thewindowsclub.com/show-file-extensions-in-windows) to reduce the chance of a file being named incorrectly.

    Place the decompilation EXE file (and any included DLL files) in the target directory.
	
	!!! warning
	    **DO NOT** place the decompilation in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues with the decomp, such as crashes or mods not working. It's recommended to instead place the decomp somewhere in a `Games` folder located in the root of C drive, or another drive entirely if possible.

    Place the `Data.rsdk` file in this directory. If you have the Blit release of Sonic CD, you can copy its `videos` folder here as well.
	
	!!! note
	    If you're using a datapack from Sonic Origins, you will need to [extract the datapack](TODO) and place the extracted `Data` and `Bytecode` folders in the decompilation directory. Make sure the datapack is not present in the directory so that the decomp doesn't read it.
	
	!!! note
	    If you're using a datapack from the mobile version of Sonic CD, you will need to enable the `HardwareRenderer` setting found in the `Window` category of the `settings.ini` file. If you don't see this file, opening the decomp will generate it. Make sure the decomp isn't running when editing the file.

=== "Linux"

    TODO

=== "Android"

    TODO
