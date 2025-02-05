# MatrixMultiply

## Description
Multiplies `MatrixA` by `MatrixB`.

## Parameters
`MatrixA`

:   First factor of the multiplication.

`MatrixB`

:   Second factor of the multiplication.

Valid matrices for both factors are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

## Return Value
Updates `MatrixA` with the result.

## Syntax
```
MatrixMultiply(int MatrixA, int MatrixB)
```

## Example
```
MatrixMultiply(MAT_WORLD, MAT_TEMP)
```