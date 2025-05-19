# Dev Menu

![Dev Menu](/assets/images/SonicNexus/DevMenu/MainMenu.png){ align=right , width="30%" }

The Dev Menu is a debug menu included with [RSDKv2](../README.md), disabled by default. The menu includes several features useful for debugging games in the engine.

## Enabling
The Dev Menu can be enabled by setting `DevMenu` to `true` in the settings.ini file, like so:

``` ini hl_lines="3"
[Dev]
; Enable this flag to activate dev menu via the ESC key
DevMenu=true ; (1)!
; Enable this flag to activate features used for debugging the engine (may result in slightly slower game speed)
EngineDebugMode=false
; Sets the starting category ID
StartingCategory=0
...
```

    1. Make sure that the decomp is not running while editing settings.ini; otherwise, your changes will be reverted upon closing the decomp.

## Decomp Debug Controls

| Key                                  | Command                                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| ++escape++                           | Opens the Dev Menu.                                                                                            |
| ++backspace++                        | While held down, speeds up the game to 8x speed.                                                               |
| ++f12++ / ++pause++ (++f7++ on Mac)  | Toggles step-over mode.                                                                                        |
| ++f11++ / ++insert++ (++f6++ on Mac) | If in step-over mode, steps over to the next frame.                                                            |
| ++f1++                               | Loads the first scene in the Presentation stage list.                                                          |
| ++f2++                               | Loads the previous scene in the scene list. Although, pressing it on the first scene will cause visual errors. |
| ++f3++                               | Loads the next scene in the scene list. Although, pressing it on the last scene will cause visual errors.      |

## Menu

TODO: explain each submenu

## Other Effects

![Dev Menu](/assets/images/SonicNexus/Gameplay/Sunset-Shores.png){ align=left , width="60%" }
If one were to press up on the Player select screen and press select, the game will try to load a Player in slot `-1`. Since no such character exists, the game will try to "load" graphics for the nonexistent Player. This can also happen on the Stage Select screen, though it generally has the same effect if a stage without any tileset or object data is loaded.