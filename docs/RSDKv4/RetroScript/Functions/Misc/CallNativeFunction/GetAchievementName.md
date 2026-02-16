# GetAchievementName

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

Adds a text entry to `menu` with an achievement's name as the text.

## Parameters
`id`

:   The ID of the achievement to get the name of.

`menu`

:   The menu to add the text to. `MENU_1` or `MENU_2` are valid.

## Return Value
None.

## Syntax
```
CallNativeFunction2(GetAchievementName, int id, int menu)
```

## Example
```
CallNativeFunction2(GetAchievementName, 0, MENU_1)
```
