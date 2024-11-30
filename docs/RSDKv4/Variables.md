# Variables <small>(RSDKv4)</small>

## Script
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **temp0-7**                                        | Temporary values used to store values during arithmetic or other similar operations. |
| **checkResult**                                    | A value that some functions set as the resulting value. Can be used with all sorts of arithmetic. |
| **arrayPos0-7**                                    | Used to store an array of data. |
| **global**                                         | Used as a substitute for a global variable. Similar to using `temp0 = global.variable`. |
| **local**                                          | Used as a subsitute for a local variable. Similar to using `temp0 = local.variable`. |

## Object
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **object.entityPos**                               | The object's entity slot in a scene's entity list. |
| **object.groupID**                                 | The object's groupType. By default, it is set to an object's type, but can be set to a custom one. (Ex. `GROUP_PLAYERS = 0x100`) |
| **object.type**                                    | The object's type. (Ex. an object with a type of 0 would be a Blank Object.) |
| **object.propertyValue**                           | The object's subType. It's purpose generally differs from object to object. |
| **object.x/ypos**                                  | The object's x/ypos in a scene. Position is based in world-space, which in RSDK is 0x10000 (65535), which is 1.0 |
| **object.ix/iypos**                                | The object's ix/iypos in a scene. iPosition is based in screen-space, which is truncated from x/ypos (1 == 1). ||
| **object.x/yvel**                                  | The object's x/yvel on the x and y axis. Velocity is based in world-space. |
| **object.speed**                                   | The object's general speed in world-space. |
| **object.state**                                   | |

## Stage

## Screen

## Audio
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **music.volume**                                   | The current volume for the music. Not the same as 'engine.bgmVolume', which is combined with this to get the final output volume. |
| **music.currentTrack**                             | The ID of the music track that's currently playing. |
| **music.position**                                 | The position (by sample) of the currently playing track. |
| **engine.sfxVolume**                               | The engine's master sound effect output volume. Ranges from 0-100. |
| **engine.bgmVolume**                               | The engine's master music volume output. Ranges from 0-100. Combined with 'music.volume' to get the final output volume. |

## Input
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **keyDown/keyPress.[X]**                           | General inputs for controllers. `keyDown` is true if a button/key is held, while `keyPress` is true if a button/key was pressed on a frame. |
|

## Menu
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **menu1/2.selection**                              | The current row, as selected by `MENU_1` and `MENU_2`. |

## Tile Layer

## 3D
| Variable                                           | Description                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| **scene3D.vertexCount**                            | The amount of active vertices in each buffer respectively (max of 4096 vertices). |
| **scene3D.faceCount**                              | The amount of active faces in each buffer respectively (max of 1024 faces). |
| **scene3D.projectionX**                            | The width of the `Scene3D` draw buffer. By default, this value is 136. |
| **scene3D.projectionY**                            | The height of the `Scene3D` draw buffer. By default, this value is 160. |
| **scene3D.fogColor**                               | The color of the fog in an RGB format. |
| **scene3D.fogStrength**                            | The strength of the fog. Fog strength has a max of 255. |
| **faceBuffer.a/b/c/d**                             | The vertice indices to use to control a face's drawing. |
| **faceBuffer.flag**                                | The active drawing flag for a face. |
| **faceBuffer.color**                               | The color to draw the face when drawing with either `FACE_FLAG_COLOURED_2D` or `FACE_FLAG_COLOURED_3D`. |
| **vertexBuffer.x/y/z/u/v**                         | The vertex coordinates for a specified vertex. |

## Extras

## Haptics