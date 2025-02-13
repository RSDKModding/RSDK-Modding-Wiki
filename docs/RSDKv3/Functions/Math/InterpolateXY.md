# InterpolateXY

## Description
Linearly interpolates two points at once, `AX` with `AY`, and `BX` with `BY`, by `Percent`, and stores the result in `StoreX` and `StoreY` respectively.

## Parameters
`StoreX`, `StoreY`

:   The variables to store the results.

`AX`, `AY`, `BX`, `BY`

:   The values used for the interpolations.

`Percent`

:   Percentage of interpolation, with a range of 0 to 256.

## Return Value
Sets `StoreX` and `StoreY` to the results.

## Syntax
```
InterpolateXY(var StoreX, var StoreY, int AX, int AY, int BX, int BY, int Percent)
```

## Example
```
InterpolateXY(Object.Value2, Object.Value3, 26, 29, 33, 37, 220)
```