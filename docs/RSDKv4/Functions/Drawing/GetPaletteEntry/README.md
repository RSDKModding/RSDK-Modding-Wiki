# GetPaletteEntry

## Description
Gets the palette entry in `palBankID` at `palIndex` and stores it in `palStore`

## Parameters
- `palBankID`
Palette bank from where to get the entry, valid value range: 0-7.
- `palIndex`
Index of the entry to copy, valid value range: 0-255.
- `palStore`
Variable to store the copied palette.

## Return Value
None.

## Syntax
```
GetPaletteEntry(int palBankID, int palIndex, var palStore)
```

## Examples
```
GetPaletteEntry(3, 131, temp6)
```