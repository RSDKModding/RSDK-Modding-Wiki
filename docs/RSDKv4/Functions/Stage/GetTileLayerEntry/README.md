# GetTileLayerEntry

## Description
Gets the ChunkID of the chunk at `chunkX`, `chunkY` on tilelayer `layer`. And stores it in `chunkStore`

## Parameters
- `chunkStore`
The variable that will store the chunk
- `layer`
The ID of the layer where the chunk comes from, valid values are: 
    0(DEFORM_FG)
    1(DEFORM_FG_WATER)
    2(DEFORM_BG)
    3(DEFORM_BG_WATER)
- `chunkX`
Position of the 128x128 chunk in the map on the horizontal axis
- `chunkY`
Position of the 128x128 chunk in the map on the vertical axis

## Return Value
None.

## Syntax
```
GetTileLayerEntry(var chunkStore, int layer, int chunkX, int chunkY)
```

## Examples
```
GetTileLayerEntry(object.value2, 0, 24, 96)
```