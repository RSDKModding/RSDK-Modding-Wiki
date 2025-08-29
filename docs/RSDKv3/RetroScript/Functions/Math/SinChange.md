# SinChange

## Description
Performs [Sin()](Sin.md) on `Angle`, then right shifts, increments, and decrements the result, in that order, before storing the final output in `Store`.

## Parameters
`Store`

:   The variable to store the result.

`Angle`

:   The value of the angle.

`RShift`

:   The number to right-shift the result of `Sin(Angle)` by.

`Inc`

:   The number to add to the result.

`Dec`

:   The number to subtract from the result.

## Return Value
Sets `Store` to the result.

## Syntax
```
SinChange(var Store, int Angle, int RShift, int Inc, int Dec)
```

## Example
```
SinChange(CheckResult, 0, 51, 254, 64)
```
