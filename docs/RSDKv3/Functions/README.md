# RSDKv3 Functions

## 3D
| Function                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| [**Draw3DScene**](3D/Draw3DScene.md)               | Draws the active 3DScene data to the screen.                           |
| [**SetIdentityMatrix**](3D/SetIdentityMatrix.md)   | Sets the matrix of `MatID` to the identity state.                      |
| [**MatrixMultiply**](3D/MatrixMultiply.md)         | Multiplies `MatrixA` by `MatrixB`.                                     |
| [**MatrixTranslateXYZ**](3D/MatrixTranslateXYZ.md) | Translates `Matrix` to `TranslateX`, `TranslateY` and `TranslateZ`.    |
| [**MatrixScaleXYZ**](3D/MatrixScaleXYZ.md)         | Scales `Matrix` to `ScaleX`, `ScaleY` and `ScaleZ`.                    |
| [**MatrixRotate**](3D/MatrixRotate.md)             | Rotates `Matrix` to `Angle` on the specified axis.                     |
| [**MatrixRotateXYZ**](3D/MatrixRotateXYZ.md)       | Rotates `Matrix` to `AngleX`, `AngleY` and `AngleZ`.                   |
| [**TransformVertices**](3D/TransformVertices.md)   | Transform all vertices from `StartIndex` to `EndIndex` using `Matrix`. |

## Audio
| Function                                          | Description                                                                                           |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [**SetMusicTrack**](Audio/SetMusicTrack.md)       | Loads a music file in the given track slot with the given loop point.                                 |
| [**PlayMusic**](Audio/PlayMusic.md)               | Plays the music currently loaded in the given track slot.                                             |
| [**StopMusic**](Audio/StopMusic.md)               | Stops playing the currently playing music track, if one is playing.                                   |
| [**PauseMusic**](Audio/PauseMusic.md)             | Pauses the currently playing music track, if one is playing.                                          |
| [**ResumeMusic**](Audio/ResumeMusic.md)           | If a track has been paused with [PauseMusic()](Audio/PauseMusic.md), resumes playing the track.       |
| [**PlaySfx**](Audio/PlaySfx.md)                   | Plays the sound effect in the given slot in the GameConfig, looping it if set to do so.               |
| [**StopSfx**](Audio/StopSfx.md)                   | Stops all instances of the given sound effect slot in the GameConfig playing.                         |
| [**SetSfxAttributes**](Audio/SetSfxAttributes.md) | Sets the loop count and panning of the given sound effect slot in the GameConfig to the given values. |
| [**PlayStageSfx**](Audio/PlayStageSfx.md)         | Plays the sound effect in the given slot in the StageConfig, looping it if set to do so.              |
| [**StopStageSfx**](Audio/StopStageSfx.md)         | Stops all instances of the given sound effect slot in the StageConfig playing.                        |

## Drawing
| Function                                                    | Description                                                                                                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DrawTintRect**](Drawing/DrawTintRect.md)                 | Draws a tinted rectangle to `iXPos` and `iYPos` in screen-space.                                                                                        |
| [**LoadPalette**](Drawing/LoadPalette.md)                   | Loads a palette into `PalBank` starting from `StartPalIndex`, with an offset of `StartIndex` and reading all colors through to `EndIndex`.              |
| [**RotatePalette**](Drawing/RotatePalette.md)               | Rotates all colors in `PalBank` from `StartIndex` to `EndIndex`, moving left or right depending on `RotRight`.                                          |
| [**SetScreenFade**](Drawing/SetScreenFade.md)               | Adds a screen fade effect based on the `R`, `G`, `B` and `Alpha` values.                                                                                |
| [**SetActivePalette**](Drawing/SetActivePalette.md)         | Sets the active palette to `PalBank` for all vertical screen lines from `StartLine` to `EndLine`.                                                       |
| [**SetPaletteFade**](Drawing/SetPaletteFade.md)             | Blends the currectly active palette from `StartIndex` to `EndIndex` based on `R`, `G`, `B`, and `BlendAmount`, and stores the new palette in `DstBank`. |
| [**CopyPalette**](Drawing/CopyPalette.md)                   | Copies `SrcPal` into `DstPal`.                                                                                                                          |
| [**ClearScreen**](Drawing/ClearScreen.md)                   | Clears all pixels on screen with color `ClearIndex` from the active palette.                                                                            |
| [**DrawRect**](Drawing/DrawRect.md)                         | Draws a rectangle to `iXPos` and `iYPos` in screen-space, with a color based on the `R`, `G`, `B`, and `Alpha`.                                         |
| [**ClearDrawList**](Drawing/ClearDrawList.md)               | Removes all entries in drawList `Layer`.                                                                                                                |
| [**AddDrawListEntityRef**](Drawing/AddDrawListEntityRef.md) | Adds `ObjectPos` to drawList `Layer`.                                                                                                                   |
| [**GetDrawListEntityRef**](Drawing/GetDrawListEntityRef.md) | Gets `ObjectPos` in drawList `Layer` and stores it in `Store`.                                                                                          |
| [**SetDrawListEntityRef**](Drawing/SetDrawListEntityRef.md) | Sets `ObjectPos` in drawList `Layer` to `Value`.                                                                                                        |

