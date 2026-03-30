# SetWaterColor

Sets the water colour based on `R`, `G`, `B` and `Alpha`.

!!! note
    This is not functional in both the original 2008 Nexus demo and the RSDKv2 decompilation. This is kept here for documentational purposes.

## Parameters
!!! note
    This was most likely supposed to call the engine's `SetWaterColour` function, which has these parameters, and was spelt with a 'u' unlike this function.

`R`

:   A value range of 0-255 for the color red.

`G`

:   A value range of 0-255 for the color green.

`B`

:   A value range of 0-255 for the color blue.

`Alpha`

:   A value range of 0-255 for transparency, 255 being no transparency.

## Return Value
None.

## Syntax
```
SetWaterColor(int R, int G, int B, int Alpha)
```

## Example
```
SetWaterColor(128, 128, 128, 255)
```
