# GetWindowBorderless

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Gets if the window is borderless.

## Parameters
None.

## Return Value
Sets `checkResult` to `true` if borderless is enabled, or `false` if it isn't.

## Example
```
CallNativeFunction(GetWindowBorderless)
```