# GetFilteredInputDeviceID

!!! note
    This function only exists in RSDKv5U.

## Description
Stores the filtered ID of an input device in `store`.

## Parameters
`store`

:   The variable to store the device ID in.

`confirmOnly`

:   If enabled, only check for the "confirm" button when checking the inactive timer.

`unassignedOnly`

:   If enabled, only check for unassigned input devices.

`maxInactiveTimer`

:   The maximum inactive timer to check for.

## Return Value
Sets `store` to player `inputSlot`'s input device ID.

## Syntax
```
GetFilteredInputDeviceID(var store, bool confirmOnly, bool unassignedOnly, int maxInactiveTimer)
```

## Example
```
GetFilteredInputDeviceID(arrayPos0, false, false, -1)
```
