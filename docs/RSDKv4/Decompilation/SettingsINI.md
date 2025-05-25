# settings.ini

settings.ini is the configuration file for the [RSDKv4 Decompilation](README.md). This page lists all of the available options.

## Dev
| Setting Name         | Description                                                                                                         | Value Type                                                          | Default Value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------- |
| **DevMenu**          | Determines if the [Dev Menu] is enabled.                                                                            | Boolean                                                             | `false`       |
| **EngineDebugMode**  | When enabled, writes all log output to a file named `log.txt`.                                                      | Boolean                                                             | `false`       |
| **TxtScripts**       | When enabled, forces the engine to load the decompiled scripts instead of Bytecode.                                 | Boolean                                                             | `false`       |
| **StartingCategory** | The stage category to start the game with. `255` disables this setting.[^1]                                         | Integer                                                             | `255`         |
| **StartingScene**    | The scene ID to start the game with. `255` disables this setting.[^1]                                               | Integer                                                             | `255`         |
| **StartingPlayer**   | The player to start the game with. `255` disables this setting.[^1]                                                 | Integer                                                             | `255`         |
| **StartingSaveFile** | The save file to start the game with. The previous three settings must be set to `255` for this one to take effect. | Integer (See [StartingSaveFile Options](#startingsavefile-options)) | `255`         |
| **FastForwardSpeed** | The amount the game speed will be multiplied by while [Dev Menu] fast-forwarding is active.                         | Integer                                                             | `8`           |
| **UseHQModes**       | When enabled, rendering for things such as the 3D Floors in Special Stages will use High Quality Mode.              | Boolean                                                             | `true`        |
| **DataFile**         | The filename of the first datapack to load.                                                                         | String                                                              | `Data.rsdk`   |

The following options aren't written to the file by default, but can be added manually:

| Setting Name  | Description                                  | Value Type |
| ------------- | -------------------------------------------- | ---------- |
| **DataFile2** | The filename of the second datapack to load. | String     |
| **DataFile3** | The filename of the third datapack to load.  | String     |
| **DataFile4** | The filename of the fourth datapack to load. | String     |

  [Dev Menu]: ../Overview/DevMenu.md

[^1]: StartingCategory, StartingScene, and StartingPlayer must all be set to `255` in order for the [start menu] to load.

### StartingSaveFile Options
| Setting Value | Save Slot   |
| ------------- | ----------- |
| **0**         | No Save     |
| **1**         | Save Slot 1 |
| **2**         | Save Slot 2 |
| **3**         | Save Slot 3 |
| **4**         | Save Slot 4 |
| **255**       | Disable     |

## Game
| Setting Name             | Description                                                                                                                                     | Value Type                                                            | Default Value |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------- |
| **Language**             | The language the game will use.                                                                                                                 | Integer (See [Languages](#languages))                                 | `0`           |
| **GameType**             | Determines if scripts will load Standalone (`0`) or Origins (`1`) code.                                                                         | Integer                                                               | `0`           |
| **SkipStartMenu**        | When enabled, bypasses the [start menu] and instead loads the first scene in the Presentation stage list. This does not disable the pause menu. | Boolean                                                               | `false`       |
| **DisableFocusPause**    | Determines the pausing behavior when focus is lost.                                                                                             | Integer (See [DisableFocusPause Options](#disablefocuspause-options)) | `0`           |

  [start menu]: TODO

### Languages
| Setting Value | Language              |
| ------------- | --------------------- |
| **0**         | English               |
| **1**         | French                |
| **2**         | Italian               |
| **3**         | German                |
| **4**         | Spanish               |
| **5**         | Japanese              |
| **6**         | Portuguese            |
| **7**         | Russian               |
| **8**         | Korean                |
| **9**         | Chinese (Traditional) |
| **10**        | Chinese (Simplified)  |

### DisableFocusPause Options
| Setting Value | Option                                     |
| ------------- | ------------------------------------------ |
| **0**         | Game focus enabled, engine focus enabled   |
| **1**         | Game focus disabled, engine focus enabled  |
| **2**         | Game focus enabled, engine focus disabled  |
| **3**         | Game focus disabled, engine focus disabled |

## Network
| Setting Name  | Description                                                          | Value Type | Default Value |
| ------------- | -------------------------------------------------------------------- | ---------- | ------------- |
| **Host**      | The host (IP address or "URL") that the game will try to connect to. | String     | `127.0.0.1`   |
| **Port**      | The port the game will try to connect to.                            | Integer    | `50`          |

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

## Audio
| Setting Name  | Description                                                   | Value Type | Default Value |
| ------------- | ------------------------------------------------------------- | ---------- | ------------- |
| **BGMVolume** | The volume of background music. Range is from `0.0` to `1.0`. | Float      | `1.000000`    |
| **SFXVolume** | The volume of sound effects. Range is from `0.0` to `1.0`.    | Float      | `1.000000`    |

## Keyboard 1

!!! note
    Despite what the name of this category may imply, RSDKv4 does not support more than one local player.

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
| **X**        | `4` ( ++a++ )      |
| **Y**        | `22` ( ++s++ )     |
| **Z**        | `7` ( ++d++ )      |
| **Start**    | `40` ( ++enter++ ) |
| **Select**   | `43` ( ++tab++ )   |

## Controller 1

!!! note
    Despite what the name of this category may imply, RSDKv4 does not support more than one local player.

These controller mapping settings take integer values. See [Controller Buttons](#controller-buttons) for a list of buttons and their corresponding IDs.

| Setting Name | Default Value        |
| ------------ | -------------------- |
| **Up**       | `11` (D-Pad Up)      |
| **Down**     | `12` (D-Pad Down)    |
| **Left**     | `13` (D-Pad Left)    |
| **Right**    | `14` (D-Pad Right)   |
| **A**        | `0` (A)              |
| **B**        | `1` (B)              |
| **C**        | `2` (X)              |
| **X**        | `3` (Y)              |
| **Y**        | `22` (Left Trigger)  |
| **Z**        | `23` (Right Trigger) |
| **Start**    | `6` (Start)          |
| **Select**   | `5` (Guide)          |

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
