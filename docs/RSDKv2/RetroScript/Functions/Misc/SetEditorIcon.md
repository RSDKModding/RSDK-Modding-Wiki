# SetEditorIcon

Sets the object's icon used for the editor.

!!! note
    The details of this function are assumed based on scripts left in the 2008 Nexus demo.

## Parameters
`IconID`

:   The ID of the icon to setup.

`DrawType`

:   How the icon should be drawn. TODO: Maybe describe this better

`xPivot`

:   The horizontal offset of the sprite. Negative values will move it to the left, while positive values will move it to the right.

`yPivot`

:   The vertical offset of the sprite. Negative values will move it upwards, while positive values will move it downwards.

`Width`

:   The width of the sprite.

`Height`

:   The height of the sprite.

`SheetXPos`

:   The position of the upper-left border of the sprite, on the X axis.

`SheetYPos`

:   The position of the upper-left border of the sprite, on the Y axis.

## Return Value
None.

## Syntax
```
SetEditorIcon(int IconID, int DrawType, int xPivot, int yPivot, int Width, int Height, int SheetXPos, int SheetYPos)
```

## Example
```
SetEditorIcon(Icon0, SingleIcon, -16, -16, 32, 32, 75, 129)
```

## Icon IDs
| ID | Icon ID |
| -- | ------- |
| 0  | `Icon0` |
| 1  | `Icon1` |
| 2  | `Icon2` |
| 3  | `Icon3` |
| 4  | `Icon4` |
| 5  | `Icon5` |
| 6  | `Icon6` |
| 7  | `Icon7` |

## Draw Types
| ID | Draw Type    | Description                                                            |
| -- | ------------ | ---------------------------------------------------------------------- |
| 0  | **Unknown**  | Draws the icon if it's ID is the value of `PropertyValue`.             |
| 1  | `SingleIcon` | Draws the current icon, regardless of `PropertyValue`.                 |
| 2  | `RepeatH`    | Repeats the current icon horizontally by the value of `PropertyValue`. |
| 3  | `RepeatV`    | Repeats the current icon vertically by the value of `PropertyValue`.   |

TODO: I just took these from RetroED 2, are the IDs and functionalities accurate?
