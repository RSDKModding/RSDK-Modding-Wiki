# BoxCollisionTest

## Description
Checks for collision of an object with another, using the hitbox values passed.

## Parameters
`collisionType`

:   Type of collision with the object. Can be `C_TOUCH`, `C_SOLID`, `C_SOLID2`, or `C_PLATFORM`.

`thisObject`

:   The source of the collision.

`thisLeft` / `thisTop` / `thisRight` / `thisBottom`

:   The values for the object's hitbox.

`otherObject`

:   The object to check for collision with.

`otherLeft` / `otherTop` / `otherRight` / `otherBottom`

:   The values for the target's hitbox.

## Return Value
If there wasn't any collision, `checkResult` will be `false`.
Depending on the `collisionType` used:

- `C_TOUCH`: `checkResult` will return `true` with any type of collision.
- `C_SOLID`/`C_SOLID2`: `checkResult` will return values `1` (Floor), `2` (LWall), `3` (RWall) or `4` (Roof) depending on the side of the object collided with.
- `C_PLATFORM`: `checkResult` will only be `true` if the top of the object was collided with.

## Syntax
```
BoxCollisionTest(int collisionType, int thisObject, int thisLeft, int thisTop, int thisRight, int thisBottom, int otherObject, int otherLeft, int otherTop, int otherRight, int otherBottom)
```

## Example
```
BoxCollisionTest(C_TOUCH, object.entityPos, -24, -8, 24, 8, object[0].entityPos, C_BOX, C_BOX, C_BOX, C_BOX)
```