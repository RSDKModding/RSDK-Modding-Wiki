# Default Menu

![Default Menu](/assets/images/SonicNexus/DefaultMenu/MainMenu-Windows.png){ align=right , width="30%" }

The Default Menu is a debug menu included with [RSDKv2](../README.md), disabled by default. The menu includes several features useful for debugging games in the engine.

## Enabling
The Default Menu can be enabled by using [Data Folder Mode](TODO).

In the [decompilation](../Decompilation.md), you can also set `DevMenu` to `true` in the settings.ini file, like so:

``` ini hl_lines="3"
[Dev]
; Enable this flag to activate dev menu via the ESC key
DevMenu=true ; (1)!
; Enable this flag to activate features used for debugging the engine (may result in slightly slower game speed)
EngineDebugMode=false
; Sets the starting category ID
StartingCategory=255
...
```

1. Make sure that the decomp is not running while editing settings.ini; otherwise, your changes will be reverted upon closing the decomp.

## Decomp Debug Controls

| Key                                  | Command                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ++escape++                           | Opens the Default Menu.                                                                               |
| ++backspace++                        | While held down, speeds up the game to 8x speed.                                                      |
| ++f12++ / ++pause++ (++f7++ on Mac)  | Toggles step-over mode.                                                                               |
| ++f11++ / ++insert++ (++f6++ on Mac) | If in step-over mode, steps over to the next frame.                                                   |
| ++f1++                               | Loads the first scene in the Presentation stage list.                                                 |
| ++f2++                               | Loads the previous scene in the scene list. If pressed in the first scene, it will load the last one. |
| ++f3++                               | Loads the next scene in the scene list. If pressed in the last scene, it will load the first one.     |
| ++f5++                               | Reloads the current scene.                                                                            |

## Menu

The Default Menu opens automatically upon booting up the game while it's enabled. In the [RSDKv2 Decompilation](../Decompilation/README.md), you can also open it at any time by pressing ++escape++.

TODO: explain each submenu
