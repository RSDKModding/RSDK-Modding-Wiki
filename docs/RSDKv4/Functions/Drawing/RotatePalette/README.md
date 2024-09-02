# RotatePalette

## Description
Rotates all colors in `palBank` starting from `startIndex` through to `endIndex`, moving left or right depending of `rotDir`.

## Parameters
- `palBank`
The ID of the palette bank for the palette to rotate, indices 0-7 are valid
- `startIndex`
The starting index of the palette bank for the rotation
- `endIndex`
The ending index of the palette bank for the rotation
- `rotDir`
The direction of the rotation

## Return Value
None.

## Syntax
```
RotatePalette(int palBank, int startIndex, int endIndex, int rotDir)
```

## Examples
```
RotatePalette(2, 16, 24, 1)
```