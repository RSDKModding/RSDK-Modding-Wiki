# MatrixScaleXYZ

## Description
Scales `Matrix` to `ScaleX`, `ScaleY` and `ScaleZ`.

## Parameters
`Matrix`

:   The selected matrix for scalling. Valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`ScaleX`, `ScaleY`, `ScaleZ`

:   Scale value for the matrix, all shifted 8 bits (0x100 = 1.0)

## Return Value
None.

## Syntax
```
MatrixScaleXYZ(int Matrix, int ScaleX, int ScaleY, int ScaleZ)
```

## Example
```
MatrixScaleXYZ(MAT_VIEW, 0x200, 0x1A0, 0x180)
```