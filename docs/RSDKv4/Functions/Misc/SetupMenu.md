# SetupMenu

## Description
Sets up `menu` with `rowCount` rows, `selectionCount` active selections and aligning to `alignment`.

## Parameters
- `menu`
The menu to setup, MENU_1 or MENU_2 are valid.
- `rowCount`
The amount of rows the menu starts with.
- `selectionCount`
Selection of highlight.
- `alignment`
Alignment of the text, 0 will be to the right, 1 to the left, and 2 centered.


## Return Value
None.

## Syntax
```
SetupMenu(int menu, int rowCount, int selectionCount, int alignment)
```

## Examples
```
SetupMenu(MENU_1, 0, 3, 1)
```