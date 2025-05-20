# LoadTextFile

## Description
Loads `menu` based on the text file loaded from `filePath`.

!!! note
    In earlier revisions, this function took an additional boolean parameter named `mapCode`, which allowed using a map code if set to `true`. This was removed in REV02.

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