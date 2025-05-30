# HapticEffect

## Description
Queues/Plays a haptic effect, if the engine build and device support it.

## Parameters
`hapticID`

:   The ID of the haptic to queue to play.

`left`

:   The effect for the left haptic.

`right`

:   The effect for the right haptic.

`power`

:   The intensity of the haptic.

## Return Value
None.

## Syntax
```
CallNativeFunction4(HapticEffect, int hapticID, int left, int right, int power)
```

## Example
```
CallNativeFunction4(HapticEffect, 0, 1, 2, 100)
```