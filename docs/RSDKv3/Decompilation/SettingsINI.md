# settings.ini

settings.ini is the configuration file for the [RSDKv3 Decompilation](README.md). This page lists all of the available options.

## Dev
| Setting Name         | Description                                                                                                        | Value Type | Default Value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| **DevMenu**          | Determines if the [Dev Menu] is enabled.                                                                           | Boolean    | `false`       |
| **EngineDebugMode**  | When enabled, writes all log output to a file named `log.txt`.                                                     | Boolean    | `false`       |
| **TxtScripts**       | When enabled, forces the engine to load the decompiled scripts instead of Bytecode.                                | Boolean    | `false`       |
| **StartingCategory** | The stage category to start the game with.                                                                         | Integer    | `0`           |
| **StartingScene**    | The scene ID to start the game with.                                                                               | Integer    | `0`           |
| **FastForwardSpeed** | The amount the game speed will be multiplied by while [Dev Menu] fast-forwarding is active.                        | Integer    | `8`           |
| **UseSteamDir**      | When enabled, the game will attempt to use the save file for the Steam Blit release of Sonic CD. **Windows only.** | Boolean    | `false`       |
| **UseHQModes**       | When enabled, rendering for things such as the 3D Floors in Special Stages will use High Quality Mode.             | Boolean    | `true`        |
| **DataFile**         | The filename of the datapack to load.                                                                              | String     | `Data.rsdk`   |

  [Dev Menu]: ../Overview/DevMenu.md

