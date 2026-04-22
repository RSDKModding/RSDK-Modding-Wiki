# SetTileLayerEntry

Sets the chunk at `chunkX`, `chunkY` in tile layer `layer` to the index of `value`.

## Parameters
`value`

:   The index value of the new chunk.

`layer`

:   The ID of the layer to set the chunk in. 0 represents the foreground layer, while 1-8 represent background layers 1-8.

`chunkX`

:   Position of the 128x128 chunk in the map on the horizontal axis.

`chunkY`

:   Position of the 128x128 chunk in the map on the vertical axis.

## Return Value
None.

## Syntax
```
SetTileLayerEntry(int value, int layer, int chunkX, int chunkY)
```

## Example
```
SetTileLayerEntry(35, 0, 24, 96)
```
