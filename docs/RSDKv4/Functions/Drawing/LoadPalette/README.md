# LoadPalette

## Description
Loads a palette into a `palBank` starting from `startPalIndex`, with an offset of `startIndex` and reading all colors through to `endIndex`

## Parameters
- `path`
The path to the palette file, relative to `Data/Palettes/`
- `palBank`
the ID of the palette bank for the palette to load, indices 0-7 are valid
- `startPalIndex`
The starting index of the loaded palette
- `startIndex`
The starting index of the palette bank from which the loaded palette will override
- `endIndex`
The ending index of the palette bank from which the loaded palette will override

## Return Value
None.

## Syntax
```LoadPalette("string path", int palBank, int startPalIndex, int startIndex, int endIndex) ```

## Examples
- ```LoadPalette("Masterpalette.act", 2, 16, 24, 32)```