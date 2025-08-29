# DrawNumbers

## Description
Draws a number in screen-space.

## Parameters
`StartingFrame`

:   The ID of the first of ten SpriteFrame that will represent numbers 0-9.

`XPos`, `YPos`

:   The position of the sprite on the horizontal and vertical axes in screen-space.

`Value`

:   The number to draw.

`DigitCount`

:   The maximum number of digits to draw.

`Spacing`

:   The size of the space between digits, in pixels.

`ShowAllDigits`

:   If set to `true`, all digits within `DigitCount` will be drawn, even if `Value` is not a big enough number to draw them all. Extra numbers will be drawn as 0.

## Return Value
None.

## Syntax
```
DrawNumbers(int StartingFrame, int XPos, int YPos, int Value, int DigitCount, int Spacing, bool ShowAllDigits)
```

## Example
```
DrawNumbers(0, 80, 41, Player.Value0, 3, 8, false)
```
