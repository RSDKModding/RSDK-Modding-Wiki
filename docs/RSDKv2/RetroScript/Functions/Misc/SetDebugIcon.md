# SetDebugIcon

TODO: This was probably supposed to be used for debug mode? There might be some old script out there using this function.

!!! note
    This is not functional in both the original 2008 Nexus demo and the RSDKv2 decompilation. This is kept here for documentational purposes.

!!! note
    The details of this function are assumed based on SpriteFrame(), and the parameter count can be found in the engine.

## Parameters
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
SetDebugIcon(int xPivot, int yPivot, int Width, int Height, int SheetXPos, int SheetYPos)
```

## Example
```
SetDebugIcon(-16, -16, 32, 32, 75, 129)
```
