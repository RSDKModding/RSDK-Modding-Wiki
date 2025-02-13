# RSDKv5 Functions

!!! note
    All functions' names and parameter lists are mainly written for the C API, but their usage differs in the C++ API. Refer to the Syntax and Example(s) sections of each page for how to use the functions in each language's API.

## Audio
| Function                                                  | Description                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [**GetSfx**](Audio/GetSfx.md)                             | Retrieves the ID of the given sound effect.                                                                           |
| [**PlaySfx**](Audio/PlaySfx.md)                           | Plays the sound effect in the given slot, looping it if a loop point is set.                                          |
| [**StopSfx**](Audio/StopSfx.md)                           | Stops all instances of the given sound effect playing.                                                                |
| [**PlayStream**](Audio/PlayStream.md)                     | Plays the given music file, looping it if set to do so.                                                               |
| [**SetChannelAttributes**](Audio/SetChannelAttributes.md) | Sets the volume, panning, and speed of the given channel to the given values.                                         |
| [**StopChannel**](Audio/StopChannel.md)                   | Stops playing the currently playing audio in the given channel, if any is playing.                                    |
| [**PauseChannel**](Audio/PauseChannel.md)                 | Pauses the currently playing audio in the given channel, if any is playing.                                           |
| [**ResumeChannel**](Audio/ResumeChannel.md)               | If the given channel's audio has been paused with [PauseChannel()](Audio/PauseChannel.md), resumes playing the audio. |
| [**SfxPlaying**](Audio/SfxPlaying.md)                     | Checks if the given sound effect is playing in any channels.                                                          |
| [**ChannelActive**](Audio/ChannelActive.md)               | Checks if a channel is currently playing audio or is paused.                                                          |
| [**GetChannelPos**](Audio/GetChannelPos.md)               | Gets the position of the current track in the given channel.                                                          |
| [**StopAllSfx**](Audio/StopAllSfx.md)                     | Stops all instances of all sound effects playing. **RSDKv5U only.**                                                   |

## SpriteSheets
| Function                                               | Description                                   |
| ------------------------------------------------------ | --------------------------------------------- |
| [**LoadSpriteSheet**](SpriteSheets/LoadSpriteSheet.md) | Loads a spritesheet and returns the ID of it. |

## Graphics
| Function                                                       | Description                                                                       |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [**LoadSpriteAnimation**](Graphics/LoadSpriteAnimation.md)     | Loads a SpriteAnimation and returns the ID of it.                                 |
| [**CreateSpriteAnimation**](Graphics/CreateSpriteAnimation.md) | Creates a SpriteAnimation based on the given parameters and returns the ID of it. |
| [**SetSpriteAnimation**](Graphics/SetSpriteAnimation.md)       | Applies a set of frames to an animator.                                           |
| [**EditSpriteAnimation**](Graphics/EditSpriteAnimation.md)     | Replaces the properties of an animation with the given parameters.                |
| [**SetSpriteString**](Graphics/SetSpriteString.md)             | Converts a string into a sprite string.                                           |
| [**FindSpriteAnimation**](Graphics/FindSpriteAnimation.md)     | Attempts to find an animation entry by name.                                      |
| [**GetFrame**](Graphics/GetFrame.md)                           | Retrieves a specific SpriteFrame from a SpriteAnimation.                          |
| [**GetHitbox**](Graphics/GetHitbox.md)                         | Gets a Hitbox from the animator's current frame.                                  |
| [**GetFrameID**](Graphics/GetFrameID.md)                       | Gets the `unicode char` value of the animator's current frame.                    |
| [**GetStringWidth**](Graphics/GetStringWidth.md)               | Retrieves the width of a string in pixels when displayed with [DrawText()](TODO).   |
| [**ProcessAnimation**](Graphics/ProcessAnimation.md)           | Processes the animation applied to an animator.                                   |

## Debugging
| Function                                                          | Description                                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| [**ClearViewableVariables**](Debugging/ClearViewableVariables.md) | Clears all loaded viewable variables.                               |
| [**AddViewableVariable**](Debugging/AddViewableVariable.md)       | Adds a viewable variable to the [Dev Menu](../Overview/DevMenu.md). |

## Printing
| Function                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- |
| [**PrintLog**](Printing/PrintLog.md)         | Prints a message to the console.             |
| [**PrintText**](Printing/PrintText.md)       | Prints a `const char` string to the console. |
| [**PrintString**](Printing/PrintString.md)   | Prints a String variable to the console.     |
| [**PrintUInt32**](Printing/PrintUInt32.md)   | Prints an unsigned integer to the console.   |
| [**PrintInt32**](Printing/PrintInt32.md)     | Prints a signed integer to the console.      |
| [**PrintFloat**](Printing/PrintFloat.md)     | Prints a float value to the console.         |
| [**PrintVector2**](Printing/PrintVector2.md) | Prints a Vector2 variable to the console.    |
| [**PrintHitbox**](Printing/PrintHitbox.md)   | Prints a Hitbox variable to the console.     |

