# MatrixInverse

!!! note
    This function does not exist in REV00.

## Description
Performs an inversion on `matrix`'s values.

## Parameters
`matrix`

:   The matrix to invert, valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

## Return Value
None.

## Syntax
```
MatrixInverse(int matrix)
```

## Example
```
MatrixInverse(MAT_WORLD)
```