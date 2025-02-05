# SetLayerDeformation

## Description
Sets the deformation data array of `DeformID`, based on `DeformA` and `DeformB`.

## Parameters
`DeformID`

:   The ID of the layer to deform, valid values are:

    - 0 (`DEFORM_FG`)
    - 1 (`DEFORM_FG_WATER`)
    - 2 (`DEFORM_BG`)
    - 3 (`DEFORM_BG_WATER`)

`WaveLength`

:   Length of the wave.

`WaveWidth`

:   Width of the wave.

`WaveType`

:   Type of wave; 0 will affect the entire layer, 1 will use `YPos` and `WaveSize` to determine the area of effect.

`YPos`

:   The offset from where the wave will start.

`WaveSize`

:   The size of the wave.

## Return Value
None.

## Syntax
```
SetLayerDeformation(int DeformID, int WaveLength, int WaveWidth, int WaveType, int YPos, int WaveSize)
```

## Example
```
SetLayerDeformation(0, 16, 2, 1, 96, 128)
```