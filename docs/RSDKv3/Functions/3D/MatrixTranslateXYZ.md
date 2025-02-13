# MatrixTranslateXYZ

## Description
Translates `Matrix` to `TranslateX`, `TranslateY` and `TranslateZ`.

## Parameters
`Matrix`

:   The selected matrix to translate. Valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`TranslateX`, `TranslateY`, `TranslateZ`

:   Translate values for the matrix, all shifted 8 bits (0x100 = 1.0)

## Return Value
None.

## Syntax
```
MatrixTranslateXYZ(int Matrix, int TranslateX, int TranslateY, int TranslateZ)
```

## Example
```
MatrixTranslateXYZ(MAT_WORLD, -512, 720, TempValue0)
```