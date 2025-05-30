# ObjectTileGrip

## Description
Tries to collide with the foreground layer based on the position of `Object.iXPos` + `xOffset`, `Object.iYPos` + `yOffset`.
TODO: this needs a better description to differentiate it from [ObjectTileCollision()](ObjectTileCollision.md)

!!! note
    This function is best used to handle moving along surfaces. For handling simpler collision, use [ObjectTileCollision()](ObjectTileCollision.md) instead.

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
ObjectTileGrip(int CSide, int xOffset, int yOffset, int CPlane)
```

## Example
```
ObjectTileGrip(CSIDE_RWALL, 8, -12, 0)
```