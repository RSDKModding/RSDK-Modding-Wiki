# ProcessObjectMovement

## Description
Handles tile collision of an object/player.

## Parameters
None.

## Return Value
- Handles movement, both on the ground and in the air.
- Sets `object.collisionMode` to `CMODE_FLOOR`, `CMODE_LWALL`, `CMODE_RWALL`, or `CMODE_ROOF` depending on the object's angle, along with updating `player.angle` based on the current tile stepped.
- Updates `object.speed`, `object.xvel`, and `object.yvel`.
- Determines if the character is `flailing`, `pushing`, or is now in the air.

## Example
```
ProcessObjectMovement()
```