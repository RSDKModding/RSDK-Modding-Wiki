# MatrixRotateXYZ

## Description
Rotates `Matrix` to `AngleX`, `AngleY` and `AngleZ`.

## Parameters
`Matrix`

:   The selected matrix for rotation. Valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`AngleX`, `AngleY`, `AngleZ`

:   Angle of the rotation. Values are 512-based.

## Return Value
None.

## Syntax
```
MatrixRotateXYZ(int Matrix, int AngleX, int AngleY, int AngleZ)
```

## Example
```
MatrixRotateXYZ(MAT_WORLD, 43, 85, 29)
```