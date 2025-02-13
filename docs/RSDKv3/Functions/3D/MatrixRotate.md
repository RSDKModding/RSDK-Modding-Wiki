# MatrixRotate X/Y/Z

## Description
Rotates `Matrix` to `Angle` on the specified axis.

## Parameters
`Matrix`

:   The selected matrix for rotation. Valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`Angle`

:   Angle of the rotation. Values are 512-based.

## Return Value
None.

## Syntax
```
MatrixRotateX(int Matrix, int Angle)
```
```
MatrixRotateY(int Matrix, int Angle)
```
```
MatrixRotateZ(int Matrix, int Angle)
```

## Examples
```
MatrixRotateX(MAT_WORLD, 43)
```
```
MatrixRotateY(MAT_VIEW, 76)
```
```
MatrixRotateZ(MAT_TEMP, 22)
```