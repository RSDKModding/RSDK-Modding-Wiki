# RotatePalette

## Description
Rotates all colors in `palBank` starting from `startIndex` through to `endIndex`, moving left or right depending of `RotDir`.

## Parameters
- `PalBank`
The ID of the palette bank for the palette to rotate, indices 0-7 are valid
- `StartIndex`
The starting index of the palette bank for the rotation
- `EndIndex`
The ending index of the palette bank for the rotation
- `RotDir`
The direction of the rotation

## Return Value
None.

## Syntax
```RotatePalette(int PalBank, int StartIndex, int EndIndex, int RotDir)```

## Examples
- ```RotatePalette(2, 16, 24, 1)```

## Note
HW Renderer cannot use this function