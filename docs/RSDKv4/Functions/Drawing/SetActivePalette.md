# SetActivePalette

## Description
Sets the active palette for `palBank` for all screen lines from `startLine` through to `endLine`.

## Parameters
- `palBank`
The ID of the new active palette, indices 0-7 are valid.
- `startLine`
The starting screen-line for the new active palette.
- `endLine`
The final screen-line for the new active palette.

## Return Value
None.

## Syntax
```
SetActivePalette(int palBank, int startLine, int endLine)
```

## Examples
```
SetActivePalette(0, 76, Screen.YSize)
```