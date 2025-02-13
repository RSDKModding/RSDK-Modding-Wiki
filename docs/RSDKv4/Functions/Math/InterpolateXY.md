# InterpolateXY

## Description
Linearly interpolates two points at once, `aX` with `aY`, and `bX` with `bY`, by `percent`, and stores the result in `storeX` and `storeY` respectively.

## Parameters
`storeX`, `storeY`

:   The variables to store the results.

`aX`, `aY`, `bX`, `bY`

:   The values used for the interpolations.

`percent`

:   Percentage of interpolation, with a range of 0 to 256.

## Return Value
Sets `storeX` and `storeY` to the results.

## Syntax
```
InterpolateXY(var storeX, var storeY, int aX, int aY, int bX, int bY, int percent)
```

## Example
```
InterpolateXY(object.value2, object.value3, 26, 29, 33, 37, 220)
```