# MatrixRotateXYZ

## Description
Rotates `Matrix` to `AngleX`, `AngleY` and `AngleZ`

## Parameters
- `Matrix`
The selected matrix for rotation, valid Matrices are MAT_WORLD, MAT_VIEW and MAT_TEMP
- `AngleX`, `AngleY`, `AngleZ`
Angle of the rotation, values are 512-based

## Return Value
None.

## Syntax
```MatrixRotateXYZ(mat Matrix, int AngleX, int AngleY, int AngleZ)```

## Examples
- ```MatrixRotateXYZ(MAT_WORLD, 43, 85, 29)```