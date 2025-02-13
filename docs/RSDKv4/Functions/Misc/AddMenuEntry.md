# AddMenuEntry

## Description
Adds an entry to `menu` with the contents of `text`. The text will display highlighted if `highlightEntry` is set to true.

## Parameters
`menu`

:   The menu to add the entry to. `MENU_1` or `MENU_2` are valid.

`text`

:   New text to add in the menu.

`highlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
AddMenuEntry(int menu, string text, bool highlightEntry)
```

## Example
```
AddMenuEntry(MENU_1, "THIS IS AN EXAMPLE", true)
```