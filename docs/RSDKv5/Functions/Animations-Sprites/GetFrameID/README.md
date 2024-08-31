# GetFrameID

## Description
Gets the `unicode char` value of the animator's current frame.

## Parameters

- `animator`
- the animator to get the unicode char from. the animation entry will use `animator.frames` and the frame id uses `animator.frameID`.

## Return Value
This function returns the `unicode char` value of the animator's current frame as a `uint16`. The return value will be `0` if an error occurred.

## Syntax (C)
```RSDK.GetFrameID(Animator *animator)```

## Syntax (C++)
```animator.GetFrameID()```

## Examples (C)
- ```uint16 id = RSDK.GetFrameID(&animator);```

## Examples (C++)
- ```uint16 id = animator.GetFrameID();```