# Setting Up the Decompiled RSDKv5 Shaders

!!! note
    This guide assumes you have already [set up the RSDKv5 decompilation](Setup.md).

## Getting the Shaders

!!! tip
    If you've manually built the RSDKv5 and/or Sonic Mania decompilations, you should already have the `RSDKv5-Decompilation` repository cloned on your device (if you cloned `Sonic-Mania-Decompilation`, the engine is located in `dependencies/RSDKv5`). Assuming you haven't deleted the repository, you can skip to [Installing the Shaders](#installing-the-shaders).

Go to the [RSDKv5 Decompilation GitHub repository](https://github.com/RSDKModding/RSDKv5-Decompilation) and download the master branch by clicking the green `Code` button, then selecting `Download ZIP` in the drop-down menu. Extract the downloaded ZIP file.

![Download ZIP](/assets/images/GitHub/RSDKv5-Decompilation-DownloadZIP.png){ .desktop-only }
![Download ZIP](/assets/images/GitHub/RSDKv5-Decompilation-DownloadZIP-Mobile.png){ .mobile-only }

## Installing the Shaders

Create a folder named `mods` in the decompilation directory, if one doesn't exist.

![mods](/assets/images/Windows/FileExplorer/SonicMania/ModSetup-mods.png)

Create a folder named `GLShaders` in `mods`.

![GLShaders](/assets/images/Windows/FileExplorer/SonicMania/ShadersSetup-GLShaders.png)

Create a file named `mod.ini` in `GLShaders`, then copy the following text into it:

```ini
Name=GLShaders
Description=OGLShaders
Author=Ducky
Version=1.0.0
TargetVersion=-1
```

![mod.ini](/assets/images/Windows/FileExplorer/SonicMania/ShadersSetup-modINI.png)

Create a folder named `Data` in `GLShaders`.

![Data](/assets/images/Windows/FileExplorer/SonicMania/ShadersSetup-Data.png)

In your cloned/downloaded `RSDKv5-Decompilation` repository, open the `RSDKv5` folder, then copy the `Shaders` folder in it into GLShaders' `Data` folder.

![Shaders](/assets/images/Windows/FileExplorer/SonicMania/ShadersSetup-Shaders.png){ width="40%" } ![Shaders contents](/assets/images/Windows/FileExplorer/SonicMania/ShadersSetup-ShadersContents.png){ width="40%" }

From here, you can [enable the mod using the mod loader](ModSetup.md#using-the-mod-loader) to use the shaders.

