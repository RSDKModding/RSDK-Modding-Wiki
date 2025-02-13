# Interpolate

## Description
Linearly interpolates (LERPs) `x` and `y` by `percent` and stores the result in `store`.

## Parameters
`store`

:   The variable to store the result.

`x`,`y`

:   The values used for the interpolation.

`percent`

:   Percentage of interpolation, with a range of 0 to 256.

## Return Value
Sets `store` to the result.

## Syntax
```
Interpolate(var store, int x, int y, int percent)
```

## Example
```
Interpolate(object.value2, 26, 29, 128)
```