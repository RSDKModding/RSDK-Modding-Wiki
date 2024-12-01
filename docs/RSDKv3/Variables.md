# RSDKv3 Variables

# Script
| Variable         | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| **TempValue0-7** | Temporary values used to store values during arithmetic or other similar operations. |
| **ArrayPos0/1**  | Used to store an array of data.                                                      |
| **Global**       | Can be used to use global variables as an array (Ex. Global[ArrayPos0] = 0).         |

## Object
| Variable                 | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Object.Type**          | The object's type.                                               |
| **Object.PropertyValue** | The object's subtype. Its purpose differs from object to object. |

# Player
| Variable                 | Description                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Player.Type**          | The Player's type. Should almost always be a Player Object.                                                                                  |
| **Player.State**         | The Player's state. Handles gameplay and processing the Player in general.                                                                   |
| **Player.ControlMode**   | The status of the Player's control mode.                                                                                                     |
| **Player.CollisionMode** | The collision that the Player's currently on.                                                                                                |
| **Player.X/YPos**        | The object's x/ypos on the x and y axis. Position is based in world-space, which in v3 is 0x10000 (65536), which is equal is 1.0.            |
| **Player.ScreenX/YPos**  | The object's screenx/ypos on the x and y axis. Screen position is based in screen-space, which in v3 is truncated from world-space (1 == 1). |
| **Player.Speed**         | The Player's general speed in world-space

## Stage
| Variable                    | Description                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stage.ActiveList**        | The active stage list. Ranges from Presentation, Regular, Special, and Bonus Stages.                                                            |
| **Stage.ListPos**           | The position of a stage in a stage list.                                                                                                        |
| **Stage.TimeEnabled**       | Handles the stage's time. When enabled, the engine will automatically start a timer, and sets the time to `Stage.MilliSeconds/Seconds/Minutes`. |
| **Stage.MilliSeconds**      | The stage's milliSecond count.                                                                                                                  |
| **Stage.Minutes**           | The stage's minute count.                                                                                                                       |
| **Stage.Seconds**           | The stage's second count.                                                                                                                       |
| **Stage.ActNo**             | The number of the current act. (Ex. Stage.ActNo = 1 -> Act1)                                                                                    |
| **Stage.PausedEnabled**     | If enabled, this allows the engine to do a Genesis type pause by pressing the Start button.                                                     |
| **Stage.ListSize**          | The size of the current stage list.                                                                                                             |
| **Stage.NewX/YBoundary1/2** | The boundaries for the stage camera. Used to set new camera boundaries during gameplay.                                                         |
| **Stage.X/YBoundary1/2**    | The boundaries for the stage camera. The camera will never go past these boundaries.                                                            |