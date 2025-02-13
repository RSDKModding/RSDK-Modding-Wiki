# Interpolate

## Description
Linearly interpolates (LERPs) `X` and `Y` by `Percent` and stores the result in `Store`.

## Parameters
`Store`

:   The variable to store the result.

`X`,`Y`

:   The values used for the interpolation.

`Percent`

:   Percentage of interpolation, with a range of 0 to 256.

## Return Value
Sets `Store` to the result.

## Syntax
```
Interpolate(var Store, int X, int Y, int Percent)
```

## Example
```
Interpolate(Object.Value2, 26, 29, 128)
```