# Get16x16TileInfo

## Description
Gets the info of `infoTile` from a tile at `TileX`, `TileY`. And stores it in `chunkStore`.

## Parameters
- `chunkStore`
The variable that will store the tile's specified `infoType` data.
- `tileX`
Position of the 16x16 tile in the map on the horizontal axis.
- `tileY`
Position of the 16x16 tile in the map on the vertical axis.
- `infoType`
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
```
Get16x16TileInfo(var chunkStore, int tileX, int tileY, int infoType)
```

## Examples
```
Get16x16TileInfo(object.value2, 25, 24, 8)
```