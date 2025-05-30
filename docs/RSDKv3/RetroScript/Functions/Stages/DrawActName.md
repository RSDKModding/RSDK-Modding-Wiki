# DrawActName

## Description
Draws the current stage's title.

## Parameters
`StartingFrame`

:   The ID of the first of fifty-two SpriteFrames, the first twenty-six representing uppercase letters A-Z, and the latter twenty-six representing lowercase letters a-z. **This function only supports the English alphabet.**

`XPos`, `YPos`

:   The position of the sprite on the horizontal and vertical axes in screen-space.

`DrawMode`

:   The word and alignment to draw with:

:   - `0` - Word 1, aligned to the right
:   - `1` - Word 1, aligned to the left
:   - `2` - Word 2, aligned to the left

!!! note
    There is no mode for drawing Word 2 aligned to the right.

`UseAllCaps`

:   If set to `true`, all letters drawn will be uppercase.

`SpaceWidth`

:   The width of space (` `) characters, in pixels.

`Spacing`

:   The size of the space between letters, in pixels.

## Return Value
None.

## Syntax
```
DrawActName(int StartingFrame, int XPos, int YPos, int DrawMode, bool UseAllCaps, int SpaceWidth, int Spacing)
```

## Example
```
DrawActName(0, TempValue0, 80, 0, false, 16, 1)
```