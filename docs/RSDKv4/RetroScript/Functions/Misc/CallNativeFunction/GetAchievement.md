# GetAchievement

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

Gets the status of an achievement.

## Parameters
`id`

:   The ID of the achievement.

`unused`

:   Unused variable.

## Return Value
Sets `checkResult` to the status of the achievement.

## Syntax
```
CallNativeFunction2(GetAchievement, int id, int unused)
```

## Example
```
CallNativeFunction2(GetAchievement, 6, 0)
```
