# ResetObjectEntity

## Description
Resets an object in position `Slot` to the `Type`, `PropertyValue`, `XPos`, and `YPos` specified.

## Parameters
`Slot`

:   The index of the object to reset.

`Type`

:   The new type of object.

`PropertyValue`

:   The new Property Value of the object.

`XPos`

:   The new position of the object on the horizontal axis in world-space.

`YPos`

:   The new position of the object on the vertical axis in world-space.

## Return Value
None.

## Syntax
```
ResetObjectEntity(int Slot, int Type, int PropertyValue, int XPos, int YPos)
```

## Example
```
ResetObjectEntity(Object.EntityNo, TypeName[Test Object], 0, Object.XPos, Object.YPos)
```