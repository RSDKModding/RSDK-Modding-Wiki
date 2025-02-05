# SetLayerDeformation

## Description
Sets the deformation data array of `deformID`, based on `deformA` and `deformB`.

## Parameters
`deformID`

:   The ID of the layer to deform, valid values are:

    - 0 (`DEFORM_FG`)
    - 1 (`DEFORM_FG_WATER`)
    - 2 (`DEFORM_BG`)
    - 3 (`DEFORM_BG_WATER`)

`waveLength`

:   Length of the wave.

`waveWidth`

:   Width of the wave.

`waveType`

:   Type of wave; 0 will affect the entire layer, 1 will use `yPos` and `waveSize` to determine the area of effect.

`yPos`

:   The offset from where the wave will start.

`waveSize`

:   The size of the wave.

## Return Value
None.

## Syntax
```
SetLayerDeformation(int deformID, int waveLength, int waveWidth, int waveType, int yPos, int waveSize)
```

## Example
```
SetLayerDeformation(0, 16, 2, 1, 96, 128)
```