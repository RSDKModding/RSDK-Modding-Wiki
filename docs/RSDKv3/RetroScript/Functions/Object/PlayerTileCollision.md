# PlayerTileCollision

Handles tile collision of the player.

## Parameters
None.

## Return Value
- Handles movement, both on the ground and in the air.
- Sets `Object.CollisionMode` to `CMODE_FLOOR`, `CMODE_LWALL`, `CMODE_RWALL`, or `CMODE_ROOF` depending on the object's angle, along with updating `Player.Angle` based on the current tile stepped.
- Updates `Player.Speed`, `Player.XVelocity`, and `Player.YVelocity`.
- Determines if the character is `Flailing`, `Pushing`, or is now in the air.

## Example
```
PlayerTileCollision()
```
