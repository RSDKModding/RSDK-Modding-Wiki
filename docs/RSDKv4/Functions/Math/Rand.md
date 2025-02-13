# Rand

## Description
Gets a random value from 0 to `max` (not inclusive) and stores it in `store`.

!!! note
    `max` is *exclusive*, meaning the number it's set to will never be chosen, e.g. a `max` value of 4 will result in only numbers 0-3 being picked.

## Parameters
`store`

:   Variable from where to store the result.

`max`

:   Exclusive maximum for the random value to get.

## Return Value
Sets `store` to the result.

## Syntax
```
Rand(var store, int max)
```

## Example
```
Rand(object.value3, 8)
```