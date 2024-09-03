# GetBit

## Description
Gets bit at index `BitPos` from `Value` and stores it in `Store`.

## Parameters
- `Store`
The variable to store the bit.
- `Value`
The variable from where to search the required Bit.
- `BitPos`
The position of the bit to get, indices 0-7 are valid.

## Return Value
None.

## Syntax
```
GetBit(var Store, var Value, int BitPos)
```

## Examples
```
GetBit(ArrayPos0, TempValue3, 6)
```