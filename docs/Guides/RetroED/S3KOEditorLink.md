# Using S3KOEditorLink With RetroED

!!! warning
    S3KOEditorLink is only compatible with Windows and requires owning the Steam version of [Sonic Origins](/Games/SonicOrigins/README.md).

## Prerequisites
- [RetroED](/Tools/RetroED/README.md)
- [S3KOEditorLink](/Tools/S3KOEditorLink/README.md)
- A PC runnning Windows
- Sonic Origins installed from Steam

## Finding the Game Executable Directory

Open your Steam library, then right click Sonic Origins and click `Manage` > `Browse local files`.

![Steam library](/assets/images/Steam/BrowseLocalFiles-SonicOrigins.png)

In the File Explorer window that appears, open `build/main/projects/exec`.

![Exec folder](/assets/images/Windows/FileExplorer/SonicOrigins/Exec.png)

## Setting Up S3KOEditorLink

Place the `Game.dll` file for S3KOEditorLink *next to* (NOT inside) the Data folder for your project (or your Base Data Folder, if one has been set). Copy the `SonicOrigins.exe` file from the [game executable directory](#finding-the-game-executable-directory) in the same place.