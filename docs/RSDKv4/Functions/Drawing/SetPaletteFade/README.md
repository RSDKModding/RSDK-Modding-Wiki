# SetPaletteFade

## Description
Blends the currectly active palette, starting at `palIndex` through to `endIndex`. With a mix based on `R`, `G`, `B` by `blendAmount`, and stores it in `destPalBank`.

## Parameters
- `destPalBank`
the ID of the palette for store, indices 0-7 are valid
- `R`
a value range of 0-255 for the color red
- `G`
a value range of 0-255 for the color green
- `B`
a value range of 0-255 for the color blue
- `blendAmount`
a value range of 0-255 for blending
- `startIndex`
The starting index of the palette bank to blend
- `endIndex`
The ending index of the palette bank to blend

## Return Value
None.

## Syntax
```SetPaletteFade(int destPalBank, int R, int G, int B, int blendAmount, int startIndex, int endIndex)```

## Examples
- ```SetPaletteFade(1, 128, 128, 128, 255, 64, 144)```