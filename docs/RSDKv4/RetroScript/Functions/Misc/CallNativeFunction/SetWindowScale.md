# SetWindowScale

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets the window scale.

## Parameters
`scale`

:   The value to set the window scale to.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetWindowScale, int scale, int unused)
```

## Example
```
CallNativeFunction2(SetWindowScale, 2, 0)
```
