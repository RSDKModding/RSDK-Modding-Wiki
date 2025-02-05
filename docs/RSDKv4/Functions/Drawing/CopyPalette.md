# CopyPalette

## Description
Copies `count` colors from `srcBank`, starting from `srcIndex`, to `destBank`, starting at `destIndex`.

## Parameters
`srcBank`

:   The palette bank to copy. Valid range: 0-7.

`srcIndex`

:   The color index from where to start copying. Valid range: 0-255.

`destBank`

:   The palette bank to paste. Valid range: 0-7.

`destIndex`

:   The color index from where to start pasting. Valid range: 0-255.

`count`

:   The amount of colors to copy from `srcIndex` to `destIndex`.

## Return Value
None.

## Syntax
```
CopyPalette(int srcBank, int srcIndex, int destBank, int destIndex, int count)
```

## Example
```
CopyPalette(1, 1, 0, 1, 4)
```