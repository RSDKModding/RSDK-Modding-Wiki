# GetModActive

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Gets if a mod is enabled.

## Parameters
`id`

:   The ID for the mod.

`unused`

:   Unused variable.

## Return Value
Sets `checkResult` to `true` if the mod is enabled, or `false` if it isn't.

## Syntax
```
CallNativeFunction2(GetModActive, int id, int unused)
```

## Example
```
CallNativeFunction2(GetModActive, 0, 0)
```