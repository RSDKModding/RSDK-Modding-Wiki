# LoadSpriteAnimation

## Description
Retrieves a specific sprite frame from a sprite animation.

## Parameters

- `aniFrames`
The sprite animation to use frames from.

- `listID`
the index of the animation in the animation list to use frames from. In C++ this value is retrieved from `animator.animationID`.

- `frameID`
The index of the frame to get. In C++ this value is retrieved from `animator.frameID`.

## Return Value
This function returns an pointer to the retrieved sprite frame. The return value will be `NULL` if an error occured.

## Syntax (C)
```RSDK.GetFrame(uint16 aniFrames, uint16 listID, int32 frameID```

## Syntax (C++)
```animator.GetFrame(SpriteAnimation aniFrames)```

## Examples (C)
- ```SpriteFrame *frame = RSDK.GetFrame(MyObject->aniFrames, 1, 0);```

## Examples (C++)
- ```SpriteFrame *frame = animator.GetFrame(sVars->aniFrames);```