# PlayerTileCollision

## Description
Handles tile collision of player

## Parameters
None.

## Return Value
- Handles movement, both on ground and on air.
- Will return CMODE_FLOOR, CMODE_LWALL, CMODE_RWALL or CMODE_ROOF depending of the player's angle to `Player.CollisionMode`, along with updating `Player.Angle` based on the current tile stepped.
- It handles `Player.Speed`, along with `Player.XVelocity` and `Player.YVelocity`.
- Determines if the character is `flailing`, `pushing` or is now in the air.

## Syntax
```PlayerTileCollision()```