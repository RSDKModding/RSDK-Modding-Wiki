# SetupMenu

## Description
Sets up `Menu` with `RowCount` rows, `SelectionCount` active selections and aligning to `Alignment`.

## Parameters
- `Menu`
The menu to setup, MENU_1 or MENU_2 are valid.
- `RowCount`
The amount of rows the menu starts with.
- `SelectionCount`
Selection of highlight.
- `Alignment`
Alignment of the text, 0 will be to the right, 1 to the left, and 2 centered.


## Return Value
None.

## Syntax
```
SetupMenu(int Menu, int RowCount, int SelectionCount, int Alignment)
```

## Examples
```
SetupMenu(MENU_1, 0, 3, 1)
```