# TransformVertices

## Description
Transform all vertices from `startIndex` to `endIndex` using `matrix`.

## Parameters
`matrix`

:   The matrix used to transform the vertices. Valid matrices are `MAT_WORLD`, `MAT_VIEW`, and `MAT_TEMP`.

`startIndex`

:   The start of the range of tranforming vertices.

`endIndex`

:   The end of the range of tranforming vertices.

## Return Value
None.

## Syntax
```
TransformVertices(mat matrix, int startIndex, int endIndex)
```

## Example
```
TransformVertices(MAT_VIEW, 0xFFE, 0x1000)
```