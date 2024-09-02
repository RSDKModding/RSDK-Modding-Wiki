# EditMenuEntry

## Description
Edits an entry of `menu` with the contents of `text` in `rowID`, The text will display highlighted if `highlightEntry` is set to true.

## Parameters
- `menu`
The menu to setup, MENU_1 or MENU_2 are valid
- `text`
New text to add in the menu
- `rowID`
The row to edit
- `highlightEntry`
Boolean that determines if the text will be highlighted always


## Return Value
None.

## Syntax
```
EditMenuEntry(int menu, "string Text", bool highlightEntry)
```

## Examples
```
EditMenuEntry(MENU_1, "THIS IS AN EXAMPLE", 0, true)
```