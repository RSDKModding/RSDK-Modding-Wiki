# DrawText

## Description
Draws the contents of `menu`.

## Parameters
`Menu`

:   The menu from where to read the text. `MENU_1` or `MENU_2` are valid.

`XPos`

:   Position of the text on the horizontal axis.

`YPos`

:   Position of the text on the vertical axis.

`Scale`

:   Scale of the text.

`Spacing`

:   Space between each letter.

`RowStart`

:   The starting index from where to read.

`RowCount`

:   The amount of rows to draw.

## Return Value
None.

## Syntax
```
DrawText(int Menu, int XPos, int YPos, int Scale, int Spacing, int RowStart, int RowCount)
```

## Example
```
DrawText(MENU_1, TempValue0, TempValue1, 192, 0, 0, 1)
```