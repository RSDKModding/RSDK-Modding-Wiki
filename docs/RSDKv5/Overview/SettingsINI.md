# Settings.ini

Settings.ini is the configuration file for [RSDKv5](../README.md). This page lists all of the available options.

Legend for the "Hidden?" columns:

- :heavy_multiplication_x: - The setting is always written to the file.
- :simple-devbox: - The setting is only written to the file if the [Dev Menu] is enabled.
- :fontawesome-solid-floppy-disk: - The setting is only written to the file when [SetVideoSetting](TODO) is called with `id` and `value` set to `VIDEOSETTING_WRITE` and `true`, respectively (i.e. the game saves your options after changing them).
- :heavy_check_mark: - The setting is never written to the file and must be added manually. Keep in mind that setting names are case-sensitive.

## Game
| Setting Name                  | Description                                                                                                                                                                                           | Hidden?                                         | Decomp Only?             | Value Type                            | Default Value |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------ | ------------------------------------- | ------------- |
| **dataFile**                  | The filename of the datapack to load.                                                                                                                                                                 | :heavy_check_mark:                              | :heavy_multiplication_x: | String                                | `Data.rsdk`   |
| **devMenu**                   | Determines if the [Dev Menu] is enabled.                                                                                                                                                              | :heavy_check_mark:                              | :heavy_multiplication_x: | Boolean                               | `n`           |
| **gameLogic**                 | The filename of the logic file to load, excluding the file extension and Linux's `lib` binary name prefix. The engine will automatically use the appropriate file extension for the current platform. | :heavy_check_mark:                              | :heavy_check_mark:       | String                                | `Game`        |
| **faceButtonFlip**            | When enabled, flips the "confirm" and "back" buttons, as well as the X and Y buttons.                                                                                                                 | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Boolean                               | `n`           |
| **enableControllerDebugging** | When enabled, allows using controller buttons to use some [Dev Menu] features.                                                                                                                        | :fontawesome-solid-floppy-disk: :simple-devbox: | :heavy_check_mark:       | Boolean                               | `n`           |
| **disableFocusPause**         | When enabled, disables pausing when focus is lost.                                                                                                                                                    | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Boolean                               | `n`           |
| **fastForwardSpeed**          | The amount the game speed will be multiplied by while [Dev Menu] fast-forwarding is active.                                                                                                           | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Integer                               | `8`           |
| **username**                  | The username for the usercore.                                                                                                                                                                        | :heavy_check_mark:                              | :heavy_check_mark:       | String                                | (None)        |
| **region**                    | The region the game will use.                                                                                                                                                                         | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Integer (See [Regions](#regions))     | `-1`          |
| **txtScripts**                | When enabled, forces the engine to load the decompiled scripts instead of Bytecode in legacy modes. **RSDKv5U only.**                                                                                 | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Boolean                               | `n`           |
| **gameType**                  | Determines if scripts will load Standalone (`0`) or Origins (`1`) code in legacy modes. **RSDKv5U only.**                                                                                             | :fontawesome-solid-floppy-disk:                 | :heavy_check_mark:       | Integer                               | `1`           |
| **language**                  | The language the game will use.                                                                                                                                                                       | :heavy_multiplication_x:                        | :heavy_multiplication_x: | Integer (See [Languages](#languages)) | `0`           |

  [Dev Menu]: ../Overview/DevMenu.md

### Regions
| Setting Value | Region      |
| ------------- | ----------- |
| **-1**        | Auto-detect |
| **0**         | US          |
| **1**         | JP          |
| **2**         | EU          |

### Languages
| Setting Value | Language              |
| ------------- | --------------------- |
| **0**         | English               |
| **1**         | French                |
| **2**         | Italian               |
| **3**         | German                |
| **4**         | Spanish               |
| **5**         | Japanese              |
| **6**         | Korean                |
| **7**         | Chinese (Simplified)  |
| **8**         | Chinese (Traditional) |

## Video
| Setting Name        | Description                                                                                                         | Hidden?                         | Decomp Only?             | Value Type                                      | Default Value |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------ | ----------------------------------------------- | ------------- |
| **windowed**        | Determines whether the game will be in fullscreen or windowed mode.                                                 | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `y`           |
| **border**          | Determines if the window will be bordered in windowed mode.                                                         | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `y`           |
| **exclusiveFS**     | Determines if fullscreen will use exclusive fullscreen.                                                             | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `n`           |
| **vsync**           | Determines if VSync will be active. **Not recommended with refresh rates above 60 Hz.**                             | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `n`           |
| **tripleBuffering** | Determines if triple buffering is enabled.                                                                          | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `n`           |
| **pixWidth**        | The width of the game's base screen. This does not account for the window width. This setting is ignored on mobile. | :fontawesome-solid-floppy-disk: | :heavy_multiplication_x: | Integer                                         | `424`         |
| **winWidth**        | The width of the window in pixels. This setting does not affect fullscreen.                                         | :heavy_multiplication_x:        | :heavy_multiplication_x: | Integer                                         | `424`         |
| **winHeight**       | The height of the window in pixels. This setting does not affect fullscreen.                                        | :heavy_multiplication_x:        | :heavy_multiplication_x: | Integer                                         | `240`         |
| **fsWidth**         | The width of the screen in fullscreen.                                                                              | :heavy_check_mark:              | :heavy_multiplication_x: | Integer                                         | `0`           |
| **fsHeight**        | The height of the screen in fullscreen.                                                                             | :heavy_check_mark:              | :heavy_multiplication_x: | Integer                                         | `0`           |
| **refreshRate**     | The refresh rate used for the screen idle dim.                                                                      | :heavy_check_mark:[^1]          | :heavy_multiplication_x: | Integer                                         | `60`          |
| **shaderSupport**   | Determines whether shaders are enabled.                                                                             | :heavy_multiplication_x:        | :heavy_multiplication_x: | Boolean                                         | `y`           |
| **screenShader**    | The screen shader to use.                                                                                           | :heavy_multiplication_x:        | :heavy_multiplication_x: | Integer (See [Screen Shaders](#screen-shaders)) | `0`           |
| **maxPixWidth**     | The maximum pixel width allowed. `-1` will disable the limit.                                                       | :heavy_multiplication_x:        | :heavy_check_mark:       | Integer                                         | `424`         |

[^1]: Not hidden on the decompilation.

### Screen Shaders
| Setting Value | Screen Shader |
| ------------- | ------------- |
| **0**         | None          |
| **1**         | Clean         |
| **2**         | CRT-Sharp     |
| **3**         | CRT-Soft      |

## Audio
| Setting Name        | Description                                                   | Hidden?                  | Decomp Only?             | Value Type | Default Value |
| ------------------- | ------------------------------------------------------------- | ------------------------ | ------------------------ | ---------- | ------------- |
| **streamsEnabled**  | Determines whether background music is enabled.               | :heavy_multiplication_x: | :heavy_multiplication_x: | Boolean    | `y`           |
| **streamVolume**    | The volume of background music. Range is from `0.0` to `1.0`. | :heavy_multiplication_x: | :heavy_multiplication_x: | Float      | `0.8`         |
| **sfxVolume**       | The volume of sound effects. Range is from `0.0` to `1.0`.    | :heavy_multiplication_x: | :heavy_multiplication_x: | Float      | `1.0`         |

## Keyboard Map 1-4

All settings for these categories take an integer value based on virtual-key codes. See [this table](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes) for a list of usable keys and their corresponding values.

!!! note
    Keyboard Map 3 and 4 have no default keyboard bindings.

| Setting Name | Default Value (P1)   | Default Value (P2)           |
| ------------ | -------------------- | ---------------------------- |
| **up**       | `0x26` ( ++up++ )    | `0x68` ( ++num8++ )          |
| **down**     | `0x28` ( ++down++ )  | `0x65` ( ++num5++ )          |
| **left**     | `0x25` ( ++left++ )  | `0x64` ( ++num4++ )          |
| **right**    | `0x27` ( ++right++ ) | `0x66` ( ++num6++ )          |
| **buttonA**  | `0x41` ( ++a++ )     | `0x4a` ( ++j++ )             |
| **buttonB**  | `0x53` ( ++s++ )     | `0x4b` ( ++k++ )             |
| **buttonC**  | `0x44` ( ++d++ )     | `0x0` (Unbound)              |
| **buttonX**  | `0x51` ( ++q++ )     | `0x55` ( ++u++ )             |
| **buttonY**  | `0x57` ( ++w++ )     | `0x49` ( ++i++ )             |
| **buttonZ**  | `0x45` ( ++e++ )     | `0x0` (Unbound)              |
| **start**    | `0xd` ( ++enter++ )  | `0xdb` ( ++bracket-left++ )  |
| **select**   | `0x9` ( ++tab++ )    | `0xdd` ( ++bracket-right++ ) |
