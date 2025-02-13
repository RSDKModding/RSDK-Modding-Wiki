# ObjectTileCollision

## Description
Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`.

!!! note
    This function is best used for checking a tile is present. For moving along tiles, use [ObjectTileGrip()](ObjectTileGrip.md) instead.

## Parameters
`CSide`

:   Determines to which side of the tile the object has to collide. Can be `CSIDE_FLOOR`, `CSIDE_LWALL`, `CSIDE_RWALL`, or `CSIDE_ROOF`. In Sonic Origins, `CSIDE_ENTITY` is available as well.

`xOffset`

:   Horizontal offset of the object.

`yOffset`

:   Vertical offset of the object.

`CPlane`

:   Collision plane to take into account.

## Return Value
Sets `CheckResult` to `true` if there was collision; otherwise, it's set to `false`.

## Syntax
```
ObjectTileCollision(int CSide, int xOffset, int yOffset, int CPlane)
```

## Example
```
ObjectTileCollision(CSIDE_LWALL, -15, -4, 0)
```