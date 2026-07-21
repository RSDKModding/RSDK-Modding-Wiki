# DrawTintRect

Draws a tinted rectangle to `iXPos` and `iYPos` in screen-space.

## Parameters
`iXPos`

:   The position of the rectangle on the horizontal axis in screen-space.

`iYPos`

:   The position of the rectangle on the vertical axis in screen-space.

`Width`

:   The width of the rectangle.

`Height`

:   The height of the rectangle.

`TintID`

:   The ID of the tint table. Indices 0-3 are valid.

## Return Value
None.

## Syntax
```
DrawTintRect(int iXPos, int iYPos, int Width, int Height, int TintID)
```

## Example
```
DrawTintRect(30, 220, 60, 20, 1)
```
