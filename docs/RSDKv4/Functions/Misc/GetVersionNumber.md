# GetVersionNumber

## Description
Adds a text entry to `menu` with the engine's version as the text. The text will display highlighted if `highlightEntry` is set to true.

## Parameters
`menu`

:   The menu to add the text to. `MENU_1` or `MENU_2` are valid.

`highlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
GetVersionNumber(int menu, bool highlightEntry)
```

## Example
```
GetVersionNumber(MENU_2, true)
```