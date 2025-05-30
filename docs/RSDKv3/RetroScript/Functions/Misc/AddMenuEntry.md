# AddMenuEntry

## Description
Adds an entry to `Menu` with the contents of `Text`. The text will display highlighted if `HighlightEntry` is set to true.

## Parameters
`Menu`

:   The menu to add the entry to. `MENU_1` or `MENU_2` are valid.

`Text`

:   New text to add in the menu.

`HighlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
AddMenuEntry(int Menu, string Text, bool HighlightEntry)
```

## Example
```
AddMenuEntry(MENU_1, "THIS IS AN EXAMPLE", true)
```