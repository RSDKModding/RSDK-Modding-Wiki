# LoadPalette

## Description
Loads a palette into a `palBank` starting from `startPalIndex`, with an offset of `startIndex` and reading all colors through to `endIndex`

## Parameters
- `Path`
The path to the palette file, relative to `Data/Palettes/`
- `PalBank`
the ID of the palette bank for the palette to load, indices 0-7 are valid
- `StartPalIndex`
The starting index of the loaded palette
- `StartIndex`
The starting index of the palette bank from which the loaded palette will override
- `EndIndex`
The ending index of the palette bank from which the loaded palette will override

## Return Value
None.

## Syntax
```
LoadPalette("string Path", int PalBank, int StartPalIndex, int StartIndex, int EndIndex) 
```

## Examples
```
LoadPalette("Masterpalette.act", 2, 16, 24, 32)
```

## Note
HW Renderer cannot use this function