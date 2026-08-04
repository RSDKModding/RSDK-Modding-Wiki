# PlayerObjectCollision

Checks for collision of an object with the player, using the hitbox values passed.


## Parameters
`CollisionType`

:   Type of collision with the object, can be `C_TOUCH`, `C_BOX`, or `C_PLATFORM`.

`Left` / `Top` / `Right` / `Bottom`

:   The values for the object's hitbox.

## Return Value
If there wasn't any collision, `CheckResult` will be `false`.
Depending on the `CollisionType` used:

:   - `C_TOUCH`: `CheckResult` will return `true` with any type of collision
:   - `C_BOX` : `CheckResult` will return values `1` (Floor), `2` (LWall), `3` (RWall) or `4` (Roof) depending on the side of the object collided with.
:   - `C_PLATFORM`: `CheckResult` will only be `true` if the top of the object was collided with.

## Syntax
```
PlayerObjectCollision(int CollisionType, int Left, int Top, int Right, int Bottom)
```

## Example
```
PlayerObjectCollision(C_PLATFORM, -24, -8, 24, 8)
```
