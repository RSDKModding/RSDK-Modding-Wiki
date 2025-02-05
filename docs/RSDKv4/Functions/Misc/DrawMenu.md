# DrawMenu

## Description
Draws `menu` at `xpos` and `ypos` relative to the screen.

## Parameters
`menu`

:   The menu to draw. `MENU_1` or `MENU_2` are valid.

`xpos`

:   Position of the menu on the horizontal axis.

`ypos`

:   Position of the menu on the vertical axis.

## Return Value
None.

## Syntax
```
DrawMenu(int menu, int xpos, int ypos)
```

## Example
```
DrawMenu(MENU_1, screen.xcenter, screen.ycenter)
```