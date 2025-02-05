# LoadTextFile

## Description
Loads `menu` based on the text file loaded from `filePath`.

## Parameters
`menu`

:   The menu to which the file will load. `MENU_1` or `MENU_2` are valid.

`filePath`

:   The path to the target file, relative to the root of the Data assets.

## Return Value
None.

## Syntax
```
LoadTextFile(int menu, string filePath)
```

## Example
```
LoadTextFile(MENU_1, "Data/Game/Credits_Mobile.txt")
```