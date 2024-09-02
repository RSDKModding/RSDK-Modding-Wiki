# GetObjectValue

## Description
Get the `object.value` of `entitySlot` corresponding to `valueID` and stores it in `result`.

## Parameters
- `result`
Variable where to store `valueID`.
- `valueID`
The corresponding `object.value` to get.
- `entitySlot`
The ID of the object from where to get `object.value`.

## Return Value
None.

## Syntax
```
GetObjectValue(var result, int valueID, int entitySlot)
```

## Examples
```
GetObjectValue(arrayPos0, 34, 2)
```