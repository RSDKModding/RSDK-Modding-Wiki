# SetActivePalette

## Description
Sets the active palette for `PalBank` for all screen lines from `StartLine` through to `EndLine`.

## Parameters
- `PalBank`
the ID of the new active palette, indices 0-7 are valid
- `StartLine`
the starting screen-line for the new active palette
- `EndLine`
the final screen-line for the new active palette

## Return Value
None.

## Syntax
```
SetActivePalette(int PalBank, int StartLine, int EndLine)
```

## Examples
```
SetActivePalette(0, 76, Screen.YSize)
```