# SetNetworkGameName

!!! note
    This native function only exists in the RSDKv4 decompilation with networking enabled. You can check if the function is usable by using the `USE_NETWORKING` platform flag.

## Description
Sets the name of the game to find 2P VS opponents for.

## Parameters
`name`

:   The name of the game.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetNetworkGameName, string , int todo)
```

## Example
```
CallNativeFunction2(SetNetworkGameName, 0, 0)
```
