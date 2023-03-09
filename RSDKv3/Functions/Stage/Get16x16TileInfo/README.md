# Get16x16TileInfo

## Description
Gets the info of `InfoTile` from a tile at `TileX`, `TileY`. And stores it in `ChunkStore`

## Parameters
- `ChunkStore`
The variable that will store the tile's specified `InfoType` data
- `TileX`
Position of the 16x16 tile in the map on the horizontal axis
- `TileY`
Position of the 16x16 tile in the map on the vertical axis
- `InfoType`
The ID for the type of info read from the tile, valid values are: 
    0 - TILEINFO_INDEX
    1 - TILEINFO_DIRECTION
    2 - TILEINFO_VISUALPLANE
    3 - TILEINFO_SOLIDITYA
    4 - TILEINFO_SOLIDITYB
    5 - TILEINFO_FLAGSA
    6 - TILEINFO_ANGLEA
    7 - TILEINFO_FLAGSB
    8 - TILEINFO_ANGLEB
    
## Return Value
None.

## Syntax
```Get16x16TileInfo(var ChunkStore, int TileX, int TileY, int InfoType)```

## Examples
- ```Get16x16TileInfo(Object.Value2, 25, 24, 8)```