# CheckTouchRect

## Description
Checks if there's a touch input between the given coordinates.

## Parameters
`x1`

:   Left side of the rectangle.

`y1`

:   Top side of the rectangle.

`x2`

:   Right side of the rectangle.

`y2`

:   Bottom side of the rectangle.

## Return Value
Sets `checkResult` to the ID of the touch input within the coordinates. If there are no such touch inputs, `checkResult` is set to `-1`.

## Syntax
```
CheckTouchRect(int x1, int y1, int x2, int y2)
```

## Example
```
CheckTouchRect(0, 0, screen.xsize, screen.ysize)
```