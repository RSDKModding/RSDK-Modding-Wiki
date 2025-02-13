# CreateTempObject

## Description
Creates a temporary object specified by `type`, `propertyValue`, `xpos`, and `ypos` near the end of the object list.

!!! note
    If there are too many temporary objects loaded when this function is called, the engine will start overwritting them. Therefore, it's recommended to only use this function for objects that quickly get destroyed or unloaded.

## Parameters
`type`

:   The type of object that will be created.

`propertyValue`

:   The Property Value of the object.

`xpos`

:   The position of the object on the horizontal axis in world-space.

`ypos`

:   The position of the object on the vertical axis in world-space.

## Return Value
Sets `tempObjectPos` to the created object's `entityPos`.

## Syntax
```
CreateTempObject(int type, int propertyValue, int xpos, int ypos)
```

## Example
```
CreateTempObject(TypeName[Test Object], 0, object.xpos, object.ypos)
```