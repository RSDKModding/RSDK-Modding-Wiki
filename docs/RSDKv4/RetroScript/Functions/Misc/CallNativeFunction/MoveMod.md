# MoveMod

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

Shifts a mod up or down in the mods list.

## Parameters
`id`

:   The ID of the mod.

`up`

:   If `true`, moves the mod up. Otherwise, moves the mod down.

## Return Value
None.

## Syntax
```
CallNativeFunction2(MoveMod, int id, bool up)
```

## Example
```
CallNativeFunction2(MoveMod, 4, true)
```
