# GetTableValue

Gets the value at `index` from `table` and stores it in `store`.

## Parameters
`store`

:   Variable from where to save the read value.

`index`

:   The index to read the value of.

`table`

:   Name of the table from where to get the value.

## Return Value
Sets `store` to the result.

## Syntax
```
GetTableValue(var store, int index, table)
```

## Example
```
GetTableValue(arrayPos0, 3, TestObject_Table)
```
