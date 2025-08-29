# CosChange

## Description
Performs [Cos()](Cos.md) on `Angle`, then right shifts, increments, and decrements the result, in that order, before storing the final output in `Store`.

## Parameters
`Store`

:   The variable to store the result.

`Angle`

:   The value of the angle.

`RShift`

:   The number to right-shift the result of `Cos(Angle)` by.

`Inc`

:   The number to add to the result.

`Dec`

:   The number to subtract from the result.

## Return Value
Sets `Store` to the result.

## Syntax
```
CosChange(var Store, int Angle, int RShift, int Inc, int Dec)
```

## Example
```
CosChange(CheckResult, 10, 76, 127, 38)
```
