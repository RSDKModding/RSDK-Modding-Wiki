# EditMenuEntry

## Description
Edits an entry of `Menu` with the contents of `Text` in `RowID`, The text will display highlighted if `HighlightEntry` is set to true.

## Parameters
- `Menu`
The menu to setup, MENU_1 or MENU_2 are valid
- `Text`
New text to add in the menu
- `RowID`
The row to edit
- `HighlightEntry`
Boolean that determines if the text will be highlighted always


## Return Value
None.

## Syntax
```
EditMenuEntry(int Menu, "string Text", bool HighlightEntry)
```

## Examples
```
EditMenuEntry(MENU_1, "THIS IS AN EXAMPLE", 0, true)
```