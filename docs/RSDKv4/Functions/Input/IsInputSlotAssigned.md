# IsInputSlotAssigned

!!! note
    This function only exists in RSDKv5U.

## Description
Checks if a player has been assigned to an input device.

## Parameters
`inputSlot`

:   The player ID to check.

## Return Value
Sets `checkResult` to `true` if player `inputSlot` has been assigned to an input device, or `false` if it isn't.

## Syntax
```
IsInputSlotAssigned(int inputSlot)
```

## Example
```
IsInputSlotAssigned(1)
```