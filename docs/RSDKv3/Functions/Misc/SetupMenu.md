# SetupMenu

## Description
Sets up `Menu` with `RowCount` rows, `SelectionCount` active selections and aligning set to `Alignment`.

## Parameters
`Menu`

:   The menu to setup. `MENU_1` or `MENU_2` are valid.

`RowCount`

:   The amount of rows the menu starts with.

`SelectionCount`

:   Selection of highlight.

`Alignment`

:   Alignment of the text. 0 is right aligned, 1 is left aligned, and 2 is centered.

## Return Value
None.

## Syntax
```
SetupMenu(int Menu, int RowCount, int SelectionCount, int Alignment)
```

## Example
```
SetupMenu(MENU_1, 0, 3, 1)
```