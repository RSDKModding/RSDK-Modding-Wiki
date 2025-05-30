# EditMenuEntry

## Description
Edits an entry of `menu` with the contents of `text` in `rowID`. The text will display highlighted if `highlightEntry` is set to true.

## Parameters
`menu`

:   The menu to edit the entry in. `MENU_1` or `MENU_2` are valid.

`text`

:   Text to replace the current text with.

`rowID`

:   The index of the row to edit.

`highlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
EditMenuEntry(int menu, string text, int rowID, bool highlightEntry)
```

## Example
```
EditMenuEntry(MENU_1, "THIS IS AN EXAMPLE", 0, true)
```