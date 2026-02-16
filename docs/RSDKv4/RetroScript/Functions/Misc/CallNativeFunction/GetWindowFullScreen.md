# GetWindowFullScreen

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

Gets if fullscreen is enabled.

## Parameters
None.

## Return Value
Sets `checkResult` to `true` if fullscreen is enabled, or `false` if it isn't.

## Example
```
CallNativeFunction(GetWindowFullScreen)
```
