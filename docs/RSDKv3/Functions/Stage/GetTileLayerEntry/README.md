# GetTileLayerEntry

## Description
Gets the ChunkID of the chunk at `ChunkX`, `ChunkY` on tilelayer `Layer`. And stores it in `ChunkStore`

## Parameters
- `ChunkStore`
The variable that will store the chunk
- `Layer`
The ID of the layer where the chunk comes from, valid values are: 
    0(DEFORM_FG)
    1(DEFORM_FG_WATER)
    2(DEFORM_BG)
    3(DEFORM_BG_WATER)
- `ChunkX`
Position of the 128x128 chunk in the map on the horizontal axis
- `ChunkY`
Position of the 128x128 chunk in the map on the vertical axis

## Return Value
None.

## Syntax
```
GetTileLayerEntry(var ChunkStore, int Layer, int ChunkX, int ChunkY)
```

## Examples
```
GetTileLayerEntry(Object.Value2, 0, 24, 96)
```