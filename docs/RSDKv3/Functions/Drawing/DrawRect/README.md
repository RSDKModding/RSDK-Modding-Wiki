# DrawRect

## Description
Draws a rectangle to a specified X and Y position in the screen with a color based on combination of red, green, blue and transparency.

## Parameters
- `iXPos`
The position of the rectangle on the horizontal axis in screen-space.
- `iYPos`
The position of the rectangle on the vertical axis in screen-space.
- `Width`
The width of the rectangle.
- `Height`
The height of the rectangle.
- `R`
A value range of 0-255 for the color red.
- `G`
A value range of 0-255 for the color green.
- `B`
A value range of 0-255 for the color blue.
- `A`
A value range of 0-255 for transparency (255 being no transparency)

## Return Value
None.

## Syntax
```
DrawTintRect(int iXPos, int iYPos, int Width, int Height, int R, int G, int B, int A)
```

## Examples
```
DrawRect(30, 220, 60, 20, 255, 128, 128, 255)
```