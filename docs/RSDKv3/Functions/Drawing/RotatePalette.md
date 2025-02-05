# RotatePalette

## Description
Rotates all colors in the active palette bank from `StartIndex` to `EndIndex`, moving left or right depending on `RotRight`.

## Parameters
`StartIndex`

:   The starting index of the palette bank for the rotation.

`EndIndex`

:   The ending index of the palette bank for the rotation.

`RotRight`

:   Rotates right if `true`; otherwise, rotates left.

## Return Value
None.

## Syntax
```
RotatePalette(int StartIndex, int EndIndex, bool RotRight)
```

## Example
```
RotatePalette(16, 24, 1)
```