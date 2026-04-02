# SetBlendTable

Generates a blend table with the specified values.
TODO: Make a clearer description of this function maybe?

## Parameters
`Alpha`

:   A value range of 0-255 for transparency, 255 being no transparency.

`Type`

:   TODO: this

`PaletteCount`

:   The amount of palette indexes to be used in the blend table.

`StartIndex`

:   The starting index of the palettes to be used in the blend table.

## Return Value
None.

## Syntax
```
SetBlendTable(int Alpha, int Type, int PaletteCount, int StartIndex)
```

## Example
```
SetBlendTable(128, 1, 16, 80)
```