## Objects & Entities
| Function                                                        | Description                                                                                             |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [**RSDK_THIS**](Objects/RSDK_THIS.md)                           | Defines local pointer `self` pointing to `sceneInfo->entity` using the given object's entity struct.    |
| [**RSDK_THIS_GEN**](Objects/RSDK_THIS_GEN.md)                   | Defines local pointer `self` pointing to `sceneInfo->entity` using a generic entity struct.             |
| [**RSDK_GET_ENTITY**](Objects/RSDK_GET_ENTITY.md)               | Gets the data of the given entity using the given object's entity struct.                               |
| [**RSDK_GET_ENTITY_GEN**](Objects/RSDK_GET_ENTITY_GEN.md)       | Gets the data of the given entity using a generic entity struct.                                        |
| [**CREATE_ENTITY**](Objects/CREATE_ENTITY.md)                   | Creates a temporary object specified by `object`, `data`, `x`, and `y` near the end of the object list. |
| [**INIT_ENTITY**](Objects/INIT_ENTITY.md)                       | Initializes the `active`, `visible`, and `updateRange` values of the given entity.                      |
| [**GetEntitySlot**](Objects/GetEntitySlot.md)                   | Gets the slot ID of an entity.                                                                          |
| [**GetEntityCount**](Objects/GetEntityCount.md)                 | Gets the count of the amount of entities of the given object type currently in the stage.               |
| [**GetDrawListRefSlot**](Objects/GetDrawListRefSlot.md)         | Gets the entity slot in the given draw group at the given position.                                     |
| [**GetDrawListRef**](Objects/GetDrawListRef.md)                 | Gets a pointer to the entity in the given draw group at the given position.                             |
| [**ResetEntity**](Objects/ResetEntity.md)                       | Resets `entity` with the `classID` and `data` specified.                                                |
| [**ResetEntitySlot**](Objects/ResetEntitySlot.md)               | Resets the entity in `slot` with the `classID` and `data` specified.                                    |
| [**CopyEntity**](Objects/CopyEntity.md)                         | Copies an entity into another entity.                                                                   |
| [**CheckOnScreen**](Objects/CheckOnScreen.md)                   | Checks if the given entity is on screen based on the given range.                                       |
| [**CheckPosOnScreen**](Objects/CheckPosOnScreen.md)             | Checks if the given position is on screen based on the given range.                                     |
| [**AddDrawListRef**](Objects/AddDrawListRef.md)                 | Adds a reference to an entity to a draw group.                                                          |
| [**SwapDrawListEntries**](Objects/SwapDrawListEntries.md)       | Swaps the draw list positions of `slot1` and `slot2` in `drawGroup`.                                    |
| [**SetDrawGroupProperties**](Objects/SetDrawGroupProperties.md) | Sets the properties of `drawGroup`.                                                                     |
| [**FindObject**](Objects/FindObject.md)                         | Finds a loaded object by name and retrieves its ID.                                                     |
| [**destroyEntity**](Objects/destroyEntity.md)                   | Clears an entity's data.                                                                                |
| [**destroyEntitySlot**](Objects/destroyEntitySlot.md)           | Clears the entity of the given slot's data.                                                             |

## Scene Management
| Function                                           | Description                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**SetScene**](Stages/SetScene.md)                 | Sets the scene category and list position to the matching scene entry in the GameConfig.                 |
| [**SetEngineState**](Stages/SetEngineState.md)     | Sets the state of the engine.                                                                            |
| [**ForceHardReset**](Stages/ForceHardReset.md)     | Sets whether the next stage reload should reload all assets.                                             |
| [**CheckValidScene**](Stages/CheckValidScene.md)   | Checks if `SceneInfo->activeCategory` and `SceneInfo->listPos` point to a valid scene in the GameConfig. |
| [**CheckSceneFolder**](Stages/CheckSceneFolder.md) | Reads the name of the current stage's folder.                                                            |
| [**LoadScene**](Stages/LoadScene.md)               | Loads a stage based on `SceneInfo->activeCategory` and `SceneInfo->listPos`.                             |

## Videos & Images
| Function                             | Description                  |
| ------------------------------------ | ---------------------------- |
| [**LoadVideo**](Videos/LoadVideo.md) | Loads and plays a video.     |
| [**LoadImage**](Videos/LoadImage.md) | Loads and displays an image. |

## Miscellaneous
| Function                                           | Description                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [**NotifyCallback**](Misc/NotifyCallback.md)       | Sends the given callback to communicate to [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md). **Sonic Origins only.** |
| [**HasNotifyCallback**](Misc/HasNotifyCallback.md) | Checks if the game has access to [NotifyCallback()](Misc/NotifyCallback.md). **Sonic Origins only.**                            |
| [**SetGameFinished**](Misc/SetGameFinished.md)     | Notifies the engine that the game has been finished. **Sonic Origins only.**                                                    |

## Editor
| Function                                                   | Description                                                                                        |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [**RSDK_EDITABLE_VAR**](Editor/RSDK_EDITABLE_VAR.md)       | Sets a variable from the given object's entity struct to be editable in an editor.                 |
| [**RSDK_ACTIVE_VAR**](Editor/RSDK_ACTIVE_VAR.md)           | Sets a variable to be the "active variable" when using [RSDK_ENUM_VAR()](Editor/RSDK_ENUM_VAR.md). |
| [**RSDK_ENUM_VAR**](Editor/RSDK_ENUM_VAR.md)               | Adds an enum variable to the current active variable.                                              |
| [**showGizmos**](Editor/showGizmos.md)                     | Checks if gizmos should be visible for this object.                                                |
| [**RSDK_DRAWING_OVERLAY**](Editor/RSDK_DRAWING_OVERLAY.md) | Enables/disables "overlay" mode when drawing.                                                      |