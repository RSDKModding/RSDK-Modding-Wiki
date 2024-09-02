# MatrixRotate X/Y/Z

## Description
Rotates `Matrix` to `Angle` on the specified axis.

## Parameters
- `Matrix`
The selected matrix for rotation, valid Matrices are MAT_WORLD, MAT_VIEW and MAT_TEMP.
- `Angle`
Angle of the rotation, values are 512-based.

## Return Value
None.

## Syntax
```
MatrixRotateX(mat Matrix, int Angle)
```
```
MatrixRotateY(mat Matrix, int Angle)
```
```
MatrixRotateZ(mat Matrix, int Angle)
```

## Examples
```
MatrixRotateX(MAT_WORLD, 43)
```
```
MatrixRotateY(MAT_VIEW,  76)
```
```
MatrixRotateZ(MAT_TEMP,  22)
```