# HapticEffect

Queues/Plays a haptic effect, if the engine build and device support it.

## Parameters
`HapticID`

:   The ID of the haptic to queue to play. If set to `-1`, the haptic will play instantly instead of being queued.

`Left`

:   The effect for the left haptic.

`Right`

:   The effect for the right haptic.

`Power`

:   The intensity of the haptic.

## Return Value
None.

## Syntax
```
HapticEffect(int HapticID, int Left, int Right, int Power)
```

## Example
```
HapticEffect(0, 1, 2, 100)
```
