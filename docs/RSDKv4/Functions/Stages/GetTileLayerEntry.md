# GetTileLayerEntry

## Description
Gets the ID of the chunk at `chunkX`, `chunkY` in tile layer `layer` and stores it in `store`.

## Parameters
`store`

:   The variable that will store the chunk.

`layer`

:   The ID of the layer where the chunk comes from. The valid values are:

    - 0 (`DEFORM_FG`)
    - 1 (`DEFORM_FG_WATER`)
    - 2 (`DEFORM_BG`)
    - 3 (`DEFORM_BG_WATER`)

`chunkX`

:   Position of the 128x128 chunk in the map on the horizontal axis.

`chunkY`

:   Position of the 128x128 chunk in the map on the vertical axis.

## Return Value
Sets `store` to the chunk ID.

## Syntax
```
GetTileLayerEntry(var store, int layer, int chunkX, int chunkY)
```

## Example
```
GetTileLayerEntry(object.value2, 0, 24, 96)
```