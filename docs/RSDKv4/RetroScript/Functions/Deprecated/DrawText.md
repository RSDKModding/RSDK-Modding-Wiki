# DrawText

!!! failure "Deprecated"
    This function was removed from RSDKv4 in REV02.

## Description
Draws the contents of `menu`.

## Parameters
`menu`

:   The menu from where to read the text. `MENU_1` or `MENU_2` are valid.

`xpos`

:   Position of the text on the horizontal axis.

`ypos`

:   Position of the text on the vertical axis.

`scale`

:   Scale of the text.

`spacing`

:   Space between each letter.

`rowStart`

:   The starting index from where to read.

`rowCount`

:   The amount of rows to draw.

## Return Value
None.

## Syntax
```
DrawText(int menu, int xpos, int ypos, int scale, int spacing, int rowStart, int rowCount)
```

## Example
```
DrawText(MENU_1, temp0, temp1, 192, 0, 0, 1)
```