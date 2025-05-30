# SpriteFrame

## Description
Adds a SpriteFrame with the specified values.

## Parameters
`xPivot`

:   The horizontal offset of the sprite. Negative values will move it to the left, while positive values will move it to the right.

`yPivot`

:   The vertical offset of the sprite. Negative values will move it upwards, while positive values will move it downwards.

`width`

:   The width of the sprite.

`height`

:   The height of the sprite.

`sheetXPos`

:   The position of the upper-left border of the sprite, on the X axis.

`sheetYPos`

:   The position of the upper-left border of the sprite, on the Y axis.

## Return Value
None.

## Syntax
```
SpriteFrame(int xPivot, int yPivot, int width, int height, int sheetXPos, int sheetYPos)
```

## Example
```
SpriteFrame(-16, -16, 32, 32, 75, 129)
```