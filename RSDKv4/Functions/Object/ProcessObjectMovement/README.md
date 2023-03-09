# ProcessObjectMovement

## Description
Handles tile collision of an object (player)

## Parameters
None.

## Return Value
- Handles movement, both on ground and on air.
- Will return CMODE_FLOOR, CMODE_LWALL, CMODE_RWALL or CMODE_ROOF depending of the object's angle to `player.collisionMode`, along with updating `player.angle` based on the current tile stepped.
- It handles `player.speed`, along with `player.xVel` and `Player.yVel`.
- Determines if the character is `flailing`, `pushing` or is now in the air.

## Syntax
```ProcessObjectMovement()```