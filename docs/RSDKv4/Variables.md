# RSDKv4 Variables

## Script
| Variable        | Description                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **temp0-7**     | Temporary values used to store values during arithmetic or other similar operations.              |
| **checkResult** | A value that some functions set as the resulting value. Can be used with all sorts of arithmetic. |
| **arrayPos0-7** | Used to store an array of data.                                                                   |
| **global**      | Can be used to use global variables as an array (Ex. global[arrayPos0] = 0).                      |
| **local**       | Can be used to use local variables as an array (Ex. local[arrayPos0] = 0).                        |

## Object
| Variable                 | Description                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **object.entityPos**     | The object's entity slot in a scene's entity list.                                                                               |
| **object.groupID**       | The object's groupType. By default, it is set to an object's type, but can be set to a custom one. (Ex. `GROUP_PLAYERS = 0x100`) |
| **object.type**          | The object's type. (Ex. an object with a type of 0 would be a Blank Object.)                                                     |
| **object.propertyValue** | The object's subType. Its purpose generally differs from object to object.                                                       |
| **object.x/ypos**        | The object's x/ypos in a scene. Position is based in world-space, which in RSDK is 0x10000 (65535), which is 1.0                 |
| **object.ix/iypos**      | The object's ix/iypos in a scene. iPosition is based in screen-space, which is truncated from x/ypos (1 == 1).                   |
| **object.x/yvel**        | The object's x/yvel on the x and y axis. Velocity is based in world-space.                                                       |
| **object.speed**         | The object's general speed in world-space.                                                                                       |
| **object.state**         | The object's state. Similar to propertyValue, its prupose differs for each object.                                               |

## Stage
| Variable                         | Description                                                                                                                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **stage.state**                  | The current processing state of the stage.                                                                                                                                         |
| **stage.activeList**             | The active stage list. Ranges from Presentation, Regular, Special, and Bonus Stages.                                                                                               |
| **stage.listPos**                | The position of a stage in a stage list.                                                                                                                                           |
| **stage.timeEnabled**            | Handles the stage's time. When enabled, the engine will automatically start a timer, and sets the time to `stage.milliSeconds/seconds/minutes`.                                    |
| **stage.milliSeconds**           | The stage's milliSecond count.                                                                                                                                                     |
| **stage.minutes**                | The stage's minute count.                                                                                                                                                          |
| **stage.seconds**                | The stage's second count.                                                                                                                                                          |
| **stage.actNum**                 | The number of the current act. (Ex. stage.actNum = 1 -> Act1)                                                                                                                      |
| **stage.pausedEnabled**          | If enabled, this allows the engine to do a Genesis type pause by pressing the Start button.                                                                                        |
| **stage.listSize**               | The size of the current stage list.                                                                                                                                                |
| **stage.newX/YBoundary1/2**      | The boundaries for the stage camera. Used to set new camera boundaries during gameplay.                                                                                            |
| **stage.curX/YBoundary1/2**      | The boundaries for the stage camera. The camera will never go past these boundaries.                                                                                               |
| **stage.deformationData0/1/2/3** | Values used to store stage deformation. 0/1 is for the foreground (0 for above water, 1 for underwater), and 2/3 are for the background (2 for above water, and 3 for underwater). |
| **stage.waterLevel**             | The stage's current water level.                                                                                                                                                   |
| **stage.activeLayer[index]**     | Gets an active layer based on `index` and is able to be set to another tile layer. (Ex. stage.activeLayer[0] = 5 would set the background layer to the fifth tile layer.)          |
| **stage.midPoint**               | The stage's mid point. If any active drawing layers come after this, tiles will be able to render on the high layer.                                                               |
| **stage.playerListPos**          | The position of the selected Player on the player list.                                                                                                                            |
| **stage.debugMode**              | Determines whether Debug Mode is active or not.                                                                                                                                    |
| **stage.entityPos**              | The entity last loaded by the stage.                                                                                                                                               |

