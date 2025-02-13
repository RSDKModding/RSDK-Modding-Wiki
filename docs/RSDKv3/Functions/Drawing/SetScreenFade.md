# SetScreenFade

## Description
Adds a screen fade effect based on the `R`, `G`, `B` and `Alpha` values.

## Parameters
`R`
:   A value range of 0-255 for the color red.

`G`

:   A value range of 0-255 for the color green.

`B`

:   A value range of 0-255 for the color blue.

`Alpha`

:   A value range of 0-255 for transparency, 255 being no transparency

## Return Value
None.

## Syntax
```
SetScreenFade(int R, int G, int B, int Alpha)
```

## Example
```
SetScreenFade(255, 255, 255, object.alpha)
```