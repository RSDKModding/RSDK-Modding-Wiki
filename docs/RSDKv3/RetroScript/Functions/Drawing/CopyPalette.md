# CopyPalette

## Description
Copies `SrcPal` into `DstPal`.

## Parameters
`SrcPal`

:   The palette bank to copy. Indices 0-7 are valid.

`DstPal`

:   The palette bank to paste. Indices 0-7 are valid.

## Return Value
None.

## Syntax
```
CopyPalette(int SrcPal, int DstPal)
```

## Example
```
CopyPalette(0, 7)
```