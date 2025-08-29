# SetScreenWidth

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Sets the screen width.

## Parameters
`width`

:   The value to set the screen width to.

`unused`

:   Unused variable.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetScreenWidth, int width, int unused)
```

## Example
```
CallNativeFunction2(SetScreenWidth, 424, 0)
```
