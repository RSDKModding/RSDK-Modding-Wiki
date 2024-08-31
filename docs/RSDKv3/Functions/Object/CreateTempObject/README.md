# CreateTempObject

## Description
Creates a temporary object specified by `ObjectType`, `PropertyValue`, `XPos` and `YPos` near the end of the object list.

## Parameters
- `ObjectType`
The type of object that will be created
- `PropertyValue`
The Property Value of the object
- `XPos`
The position of the object on the horizontal axis in world-space
- `YPos`
The position of the object on the vertical axis in world-space

## Return Value
`TempObjectPos` is set to the created object's `SlotID`.

## Syntax
```CreateTempObject(int ObjectType, int PropertyValue, int XPos, int YPos)```

## Examples
- ```CreateTempObject(TypeName[Invincibility], 0, Player.XPos, Player.YPos)```

## Notes
This should only be used for misc objects that aren't required for too long in the stage.