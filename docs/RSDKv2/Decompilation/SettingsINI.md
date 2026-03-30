# settings.ini

settings.ini is the configuration file for the [RSDKv2 Decompilation](README.md). This page lists all of the available options.

## Dev
| Setting Name         | Description                                                                                                        | Value Type | Default Value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| **DevMenu**          | Determines if the [Default Menu] is enabled.                                                                       | Boolean    | `false`       |
| **EngineDebugMode**  | When enabled, writes all log output to a file named `log.txt`.                                                     | Boolean    | `false`       |
| **StartingCategory** | The stage category to start the game with.                                                                         | Integer    | `255`         |
| **StartingScene**    | The scene ID to start the game with.                                                                               | Integer    | `255`         |
| **FastForwardSpeed** | The amount the game speed will be multiplied by while [Default Menu] fast-forwarding is active.                    | Integer    | `8`           |
| **DataFile**         | The filename of the datapack to load.                                                                              | String     | `Data.bin`    |

  [Default Menu]: ../Overview/DefaultMenu.md

## Window
| Setting Name         | Description                                                                                                         | Value Type                                  | Default Value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------- |
| **FullScreen**       | Determines if the game will be in fullscreen.                                                                       | Boolean                                     | `false`       |
| **Borderless**       | Determines if the game window will be borderless.                                                                   | Boolean                                     | `false`       |
| **VSync**            | Determines if VSync will be active. **Not recommended with refresh rates above 60 Hz.**                             | Boolean                                     | `false`       |
| **EnhancedScaling**  | Determines if Enhanced Scaling is enabled. Only affects non-multiple resolutions.                                   | Boolean                                     | `false`       |
| **WindowScale**      | The multiplier of the scale of the window.                                                                          | Integer                                     | `2`           |
| **ScreenWidth**      | The width of the game's base screen. This does not account for the window scale.                                    | Integer                                     | `320`         |
| **RefreshRate**      | The refresh rate used.                                                                                              | Integer                                     | `60`          |
| **ColourMode**       | Determines the mode used for colour output.                                                                         | Integer (See [Colour Modes](#colour-modes)) | `0`           |

### Colour Modes
| Setting Value | Colour Mode |
| ------------- | ----------- |
| **0**         | 8-bit       |
| **1**         | 16-bit      |
| **2**         | 32-bit      |

## Audio
| Setting Name  | Description                                                   | Value Type | Default Value |
| ------------- | ------------------------------------------------------------- | ---------- | ------------- |
| **BGMVolume** | The volume of background music. Range is from `0.0` to `1.0`. | Float      | `1.000000`    |
| **SFXVolume** | The volume of sound effects. Range is from `0.0` to `1.0`.    | Float      | `1.000000`    |

## Keyboard 1

!!! note
    Despite what the name of this category may imply, RSDKv2 does not support more than one player.

All settings for this category take an integer value based on SDL's Scancodes. See [this lookup table](https://wiki.libsdl.org/SDL2/SDLScancodeLookup) for a list of usable keys and their corresponding decimal values.

| Setting Name | Default Value      |
| ------------ | ------------------ |
| **Up**       | `82` ( ++up++ )    |
| **Down**     | `81` ( ++down++ )  |
| **Left**     | `80` ( ++left++ )  |
| **Right**    | `79` ( ++right++ ) |
| **A**        | `4` ( ++a++ )      |
| **B**        | `22` ( ++s++ )     |
| **C**        | `7` ( ++d++ )      |
| **Start**    | `40` ( ++enter++ ) |

## Controller 1

!!! note
    Despite what the name of this category may imply, RSDKv2 does not support more than one player.

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
