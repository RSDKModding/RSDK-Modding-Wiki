# SetActivePalette

## Description
Sets the active palette to `palBank` for all vertical screen lines from `startLine` to `endLine`.

## Parameters
`palBank`

:   The ID of the new active palette. Indices 0-7 are valid.

`startLine`

:   The starting vertical screen-line for the new active palette.

`endLine`

:   The ending vertical screen-line for the new active palette.

## Return Value
None.

## Syntax
```
SetActivePalette(int palBank, int startLine, int endLine)
```

## Example
```
SetActivePalette(0, 76, screen.ysize)
```