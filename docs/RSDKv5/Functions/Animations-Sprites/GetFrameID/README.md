# GetFrameID

## Description
Gets the `unicode char` value of the animator's current frame.

## Parameters

- `animator`
- the animator to get the unicode char from. the animation entry will use `animator.frames` and the frame id uses `animator.frameID`.

## Return Value
This function returns the `unicode char` value of the animator's current frame as a `uint16`. The return value will be `0` if an error occurred.

## Syntax (C)
```c
RSDK.GetFrameID(Animator *animator);
```

## Syntax (C++)
```cpp
animator.GetFrameID();
```

## Examples (C)
```c
uint16 id = RSDK.GetFrameID(&animator);
```

## Examples (C++)
```cpp
uint16 id = animator.GetFrameID();
```