## Screen
| Variable                 | Description                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **screen.cameraEnabled** | Determines if the camera is disabled or not.                                                                         |
| **screen.cameraTarget**  | Gets the entity pos of an object and sets the camera to follow it. (Ex. screen.cameraTarget = SLOT_PLAYER1 (0))      |
| **screen.cameraStyle**   | How the camera should track its target.                                                                              |
| **screen.cameraX**       | The xpos of the camera in screen-space.                                                                              |
| **screen.cameraY**       | The ypos of the camera in screen-space.                                                                              |
| **screen.drawListSize**  | How many entities are being drawn on screen at once.                                                                 |
| **screen.xcenter**       | The xcenter of the screen. By default, this value is 212.                                                            |
| **screen.ycenter**       | The ycenter of the screen. By default, this value is 120, but cannot be normally changed.                            |
| **screen.xsize**         | The xsize of the screen. By default, this value is 424.                                                              |
| **screen.ysize**         | The ysize of the screen. By default, this value is 240, but cannot be normally changed.                              |
| **screen.xoffset**       | The xoffset of the screen, relative to the very beginning of the scene.                                              |
| **screen.yoffset**       | The yoffset of the screen, relative to the very beginning of the scene.                                              |
| **screen.shakeX**        | If more than 0, this will horizontally shake the screen. The aggression of the shaking will depend on the value set. |
| **screen.shakeY**        | If more than 0, this will vertically shake the screen. The aggression of the shaking will depend on the value set.   |
| **screen.adjustCameraY** | The amount the camera should vertically adjust.                                                                      |

## Audio
| Variable               | Description                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **music.volume**       | The current volume for the music. Not the same as 'engine.bgmVolume', which is combined with this to get the final output volume. |
| **music.currentTrack** | The ID of the music track that's currently playing.                                                                               |
| **music.position**     | The position (by sample) of the currently playing track.                                                                          |

## Input
| Variable                 | Description                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **keyDown/keyPress.[X]** | General inputs for controllers. `keyDown` is true if a button/key is held, while `keyPress` is true if a button/key was pressed on a frame. |
|

## Menu
| Variable              | Description                                            |
| --------------------- | ------------------------------------------------------ |
| **menu1/2.selection** | The current row, as selected by `MENU_1` and `MENU_2`. |

## Tile Layer

## 3D
| Variable                   | Description                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| **scene3D.vertexCount**    | The amount of active vertices in each buffer respectively (max of 4096 vertices).                       |
| **scene3D.faceCount**      | The amount of active faces in each buffer respectively (max of 1024 faces).                             |
| **scene3D.projectionX**    | The width of the `Scene3D` draw buffer. By default, this value is 136.                                  |
| **scene3D.projectionY**    | The height of the `Scene3D` draw buffer. By default, this value is 160.                                 |
| **scene3D.fogColor**       | The color of the fog in an RGB format.                                                                  |
| **scene3D.fogStrength**    | The strength of the fog. Fog strength has a max of 255.                                                 |
| **faceBuffer.a/b/c/d**     | The vertice indices to use to control a face's drawing.                                                 |
| **faceBuffer.flag**        | The active drawing flag for a face.                                                                     |
| **faceBuffer.color**       | The color to draw the face when drawing with either `FACE_FLAG_COLOURED_2D` or `FACE_FLAG_COLOURED_3D`. |
| **vertexBuffer.x/y/z/u/v** | The vertex coordinates for a specified vertex. |

## Engine
| Variable                | Description                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **saveRAM[index]**      | Capable of saving data to the array of `index`, using the `Read/WriteSaveRAM()` functions.                               |
| **engine.state**        | The engine's current processing state.                                                                                   |
| **engine.language**     | The active language the engine is using.                                                                                 |
| **engine.onlineActive** | Gets the engine's state with online connectivity.                                                                        |
| **engine.sfxVolume**    | The engine's master sound effect output volume. Ranges from 0-100.                                                       |
| **engine.bgmVolume**    | The engine's master music volume output. Ranges from 0-100. Combined with 'music.volume' to get the final output volume. |
| **engine.trialMode**    | Used in a trial version of a game to handle certain events differently.                                                  |

## Extras

## Haptics
| Variable                  | Description                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| **engine.hapticsEnabled** | Determines if haptic effects are enabled or not. Will only have effect is `RETRO_USE_HAPTICS` if enabled. |