# GetWindowScaleMode

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Gets the window scale mode.

## Parameters
None.

## Return Value
Sets `checkResult` to the window scale mode.

## Example
```
CallNativeFunction(GetWindowScaleMode)
```