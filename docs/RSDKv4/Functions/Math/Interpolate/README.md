# Interpolate

## Description
Linearly interpolates (LERPs) `x` and `y` by `percent` and stores the result in `store`.

## Parameters
- `store`
The variable to store the result
- `x`,`y`
The values used for the interpolation
- `percent`
Percentage of interpolation, can go from 0 to 256

## Return Value
None.

## Syntax
```Interpolate(var store, int x, int y, int percent)```

## Examples
- ```Interpolate(object.value2, 26, 29, 128)```