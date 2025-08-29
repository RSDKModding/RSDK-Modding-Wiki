# SetPaletteEntry

## Description
Sets the palette entry in `bank` at `index` to the value of `color`.

## Parameters
`bank`

:   Palette bank from where to get the entry. Valid range: 0-7.

`index`

:   Index of the entry to place the new color. Valid range: 0-255.

`color`

:   Color value, the format of the color being 0xRRGGBB.

## Return Value
None.

## Syntax
```
SetPaletteEntry(int bank, int index, int color)
```

## Example
```
SetPaletteEntry(0, 134, 0xFF607F)
```
