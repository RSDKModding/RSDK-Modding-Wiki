# GetBit

## Description
Gets the binary bit at index `BitPos` from `Value` and stores it in `Store`.

## Parameters
`Store`

:   The variable to store the bit.

`Value`

:   The value from where to search the required Bit.

`BitPos`

:   The position of the bit to get. Indices 0-7 are valid.

## Return Value
Sets `Store` to the result.

## Syntax
```
GetBit(var Store, int Value, int BitPos)
```

## Example
```
GetBit(ArrayPos0, TempValue3, 6)
```