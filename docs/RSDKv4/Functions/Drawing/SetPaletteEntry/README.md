# SetPaletteEntry

## Description
Sets the palette entry in `palBankID` at `palIndex` to the value of `color`.

## Parameters
- `palBankID`
Palette bank from where to get the entry, valid value range: 0-7.
- `palIndex`
Index of the entry to place the new color, valid value range: 0-255.
- `color`
Color value, the format of the color is 0xRRGGBB

## Return Value
None.

## Syntax
```
SetPaletteEntry(int palBankID, int palIndex, int color)
```

## Examples
```
SetPaletteEntry(0, 134, 0xFF607F)
```