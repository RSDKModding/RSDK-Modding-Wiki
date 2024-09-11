# ReadSaveRAM

## Description
Reads the contents of the save file on disk into SaveRAM.

!!! note
    The contents previously in SaveRAM will be overwritten upon calling this function.

## Parameters
None.

## Return Value
Sets `checkResult` to `true` if SaveRAM is loaded successfully loaded; otherwise, sets it to `false`.

## Example
```
ReadSaveRAM()
```