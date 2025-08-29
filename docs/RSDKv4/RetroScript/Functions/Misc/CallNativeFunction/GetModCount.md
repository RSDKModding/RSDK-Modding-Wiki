# GetModCount

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Gets the number of mods in the mods list.

## Parameters
None.

## Return Value
Sets `checkResult` to the mod count.

## Example
```
CallNativeFunction(GetModCount)
```
