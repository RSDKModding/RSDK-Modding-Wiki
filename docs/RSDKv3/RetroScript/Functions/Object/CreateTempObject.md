# CreateTempObject

## Description
Creates a temporary object specified by `Type`, `PropertyValue`, `XPos`, and `YPos` near the end of the object list.

!!! note
    If there are too many temporary objects loaded when this function is called, the engine will start overwritting them. Therefore, it's recommended to only use this function for objects that quickly get destroyed or unloaded.

## Parameters
`ObjectType`

:   The type of object that will be created.

`PropertyValue`

:   The Property Value of the object.

`XPos`

:   The position of the object on the horizontal axis in world-space.

`YPos`

:   The position of the object on the vertical axis in world-space.

## Return Value
Sets `TempObjectPos` to the created object's `EntityNo`.

## Syntax
```
CreateTempObject(int Type, int PropertyValue, int XPos, int YPos)
```

## Example
```
CreateTempObject(TypeName[Test Object], 0, Player.XPos, Player.YPos)
```