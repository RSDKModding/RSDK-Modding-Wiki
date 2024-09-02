# DrawText

## Description
Draws the contents of `rowCount` rows, starting from `rowStart` in `menu` at `xPos` and `yPos` relative to the screen. Using `spacing` pixels between them and scalling it with `scale`.
(Removed from the engine in REV02)

## Parameters
- `menu`
The menu from where to read the text, MENU_1 or MENU_2 are valid.
- `xPos`
Position of the text on the horizontal axis.
- `yPos`
Position of the text on the vertical axis.
- `scale`
Scale of the text.
- `spacing`
Space between each letter.
- `rowStart`
The starting index from where to read.
- `rowCount`
The amount of rows to draw.


## Return Value
None.

## Syntax
```
DrawText(int menu, int xPos, int yPos, int scale, int spacing, int rowStart, int rowCount)
```

## Examples
```
DrawText(MENU_1, temp0, temp1, 192, 0, 0, 1)
```