# SetAchievementDescription

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets the description for an achievement.

## Parameters
`desc`

:   The description to use.

`id`

:   The ID of the achievement.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetAchievementDescription, string desc, int id)
```

## Example
```
CallNativeFunction2(SetAchievementDescription, "Read every native function page.", 0)
```
