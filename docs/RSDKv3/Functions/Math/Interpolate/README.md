# Interpolate

## Description
Linearly interpolates (LERPs) `x` and `y` by `Percent` and stores the result in `Store`.

## Parameters
- `Store`
The variable to store the result
- `x`,`y`
The values used for the interpolation
- `Percent`
Percentage of interpolation, can go from 0 to 256

## Return Value
None.

## Syntax
```Interpolate(var Store, int x, int y, int Percent)```

## Examples
- ```Interpolate(Object.Value2, 26, 29, 128)```