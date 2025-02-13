# Dev Menu

![Dev Menu](/assets/images/Sonic1/DevMenu/MainMenu-Mobile.png){ align=right , width="30%" }

The Dev Menu is a debug menu included with [RSDKv4](../README.md), disabled by default. The menu includes several features useful for debugging games in the engine.

## Enabling
The Dev Menu is normally inaccessible, however in the [RSDKv4 Decompilation](../Decompilation.md), it can be enabled by setting `DevMenu` to `true` in the settings.ini file, like so:

``` ini hl_lines="3"
[Dev]
; Enable this flag to activate dev menu via the ESC key
DevMenu=true ; (1)!
; Enable this flag to activate features used for debugging the engine (may result in slightly slower game speed)
EngineDebugMode=false
; Enable this flag to force the engine to load from the scripts folder instead of from bytecode
TxtScripts=false
...
```

1. Make sure that the decomp is not running while editing settings.ini; otherwise, your changes will be reverted upon closing the decomp.

## Decomp Debug Controls

| Key                                  | Command                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ++escape++                           | Opens the Dev Menu.                                                                                   |
| ++backspace++                        | While held down, speeds up the game to 8x speed.                                                      |
| ++f12++ / ++pause++ (++f7++ on Mac)  | Toggles step-over mode.                                                                               |
| ++f11++ / ++insert++ (++f6++ on Mac) | If in step-over mode, steps over to the next frame.                                                   |
| ++f1++                               | Loads the first scene in the Presentation stage list.                                                 |
| ++f2++                               | Loads the previous scene in the scene list. If pressed in the first scene, it will load the last one. |
| ++f3++                               | Loads the next scene in the scene list. If pressed in the last scene, it will load the first one.     |
| ++f5++                               | Reloads the current scene.                                                                            |
| ++f8++                               | Toggles visualizing active touchscreen hitboxes.                                                      |
| ++f9++                               | Toggles visualizing active hitboxes.                                                                  |
| ++f10++                              | Toggles displaying the currently loaded palettes.                                                     |

## Menu

You can open the Dev Menu at any time in the [RSDKv4 Decompilation](../Decompilation.md) by pressing ++escape++ or by selecting it in the Help & Options or pause menus.

TODO: explain each submenu

## Other Effects

When the Dev Menu is enabled in the [RSDKv4 Decompilation](../Decompilation.md), the global variable `options.devMenuFlag` is set to `true` upon loading the GameConfig, if such global variable exists.