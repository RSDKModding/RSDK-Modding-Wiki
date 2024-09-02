# CheckTouchRect

## Description
Check if there was a touch input between the inputted coordinates.

## Parameters
- `X1`
Left side of the rectangle.
- `X2`
Right side of the rectangle.
- `Y1`
Top side of the rectangle.
- `Y2`
Bottom side of the rectangle.

## Return Value
Will set `checkResult` to `true` if there was a touch press inside the rectangle.

## Syntax
```
CheckTouchRect(int X1, int Y1, int X2, int Y2)
```

## Examples
```
CheckTouchRect(0, 0, Screen.XSize, Screen.YSize)
```