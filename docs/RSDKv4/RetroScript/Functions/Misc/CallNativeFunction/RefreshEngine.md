# RefreshEngine

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Reloads the engine, the game, and all mods. This must be called for any mods list changes to take effect.

## Parameters
None.

## Return Value
None.

## Example
```
CallNativeFunction(RefreshEngine)
```
