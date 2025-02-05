# MatrixScaleXYZ

## Description
Scales `matrix` to `scaleX`, `scaleY` and `scaleZ`.

## Parameters
`matrix`

:   The selected matrix for scalling, valid Matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`scaleX`, `scaleY`, `scaleZ`

:   Scale value for the matrix, all shifted 8 bits (0x100 = 1.0)

## Return Value
None.

## Syntax
```
MatrixScaleXYZ(mat matrix, int scaleX, int scaleY, int scaleZ)
```

## Example
```
MatrixScaleXYZ(MAT_VIEW, 0x200, 0x1A0, 0x180)
```