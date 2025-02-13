# LoadPalette

## Description
Loads a palette into `palBank` starting from `startPalIndex`, with an offset of `startIndex` and reading all colors through to `endIndex`.

## Parameters
`path`

:   The path to the palette file, relative to `Data/Palettes/`.

`palBank`

:   The ID of the palette bank for the palette to load into. Indices 0-7 are valid.

`startPalIndex`

:   The starting index to load colors from in the loaded palette file.

`startIndex`

:   The starting index of the palette bank from which the loaded palette will overwrite.

`endIndex`

:   The ending index of the palette bank from which the loaded palette will overwrite.

## Return Value
None.

## Syntax
```
LoadPalette(string path, int palBank, int startPalIndex, int startIndex, int endIndex)
```

## Example
```
LoadPalette("MasterPalette.act", 2, 16, 24, 32)
```