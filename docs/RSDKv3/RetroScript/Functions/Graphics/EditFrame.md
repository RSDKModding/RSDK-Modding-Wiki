# EditFrame

!!! note
    This function does not exist in the Blit releases of Sonic CD.

## Description
Edits the pivots, width, height, and sheet coordinates of `frame`.

## Parameters
`Frame`

:   The ID of the spriteFrame to edit.

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
EditFrame(int Frame, int xPivot, int yPivot, int Width, int Height, int SheetXPos, int SheetYPos)
```

## Example
```
EditFrame(2, -8, -8, 8, 8, 1, 35)
```