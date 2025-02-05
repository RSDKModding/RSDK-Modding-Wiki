# GetTextInfo

## Description
Gets the data of `Type` from `Menu` using `Index` and stores it in `Store`.

## Parameters
`Store`

:   Variable where the data will be saved.

`Menu`

:   The menu from where to get the data. `MENU_1` or `MENU_2` are valid.

`Type`

:   The type of data to read. Valid values are 0 (`TEXTINFO_TEXTDATA`), 1 (`TEXTINFO_TEXTSIZE`) or 2 (`TEXTINFO_ROWCOUNT`).

`Index`

:   Index of the text row from where to get the data.

`Offset`

:   Offset for the text at `Index`. Only used if `Type` is `TEXTINFO_TEXTDATA`.

## Return Value
Sets `Store` to the result.

## Syntax
```
GetTextInfo(var Store, int Menu, int Type, int Index, int Offset)
```

## Example
```
GetTextInfo(TempValue4, MENU_1, TEXTINFO_TEXTDATA, TempValue0, 1)
```