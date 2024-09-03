# ResetObjectEntity

## Description
Resets an object in the `ObjectSlot` position to the `ObjectType`, `PropertyValue`, `XPos` and `YPos` specified.

## Parameters
- `ObjectSlot`
The position of the object to reset.
- `ObjectType`
The updated type of object.
- `PropertyValue`
The new Property Value of the object.
- `XPos`
The new position of the object on the horizontal axis in world-space.
- `YPos`
The new position of the object on the vertical axis in world-space.

## Return Value
None.

## Syntax
```
ResetObjectEntity(int ObjectSlot, int ObjectType, int PropertyValue, int XPos, int YPos)
```

## Examples
```
ResetObjectEntity(Object.EntityNo, TypeName[Flower], 0, Object.XPos, Object.YPos)
```