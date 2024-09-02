## SetDrawListEntityRef

## Description
Sets `ObjectPos` in the drawList layer to the value of `NewValue`

## Parameters
- `Layer`
The Layer of the drawList to add the reference, indices 0-7 are valid, additionally 8 is available in V5U.
- `ObjectPos`
The position of the object to add
- `NewValue`
The new value for `ObjectPos`

## Return Value
None.

## Syntax
```
SetDrawListEntityRef(int NewValue, int Layer, int ObjectPos)
```

## Examples
```
SetDrawListEntityRef(Object.Value0, 4, Object.EntityNo)
```