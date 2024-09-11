# RSDKv4 Functions

## 3D
| Function                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| [**Draw3DScene**](3D/Draw3DScene.md)               | Draws the active 3DScene data to the screen.                           |
| [**SetIdentityMatrix**](3D/SetIdentityMatrix.md)   | Sets the matrix of `matID` to the identity state.                      |
| [**MatrixMultiply**](3D/MatrixMultiply.md)         | Multiplies `matrixA` by `matrixB`.                                     |
| [**MatrixTranslateXYZ**](3D/MatrixTranslateXYZ.md) | Translates `matrix` to `translateX`, `translateY` and `translateZ`.    |
| [**MatrixScaleXYZ**](3D/MatrixScaleXYZ.md)         | Scales `matrix` to `scaleX`, `scaleY` and `scaleZ`.                    |
| [**MatrixRotate**](3D/MatrixRotate.md)             | Rotates `matrix` to `angle` on the specified axis.                     |
| [**MatrixRotateXYZ**](3D/MatrixRotateXYZ.md)       | Rotates `matrix` to `angleX`, `angleY` and `angleZ`.                   |
| [**MatrixInverse**](3D/MatrixInverse.md)           | Performs an inversion on `matrix`'s values.                            |
| [**TransformVertices**](3D/TransformVertices.md)   | Transform all vertices from `startIndex` to `endIndex` using `matrix`. |

## Audio
| Function                                          | Description                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [**SetMusicTrack**](Audio/SetMusicTrack.md)       | Loads a music file in the given track slot with the given loop point.                                                                         |
| [**PlayMusic**](Audio/PlayMusic.md)               | Plays the music currently loaded in the given track slot.                                                                                     |
| [**StopMusic**](Audio/StopMusic.md)               | Stops playing the currently playing music track, if one is playing.                                                                           |
| [**PauseMusic**](Audio/PauseMusic.md)             | Pauses the currently playing music track, if one is playing.                                                                                  |
| [**ResumeMusic**](Audio/ResumeMusic.md)           | If a track has been paused with [PauseMusic()](Audio/PauseMusic.md), resumes playing the track.                                               |
| [**SwapMusicTrack**](Audio/SwapMusicTrack.md)     | Loads a music file in the given track slot with the given loop point, swapping the currently playing track if it's the one being overwritten. |
| [**PlaySfx**](Audio/PlaySfx.md)                   | Plays the sound effect in the given slot in the GameConfig or StageConfig, looping it if set to do so.                                        |
| [**StopSfx**](Audio/StopSfx.md)                   | Stops all instances of the given sound effect playing.                                                                                        |
| [**SetSfxAttributes**](Audio/SetSfxAttributes.md) | Sets the loop count and panning of the given sound effect to the given values.                                                                |

## Drawing
| Function                                                    | Description                                                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DrawTintRect**](Drawing/DrawTintRect.md)                 | Draws a tinted rectangle to `ixpos` and `iypos` in screen-space.                                                                               |
| [**LoadPalette**](Drawing/LoadPalette.md)                   | Loads a palette into `palBank` starting from `startPalIndex`, with an offset of `startIndex` and reading all colors through to `endIndex`.     |
| [**RotatePalette**](Drawing/RotatePalette.md)               | Rotates all colors in `palBank` from `startIndex` to `endIndex`, moving left or right depending on `rotRight`.                                 |
| [**SetScreenFade**](Drawing/SetScreenFade.md)               | Adds a screen fade effect based on the `r`, `g`, `b` and `alpha` values.                                                                       |
| [**SetActivePalette**](Drawing/SetActivePalette.md)         | Sets the active palette to `palBank` for all vertical screen lines from `startLine` to `endLine`.                                              |
| [**SetPaletteFade**](Drawing/SetPaletteFade.md)             | Blends palettes `srcBankA` and `srcBankB`, from indexes `startIndex` to `endIndex`, by `blendAmount`, and stores the new palette in `dstBank`. |
| [**GetPaletteEntry**](Drawing/GetPaletteEntry.md)           | Gets the palette entry in `bank` at `index` and stores it in `store`.                                                                          |
| [**SetPaletteEntry**](Drawing/SetPaletteEntry.md)           | Sets the palette entry in `bank` at `index` to the value of `color`.                                                                           |
| [**CopyPalette**](Drawing/CopyPalette.md)                   | Copies `count` colors from `srcBank`, starting from `srcIndex`, to `destBank`, starting at `destIndex`.                                        |
| [**ClearScreen**](Drawing/ClearScreen.md)                   | Clears all pixels on screen with color `clearIndex` from the active palette.                                                                   |
| [**DrawRect**](Drawing/DrawRect.md)                         | Draws a rectangle to `ixpos` and `iypos` in screen-space, with a color based on the `r`, `g`, `b`, and `alpha`.                                |
| [**ClearDrawList**](Drawing/ClearDrawList.md)               | Removes all entries in drawList `layer`.                                                                                                       |
| [**AddDrawListEntityRef**](Drawing/AddDrawListEntityRef.md) | Adds `objectPos` to drawList `layer`.                                                                                                          |
| [**GetDrawListEntityRef**](Drawing/GetDrawListEntityRef.md) | Gets `objectPos` in drawList `layer` and stores it in `store`.                                                                                 |
| [**SetDrawListEntityRef**](Drawing/SetDrawListEntityRef.md) | Sets `objectPos` in drawList `layer` to `value`.                                                                                               |

