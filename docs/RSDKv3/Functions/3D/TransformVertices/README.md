# TransformVertices

## Description
Transform all vertices from `StartIndex` to `EndIndex` using `Matrix`

## Parameters
- `Matrix`
The matrix used to transform the vertices, valid matrices are MAT_WORLD, MAT_VIEW and MAT_TEMP
- `StartIndex`
The start of the range of tranforming vertices
- `EndIndex`
The end of the range of tranforming vertices

## Return Value
None.

## Syntax
```
TransformVertices(mat Matrix, int StartIndex, int EndIndex)
```

## Examples
```
TransformVertices(MAT_VIEW, 0xFFE, 0x1000)
```