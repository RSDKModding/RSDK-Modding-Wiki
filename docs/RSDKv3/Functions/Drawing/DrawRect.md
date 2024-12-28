# DrawRect <small>(RSDKv3)</small>

## Description
Draws a rectangle to `iXPos` and `iYPos` in screen-space, with a color based on the `R`, `G`, `B`, and `Alpha`.

## Parameters
`iXPos`

:   The position of the rectangle on the horizontal axis in screen-space.

`iYPos`

:   The position of the rectangle on the vertical axis in screen-space.

`Width`

:   The width of the rectangle.

`Height`

:   The height of the rectangle.

`R`

:   A value range of 0-255 for the color red.

`G`

:   A value range of 0-255 for the color green.

`B`

:   A value range of 0-255 for the color blue.

`Alpha`

:   A value range of 0-255 for transparency, 255 being no transparency.

## Return Value
None.

## Syntax
```
DrawRect(int iXPos, int iYPos, int Width, int Height, int R, int G, int B, int Alpha)
```

## Example
```
DrawRect(30, 220, 60, 20, 255, 128, 128, 255)
```
