# DrawRect

## Description
Draws a rectangle to a specified X and Y position in the screen with a color based on combination of red, green, blue and transparency.

## Parameters
- `ixPos`
The position of the rectangle on the horizontal axis in screen-space.
- `iyPos`
The position of the rectangle on the vertical axis in screen-space.
- `width`
The width of the rectangle.
- `height`
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
DrawTintRect(int ixPos, int iyPos, int width, int height, int R, int G, int B, int A)
```

## Examples
```
DrawRect(30, 220, 60, 20, 255, 128, 128, 255)
```