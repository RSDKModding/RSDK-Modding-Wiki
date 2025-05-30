# SetWindowFullScreen

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets if fullscreen is enabled.

## Parameters
`fullscreen`

:   If fullscreen should be enabled.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetWindowFullScreen, bool fullscreen, int unused)
```

## Example
```
CallNativeFunction2(SetWindowFullScreen, false, 0)
```