## Graphics
| Function                                                   | Description                                                                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [**LoadSpriteSheet**](Graphics/LoadSpriteSheet.md)         | Loads a spritesheet and assigns the ID to `Object.SpriteSheet`.                                                                      |
| [**RemoveSpriteSheet**](Graphics/RemoveSpriteSheet.md)     | Removes the given spritesheet from memory, if it is already loaded.                                                                  |
| [**DrawSprite**](Graphics/DrawSprite.md)                   | Draws `Frame` at the object's X and Y position.                                                                                      |
| [**DrawSpriteXY**](Graphics/DrawSpriteXY.md)               | Draws `Frame` at a specified X and Y position.                                                                                       |
| [**DrawSpriteScreenXY**](Graphics/DrawSpriteScreenXY.md)   | Draws `Frame` at a specified X and Y position in screen-space.                                                                       |
| [**SpriteFrame**](Graphics/SpriteFrame.md)                 | Adds a SpriteFrame with the specified values.                                                                                        |
| [**EditFrame**](Graphics/EditFrame.md)                     | Edits the pivots, width, height, and sheet coordinates of `Frame`.                                                                   |
| [**DrawSpriteFX**](Graphics/DrawSpriteFX.md)               | Draws `Frame` at a specified X and Y position with visual effects.                                                                   |
| [**DrawSpriteScreenFX**](Graphics/DrawSpriteScreenFX.md)   | Draws `Frame` at a specified X and Y position in screen-space with visual effects.                                                   |
| [**LoadAnimation**](Graphics/LoadAnimation.md)             | Loads an animation file for the current object type.                                                                                 |
| [**ProcessAnimation**](Graphics/ProcessAnimation.md)       | Processes the current object's animation, based on the animation file loaded prior via [LoadAnimation()](Graphics/LoadAnimation.md). |
| [**DrawObjectAnimation**](Graphics/DrawObjectAnimation.md) | Draws an object's sprites from the animation file loaded prior via [LoadAnimation()](Graphics/LoadAnimation.md).                     |
| [**DrawPlayerAnimation**](Graphics/DrawPlayerAnimation.md) | Draws the player's sprites from the animation file loaded prior via [LoadAnimation()](Graphics/LoadAnimation.md).                    |

## Math
| Function                                   | Description                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [**Rand**](Math/Rand.md)                   | Gets a random value from 0 to `Max` (not inclusive) and stores it in `Store`.                         |
| [**Sin**](Math/Sin.md)                     | Gets the value from the `sin512` lookup table based on `Angle` and sets it in `Store`.                |
| [**Cos**](Math/Cos.md)                     | Gets the value from the `cos512` lookup table based on `Angle` and sets it in `Store`.                |
| [**Sin256**](Math/Sin256.md)               | Gets the value from the `sin256` lookup table based on `Angle` and sets it in `Store`.                |
| [**Cos256**](Math/Cos256.md)               | Gets the value from the `cos256` lookup table based on `Angle` and sets it in `Store`.                |
| [**ATan2**](Math/ATan2.md)                 | Performs an arctan operation using `X` and `Y`, storing the result in `Store`.                        |
| [**Interpolate**](Math/Interpolate.md)     | Linearly interpolates `X` and `Y` by `Percent` and stores the result in `Store`.                      |
| [**InterpolateXY**](Math/InterpolateXY.md) | Linearly interpolates two points at once and stores the result in `StoreX` and `StoreY` respectively. |
| [**Not**](Math/Not.md)                     | Performs a NOT operation on `Value`.                                                                  |
| [**GetBit**](Math/GetBit.md)               | Gets the binary bit at index `BitPos` from `Value` and stores it in `Store`.                          |
| [**SetBit**](Math/SetBit.md)               | Sets index `BitPos` of `Value` to `Bit` and updates `Value` accordingly.                              |

