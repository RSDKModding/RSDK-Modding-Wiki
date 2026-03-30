# ATan2

Performs an arctan operation using `X` and `Y`, storing the result in `Store`.

!!! note
    This is not functional in both the original 2008 Nexus demo and the RSDKv2 decompilation. This is kept here for documentational purposes.

!!! note
    The details of this function are assumed based on later engine versions, and the parameter count can be found in the engine.

## Parameters
`Store`

:   The variable to store the result.

`X`, `Y`

:   The values used in the arctan operation.

## Return Value
Sets `Store` to the result.

## Syntax
```
ATan2(var Store, int X, int Y)
```

## Example
```
ATan2(TempValue1, Object.Value5, TempValue0)
```
