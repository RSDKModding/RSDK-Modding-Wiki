# RotatePalette

## Description
Rotates all colors in `palBank` from `startIndex` to `endIndex`, moving left or right depending on `rotRight`.

## Parameters
`palBank`

:   The ID of the palette bank for the palette to rotate. Indices 0-7 are valid.

`startIndex`

:   The starting index of the palette bank for the rotation.

`endIndex`

:   The ending index of the palette bank for the rotation.

`rotRight`

:   Rotates right if `true`; otherwise, rotates left.

## Return Value
None.

## Syntax
```
RotatePalette(int palBank, int startIndex, int endIndex, bool rotRight)
```

## Example
```
RotatePalette(2, 16, 24, 1)
```