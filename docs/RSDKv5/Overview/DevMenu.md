# Dev Menu

![Dev Menu](/assets/images/SonicMania/DevMenu/MainMenu-Steam.png){ align=right , width="50%" }

The Dev Menu is a debug menu included with [RSDKv5](../README.md), disabled by default. The menu includes several features useful for debugging games in the engine. When the Dev Menu is enabled, other developer features are accessible as well.

## Enabling

The Dev Menu can be enabled by adding the line `devMenu=y` under the `Game` category of the engine's settings.ini file, like so:

``` ini hl_lines="4"
; Retro Engine Config File

[Game]
devMenu=y ; (1)!
language=0

...
```

1. The setting names in settings.ini are case-sensitive; the Dev Menu setting will not apply if the capitalization is incorrect.

Alternatively, running the game in [Data Folder Mode](TODO) will automatically enable the Dev Menu.

!!! note
    The entirety of the Dev Menu is removed in [Sonic Origins](/Games/SonicOrigins/README.md); as such, it's not possible to enable it normally. However, you can use the [OriginsDevMode](https://gamebanana.com/mods/473043) mod to restore it. Read the mod's description for more information and known issues.

## Debug Controls

### General
| Key                  | Command                                             |
| -------------------- | --------------------------------------------------- |
| ++escape++           | Opens/closes the Dev Menu.                          |
| ++backspace++        | While held down, speeds up the game to 8x speed.    |
| ++f12++ / ++pause++  | Toggles step-over mode.                             |
| ++f11++ / ++insert++ | If in step-over mode, steps over to the next frame. |

### Decomp Only
| Key     | Command                                                                                               |
| ------- | ----------------------------------------------------------------------------------------------------- |
| ++f1++  | Loads the previous scene in the scene list. If pressed in the first scene, it will load the last one. |
| ++f2++  | Loads the next scene in the scene list. If pressed in the last scene, it will load the first one.     |
| ++f4++  | Toggles displaying object info for visible entities. Not available in v5U's Legacy Modes.             |
| ++f5++  | Reloads the current scene. Holding ++control++ while pressing this will also reload all active mods.  |
| ++f6++  | Decrements the screen count by 1.                                                                     |
| ++f7++  | Increments the screen count by 1.                                                                     |
| ++f8++  | Toggles visualizing update ranges for visible entities. Not available in v5U's Legacy Modes.          |
| ++f9++  | Toggles visualizing active hitboxes.                                                                  |
| ++f10++ | Toggles displaying the currently loaded palettes.                                                     |

## Menu

You can open the Dev Menu at any time in-game by pressing ++escape++. In the [RSDKv5(U) Decompilation](../Decompilation.md), you can also tap/click the top left corner of the screen.

TODO: explain each submenu

## Other Effects

When the Dev Menu is enabled, `SceneInfo->debugMode` is set to `true` upon engine initialization.