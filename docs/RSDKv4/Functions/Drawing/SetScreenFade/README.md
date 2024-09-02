# SetScreenFade

## Description
Sets the fade-out effect based on `R`, `G`, `B` and `alpha` values

## Parameters
- `R`
a value range of 0-255 for the color red
- `G`
a value range of 0-255 for the color green
- `B`
a value range of 0-255 for the color blue
- `alpha`
a value range of 0-255 for transparency (255 being no transparency)

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