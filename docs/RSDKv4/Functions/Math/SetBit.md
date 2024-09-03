# SetBit

## Description
Sets index `bitPos` of `value` to `bit` and updates `value` accordingly.

## Parameters
- `value`
The variable to update.
- `bitPos`
The position of the bit to set, indices 0-7 are valid.
- `bit`
Updated boolean value.

## Return Value
None.

## Syntax
```
SetBit(var value, int bitPos, bool bit)
```

## Examples
```
SetBit(object.value7, 3, 1)
```