# MatrixRotate X/Y/Z

## Description
Rotates `matrix` to `angle` on the specified axis.

## Parameters
`matrix`

:   The selected matrix for rotation, valid Matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`angle`

:   Angle of the rotation. Values are 512-based.

## Return Value
None.

## Syntax
```
MatrixRotateX(mat matrix, int angle)
```
```
MatrixRotateY(mat matrix, int angle)
```
```
MatrixRotateZ(mat matrix, int angle)
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