# SetFade

Blends the palette from `StartIndex` to `EndIndex` based on `R`, `G`, `B`, and `BlendAmount`.

## Parameters
`R`

:   A value range of 0-255 for the color red.

`G`

:   A value range of 0-255 for the color green.

`B`

:   A value range of 0-255 for the color blue.

`BlendAmount`

:   A value range of 0-255 for blending.

`StartIndex`

:   The starting index of the palette to blend.

`EndIndex`

:   The ending index of the palette to blend.

## Return Value
None.

## Syntax
```
SetFade(int R, int G, int B, int BlendAmount, int StartIndex, int EndIndex)
```

## Example
```
SetFade(128, 128, 128, 255, 64, 144)
```
