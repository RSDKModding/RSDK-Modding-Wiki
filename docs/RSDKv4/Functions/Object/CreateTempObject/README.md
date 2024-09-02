# CreateTempObject

## Description
Creates a temporary object specified by `objectType`, `propertyValue`, `xPos` and `yPos` near the end of the object list.

## Parameters
- `objectType`
The type of object that will be created
- `propertyValue`
The Property Value of the object
- `xPos`
The position of the object on the horizontal axis in world-space
- `yPos`
The position of the object on the vertical axis in world-space

## Return Value
`tempObjectPos` is set to the created object's `slotID`.

## Syntax
```
CreateTempObject(int objectType, int propertyValue, int xPos, int yPos)
```

## Examples
```
CreateTempObject(TypeName[Invincibility], 0, object.xPos, object.yPos)
```

## Notes
This should only be used for misc objects that aren't required for too long in the stage.