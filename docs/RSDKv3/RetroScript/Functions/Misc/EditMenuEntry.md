# EditMenuEntry

## Description
Edits an entry of `Menu` with the contents of `Text` in `RowID`. The text will display highlighted if `HighlightEntry` is set to true.

## Parameters
`Menu`

:   The menu to edit the entry in. `MENU_1` or `MENU_2` are valid.

`Text`

:   Text to replace the current text with.

`RowID`

:   The index of the row to edit.

`HighlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
EditMenuEntry(int Menu, string Text, int RowID, bool HighlightEntry)
```

## Example
```
EditMenuEntry(MENU_1, "THIS IS AN EXAMPLE", 0, true)
```