## Graphics
| Function                                                   | Description                                                                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [**LoadSpriteSheet**](Graphics/LoadSpriteSheet.md)         | Loads a spritesheet and assigns the ID to `object.spritesheet`.                                                                      |
| [**RemoveSpriteSheet**](Graphics/RemoveSpriteSheet.md)     | Removes the given spritesheet from memory, if it is already loaded.                                                                  |
| [**DrawSprite**](Graphics/DrawSprite.md)                   | Draws `frame` at the object's X and Y position.                                                                                      |
| [**DrawSpriteXY**](Graphics/DrawSpriteXY.md)               | Draws `frame` to a specified X and Y position.                                                                                       |
| [**DrawSpriteScreenXY**](Graphics/DrawSpriteScreenXY.md)   | Draws `frame` to a specified X and Y position in screen-space.                                                                       |
| [**SpriteFrame**](Graphics/SpriteFrame.md)                 | Adds a SpriteFrame with the specified values.                                                                                        |
| [**EditFrame**](Graphics/EditFrame.md)                     | Edits the pivots, width, height, and sheet coordinates of `frame`.                                                                   |
| [**DrawSpriteFX**](Graphics/DrawSpriteFX.md)               | Draws `frame` to a specified X and Y position with visual effects.                                                                   |
| [**DrawSpriteScreenFX**](Graphics/DrawSpriteScreenFX.md)   | Draws `frame` to a specified X and Y position in screen-space with visual effects.                                                   |
| [**LoadAnimation**](Graphics/LoadAnimation.md)             | Loads an animation file for the current object type.                                                                                 |
| [**ProcessAnimation**](Graphics/ProcessAnimation.md)       | Processes the current object's animation, based on the animation file loaded prior via [LoadAnimation()](Graphics/LoadAnimation.md). |
| [**DrawObjectAnimation**](Graphics/DrawObjectAnimation.md) | Draws an object's sprites from the animation file loaded prior via [LoadAnimation()](Graphics/LoadAnimation.md).                     |

## Math
| Function                                   | Description                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [**Rand**](Math/Rand.md)                   | Gets a random value from 0 to `max` (not inclusive) and stores it in `store`.                         |
| [**Sin**](Math/Sin.md)                     | Gets the value from the `sin512` lookup table based on `angle` and sets it in `store`.                |
| [**Cos**](Math/Cos.md)                     | Gets the value from the `cos512` lookup table based on `angle` and sets it in `store`.                |
| [**Sin256**](Math/Sin256.md)               | Gets the value from the `sin256` lookup table based on `angle` and sets it in `store`.                |
| [**Cos256**](Math/Cos256.md)               | Gets the value from the `cos256` lookup table based on `angle` and sets it in `store`.                |
| [**ATan2**](Math/ATan2.md)                 | Performs an arctan operation using `x` and `y`, storing the result in `store`.                        |
| [**Interpolate**](Math/Interpolate.md)     | Linearly interpolates `x` and `y` by `percent` and stores the result in `store`.                      |
| [**InterpolateXY**](Math/InterpolateXY.md) | Linearly interpolates two points at once and stores the result in `storeX` and `storeY` respectively. |
| [**Not**](Math/Not.md)                     | Performs a NOT operation on `value`.                                                                  |
| [**GetBit**](Math/GetBit.md)               | Gets the binary bit at index `bitPos` from `value` and stores it in `store`.                          |
| [**SetBit**](Math/SetBit.md)               | Sets index `bitPos` of `value` to `bit` and updates `value` accordingly.                              |
| [**GetTableValue**](Math/GetTableValue.md) | Gets the value at `index` from `table` and stores it in `store`.                                      |
| [**SetTableValue**](Math/SetTableValue.md) | Sets the value at `index` from `table` to `value`.                                                    |
| [**Abs**](Math/Abs.md)                     | Gets the absolute number of `value`.                                                                  |

