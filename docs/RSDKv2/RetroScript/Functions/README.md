# RSDKv2 Functions

## Audio
| Function                                          | Description                                                                                           |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [**SetMusicTrack**](Audio/SetMusicTrack.md)       | Loads a music file in the given track slot with the given loop point.                                 |
| [**PlayMusic**](Audio/PlayMusic.md)               | Plays the music currently loaded in the given track slot.                                             |
| [**StopMusic**](Audio/StopMusic.md)               | Stops playing the currently playing music track, if one is playing.                                   |
| [**PlaySfx**](Audio/PlaySfx.md)                   | Plays the sound effect in the given slot in the GameConfig, looping it if set to do so.               |
| [**StopSfx**](Audio/StopSfx.md)                   | Stops all instances of the given sound effect slot in the GameConfig playing.                         |
| [**SetSfxAttributes**](Audio/SetSfxAttributes.md) | Sets the loop count and panning of the given sound effect slot in the GameConfig to the given values. |
| [**PlayStageSfx**](Audio/PlayStageSfx.md)         | Plays the sound effect in the given slot in the StageConfig, looping it if set to do so.              |
| [**StopStageSfx**](Audio/StopStageSfx.md)         | Stops all instances of the given sound effect slot in the StageConfig playing.                        |

## Drawing
| Function                                      | Description                                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [**DrawTintRect**](Drawing/DrawTintRect.md)   | Draws a tinted rectangle to `iXPos` and `iYPos` in screen-space.                                                 |
| [**LoadPalette**](Drawing/LoadPalette.md)     | Loads a palette starting from `StartIndex` and reading all colors through to `EndIndex`.                         |
| [**RotatePalette**](Drawing/RotatePalette.md) | Rotates all colors in the palette from `StartIndex` to `EndIndex`, moving left or right depending on `RotRight`. |
| [**SetFade**](Drawing/SetFade.md)             | Blends the palette from `StartIndex` to `EndIndex` based on `R`, `G`, `B`, and `BlendAmount`.                    |
| [**SetWaterColor**](Drawing/SetWaterColor.md) | **Non-functional.**                                                                                              |
| [**SetBlendTable**](Drawing/SetBlendTable.md) | Generates a blend table with the specified values.                                                               |
| [**SetTintTable**](Drawing/SetTintTable.md)   | Generates a tint table with the specified values and saves it to `TableID`.                                      |
| [**ClearScreen**](Drawing/ClearScreen.md)     | Clears all pixels on screen with color `ClearIndex` from the palette.                                            |

## Graphics
| Function                                                 | Description                                                                                                |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [**DrawNumbers**](Graphics/DrawNumbers.md)               | Draws a number in screen-space.                                                                            |
| [**LoadSpriteSheet**](Graphics/LoadSpriteSheet.md)       | Loads a spritesheet into memory.                                                                           |
| [**RemoveSpriteSheet**](Graphics/RemoveSpriteSheet.md)   | Removes the given spritesheet from memory, if it is already loaded.                                        |
| [**DrawSprite**](Graphics/DrawSprite.md)                 | Draws `Frame` at the object's X and Y position.                                                            |
| [**DrawSpriteXY**](Graphics/DrawSpriteXY.md)             | Draws `Frame` at a specified X and Y position.                                                             |
| [**DrawSpriteScreenXY**](Graphics/DrawSpriteScreenXY.md) | Draws `Frame` at a specified X and Y position in screen-space.                                             |
| [**DrawSprite3D**](Graphics/DrawSprite3D.md)             | **Non-functional.**                                                                                        |
| [**SpriteFrame**](Graphics/SpriteFrame.md)               | Adds a SpriteFrame with the specified values.                                                              |
| [**DrawSpriteFX**](Graphics/DrawSpriteFX.md)             | Draws `Frame` at a specified X and Y position with visual effects.                                         |
| [**DrawSpriteScreenFX**](Graphics/DrawSpriteScreenFX.md) | Draws `Frame` at a specified X and Y position in screen-space with visual effects.                         |
| [**DrawLifeIcon**](Graphics/DrawLifeIcon.md)             | Draws the first player's life icon animation at frame `0` at a specified X and Y position in screen-space. |

