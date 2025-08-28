# Building the RSDKv2 Decompilation

The RSDKv2 Decompilation uses [CMake](https://cmake.org/), a versatile building system that supports many different compilers and platforms

## Read before proceeding

This guide requires basic knowledge of how to use the appropriate terminal for your OS, such as Command Prompt for Windows. If you aren't familiar with doing basic actions with terminals, such as opening one in specific directories, look up a tutorial online.

In addition, refer to these warnings depending on the platform you are compiling for:

=== "Windows"

    !!! warning
        Make sure to use Command Prompt when typing commands instead of PowerShell, as PowerShell is known to cause issues.

=== "Linux"

    !!! warning "Notice for Steam Deck users"
        Due to how SteamOS handles packages, building the decompilation on the Steam Deck is highly difficult and not recommended. Instead, consider building it on another Arch Linux device and using that build on the Steam Deck.

=== "MacOS"

    TODO

## Get the source code
**DO NOT** download the source code ZIP archive from github, as they do not include the submodules required to build the decompilation, however this one does not use submodules, so you may disregard this warning, but still it is recommended not to download the ZIP archive.

Instead, you will need to clone the repository using Git, which you can get [here](https://git-scm.com/downloads).

Clone the repo by running this command in the target directory:
```
git clone https://github.com/RSDKModding/RSDKv2-Decompilation
```

!!! warning
    **DO NOT** clone the repository in a Windows user directory. This includes folders such as Documents, Downloads, and the Desktop. These directories are known to cause issues when building. It's recommended to instead clone the repo somewhere in a `GitHub` folder located in the root of the C drive, or another drive entirely if possible.

If you'd ever like to update the cloned repository, you can do so by running these commands in it:
```
git pull
```

## Getting dependencies
=== "Windows"

    [Install CMake](https://cmake.org/download/). **Make sure to enable the feature to add CMake to the system PATH during the installation.**

    To handle dependencies, you'll need to install [Visual Studio Community](https://visualstudio.microsoft.com/downloads/) with the `Desktop development with C++` workload. If you already have Visual Studio installed, you can manage your installed workloads by opening Visual Studio Installer from the Start Menu and clicking the `Modify` button next to your Visual Studio installation.

    !!! warning
        An installation of Visual Studio with the `Desktop development with C++` workload uses around 8 GB of storage space. Make sure you have the necessary space on your drive before proceeding.

    You will also need to [set up vcpkg](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-cmd#1---set-up-vcpkg). You only need to follow `1 - Set up vcpkg` in the guide.

    !!! tip
        It's recommended to clone vcpkg into a short path such as `C:/src` to avoid potential file path issues.

    Run the following command in the root of the cloned repository after cloning the vcpkg repository
    === "64-bit"

        ```
        [vcpkg root]/vcpkg.exe install sdl2 libogg libvorbis --triplet=x64-windows-static
        ```

    === "32-bit"

        ```
        [vcpkg root]/vcpkg.exe install sdl2 libogg libvorbis --triplet=x86-windows-static
        ```

    You should then add vcpkg to your enviroment variables by running the following commands
    ```
    set VCPKG_ROOT="%CD%"
    setx VCPKG_ROOT %VCPKG_ROOT%
    ```

=== "Linux"

    Run the following command in a tty emulator (aka Terminal) that your Desktop Enviroment came with:

    === "pacman (Arch)"

        ```
        sudo pacman -S base-devel cmake sdl2 libogg libvorbis
        ```

    === "apt (Debian/Ubuntu)

        ```
        sudo apt install build-essential cmake libsdl2-dev libogg-dev libvorbis-dev
        ```

    === "rpm (Fedora)"

        ```
        sudo dnf install gcc cmake SDL2-devel libogg-devel libvorbis-devel zlib-devel
        ```

    === "apk (Alpine/PostmarketOS)"

        ```
        sudo apk add build-base cmake sdl2-dev libogg-dev libvorbis-dev
        ```

    === "xbps (Void)"

        ```
        sudo xbps-install make cmake pkg-config SDL2-devel libogg-devel libvorbis-devel zlib-devel
        ```

## Compiling
=== "Windows"

    Enter the following commands in the RSDKv2 decompilation repository directory:
    === "64-bit"

        ```
        cmake -B build -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static -DCMAKE_PREFIX_PATH=[vcpkg root]/installed/x64-windows-static/
        cmake --build build --config release
        ```

    === "32-bit"

        ```
        cmake -B build -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x86-windows-static -DCMAKE_PREFIX_PATH=[vcpkg root]/installed/x86-windows-static/
        cmake --build build --config release
        ```

    The resulting build will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command

=== "Linux"

    Enter the following commands in the RSDKv3 decompilation repository directory:
    ```
    cmake -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config release
    ```

    The resulting build will be located somewhere in `build/` depending on your system.

    You can set [build flags](#build-flags) by adding `-D[flag-name]=[value]` to the end of the first command.

## Build Flags
!!! warning
    These build flags modify certain aspects of the decomp; only use these if you know what you're doing!

| Flag                             | Description                                                                                                                                                                                                         | Value Type           | Default Value |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------- |
| **FORCE_CASE_INSENSITIVE**       | Forces case insensivity when loading files. Takes a boolean, defaults to off.                                                                                                                                       | Boolean              | `off`         |
| **RETRO_MOD_LOADER**             | Enables or disables the mod loader. Takes a boolean, defaults to on.                                                                                                                                                | Boolean              | `on`          |
| **RETRO_ORIGINAL_CODE**          | Removes any custom code. A playable game will not be built with this enabled. Takes a boolean, defaults to off.                                                                                                     | Boolean              | `off`         |
| **RETRO_SDL_VERSION**            | Only change this if you know what you're doing. Switches between using SDL1 or SDL2. Takes an integer of either 1 or 2, defaults to 2.                                                                              | Integer              | `on`          |

## Troubleshooting

If some error appears during the compilation of the decompilation, then please let us know at [our discord server](https://dc.railgun.works/retroengine), as we might be able to help you with whatever error you might have.