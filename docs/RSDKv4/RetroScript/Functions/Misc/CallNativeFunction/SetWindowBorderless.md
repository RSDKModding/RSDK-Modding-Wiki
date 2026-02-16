# SetWindowBorderless

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

Sets if the window is borderless.

## Parameters
`borderless`

:   If borderless should be enabled.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetWindowBorderless, bool borderless, int unused)
```

## Example
```
CallNativeFunction2(SetWindowBorderless, false, 0)
```
