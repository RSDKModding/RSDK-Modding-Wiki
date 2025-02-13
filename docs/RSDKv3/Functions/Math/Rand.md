# Rand

## Description
Gets a random value from 0 to `Max` (not inclusive) and stores it in `Store`.

!!! note
    `Max` is *exclusive*, meaning the number it's set to will never be chosen, e.g. a `Max` value of 4 will result in only numbers 0-3 being picked.

## Parameters
`Store`

:   Variable from where to store the result.

`Max`

:   Exclusive maximum for the random value to get.

## Return Value
Sets `Store` to the result.

## Syntax
```
Rand(var Store, int Max)
```

## Example
```
Rand(Object.Value3, 8)
```