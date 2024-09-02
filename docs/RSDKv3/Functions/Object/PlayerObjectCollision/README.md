# PlayerObjectCollision

## Description
Checks for collision of the player with an object, using the `HitBox` values passed


## Parameters
- `CollisionType`
Type of collision with the object, can be C_TOUCH, C_BOX, C_BOX2 or C_PLATFORM
- `LeftHitbox` / `TopHitbox` / `RightHitbox` / `BottomHitbox`
The values of the object's hitbox

## Return Value
If there wasn't any collision, `CheckResult` will be `false`
Depending of `CollisionType` used:
- C_TOUCH : `CheckResult` will return `true` with any type of collision
- C_BOX/C_BOX2 : `CheckResult` will return values 1(Floor), 2(LWall), 3(RWall) or 4(Roof) depending of which side of the object collided
- C_PLATFORM: `CheckResult` will only be `true` if the top of the object was collided

## Syntax
```
PlayerObjectCollision(int CollisionType, int LeftHitbox, int TopHitbox, int RightHitbox, int BottomHitbox)
```

## Examples
```
PlayerObjectCollision(C_PLATFORM, -24, -8, 24, 8)
```