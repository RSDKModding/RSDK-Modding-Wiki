# DrawMenu

## Description
Draws `Menu` at `XPos` and `YPos` relative to the screen.

## Parameters
`Menu`

:   The menu to draw. `MENU_1` or `MENU_2` are valid.

`XPos`

:   Position of the menu on the horizontal axis.

`YPos`

:   Position of the menu on the vertical axis.

## Return Value
None.

## Syntax
```
DrawMenu(int Menu, int XPos, int YPos)
```

## Example
```
DrawMenu(MENU_1, Screen.CenterX, Screen.CenterY)
```