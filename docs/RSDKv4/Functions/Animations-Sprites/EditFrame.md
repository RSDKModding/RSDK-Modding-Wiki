# EditFrame

## Description
Edits pivots, width, height and sheet coordinates of a spriteFrame with matching `ID`.

## Parameters

- `ID`
The ID of the spriteFrame to edit.
- `xPivot`
The horizontal offset of the sprite, negative values will move it to the left, while positive values will move it to the right.
- `yPivot`
The vertical offset of the sprite, negative values will move it upwards, and positive values downwards.
- `Width`
The width of the sprite.
- `Height`
The height of the sprite.
- `SheetXPos`
The position of the upper-left border of the sprite, on the X axis.
- `SheetYPos`
The position of the upper-left border of the sprite, on the Y axis.

## Return Value
None.

## Syntax
```
EditFrame(int ID, int xPivot, int yPivot, int Width, int Height, int SheetXPos, int SheetYPos)
```

## Examples
```
EditFrame(2, -8, -8, 8, 8, 1, 35)
```

## Notes
This function is not available in Blit releases of Sonic CD.