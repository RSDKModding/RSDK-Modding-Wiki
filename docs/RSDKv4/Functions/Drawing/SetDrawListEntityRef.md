## SetDrawListEntityRef

## Description
Sets `objectPos` in the drawList layer to the value of `newValue`.

## Parameters
- `layer`
The Layer of the drawList to add the reference, indices 0-7 are valid, additionally 8 is available in V5U.
- `objectPos`
The position of the object to add.
- `newValue`
The new value for `objectPos`.

## Return Value
None.

## Syntax
```
SetDrawListEntityRef(int newValue, int layer, int objectPos)
```

## Examples
```
SetDrawListEntityRef(object.value0, 4, object.entityPos)
```