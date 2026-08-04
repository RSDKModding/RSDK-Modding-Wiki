# SetTintTable

Generates a tint table with the specified values and saves it to `TableID`.
TODO: Make a clearer description of this function

## Parameters
`Alpha`

:   A value range of 0-255 for transparency, 255 being no transparency.

`Param2`

:   TODO: this

`ColourMode`

:   TODO: this (it seems to affect the colours... but in what way... i think it inverts the value? 0 affects none, 1 affects red, 2 affects green, 3 affects blue?)

`Param4`

:   TODO: this

`Param5`

:   TODO: this

`TintID`

:   The ID of the tint table. Indices 0-3 are valid.

## Return Value
None.

## Syntax
```
SetTintTable(int Alpha, int Param2, int ColourMode, int Param4, int Param5, int TintID)
```

## Example
```
SetTintTable(0, 0, 0, 8, 86, 2)
```
