# GetHitbox

## Description
Gets a Hitbox from the animator's current frame.

## Parameters

- `animator`
- the animator to get the hitbox from. the animation entry will use `animator.frames` and the frame id uses `animator.frameID`.

- `hitboxID`
The hitbox id to retrieve, indices 0-7 are valid.

## Return Value
This function returns a pointer the desired hitbox of the animator's current frame as a `Hitbox`. The return value will be `NULL` if an error occurred.

## Syntax (C)
```RSDK.GetHitbox(Animator *animator, uint8 hitboxID)```

## Syntax (C++)
```animator.GetHitbox(uint8 hitboxID)```

## Examples (C)
- ```Hitbox *hitbox = RSDK.GetHitbox(&animator, 0);```

## Examples (C++)
- ```Hitbox *hitbox = animator.Load(0);```