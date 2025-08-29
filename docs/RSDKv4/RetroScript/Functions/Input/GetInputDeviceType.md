# GetInputDeviceType

!!! note
    This function only exists in RSDKv5U.

## Description
Stores the type of an input device in `store`.

## Parameters
`store`

:   The variable to store the device type in.

`deviceID`

:   The input device ID to get the type of.

## Return Value
Sets `store` to device `deviceID`'s type.

## Syntax
```
GetInputDeviceType(var store, int deviceID)
```

## Example
```
GetInputDeviceType(checkResult, arrayPos0)
```
