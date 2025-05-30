# ResetObjectEntity

## Description
Resets an object in position `slot` with the `type`, `propertyValue`, `xpos`, and `ypos` specified.

## Parameters
`slot`

:   The index of the object to reset.

`type`

:   The new type of the object.

`propertyValue`

:   The new property value of the object.

`xpos`

:   The new position of the object on the horizontal axis in world-space.

`ypos`

:   The new position of the object on the vertical axis in world-space.

## Return Value
None.

## Syntax
```
ResetObjectEntity(int slot, int type, int propertyValue, int xpos, int ypos)
```

## Example
```
ResetObjectEntity(object.entityPos, TypeName[Test Object], 0, object.xpos, object.ypos)
```