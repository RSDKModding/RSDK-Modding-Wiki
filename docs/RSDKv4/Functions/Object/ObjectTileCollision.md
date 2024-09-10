# ObjectTileCollision

## Description
Tries to collide with the foreground layer based on the position of iXPos + xOffset, iYPos + yOffset.

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
ObjectTileCollision(int cSide, int xOffset, int yOffset, int cPlane)
```

## Examples
```
ObjectTileCollision(CSIDE_LWALL, -15, -4, 0)
```

## Notes
This function is best used to check if a tile is there, not to move along it.