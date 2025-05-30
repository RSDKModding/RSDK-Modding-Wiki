# SetBit

## Description
Sets index `BitPos` of `Value` to `Bit` and updates `Value` accordingly.

## Parameters
`Value`

:   The variable to update.

`BitPos`

:   The position of the bit to set. Indices 0-7 are valid.

`Bit`

:   Updated boolean value.

## Return Value
Updates `Value` with the applied bit.

## Syntax
```
SetBit(var Value, int BitPos, bool Bit)
```

## Example
```
SetBit(Object.Value7, 3, 1)
```