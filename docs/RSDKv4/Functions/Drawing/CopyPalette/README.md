# CopyPalette

## Description
Copies `count` colors from `srcPal`, starting from `srcPalStart`. To `destPal`, starting at `destPalStart`.

## Parameters
- `srcPal`
The palette bank to copy, valid range: 0-7
- `srcPalStart`
The palette entry from where to start copying, valid range: 0-255
- `destPal`
The palette bank to paste, valid range: 0-7
- `destPalStart`
The palette entry from where to start pasting, valid range: 0-255
- `count`
The amount of colors to copy from `srcPalStart` to `destPalStart`

## Return Value
None.

## Syntax
```CopyPalette(int scrPal, int srcPalStart, int destPal, int destPalStart, int count)```

## Examples
```CopyPalette(1, 1, 0, 1, 4)```