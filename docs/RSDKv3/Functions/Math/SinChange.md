# SinChange

## Description
Perfroms the following operation and stores the result in `Store`:

`C` + (Sin512(`A`) >> `B`) - `D`

## Parameters
`Store`

:   The variable to store the result.

`A`, `B`, `C`, `D`

:   The values to use for the operation.

## Return Value
Sets `Store` to the result.

## Syntax
```
SinChange(var Store, int A, int B, int C, int D)
```

## Example
```
SinChange(CheckResult, 0, 51, 254, 64)
```