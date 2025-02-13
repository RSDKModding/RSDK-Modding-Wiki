# MatrixMultiply

## Description
Multiplies `matrixA` by `matrixB`.

## Parameters
`matrixA`

:   First factor of the multiplication.

`matrixB`

:   Second factor of the multiplication.

Valid matrices for both factors are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

## Return Value
Updates `matrixA` with the result.

## Syntax
```
MatrixMultiply(int matrixA, int matrixB)
```

## Example
```
MatrixMultiply(MAT_WORLD, MAT_TEMP)
```