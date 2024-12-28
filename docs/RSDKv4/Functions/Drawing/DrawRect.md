# DrawRect <small>(RSDKv4)</small>

## Description
Draws a rectangle to `ixpos` and `iypos` in screen-space, with a color based on the `r`, `g`, `b`, and `alpha`.

## Parameters
`ixpos`

:   The position of the rectangle on the horizontal axis in screen-space.

`iypos`

:   The position of the rectangle on the vertical axis in screen-space.

`width`

:   The width of the rectangle.

`height`

:   The height of the rectangle.

`r`

:   A value range of 0-255 for the color red.

`g`

:   A value range of 0-255 for the color green.

`b`

:   A value range of 0-255 for the color blue.

`alpha`

:   A value range of 0-255 for transparency, 255 being no transparency.

## Return Value
None.

## Syntax
```
DrawRect(int ixpos, int iypos, int width, int height, int r, int g, int b, int alpha)
```

## Example
```
DrawRect(30, 220, 60, 20, 255, 128, 128, 255)
```
