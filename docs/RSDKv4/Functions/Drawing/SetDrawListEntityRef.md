## SetDrawListEntityRef

## Description
Sets `objectPos` in drawList `layer` to `value`.

## Parameters
`value`

:   The new value for `objectPos`.

`layer`

:   The layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`objectPos`

:   The position of the object to add.

## Return Value
None.

## Syntax
```
SetDrawListEntityRef(int value, int layer, int objectPos)
```

## Example
```
SetDrawListEntityRef(object.value0, 4, object.entityPos)
```