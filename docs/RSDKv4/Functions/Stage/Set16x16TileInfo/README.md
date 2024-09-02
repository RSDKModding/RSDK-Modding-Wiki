# Set16x16TileInfo

## Description
Sets the info for `infoTile` from a tile at `tileX`, `tileY` to the new `value`

## Parameters
- `value`
The new value for the tile's specified `infoType`
- `tileX`
Position of the 16x16 tile in the map on the horizontal axis
- `tileY`
Position of the 16x16 tile in the map on the vertical axis
- `infoType`
The ID for the type of info that will be overwritten from the tile, valid values are: 
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
Set16x16TileInfo(int value, int tileX, int tileY, int infoType)
```

## Examples
```
Set16x16TileInfo(3, temp0, temp1, 7)
```