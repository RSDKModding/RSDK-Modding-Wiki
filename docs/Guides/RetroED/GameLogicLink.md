# Linking Game Logic With RetroED

## Prerequisites

=== "v3/v4"

    - [RetroED](/Tools/RetroED/README.md)
    - [An extracted Data folder for the desired game](ExtractDatapack.md)
    - A Scripts folder for the desired game

=== "v5"

    - [RetroED](/Tools/RetroED/README.md)
    - [An extracted Data folder for the desired game](ExtractDatapack.md)
    - A game logic file for the desired game
        - Logic files must be built with editor code. For example, the Sonic Mania decompilation controls this with the `GAME_INCLUDE_EDITOR` build flag, which is enabled by default.
        - The architecture and build type for both the game logic and RetroED must match. All engine revisions are supported.

## Setting Up the Data Folder

=== "v3/v4"

    The extracted Data folder for the game can be placed anywhere. Take the `Scripts` folder and copy/move it *inside of* the Data folder.

    ![Data folder](/assets/images/Windows/FileExplorer/Sonic1-2/RetroEDLogicLink-Scripts.png)

=== "v5"

    The extracted Data folder for the game can be placed anywhere. Take the game logic file and copy/move it *next to* (NOT inside) the Data folder. Make sure the logic file is named `Game` with the appropriate file extension.

    ![Data folder and logic file](/assets/images/Windows/FileExplorer/SonicMania/RetroEDLogicLink-Logic.png)

## Setting the Base Data Folder

Open RetroED, then open `Options` > `Game Manager`.

![Options menu](/assets/images/RetroED/Options-GameManager.png){ width="60%" } ![Game Manager](/assets/images/RetroED/GameManager.png){ width="38.2%" }

Click the target engine version to open its tab, then click `Browse` under `Base Data Folder Location`. Choose the Data folder in the window that appears. Make sure to choose the Data folder itself, *not* the folder containing it.

![Base Data Folder Location set](/assets/images/RetroED/GameManager-BaseDataFolder.png)

From now on, opening any scene for the target engine version will automatically link and use the game logic, as well as load the sprite and/or animation files it uses, even if the scene loaded does not exist within the Base Data Folder. If any game logic and/or sprite/animation files exist within/next to the loaded scene's Data folder, those will take priority over the Base Data Folder ones.

!!! note
    RetroED displays the `Game Link State` at the bottom of the Scene Editor window. If the game logic fails to load, the reason why will be shown there.

![Sonic Mania GHZ1 with game logic loaded](/assets/images/RetroED/SceneEditor-Mania-GHZ1.png)

If you'd like to reload the game logic while a scene is open, you can do so by clicking the `Reload Game Link` button in the `Scene Properties` tab.
