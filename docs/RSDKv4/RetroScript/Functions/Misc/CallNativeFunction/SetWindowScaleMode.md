# SetWindowScaleMode

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets the window scale mode.

## Parameters
`mode`

:   The value to set the window scale mode to.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetWindowScaleMode, int mode, int unused)
```

## Example
```
CallNativeFunction2(SetWindowScaleMode, 0, 0)
```
