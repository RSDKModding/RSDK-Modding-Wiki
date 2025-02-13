# SetActivePalette

## Description
Sets the active palette to `PalBank` for all vertical screen lines from `StartLine` to `EndLine`.

## Parameters
`PalBank`

:   The ID of the new active palette. Indices 0-7 are valid.

`StartLine`

:   The starting vertical screen-line for the new active palette.

`EndLine`

:   The ending vertical screen-line for the new active palette.

## Return Value
None.

## Syntax
```
SetActivePalette(int PalBank, int StartLine, int EndLine)
```

## Example
```
SetActivePalette(0, 76, Screen.YSize)
```