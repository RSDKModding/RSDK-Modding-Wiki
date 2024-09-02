# SetScreenFade

## Description
Sets the fade-out effect based on `R`, `G`, `B` and `Alpha` values.

## Parameters
- `R`
A value range of 0-255 for the color red.
- `G`
A value range of 0-255 for the color green.
- `B`
A value range of 0-255 for the color blue.
- `Alpha`
A value range of 0-255 for transparency (255 being no transparency)

## Return Value
None.

## Syntax
```
SetScreenFade(int R, int G, int B, int Alpha)
```

## Examples
```
SetScreenFade(255, 0, 0, object.alpha)
```