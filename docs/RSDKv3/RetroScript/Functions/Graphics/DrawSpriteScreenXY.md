# DrawSpriteScreenXY

## Description
Draws `Frame` at a specified X and Y position in screen-space.

## Parameters
`Frame`

:   The ID of the SpriteFrame to draw.

`iXPos`

:   The position of the sprite on the horizontal axis in screen-space.

`iYPos`

:   The position of the sprite on the vertical axis in screen-space.

## Return Value
None.

## Syntax
```
DrawSpriteScreenXY(int Frame, int iXPos, int iYPos)
```

## Example
```
DrawSpriteScreenXY(0, Screen.CenterX, 15)
```