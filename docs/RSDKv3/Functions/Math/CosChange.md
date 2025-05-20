# CosChange

## Description
Perfroms the following operation and stores the result in `Store`:

`C` + (Cos512(`A`) >> `B`) - `D`

## Parameters
`Store`

:   The variable to store the result.

`A`, `B`, `C`, `D`

:   The values to use for the operation.

## Return Value
Sets `Store` to the result.

## Syntax
```
CosChange(var Store, int A, int B, int C, int D)
```

## Example
```
CosChange(CheckResult, 10, 76, 127, 38)
```