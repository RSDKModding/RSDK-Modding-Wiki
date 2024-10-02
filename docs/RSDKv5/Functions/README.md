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
| [**StopAllSfx**](Audio/StopAllSfx.md)                     | Stops all instances of all sound effects playing.                                                                     |

## SpriteSheets
| Function                                               | Description                                   |
| ------------------------------------------------------ | --------------------------------------------- |
| [**LoadSpriteSheet**](SpriteSheets/LoadSpriteSheet.md) | Loads a spritesheet and returns the id of it. |

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
| [**GetStringWidth**](Graphics/GetStringWidth.md)               | Retrieves the width of a string in pixels when displayed with [DrawText](TODO).   |
| [**ProcessAnimation**](Graphics/ProcessAnimation.md)           | Processes the animation applied to an animator.                                   |                   

## Debugging
| Function                                                          | Description                                       |
| ----------------------------------------------------------------- | ------------------------------------------------- |
| [**ClearViewableVariables**](Debugging/ClearViewableVariables.md) | Clears all loaded viewable variables.             |
| [**AddViewableVariable**](Debugging/AddViewableVariable.md)       | Adds a viewable variable to the [Dev Menu](TODO). |

## Miscellaneous
| Function                                     | Description                                                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [**NotifyCallback**](Misc/NotifyCallback.md) | Sends the given callback to communicate to [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md). |

## Editor
| Function                                                   | Description                                                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [**RSDK_ACTIVE_VAR**](Editor/RSDK_ACTIVE_VAR.md)           | Sets a variable to be the "active variable" when using [RSDK_ENUM_VAR](Editor/RSDK_ENUM_VAR.md). |
| [**RSDK_ENUM_VAR**](Editor/RSDK_ENUM_VAR.md)               | Adds an enum variable to the current active variable.                                            |
| [**showGizmos**](Editor/showGizmos.md)                     | Checks if gizmos should be visible for this object.                                              |
| [**RSDK_DRAWING_OVERLAY**](Editor/RSDK_DRAWING_OVERLAY.md) | Enables/disables "overlay" mode when drawing.                                                    |