# FileExists

!!! note
    This native function only exists in the RSDKv4 decompilation's mod loader. You can check if the function is usable by using the `USE_MOD_LOADER` platform flag.

## Description
Checks if a file exists in the Data assets.

## Parameters
`unused`

:   Unused parameter.

`filePath`

:   The path to the target file, relative to the root of the Data assets.

## Return Value
Sets `checkResult` to `true` if the given file exists, or `false` if it doesn't.

## Syntax
```
CallNativeFunction2(FileExists, int unused, string filePath)
```

## Example
```
CallNativeFunction2(FileExists, 0, "Data/Game/GameConfig.bin")
```