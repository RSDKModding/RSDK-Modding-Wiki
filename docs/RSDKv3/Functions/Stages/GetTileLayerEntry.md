# GetTileLayerEntry

## Description
Gets the ID of the chunk at `ChunkX`, `ChunkY` in tile layer `Layer` and stores it in `Store`.

## Parameters
`Store`

:   The variable that will store the chunk.

`Layer`

:   The ID of the layer where the chunk comes from. The valid values are:

    - 0 (`DEFORM_FG`)
    - 1 (`DEFORM_FG_WATER`)
    - 2 (`DEFORM_BG`)
    - 3 (`DEFORM_BG_WATER`)

`ChunkX`

:   Position of the 128x128 chunk in the map on the horizontal axis.

`ChunkY`

:   Position of the 128x128 chunk in the map on the vertical axis.

## Return Value
Sets `store` to the chunk ID.

## Syntax
```
GetTileLayerEntry(var Store, int Layer, int ChunkX, int ChunkY)
```

## Example
```
GetTileLayerEntry(Object.Value2, 0, 24, 96)
```