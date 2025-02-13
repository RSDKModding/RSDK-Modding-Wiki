# ObjectTileCollision

## Description
Tries to collide with the foreground layer based on the position of `object.ixpos` + `xOffset`, `object.iypos` + `yOffset`.

!!! note
    This function is best used for checking a tile is present. For moving along tiles, use [ObjectTileGrip()](ObjectTileGrip.md) instead.

## Parameters
`cSide`

:   Determines to which side of the tile the object has to collide. Can be `CSIDE_FLOOR`, `CSIDE_LWALL`, `CSIDE_RWALL`, or `CSIDE_ROOF`. In Sonic Origins, `CSIDE_LENTITY` and `CSIDE_RENTITY` are available as well.

`xOffset`

:   Horizontal offset of the object.

`yOffset`

:   Vertical offset of the object.

`cPlane`

:   Collision plane to take into account.

## Return Value
Sets `checkResult` to `true` if there was collision; otherwise, it's set to `false`.

## Syntax
```
ObjectTileCollision(int cSide, int xOffset, int yOffset, int cPlane)
```

## Example
```
ObjectTileCollision(CSIDE_LWALL, -15, -4, 0)
```