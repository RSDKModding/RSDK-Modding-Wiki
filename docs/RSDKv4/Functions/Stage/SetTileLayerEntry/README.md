# SetTileLayerEntry

## Description
Sets the Chunk at `chunkX`, `chunkY` on tilelayer `layer` to the index of `value`.

## Parameters
- `value`
The index value of the new chunk.
- `layer`
The ID of the layer where the chunk comes from, valid values are:
    0(DEFORM_FG)
    1(DEFORM_FG_WATER)
    2(DEFORM_BG)
    3(DEFORM_BG_WATER)
- `chunkX`
Position of the 128x128 chunk in the map on the horizontal axis.
- `chunkY`
Position of the 128x128 chunk in the map on the vertical axis.

## Return Value
None.

## Syntax
```
SetTileLayerEntry(int value, int layer, int chunkX, int chunkY)
```

## Examples
```
SetTileLayerEntry(35, 0, 24, 96)
```