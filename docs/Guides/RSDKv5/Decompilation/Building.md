# Building the RSDKv5 & Sonic Mania Decompilations

The RSDKv5 and Sonic Mania decompilations use [CMake](https://cmake.org/), a versatile building system that supports many different compilers and platforms.

!!! note
    This guide requires basic knowledge of how to use the appropriate terminal for your OS, such as Command Prompt for Windows. If you aren't familiar with opening terminals in specific directories, look up a tutorial online.

## Get the source code
In order to clone the repository, you need to install Git, which you can get [here](https://git-scm.com/downloads).

Clone the repo **recursively**, using:
=== "RSDKv5 + Sonic Mania"

    ```
    git clone --recursive https://github.com/RSDKModding/Sonic-Mania-Decompilation
    ```

=== "RSDKv5 Only"

    ```
    git clone --recursive https://github.com/RSDKModding/RSDKv5-Decompilation
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

    !!! warning
        An installation of Visual Studio with the `Desktop development with C++` workload uses around 8 GB of storage space. Make sure you have the necessary space on your drive before proceeding.

    You will also need to [set up vcpkg](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-cmd#1---set-up-vcpkg). You only need to follow `1 - Set up vcpkg` in the guide.

    !!! tip
        It's recommended to clone vcpkg into a short path such as `C:/src` to keep future commands from getting too long.

    Run the following command in the vcpkg repository in Command Prompt:
    === "64-bit"

        ```
        vcpkg.exe install libtheora libogg glew sdl2 --triplet=x64-windows-static
        ```

    === "32-bit"

        ```
        vcpkg.exe install libtheora libogg glew sdl2 --triplet=x86-windows-static
        ```

=== "Linux"

    !!! warning "Notice for Steam Deck users"
        Due to how SteamOS handles packages, building the decompilation on the Steam Deck is highly difficult and not recommended. Instead, consider building it on another Arch Linux device using that build on the Steam Deck.

    Run the following command in the terminal:

    === "pacman (Arch)"

        ```
        sudo pacman -S base-devel cmake glew glfw libtheora sdl2
        ```

    === "apt (Debian/Ubuntu)"

        ```
        sudo apt install build-essential cmake libglew-dev libglfw3-dev libtheora-dev libsdl2-dev
        ```

    === "rpm (Fedora)"

        ```
        sudo dnf install make cmake gcc glew-devel glfw-devel libtheora-devel sdl2-devel zlib-devel
        ```

    === "apk (Alpine/PostmarketOS)"

        ```
        sudo apk add build-base cmake gcc glew-dev glfw-dev libtheora-dev sdl2-dev
        ```

    === "xbps (Void)"

        ```
        sudo xbps-install make cmake gcc pkg-config glew-devel glfw-devel libtheora-devel SDL2-devel zlib-devel
        ```

=== "Nintendo Switch"

    [Set up devKitPro](https://devkitpro.org/wiki/Getting_Started), then run the following command:
    ```
    (dkp-)pacman -Syuu switch-dev switch-libogg switch-libtheora switch-sdl2 switch-glad
    ```

=== "Android"

    TODO

## Compiling
=== "Windows"

    Enter the following commands in the RSDKv5/Mania decompilation repository directory:
    === "64-bit"

        ```
        cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static
        cmake --build build --config release
        ```

        !!! warning "Important!"
            `[vcpkg root]` should be replaced with the path to the vcpkg repository. For example, if the repository is located in `C:/src/vcpkg`, the first command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=C:/src/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static
            ```
            If the path to the repository includes spaces in it, you will need to put quotation marks around the entire path. For example, if the repository is located in `C:/github repos/vcpkg`, the first command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="C:/github repos/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET=x64-windows-static
            ```

    === "32-bit"

        ```
        cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x86-windows-static -A Win32
        cmake --build build --config release
        ```

        !!! warning "Important!"
            `[vcpkg root]` should be replaced with the path to the vcpkg repository. For example, if the repository is located in `C:/src/vcpkg`, the first command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=C:/src/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x86-windows-static -A Win32
            ```
            If the path to the repository includes spaces in it, you will need to put quotation marks around the entire path. For example, if the repository is located in `C:/github repos/vcpkg`, the first command to enter would be:
            ```
            cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="C:/github repos/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET=x86-windows-static -A Win32
            ```

    The resulting build(s) will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command. For example, to build with `RETRO_DISABLE_PLUS` set to on, add `-DRETRO_DISABLE_PLUS=on` to the command.

=== "Linux"

    Enter the following commands in the RSDKv5/Mania decompilation repository directory:
    ```
    cmake -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config release
    ```

    The resulting build(s) will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command. For example, to build with `RETRO_DISABLE_PLUS` set to on, add `-DRETRO_DISABLE_PLUS=on` to the command.

=== "Nintendo Switch"

    Enter the following commands in the RSDKv5/Mania decompilation repository directory:
    ```
    cmake -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=/opt/devkitpro/cmake/Switch.cmake
    cmake --build build --config release
    ```

    The resulting build will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command. For example, to build with `RETRO_DISABLE_PLUS` set to on, add `-DRETRO_DISABLE_PLUS=on` to the command.

=== "Android"

    TODO

## Build Flags
!!! warning
    These build flags modify certain aspects of the decomps; only use these if you know what you're doing!

### RSDKv5
| Flag                     | Description                                                                                                                                                                                                             | Value Type                             | Default Value                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------ |
| **RETRO_REVISION**       | The RSDKv5 revision to compile. Datapacks for certain versions of Sonic Mania only work on older revisions. Set to `3` to build RSDKv5U.                                                                                | Integer (See [Revisions](#revisions))  | `3`                                        |
| **RETRO_DISABLE_PLUS**   | Disables access to content from Sonic Mania and Sonic Origins' Plus DLC. [**Any publicly distributed builds must have this flag enabled.**](https://github.com/RSDKModding/RSDKv5-Decompilation/blob/master/LICENSE.md) | Boolean                                | `off`                                      |
| **RETRO_MOD_LOADER**     | Enables the ability the load mods and certain features related to them.                                                                                                                                                 | Boolean                                | `on`                                       |
| **RETRO_MOD_LOADER_VER** | The revision of the mod loader to build.                                                                                                                                                                                | Integer (`1` or `2`)                   | `2`                                        |
| **RETRO_SUBSYSTEM**      | The backend used to handle rendering, controller inputs, etc.                                                                                                                                                           | String (See [Subsystems](#subsystems)) | `DX9` on Windows, `OGL` on other platforms |

#### Revisions
| Flag Value | Revision                     |
| ---------- | ---------------------------- |
| **1**      | REV01 (Sonic Mania Pre-Plus) |
| **2**      | REV02 (Sonic Mania Plus)     |
| **3**      | REV0U (RSDKv5U)              |

#### Subsystems
| Flag Value   | Subsystem                 |
| ------------ | ------------------------- |
| **DX9**      | DirectX 9 (Windows Only)  |
| **DX11**     | DirectX 11 (Windows Only) |
| **OGL**      | OpenGL                    |
| **SDL2**     | SDL2                      |
| **VK**       | Vulkan                    |

### Sonic Mania
| Flag                    | Description                                                                                               | Value Type                                    | Default Value                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| **WITH_RSDK**           | Builds RSDKv5 alongside Sonic Mania.                                                                      | Boolean                                       | `on`                                                              |
| **GAME_STATIC**         | Builds both RSDKv5 and Sonic Mania into one executable. Has no effect if `WITH_RSDK` is disabled.         | Boolean                                       | `off` on Windows or Unix-based platforms, `on` on other platforms |
| **MANIA_FIRST_RELEASE** | Builds the initial console release of Sonic Mania.                                                        | Boolean                                       | `off`                                                             |
| **MANIA_PRE_PLUS**      | Builds the last release of Sonic Mania before the Plus update.                                            | Boolean                                       | `off`                                                             |
| **GAME_INCLUDE_EDITOR** | Includes code for use in editors such as [RetroED](../../../Tools/RetroED/README.md).                     | Boolean                                       | `on`                                                              |
| **GAME_VERSION**        | The version of the game to build. Has no effect if `MANIA_FIRST_RELEASE` or `MANIA_PRE_PLUS` are enabled. | Integer (See [Game Versions](#game-versions)) | `6`                                                               |

#### Game Versions
| Flag Value | Game Version                                        |
| ---------- | --------------------------------------------------- |
| **0**      | 1.00 - 1.02 (Initial console release)               |
| **3**      | 1.03 (Initial Steam release, last Pre-Plus release) |
| **5**      | 1.04 / 1.05 (Mania Plus release)                    |
| **6**      | 1.06 (Latest Steam release)                         |
| **7**      | 1.07 (EGS/Origin release)                           |