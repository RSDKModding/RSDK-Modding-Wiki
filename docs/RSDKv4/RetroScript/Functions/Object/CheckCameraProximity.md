# CheckCameraProximity

!!! note
    This function only exists in RSDKv5U.

Checks if the given position is within range of the camera(s).

## Parameters
`ixpos`, `iypos`

:   The x and y positions to check, in screen-space.

`xrange`, `yrange`

:   The horizontal and vertical ranges to check with, in pixels.

## Return Value
Sets `checkResult` to `true` if the position is within the given range of any active cameras, or `false` if it isn't.

## Syntax
```
CheckCameraProximity(int ixpos, int iypos, int xrange, int yrange)
```

## Example
```
CheckCameraProximity(object.ixpos, object.iypos, screen.xcenter, screen.ycenter)
```
