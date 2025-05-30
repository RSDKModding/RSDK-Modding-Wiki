# LoadPalette

## Description
Loads a palette into `PalBank` starting from `StartPalIndex`, with an offset of `StartIndex` and reading all colors through to `EndIndex`.

## Parameters
`Path`

:   The path to the palette file, relative to `Data/Palettes/`.

`PalBank`

:   The ID of the palette bank for the palette to load into. Indices 0-7 are valid.

`StartPalIndex`

:   The starting index to load colors from in the loaded palette file.

`StartIndex`

:   The starting index of the palette bank from which the loaded palette will overwrite.

`EndIndex`

:   The ending index of the palette bank from which the loaded palette will overwrite.

## Return Value
None.

## Syntax
```
LoadPalette(string Path, int PalBank, int StartPalIndex, int StartIndex, int EndIndex)
```

## Example
```
LoadPalette("MasterPalette.act", 2, 16, 24, 32)
```