## Game
| Setting Name             | Description                                                                    | Value Type                                                           | Default Value                         |
| ------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------- |
| **Language**             | The language the game will use.                                                | Integer (See [Languages](#languages)                                 | `0`                                   |
| **GameType**             | Determines if scripts will load Standalone (`0`) or Origins (`1`) code.        | Integer                                                              | `0`                                   |
| **OriginalControls**     | Overrides the Spin Dash option for Sonic CD.                                   | Integer (See [OriginalControls Options](#originalcontrols-options)   | `-1`                                  |
| **DisableTouchControls** | When enabled, the engine will forcibly hide touch controls UI.[^1]             | Boolean                                                              | `false`                               |
| **DisableFocusPause**    | The pausing behavior when focus is lost.                                       | Integer (See [DisableFocusPause Options](#disablefocuspause-options) | `0`                                   |
| **Platform**             | The platform type that the scripts will use. `0` for standard, `1` for mobile. | Integer                                                              | `1` on mobile, `0` on other platforms |

[^1]: This is achieved by not drawing sprites using the spritesheet `Global/DPad.gif` and not running the [ObjectDraw](../Subs.md#objectdraw) sub for objects named `TouchControls` while in the Special stage list.

### Languages
| Setting Value | Language |
| ------------- | -------- |
| **0**         | English  |
| **1**         | French   |
| **2**         | Italian  |
| **3**         | German   |
| **4**         | Spanish  |
| **5**         | Japanese |

### OriginalControls Options
| Setting Value | Option               |
| ------------- | -------------------- |
| **-1**        | Let save file decide |
| **0**         | Genesis              |
| **1**         | Original             |

### DisableFocusPause Options
| Setting Value | Option                                     |
| ------------- | ------------------------------------------ |
| **0**         | Game focus enabled, engine focus enabled   |
| **1**         | Game focus enabled, engine focus disabled  |
| **2**         | Game focus disabled, engine focus disabled |

## Window
| Setting Name         | Description                                                                                                         | Value Type | Default Value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| **FullScreen**       | Determines if the game will be in fullscreen.                                                                       | Boolean    | `false`       |
| **Borderless**       | Determines if the game window will be borderless.                                                                   | Boolean    | `false`       |
| **VSync**            | Determines if VSync will be active. **Not recommended with refresh rates above 60 Hz.**                             | Boolean    | `false`       |
| **ScalingMode**      | The scaling mode. `0` for Nearest Neighbor, `1` for Linear.                                                         | Integer    | `0`           |
| **WindowScale**      | The multiplier of the scale of the window.                                                                          | Integer    | `2`           |
| **ScreenWidth**      | The width of the game's base screen. This does not account for the window scale. This setting is ignored on mobile. | Integer    | `424`         |
| **RefreshRate**      | The refresh rate used for the screen idle dim.                                                                      | Integer    | `60`          |
| **DimLimit**         | The amount of time, in seconds, that it takes for the screen idle dim to activate. `-1` will disable the dim.       | Integer    | `300`         |
| **HardwareRenderer** | When enabled, use the mobile version's Hardware Renderer instead of the other versions' Software Renderer.          | Boolean    | `false`       |

## Audio
| Setting Name  | Description                                                   | Value Type | Default Value |
| ------------- | ------------------------------------------------------------- | ---------- | ------------- |
| **BGMVolume** | The volume of background music. Range is from `0.0` to `1.0`. | Float      | `1.000000`    |
| **SFXVolume** | The volume of sound effects. Range is from `0.0` to `1.0`.    | Float      | `1.000000`    |

## Keyboard 1

!!! note
    Despite what the name of this category may imply, RSDKv3 does not support more than one player.

All settings for this category take an integer value based on SDL's Scancodes. See [this lookup table](https://wiki.libsdl.org/SDL2/SDLScancodeLookup) for a list of usable keys and their corresponding decimal values.

| Setting Name | Default Value      |
| ------------ | ------------------ |
| **Up**       | `82` ( ++up++ )    |
| **Down**     | `81` ( ++down++ )  |
| **Left**     | `80` ( ++left++ )  |
| **Right**    | `79` ( ++right++ ) |
| **A**        | `29` ( ++z++ )     |
| **B**        | `27` ( ++x++ )     |
| **C**        | `6` ( ++c++ )      |
| **Start**    | `40` ( ++enter++ ) |

## Controller 1

!!! note
    Despite what the name of this category may imply, RSDKv3 does not support more than one player.

These controller mapping settings take integer values. See [Controller Buttons](#controller-buttons) for a list of buttons and their corresponding IDs.

| Setting Name | Default Value      |
| ------------ | ------------------ |
| **Up**       | `11` (D-Pad Up)    |
| **Down**     | `12` (D-Pad Down)  |
| **Left**     | `13` (D-Pad Left)  |
| **Right**    | `14` (D-Pad Right) |
| **A**        | `0` (A)            |
| **B**        | `1` (B)            |
| **C**        | `2` (X)            |
| **Start**    | `6` (Start)        |

These deadzone settings take floats values. Range is from `0.0` to `1.0`.

| Setting Name         | Default Value |
| -------------------- | ------------- |
| **LStickDeadzone**   | `0.300000`    |
| **RStickDeadzone**   | `0.300000`    |
| **LTriggerDeadzone** | `0.300000`    |
| **RTriggerDeadzone** | `0.300000`    |

### Controller Buttons
| Setting Value | Controller Button                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **0**         | A                                                                                                                           |
| **1**         | B                                                                                                                           |
| **2**         | X                                                                                                                           |
| **3**         | Y                                                                                                                           |
| **4**         | Back                                                                                                                        |
| **5**         | Guide                                                                                                                       |
| **6**         | Start                                                                                                                       |
| **7**         | Left Stick Press                                                                                                            |
| **8**         | Right Stick Press                                                                                                           |
| **9**         | Left Shoulder                                                                                                               |
| **10**        | Right Shoulder                                                                                                              |
| **11**        | D-Pad Up                                                                                                                    |
| **12**        | D-Pad Down                                                                                                                  |
| **13**        | D-Pad Left                                                                                                                  |
| **14**        | D-Pad Right                                                                                                                 |
| **15**        | Misc (Xbox Series X share button, PS5 microphone button, Nintendo Switch Pro capture button, Amazon Luna microphone button) |
| **16**        | Paddle 1 (Xbox Elite paddle P1; upper left, facing the back)                                                                |
| **17**        | Paddle 2 (Xbox Elite paddle P3; upper right, facing the back)                                                               |
| **18**        | Paddle 3 (Xbox Elite paddle P2; lower left, facing the back)                                                                |
| **19**        | Paddle 4 (Xbox Elite paddle P4; lower right, facing the back)                                                               |
| **20**        | PS4/PS5 Touchpad Button                                                                                                     |
| **22**        | Left Trigger                                                                                                                |
| **23**        | Right Trigger                                                                                                               |
| **24**        | Left Stick Up                                                                                                               |
| **25**        | Left Stick Down                                                                                                             |
| **26**        | Left Stick Left                                                                                                             |
| **27**        | Left Stick Right                                                                                                            |
| **28**        | Right Stick Up                                                                                                              |
| **29**        | Right Stick Down                                                                                                            |
| **30**        | Right Stick Left                                                                                                            |
| **31**        | Right Stick Right                                                                                                           |
