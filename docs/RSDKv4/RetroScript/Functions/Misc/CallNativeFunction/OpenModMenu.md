# OpenModMenu

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Opens the Mods List. The scene that this function is called in will be reloaded upon closing the menu.

## Parameters
None.

## Return Value
None.

## Example
```
CallNativeFunction(OpenModMenu)
```
