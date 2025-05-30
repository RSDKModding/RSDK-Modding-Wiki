# IsInputDeviceAssigned

!!! note
    This function only exists in RSDKv5U.

## Description
Checks if an input device has been assigned.

## Parameters
`deviceID`

:   The input device ID to check.

## Return Value
Sets `checkResult` to `true` if device `deviceID` has been assigned, or `false` if it isn't.

## Syntax
```
IsInputDeviceAssigned(int deviceID)
```

## Example
```
IsInputDeviceAssigned(arrayPos0)
```