# DrawSpriteScreenXY

## Description
Draws `frame` at a specified X and Y position in screen-space.

## Parameters
`frame`

:   The ID of the SpriteFrame to draw.

`ixpos`

:   The position of the sprite on the horizontal axis in screen-space.

`iypos`

:   The position of the sprite on the vertical axis in screen-space.

## Return Value
None.

## Syntax
```
DrawSpriteScreenXY(int frame, int ixpos, int iypos)
```

## Example
```
DrawSpriteScreenXY(0, screen.xcenter, 15)
```