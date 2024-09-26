# SetObjectValue

## Description
Sets `object.valueXX` of the object in `slot` corresponding to `valueID` to `value`.

## Parameters
`value`

:   New value for `object.valueXX`.

`valueID`

:   The corresponding `object.valueXX` to set, with a range of 0-47.

`slot`

:   The ID of the object to assign the new `object.value` value.

## Return Value
Sets `object.valueXX` of the object in `slot` corresponding to `valueID` to `value`.

## Syntax
```
SetObjectValue(int value, int valueID, int slot)
```

## Example
```
SetObjectValue(3, 24, 7)
```