## Math
| Function                                   | Description                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [**FlipSign**](Math/FlipSign.md)           | Flips the sign of the given variable; positive values will become negative values, and vice versa.     |
| [**CheckEqual**](Math/CheckEqual.md)       | Checks if `X` and `Y` are equal and stores the result in `CheckResult`.                                |
| [**CheckGreater**](Math/CheckGreater.md)   | Checks if `X` is greater than `Y` and stores the result in `CheckResult`.                              |
| [**CheckLower**](Math/CheckLower.md)       | Checks if `X` is lower than `Y` and stores the result in `CheckResult`.                                |
| [**CheckNotEqual**](Math/CheckNotEqual.md) | Checks if `X` and `Y` are not equal and stores the result in `CheckResult`.                            |
| [**Rand**](Math/Rand.md)                   | Gets a random value from 0 to `Max` (not inclusive) and stores it in `Store`.                          |
| [**Sin**](Math/Sin.md)                     | Gets the value from the `sin512` lookup table based on `Angle` and sets it in `Store`.                 |
| [**Cos**](Math/Cos.md)                     | Gets the value from the `cos512` lookup table based on `Angle` and sets it in `Store`.                 |
| [**Sin256**](Math/Sin256.md)               | Gets the value from the `sin256` lookup table based on `Angle` and sets it in `Store`.                 |
| [**Cos256**](Math/Cos256.md)               | Gets the value from the `cos256` lookup table based on `Angle` and sets it in `Store`.                 |
| [**SinChange**](Math/SinChange.md)         | Performs [Sin()](Math/Sin.md), then additional operations, before storing the final output in `Store`. |
| [**CosChange**](Math/CosChange.md)         | Performs [Cos()](Math/Cos.md), then additional operations, before storing the final output in `Store`. |
| [**ATan2**](Math/ATan2.md)                 | **Non-functional.**                                                                                    |
| [**Interpolate**](Math/Interpolate.md)     | Linearly interpolates `X` and `Y` by `Percent` and stores the result in `Store`.                       |
| [**InterpolateXY**](Math/InterpolateXY.md) | Linearly interpolates two points at once and stores the result in `StoreX` and `StoreY` respectively.  |
| [**Not**](Math/Not.md)                     | Performs a NOT operation on `Value`.                                                                   |

## Object
| Function                                                     | Description                                                                                                                 |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [**ResetObjectEntity**](Object/ResetObjectEntity.md)         | Resets an object in position `Slot` to the `Type`, `PropertyValue`, `XPos`, and `YPos` specified.                           |
| [**CreateTempObject**](Object/CreateTempObject.md)           | Creates a temporary object specified by `Type`, `PropertyValue`, `XPos` and `YPos` near the end of the object list.         |
| [**PlayerObjectCollision**](Object/PlayerObjectCollision.md) | Checks for collision of an object with the player, using the hitbox values passed.                                          |
| [**ObjectTileCollision**](Object/ObjectTileCollision.md)     | Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`. |
| [**ObjectTileGrip**](Object/ObjectTileGrip.md)               | Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`. |

## Player
| Function                                                       | Description                                                                               |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [**DefaultGroundMovement**](Player/DefaultGroundMovement.md)   | Processes the current player's ground friction, movement, and ground collision.           |
| [**DefaultAirMovement**](Player/DefaultAirMovement.md)         | Processes the current player's air acceleration and deceleration.                         |
| [**DefaultRollingMovement**](Player/DefaultRollingMovement.md) | Processes the current player's rolling acceleration and deceleration.                     |
| [**DefaultGravityTrue**](Player/DefaultGravityTrue.md)         | Calculates the current player's air rotation and gravity.                                 |
| [**DefaultGravityFalse**](Player/DefaultGravityFalse.md)       | Calculates the current player's X and Y velocities based on their ground speed and angle. |
| [**DefaultJumpAction**](Player/DefaultJumpAction.md)           | Sets up the required values for the current player to jump.                               |

## Stages
| Function                                 | Description                                                    |
| ---------------------------------------- | -------------------------------------------------------------- |
| [**DrawActName**](Stages/DrawActName.md) | Draws the current stage's title.                               |
| [**LoadStage**](Stages/LoadStage.md)     | Loads a stage based on `Stage.ActiveList` and `Stage.ListPos`. |

## Miscellaneous
| Function                                     | Description                                                                                              |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**DrawMenu**](Misc/DrawMenu.md)             | Draws `Menu` at `XPos` and `YPos` relative to the screen.                                                |
| [**SetupMenu**](Misc/SetupMenu.md)           | Sets up `Menu` with `RowCount` rows, `SelectionCount` active selections and aligning set to `Alignment`. |
| [**AddMenuEntry**](Misc/AddMenuEntry.md)     | Adds an entry to `Menu` with the contents of `Text`.                                                     |
| [**EditMenuEntry**](Misc/EditMenuEntry.md)   | Edits an entry of `Menu` with the contents of `Text` in `RowID`.                                         |
| [**LoadVideo**](Misc/LoadVideo.md)           | Loads and plays an RSV video.                                                                            |
| [**NextVideoFrame**](Misc/NextVideoFrame.md) | Advances the video frame of an RSV video.                                                                |
| [**SetDebugIcon**](Misc/SetDebugIcon.md)     | Sets the object icon used for the stage editor.                                                          |


DEFINED	0001b7b8	s_subObjectMain_0001b7b8	ds "subObjectMain"	"subObjectMain"	string	14	true
DEFINED	0001b7c8	s_subObjectPlayerInteraction_0001b7c8	ds "subObjectPlayerInteraction"	"subObjectPlayerInteraction"	string	27	true
DEFINED	0001b7e4	s_subObjectDraw_0001b7e4	ds "subObjectDraw"	"subObjectDraw"	string	14	true
DEFINED	0001b7f4	s_subObjectStartup_0001b7f4	ds "subObjectStartup"	"subObjectStartup"	string	17	true
DEFINED	0001b808	s_subPlayerMain_0001b808	ds "subPlayerMain"	"subPlayerMain"	string	14	true
DEFINED	0001b818	s_subPlayerState_0001b818	ds "subPlayerState"	"subPlayerState"	string	15	true
DEFINED	0001b82c	s_endsub_0001b82c	ds "endsub"	"endsub"	string	7	true