# ObjectTileCollision

## Description
Tries to collide with the foreground layer based on the position of iXPos + xOffset, iYPos + yOffset.

## Parameters
- `cSide`
Determines to which side of the tile the object has to collide, it can be 0(CSIDE_FLOOR), 1(CSIDE_LWALL), 2(CSIDE_RWALL) or 3(CSIDE_ROOF)
- `xOffset`
Horizontal offset of the object
- `yOffset`
Vertical offset of the object
- `cPlane`
Collision plane to take into account

## Return Value
Sets CheckResult to true if there was collision, false otherwise

## Syntax
```
ObjectTileCollision(int cSide, int xOffset, int yOffset, int cPlane)
```

## Examples
```
ObjectTileCollision(1, -15, -4, 0)
```

## Notes
This function is best used to check if a tile is there, not to move along it