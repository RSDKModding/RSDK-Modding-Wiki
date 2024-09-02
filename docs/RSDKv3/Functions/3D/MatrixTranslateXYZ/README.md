# MatrixTranslateXYZ

## Description
Translates `Matrix` to `TranslateX`, `TranslateY` and `TranslateZ`

## Parameters
- `Matrix`
The selected matrix to translate, valid Matrices are MAT_WORLD, MAT_VIEW and MAT_TEMP
- `TranslateX`, `TranslateY`, `TranslateZ`
Translate value for the matrix, all shifted 8 bits (0x100 = 1.0)

## Return Value
None.

## Syntax
```
MatrixTranslateXYZ(mat Matrix, int TranslateX, int TranslateY, int TranslateZ)
```

## Examples
```
MatrixTranslateXYZ(MAT_WORLD, -512, 720, TempValue0)
```