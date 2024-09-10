# ObjectTileGrip

## Description
Tries to collide with the foreground layer based on the position of iXPos + xOffset, iYPos + yOffset.

!!! note
    This function is best used to handle moving along surfaces.

## Parameters
- `cSide`
Determines to which side of the tile the object has to collide. Can be `CSIDE_FLOOR`, `CSIDE_LWALL`, `CSIDE_RWALL`, or `CSIDE_ROOF`. In Sonic Origins, `CSIDE_LENTITY` and `CSIDE_RENTITY` are available as well.
- `xOffset`
Horizontal offset of the object.
- `yOffset`
Vertical offset of the object.
- `cPlane`
Collision plane to take into account.

## Return Value
Sets CheckResult to true if there was collision, false otherwise.

## Syntax
```
ObjectTileGrip(int cSide, int xOffset, int yOffset, int cPlane)
```

## Examples
```
ObjectTileGrip(CSIDE_RWALL, 8, -12, 0)
```
