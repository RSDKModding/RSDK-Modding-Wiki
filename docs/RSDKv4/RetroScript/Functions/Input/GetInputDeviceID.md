# GetInputDeviceID

!!! note
    This function only exists in RSDKv5U.

## Description
Stores the ID of an input device in `store`.

## Parameters
`store`

:   The variable to store the device ID in.

`inputSlot`

:   The player ID to get the input device ID of.

## Return Value
Sets `store` to player `inputSlot`'s input device ID.

## Syntax
```
GetInputDeviceID(var store, int inputSlot)
```

## Example
```
GetInputDeviceID(arrayPos0, 1)
```
