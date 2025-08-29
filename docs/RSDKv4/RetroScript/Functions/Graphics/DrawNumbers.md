# DrawNumbers

## Description
Draws a number in screen-space.

## Parameters
`startingFrame`

:   The ID of the first of ten SpriteFrame that will represent numbers 0-9.

`xpos`, `ypos`

:   The position of the sprite on the horizontal and vertical axes in screen-space.

`value`

:   The number to draw.

`digitCount`

:   The maximum number of digits to draw.

`spacing`

:   The size of the space between digits, in pixels.

`showAllDigits`

:   If set to `true`, all digits within `digitCount` will be drawn, even if `value` is not a big enough number to draw them all. Extra numbers will be drawn as 0.

## Return Value
None.

## Syntax
```
DrawNumbers(int startingFrame, int xpos, int ypos, int value, int digitCount, int spacing, bool showAllDigits)
```

## Example
```
DrawNumbers(0, 80, 41, object[0].value0, 3, 8, false)
```
