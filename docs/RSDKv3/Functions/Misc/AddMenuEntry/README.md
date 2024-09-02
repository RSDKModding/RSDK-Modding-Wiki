# AddMenuEntry

## Description
Adds an entry to `Menu` with the contents of `Text`, The text will display highlighted if `HighlightEntry` is set to true.

## Parameters
- `Menu`
The menu to setup, MENU_1 or MENU_2 are valid
- `Text`
New text to add in the menu
- `HighlightEntry`
Boolean that determines if the text will be highlighted always


## Return Value
None.

## Syntax
```
AddMenuEntry(int Menu, "string Text", bool HighlightEntry)
```

## Examples
```
AddMenuEntry(MENU_1, "WELCOME TO THE SECRET SPECIAL STAGE", true)
```