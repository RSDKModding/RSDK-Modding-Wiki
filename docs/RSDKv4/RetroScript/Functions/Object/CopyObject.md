# CopyObject

!!! note
    This function only exists in REV02 and above.

## Description
Copies `count` objects starting from `srcSlot` and pastes them to the object slots starting from `destSlot`.

## Parameters
`destSlot`

:   Starting slot ID for where to paste the objects.

`srcSlot`

:   Starting slot ID for where to copy the objects.

`count`

:   Amount of objects to copy.

## Return Value
None.

## Syntax
```
CopyObject(int destSlot, int srcSlot, int count)
```

## Example
```
CopyObject(0, 43, 1)
```
