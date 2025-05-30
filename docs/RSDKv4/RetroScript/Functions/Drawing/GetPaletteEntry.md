# GetPaletteEntry

## Description
Gets the palette entry in `bank` at `index` and stores it in `store`.

## Parameters
`bank`

:   Palette bank from where to get the entry, valid value range: 0-7.

`index`

:   Index of the entry to copy, valid value range: 0-255.

`store`

:   Variable to store the copied palette.

## Return Value
Sets `store` to the retrieved color.

## Syntax
```
GetPaletteEntry(int bank, int index, var store)
```

## Example
```
GetPaletteEntry(3, 131, temp6)
```