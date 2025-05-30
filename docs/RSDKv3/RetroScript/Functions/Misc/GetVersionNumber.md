# GetVersionNumber

## Description
Adds a text entry to `Menu` with the engine's version as the text. The text will display highlighted if `HighlightEntry` is set to true.

## Parameters

`Menu`

:   The menu to add the text to. `MENU_1` or `MENU_2` are valid.

`HighlightEntry`

:   Determines if the text will always be highlighted.

## Return Value
None.

## Syntax
```
GetVersionNumber(int Menu, bool HighlightEntry)
```

## Example
```
GetVersionNumber(MENU_2, true)
```