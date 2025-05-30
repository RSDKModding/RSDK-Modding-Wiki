# CheckTouchRect

## Description
Checks if there's a touch input between the given coordinates.

## Parameters
`X1`

:   Left side of the rectangle.

`Y1`

:   Top side of the rectangle.

`X2`

:   Right side of the rectangle.

`Y2`

:   Bottom side of the rectangle.

## Return Value
Sets `CheckResult` to the ID of the touch input within the coordinates. If there are no such touch inputs, `CheckResult` is set to `-1`.

## Syntax
```
CheckTouchRect(int X1, int Y1, int X2, int Y2)
```

## Example
```
CheckTouchRect(0, 0, Screen.XSize, Screen.YSize)
```