# AddAchievement

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Adds an achievement to the backend with the given name.

## Parameters
`name`

:   The name of the achievement to add.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(AddAchievement, string name, int unused)
```

## Example
```
CallNativeFunction2(AddAchievement, "My Achievement", 0)
```