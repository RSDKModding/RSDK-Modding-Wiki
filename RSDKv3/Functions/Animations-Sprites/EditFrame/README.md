# EditFrame

## Description
Edits pivots, width, height and sheet coordinates of a spriteFrame with matching `id`.

## Parameters

- `id`
The ID of the spriteFrame to edit
- `xPivot`
The horizontal offset of the sprite, negative values will move it to the left, while positive values will move it to the right
- `yPivot`
The vertical offset of the sprite, negative values will move it upwards, and positive values downwards
- `width`
The width of the sprite
- `height`
The height of the sprite
- `sheetXPos`
The position of the upper-left border of the sprite, on the X axis
- `sheetYPos`
The position of the upper-left border of the sprite, on the Y axis

## Return Value
None.

## Syntax
```EditFrame(int id, int xPivot, int yPivot, int width, int height, int sheetXPos, int sheetYPos)```

## Examples
- ```EditFrame(2, -8, -8, 8, 8, 1, 35)```