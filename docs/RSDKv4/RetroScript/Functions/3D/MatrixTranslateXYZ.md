# MatrixTranslateXYZ

## Description
Translates `matrix` to `translateX`, `translateY` and `translateZ`.

## Parameters
`matrix`

:   The selected matrix to translate, valid Matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`translateX`, `translateY`, `translateZ`

:   Translate value for the matrix, all shifted 8 bits (0x100 = 1.0)

## Return Value
None.

## Syntax
```
MatrixTranslateXYZ(mat matrix, int translateX, int translateY, int translateZ)
```

## Example
```
MatrixTranslateXYZ(MAT_WORLD, -512, 720, temp0)
```