# AddMenuEntry

## Description
Adds an entry to `menu` with the contents of `text`, The text will display highlighted if `highlightEntry` is set to true.

## Parameters
- `menu`
The menu to setup, MENU_1 or MENU_2 are valid
- `text`
New text to add in the menu
- `highlightEntry`
Boolean that determines if the text will be highlighted always


## Return Value
None.

## Syntax
```
AddMenuEntry(int menu, "string Text", bool highlightEntry)
```

## Examples
```
AddMenuEntry(MENU_1, "WELCOME TO THE SECRET SPECIAL STAGE", true)
```