## Object
| Function                                                     | Description                                                                                                                 |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [**ResetObjectEntity**](Object/ResetObjectEntity.md)         | Resets an object in the `slot` position with the `type`, `propertyValue`, `xpos` and `ypos` specified.                      |
| [**BoxCollisionTest**](Object/BoxCollisionTest.md)           | Checks for collision of an object with another, using the hitbox values passed.                                             |
| [**CreateTempObject**](Object/CreateTempObject.md)           | Creates a temporary object specified by `type`, `propertyValue`, `xpos` and `ypos` near the end of the object list.         |
| [**ProcessObjectMovement**](Object/ProcessObjectMovement.md) | Handles tile collision of an object/player.                                                                                 |
| [**ProcessObjectControl**](Object/ProcessObjectControl.md)   | Handles object input variables.                                                                                             |
| [**ObjectTileCollision**](Object/ObjectTileCollision.md)     | Tries to collide with the foreground layer based on the position of `object.ixpos` + `xOffset`, `object.iypos` + `yOffset`. |
| [**ObjectTileGrip**](Object/ObjectTileGrip.md)               | Tries to collide with the foreground layer based on the position of `object.ixpos` + `xOffset`, `object.iypos` + `yOffset`. |
| [**SetObjectRange**](Object/SetObjectRange.md)               | Changes internal bounds, affecting all objects.                                                                             |
| [**GetObjectValue**](Object/GetObjectValue.md)               | Gets `object.valueXX` of the object in `slot` corresponding to `valueID` and stores it in `store`.                          |
| [**SetObjectValue**](Object/SetObjectValue.md)               | Sets `object.valueXX` of the object in `slot` corresponding to `valueID` to `value`.                                        |
| [**CopyObject**](Object/CopyObject.md)                       | Copies `count` objects starting from `srcSlot` and pastes them to the object slots starting from `destSlot`.                |

## Stages
| Function                                                        | Description                                                                                    |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [**LoadStage**](Stage/LoadStage.md)                             | Loads a stage based on `stage.activeList` and `stage.listPos`.                                 |
| [**SetLayerDeformation**](Stage/SetLayerDeformation.md)         | Sets the deformation data array of `deformID`, based on `deformA` and `deformB`.               |
| [**GetTileLayerEntry**](Stage/GetTileLayerEntry.md)             | Gets the ID of the chunk at `chunkX`, `chunkY` on tile layer `layer` and stores it in `store`. |
| [**SetTileLayerEntry**](Stage/SetTileLayerEntry.md)             | Sets the chunk at `chunkX`, `chunkY` in tile layer `layer` to the index of `value`.            |
| [**Get16x16TileInfo**](Stage/Get16x16TileInfo.md)               | Gets the value for `infoType` from the tile at `tileX`, `tileY`. And stores it in `store`.     |
| [**Set16x16TileInfo**](Stage/Set16x16TileInfo.md)               | Sets the value for `infoType` from the tile at `tileX`, `tileY` to `value`.                    |
| [**Copy16x16Tile**](Stage/Copy16x16Tile.md)                     | Copies the tileset image data of `scrTile` to `destTile`.                                      |
| [**CheckCurrentStageFolder**](Stage/CheckCurrentStageFolder.md) | Reads the name of the current stage's folder.                                                  |

## Miscellaneous
| Function                                                    | Description                                                                                              |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**CallNativeFunction**](Misc/CallNativeFunction/README.md) | Sends a callback to the engine to run a native function.                                                 |
| [**CheckTouchRect**](Misc/CheckTouchRect.md)                | Checks if there's a touch input between the given coordinates.                                           |
| [**SetupMenu**](Misc/SetupMenu.md)                          | Sets up `menu` with `rowCount` rows, `selectionCount` active selections and aligning set to `alignment`. |
| [**AddMenuEntry**](Misc/AddMenuEntry.md)                    | Adds an entry to `menu` with the contents of `text`.                                                     |
| [**EditMenuEntry**](Misc/EditMenuEntry.md)                  | Edits an entry of `menu` with the contents of `text` in `rowID`.                                         |
| [**DrawMenu**](Misc/DrawMenu.md)                            | Draws `menu` at `xpos` and `ypos` relative to the screen.                                                |
| [**GetTextInfo**](Misc/GetTextInfo.md)                      | Gets the data of `type` from `menu` using `index`, and stores it in `store`.                             |
| [**GetVersionNumber**](Misc/GetVersionNumber.md)            | Adds a text entry to `menu` with the engine's version as the text.                                       |
| [**LoadTextFile**](Misc/LoadTextFile.md)                    | Loads `menu` based on the text file loaded from `filePath`.                                              |
| [**Print**](Misc/Print.md)                                  | Prints a message or integer to the console.                                                              |
| [**ReadSaveRAM**](Misc/ReadSaveRAM.md)                      | Reads the contents of the save file on disk into SaveRAM.                                                |
| [**WriteSaveRAM**](Misc/WriteSaveRAM.md)                    | Writes the contents of SaveRAM to the save file on disk.                                                 |

## Deprecated
| Function                                       | Description                                                                                                                                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**LoadTextFont**](Deprecated/LoadTextFont.md) | Loads a bitmap font from `filePath` for use with text menus.                                                                                                                            |
| [**DrawText**](Deprecated/DrawText.md)         | Draws the contents of `rowCount` rows, starting from `rowStart` in `menu` at `xPos` and `yPos` relative to the screen, using `spacing` pixels between them and scaling it with `scale`. |
