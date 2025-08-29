# SetWindowVSync

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets if VSync is enabled.

## Parameters
`enabled`

:   If VSync should be enabled.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetWindowVSync, bool enabled, int unused)
```

## Example
```
CallNativeFunction2(SetWindowVSync, false, 0)
```
