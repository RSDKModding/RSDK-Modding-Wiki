# SetModActive

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets if a mod is enabled.

## Parameters
`id`

:   The ID for the mod.

`active`

:   If the mod should be enabled.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetModActive, int id, bool active)
```

## Example
```
CallNativeFunction2(SetModActive, 0, true)
```