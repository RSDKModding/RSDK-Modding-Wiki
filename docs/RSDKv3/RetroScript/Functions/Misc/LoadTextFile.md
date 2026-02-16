# LoadTextFile

Loads `Menu` based on the text file loaded from `FilePath`.

## Parameters
`Menu`

:   The menu to which the file will load. `MENU_1` or `MENU_2` are valid.

`FilePath`

:   The path to the target file, relative to the root of the Data assets.

`MapCode`

:   The map code to use.

## Return Value
None.

## Syntax
```
LoadTextFile(int Menu, string FilePath, int MapCode)
```

## Example
```
LoadTextFile(MENU_1, "Data/Game/Credits_Mobile.txt", 1)
```
