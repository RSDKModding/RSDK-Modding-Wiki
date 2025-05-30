# GetObjectValue

!!! note
    This function only exists in REV02 and above.

## Description
Gets `object.valueXX` of the object in `slot` corresponding to `valueID` and stores it in `store`.

## Parameters
`store`

:   Variable where to store `valueID`.

`valueID`

:   The corresponding `object.valueXX` to get, with a range of 0-47.

`slot`

:   The ID of the object from where to get `object.value`.

## Return Value
Sets `store` to the result.

## Syntax
```
GetObjectValue(var store, int valueID, int slot)
```

## Example
```
GetObjectValue(arrayPos0, 34, 2)
```