# GetBit

## Description
Gets the binary bit at index `bitPos` from `value` and stores it in `store`.

## Parameters
`store`

:   The variable to store the bit.

`value`

:   The value from where to search the required bit.

`bitPos`

:   The position of the bit to get. Indices 0-7 are valid.

## Return Value
Sets `store` to the result.

## Syntax
```
GetBit(var store, int value, int bitPos)
```

## Example
```
GetBit(arrayPos0, temp3, 6)
```