# Get16x16TileInfo

## Description
Gets the value for `InfoTile` from the tile at `TileX`, `TileY` and stores it in `Store`.

## Parameters
`Store`

:   The variable that will store the tile's specified `InfoType` data.

`TileX`

:   Position of the 16x16 tile in the map on the horizontal axis.

`TileY`

:   Position of the 16x16 tile in the map on the vertical axis.

`InfoType`

:   The ID for the type of info read from the tile. The valid values are:

    - 0 (`TILEINFO_INDEX`)
    - 1 (`TILEINFO_DIRECTION`)
    - 2 (`TILEINFO_VISUALPLANE`)
    - 3 (`TILEINFO_SOLIDITYA`)
    - 4 (`TILEINFO_SOLIDITYB`)
    - 5 (`TILEINFO_FLAGSA`)
    - 6 (`TILEINFO_ANGLEA`)
    - 7 (`TILEINFO_FLAGSB`)
    - 8 (`TILEINFO_ANGLEB`)

## Return Value
Sets `store` to the chunk ID.

## Syntax
```
Get16x16TileInfo(var Store, int TileX, int TileY, int InfoType)
```

## Example
```
Get16x16TileInfo(Object.Value2, 25, 24, 8)
```