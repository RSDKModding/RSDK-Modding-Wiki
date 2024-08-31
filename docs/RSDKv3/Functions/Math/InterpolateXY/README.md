# Interpolate

## Description
Linearly interpolates two points at once, `aX` with `aY`, and `bX` with `bY`. By `Percent` and stores the result in `StoreX` and `StoreY`, respectively.

## Parameters
- `StoreX`, `StoreY`
The variables to store the results
- `aX`, `aY`, `bX`, `bY`
The values used for the interpolations
- `Percent`
Percentage of interpolation, can go from 0 to 256

## Return Value
None.

## Syntax
```InterpolateXY(var StoreX, var StoreY, int aX, int aY, int bX, int bY, int Percent)```

## Examples
- ```InterpolateXY(Object.Value2, Object.Value3, 26, 29, 33, 37, 220)```