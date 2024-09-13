# Building the RSDKv4 Decompilation

The RSDKv4 Decompilation uses [CMake](https://cmake.org/), a versatile building system that supports many different compilers and platforms.

!!! note
    This guide requires basic knowledge of how to use the appropriate terminal for your OS, such as Command Prompt for Windows. If you aren't familiar with opening terminals in specific directories, look up a tutorial online.

## Get the source code
In order to clone the repository, you need to install Git, which you can get [here](https://git-scm.com/downloads).

Clone the repo **recursively**, using:
```
git clone --recursive https://github.com/RSDKModding/RSDKv4-Decompilation
```

If you've already cloned the repo, run these commands inside of the repository to ensure the clone is up-to-date:
```
git pull
git submodule update --init --recursive
```

## Getting dependencies
=== "Windows"

    [Install CMake](https://cmake.org/download/). **Make sure to enable the feature to add CMake to the system PATH during the installation.**

    To handle dependencies, you'll need to install [Visual Studio Community](https://visualstudio.microsoft.com/downloads/) with the `Desktop development with C++` workload. If you already have Visual Studio installed, you can manage your installed workloads by opening Visual Studio Installer from the Start Menu and clicking the `Modify` button next to your Visual Studio installation.
	
	You will also need to [set up vcpkg](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-cmd#1---set-up-vcpkg). You only need to follow `1 - Set up vcpkg` in the guide.
	
	!!! tip
	    It's recommended to clone vcpkg into a short path such as `C:/src` to keep future commands from getting too long.

    Run the following command in the vcpkg repository in Command Prompt:
	=== "64-bit"

        ```
	    vcpkg.exe install glew sdl2 libogg libvorbis --triplet=x64-windows-static
        ```
	
	=== "32-bit"

        ```
	    vcpkg.exe install glew sdl2 libogg libvorbis --triplet=x86-windows-static
		```

=== "Linux"

    Run the following command in the terminal:

	=== "pacman (Arch)"

        ```
		sudo pacman -S base-devel cmake glew sdl2 libogg libvorbis
		```

	=== "apt (Debian/Ubuntu)"

        ```
		sudo apt install build-essential cmake libglew-dev libglfw3-dev libsdl2-dev libogg-dev libvorbis-dev
		```

	=== "rpm (Fedora)"

        ```
		sudo dnf install make gcc cmake glew-devel glfw-devel sdl2-devel libogg-devel libvorbis-devel zlib-devel
		```

	=== "apk (Alpine/PostmarketOS)"

        ```
		sudo apk add build-base cmake glew-dev glfw-dev sdl2-dev libogg-dev libvorbis-dev
		```

	=== "xbps (Void)"

        ```
		sudo xbps-install make cmake pkg-config glew-devel glfw-devel SDL2-devel libogg-devel libvorbis-devel  zlib-devel
		```

=== "Android"

    TODO

## Compiling
=== "Windows"

    Enter the following commands in the RSDKv4 decompilation repository directory:
	=== "64-bit"
	
        ```
        cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static -DCMAKE_PREFIX_PATH=[vcpkg root]/installed/x64-windows-static/
        cmake --build build --config release
        ```
	    
        !!! warning "Important!"
            Both instances of `[vcpkg root]` should be replaced with the path to the vcpkg repository. For example, if the repository is located in `C:/src/vcpkg`, the command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=C:/src/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static -DCMAKE_PREFIX_PATH=C:/src/vcpkg/installed/x64-windows-static/
            ```
            If the path to the repository includes spaces in it, you will need to put quotation marks around the entire path. For example, if the repository is located in `C:/github repos/vcpkg`, the command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="C:/github repos/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET=x64-windows-static -DCMAKE_PREFIX_PATH="C:/github repos/vcpkg/installed/x64-windows-static/"
			```

	=== "32-bit"
	
        ```
        cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x86-windows-static -DCMAKE_PREFIX_PATH=[vcpkg root]/installed/x86-windows-static/ -A Win32
        cmake --build build --config release
        ```
	    
        !!! warning "Important!"
            Both instances of `[vcpkg root]` should be replaced with the path to the vcpkg repository. For example, if the repository is located in `C:/src/vcpkg`, the command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=C:/src/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x86-windows-static -DCMAKE_PREFIX_PATH=C:/src/vcpkg/installed/x86-windows-static/ -A Win32
            ```
            If the path to the repository includes spaces in it, you will need to put quotation marks around the entire path. For example, if the repository is located in `C:/github repos/vcpkg`, the command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="C:/github repos/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET=x86-windows-static -DCMAKE_PREFIX_PATH="C:/github repos/vcpkg/installed/x86-windows-static/" -A Win32
			```

    The resulting build will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command. For example, to build with `RETRO_DISABLE_PLUS` set to on, add `-DRETRO_DISABLE_PLUS=on` to the command.

=== "Linux"

    Enter the following commands in the RSDKv4 decompilation repository directory:
    ```
    cmake -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config release
    ```

    The resulting build will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command. For example, to build with `RETRO_DISABLE_PLUS` set to on, add `-DRETRO_DISABLE_PLUS=on` to the command.

=== "Android"

    TODO

## Build Flags
!!! warning
    These build flags modify certain aspects of the decomp; only use these if you know what you're doing!

| Flag                             | Description                                                                                                                                                                                                   | Value Type                            | Default Value |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------- |
| **RETRO_REVISION**               | The RSDKv4 revision to compile. Datapacks for certain versions of Sonic 1/2 only work on older revisions.                                                                                                     | Integer (See [Revisions](#revisions)) | `3`           |
| **RETRO_DISABLE_PLUS**           | Disables access to content from Sonic Origins's Plus Expansion Pack. [Any publicly distributed builds must have this flag enabled.](https://github.com/RSDKModding/RSDKv4-Decompilation/blob/main/LICENSE.md) | Boolean                               | `off`         |
| **RETRO_FORCE_CASE_INSENSITIVE** | Forces case insensivity when loading files.                                                                                                                                                                   | Boolean                               | `off`         |
| **RETRO_MOD_LOADER**             | Enables the ability the load mods and certain features related to them.                                                                                                                                       | Boolean                               | `on`          |
| **RETRO_NETWORKING**             | Enables networking features used for Sonic 2's 2P VS mode.                                                                                                                                                    | Boolean                               | `on`          |
| **RETRO_USE_HW_RENDER**          | Enables the Hardware Renderer used for native menus and objects. **The main menu, pause menu, and touch controls will not be visible if this is disabled.**                                                   | Boolean                               | `on`          |
| **RETRO_SDL_VERSION**            | Switches between using SDL 1.2 or SDL 2.                                                                                                                                                                      | Integer (`1` or `2`)                  | `2`           |

### Revisions
| Flag Value | Revision                        |
| ---------- | ------------------------------- |
| **0**      | REV00 (Initial Sonic 1 Release) |
| **1**      | REV01 (Initial Sonic 2 Release) |
| **2**      | REV02 (Sega Forever)            |
| **3**      | REV03 (RSDKv5U Legacy v4 Mode)  |