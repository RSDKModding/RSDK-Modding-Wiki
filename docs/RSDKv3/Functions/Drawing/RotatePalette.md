# RotatePalette <small>(RSDKv3)</small>

## Description
Rotates all colors in `PalBank` from `StartIndex` to `EndIndex`, moving left or right depending on `RotRight`.

## Parameters
- `PalBank`
The ID of the palette bank for the palette to rotate. Indices 0-7 are valid.
- `StartIndex`
The starting index of the palette bank for the rotation.
- `EndIndex`
The ending index of the palette bank for the rotation.
- `RotRight`
Rotates right if `false`; otherwise, rotates left.

## Return Value
None.

## Syntax
```
RotatePalette(int PalBank, int StartIndex, int EndIndex, bool RotRight)
```

## Example
```
RotatePalette(2, 16, 24, 1)
```