## Object
| Function                                                     | Description                                                                                                                 |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [**ResetObjectEntity**](Object/ResetObjectEntity.md)         | Resets an object in position `Slot` to the `Type`, `PropertyValue`, `XPos`, and `YPos` specified.                           |
| [**CreateTempObject**](Object/CreateTempObject.md)           | Creates a temporary object specified by `Type`, `PropertyValue`, `XPos` and `YPos` near the end of the object list.         |
| [**PlayerObjectCollision**](Object/PlayerObjectCollision.md) | Checks for collision of an object with the player, using the hitbox values passed.                                          |
| [**ProcessPlayerControl**](Object/ProcessPlayerControl.md)   | Handles player input variables and sidekick input buffering.                                                                |
| [**ObjectTileCollision**](Object/ObjectTileCollision.md)     | Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`. |
| [**ObjectTileGrip**](Object/ObjectTileGrip.md)               | Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`. |
| [**PlayerTileCollision**](Object/PlayerTileCollision.md)     | Handles tile collision of the player.                                                                                       |
| [**BindPlayerToObject**](Object/BindPlayerToObject.md)       | Binds a Player set to `ListPos` in the player list to entity slot number `EntityNo`.                                        |

## Stages
| Function                                                 | Description                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [**LoadStage**](Stages/LoadStage.md)                     | Loads a stage based on `Stage.ActiveList` and `Stage.ListPos`.                                 |
| [**SetLayerDeformation**](Stages/SetLayerDeformation.md) | Sets the deformation data array of `DeformID`, based on `DeformA` and `DeformB`.               |
| [**GetTileLayerEntry**](Stages/GetTileLayerEntry.md)     | Gets the ID of the chunk at `ChunkX`, `ChunkY` in tile layer `Layer` and stores it in `Store`. |
| [**SetTileLayerEntry**](Stages/SetTileLayerEntry.md)     | Sets the chunk at `ChunkX`, `ChunkY` in tile layer `Layer` to the index of `Value`.            |
| [**Get16x16TileInfo**](Stages/Get16x16TileInfo.md)       | Gets the value for `InfoTile` from the tile at `TileX`, `TileY` and stores it in `Store`.      |
| [**Set16x16TileInfo**](Stages/Set16x16TileInfo.md)       | Sets the value for `InfoType` from the tile at `TileX`, `TileY` to `Value`.                    |
| [**Copy16x16Tile**](Stages/Copy16x16Tile.md)             | Copies the tileset image data of `SrcTile` to `DstTile`.                                      |

## Miscellaneous
| Function                                         | Description                                                                                              |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| [**DrawMenu**](Misc/DrawMenu.md)                 | Draws `Menu` at `XPos` and `YPos` relative to the screen.                                                |
| [**SetupMenu**](Misc/SetupMenu.md)               | Sets up `Menu` with `RowCount` rows, `SelectionCount` active selections and aligning set to `Alignment`. |
| [**AddMenuEntry**](Misc/AddMenuEntry.md)         | Adds an entry to `Menu` with the contents of `Text`.                                                     |
| [**EditMenuEntry**](Misc/EditMenuEntry.md)       | Edits an entry of `Menu` with the contents of `Text` in `RowID`.                                         |
| [**LoadVideo**](Misc/LoadVideo.md)               | Loads and plays a video.                                                                                 |
| [**NextVideoFrame**](Misc/NextVideoFrame.md)     | Advances the video frame of an RSV video.                                                                |
| [**CheckTouchRect**](Misc/CheckTouchRect.md)     | Checks if there's a touch input between the given coordinates.                                           |
| [**ReadSaveRAM**](Misc/ReadSaveRAM.md)           | Reads the contents of the save file on disk into SaveRAM.                                                |
| [**WriteSaveRAM**](Misc/WriteSaveRAM.md)         | Writes the contents of SaveRAM to the save file on disk.                                                 |
| [**LoadTextFont**](Misc/LoadTextFont.md)         | Loads a bitmap font from `FilePath` for use with text menus.                                             |
| [**LoadTextFile**](Misc/LoadTextFile.md)         | Loads `Menu` based on the text file loaded from `FilePath`.                                              |
| [**DrawText**](Misc/DrawText.md)                 | Draws the contents of `menu`.                                                                            |
| [**GetTextInfo**](Misc/GetTextInfo.md)           | Gets the data of `Type` from `Menu` using `Index` and stores it in `Store`.                              |
| [**GetVersionNumber**](Misc/GetVersionNumber.md) | Adds a text entry to `Menu` with the engine's version as the text.                                       |
| [**SetAchievement**](Misc/SetAchievement.md)     | Sets the status of the given achievement.                                                                |
| [**SetLeaderboard**](Misc/SetLeaderboard.md)     | Submits the given score to the given leaderboard.                                                        |
| [**LoadOnlineMenu**](Misc/LoadOnlineMenu.md)     | Loads the data for the specified online menu.                                                            |
| [**EngineCallback**](Misc/EngineCallback.md)     | Sends a callback to the engine.                                                                          |