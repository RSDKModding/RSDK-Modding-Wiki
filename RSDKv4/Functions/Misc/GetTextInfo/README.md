# GetTextInfo

## Description
Gets the data of `type` from `menu` using `index`, and stores it in `store`

## Parameters
- `store`
Variable where the data will be saved
- `menu`
The menu from where to get the data, MENU_1 or MENU_2 are valid
- `type`
The type of data to read, valid values are 0(TEXTINFO_TEXTDATA), 1(TEXTINFO_TEXTSIZE) or 2(TEXTINFO_ROWCOUNT)
- `index`
Index of the text row from where to get the data
- `offset`
Offset for the text at `index`, only used if `type` is TEXTINFO_TEXTDATA

## Return Value
None.

## Syntax
```GetTextInfo(var store, int menu, int type, int index, int offset)```

## Examples