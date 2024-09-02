# SetPaletteFade

## Description
Blends the currectly active palette, starting at `PalIndex` through to `EndIndex`. With a mix based on `R`, `G`, `B` by `BlendAmount`, and stores it in `DestPalBank`.

## Parameters
- `DestPalBank`
the ID of the palette for store, indices 0-7 are valid
- `R`
a value range of 0-255 for the color red
- `G`
a value range of 0-255 for the color green
- `B`
a value range of 0-255 for the color blue
- `BlendAmount`
a value range of 0-255 for blending
- `StartIndex`
The starting index of the palette bank to blend
- `EndIndex`
The ending index of the palette bank to blend

## Return Value
None.

## Syntax
```
SetPaletteFade(int DestPalBank, int R, int G, int B, int BlendAmount, int StartIndex, int EndIndex)
```

## Examples
```
SetPaletteFade(1, 128, 128, 128, 255, 64, 144)
```