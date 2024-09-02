# SetScreenFade

## Description
Sets the fade-out effect based on `R`, `G`, `B` and `alpha` values.

## Parameters
- `R`
A value range of 0-255 for the color red.
- `G`
A value range of 0-255 for the color green.
- `B`
A value range of 0-255 for the color blue.
- `alpha`
A value range of 0-255 for transparency (255 being no transparency)

## Return Value
None.

## Syntax
```
SetScreenFade(int R, int G, int B, int alpha)
```

## Examples
```
SetScreenFade(255, 0, 0, object.alpha)
```