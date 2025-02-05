# SpriteFrame

## Description
Adds a SpriteFrame with the specified values.

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
SpriteFrame(int xPivot, int yPivot, int Width, int Height, int SheetXPos, int SheetYPos)
```

## Example
```
SpriteFrame(-16, -16, 32, 32, 75, 129)
```