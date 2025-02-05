# SetPaletteFade

!!! note
    This function's behavior was changed in REV01; in REV00, it worked the same as [its equivalent function in RSDKv3](/RSDKv3/Functions/Drawing/SetPaletteFade.md).

## Description
Blends palettes `srcBankA` and `srcBankB`, from indexes `startIndex` to `endIndex`, by `blendAmount`, and stores the new palette in `dstBank`.

## Parameters
`dstBank`

:   The ID of the palette for store. Indices 0-7 are valid.

`srcBankA`

:   The first palette to blend.

`srcBankB`

:   The second palette to blend.

`blendAmount`

:   A value range of 0-255 for blending.

`startIndex`

:   The starting index of the palette bank to blend.

`endIndex`

:   The ending index of the palette bank to blend.

## Return Value
None.

## Syntax
```
SetPaletteFade(int dstBank, int srcBankA, int srcBankB, int blendAmount, int startIndex, int endIndex)
```

## Example
```
SetPaletteFade(5, 3, 4, 48, 0, 4)
```