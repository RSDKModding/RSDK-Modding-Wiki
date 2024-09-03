# ResetObjectEntity

## Description
Resets an object in the `objectSlot` position to the `objectType`, `propertyValue`, `xPos` and `yPos` specified.

## Parameters
- `objectSlot`
The position of the object to reset.
- `objectType`
The updated type of object.
- `propertyValue`
The new Property Value of the object.
- `xPos`
The new position of the object on the horizontal axis in world-space.
- `yPos`
The new position of the object on the vertical axis in world-space.

## Return Value
None.

## Syntax
```
ResetObjectEntity(int objectSlot, int objectType, int propertyValue, int xPos, int yPos)
```

## Examples
```
ResetObjectEntity(object.entityPos, TypeName[Flower], 0, Object.xpos, Object.ypos)
```