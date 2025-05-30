# MatrixRotateXYZ

## Description
Rotates `matrix` to `angleX`, `angleY` and `angleZ`.

## Parameters
`matrix`

:   The selected matrix for rotation, valid Matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`angleX`, `angleY`, `angleZ`

:   Angle of the rotation. Values are 512-based.

## Return Value
None.

## Syntax
```
MatrixRotateXYZ(mat matrix, int angleX, int angleY, int angleZ)
```

## Example
```
MatrixRotateXYZ(MAT_WORLD, 43, 85, 29)
```