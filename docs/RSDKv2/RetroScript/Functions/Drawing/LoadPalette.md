# LoadPalette

Loads a palette starting from `StartIndex` and reading all colors through to `EndIndex`.

## Parameters
`Path`

:   The path to the palette file, relative to `Data/Palettes/`.

`StartIndex`

:   The starting index of the palette from which the loaded palette will overwrite.

`EndIndex`

:   The ending index of the palette from which the loaded palette will overwrite.

## Return Value
None.

## Syntax
```
LoadPalette(string Path, int StartIndex, int EndIndex)
```

## Example
```
LoadPalette("MasterPalette.act", 16, 24)
```
