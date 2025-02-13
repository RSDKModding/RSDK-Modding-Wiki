# SetPaletteFade

## Description
Blends the currectly active palette from `StartIndex` to `EndIndex` based on `R`, `G`, `B`, and `BlendAmount`, and stores the new palette in `DstBank`.

## Parameters
`DstBank`

:   The ID of the palette for store. Indices 0-7 are valid.

`R`

:   A value range of 0-255 for the color red.

`G`

:   A value range of 0-255 for the color green.

`B`

:   A value range of 0-255 for the color blue.

`BlendAmount`

:   A value range of 0-255 for blending.

`StartIndex`

:   The starting index of the palette bank to blend.

`EndIndex`

:   The ending index of the palette bank to blend.

## Return Value
None.

## Syntax
```
SetPaletteFade(int DstBank, int R, int G, int B, int BlendAmount, int StartIndex, int EndIndex)
```

## Example
```
SetPaletteFade(1, 128, 128, 128, 255, 64, 144)
```