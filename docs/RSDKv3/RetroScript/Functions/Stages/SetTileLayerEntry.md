# SetTileLayerEntry

Sets the chunk at `ChunkX`, `ChunkY` in tile layer `Layer` to the index of `Value`.

## Parameters
`Value`

:   The index value of the new chunk.

`Layer`

:   The ID of the layer to set the chunk in. 0 represents the foreground layer, while 1-8 represent background layers 1-8.

`ChunkX`

:   Position of the 128x128 chunk in the map on the horizontal axis.

`ChunkY`

:   Position of the 128x128 chunk in the map on the vertical axis.

## Return Value
None.

## Syntax
```
SetTileLayerEntry(int Value, int Layer, int ChunkX, int ChunkY)
```

## Example
```
SetTileLayerEntry(35, 0, 24, 96)
```
