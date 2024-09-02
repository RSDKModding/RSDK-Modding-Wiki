# GetDrawListEntityRef

## Description
Gets `ObjectPos` in the drawList layer and stores it in `Store`

## Parameters
- `Layer`
layer of the drawList to add the reference, indices 0-7 are valid, additionally 8 is available in V5U.
- `ObjectPos`
the position of the object to add
- `Store`
the variable where `ObjectPos` will be stored

## Return Value
None.

## Syntax
```
GetDrawListEntityRef(var Store, int Layer, int ObjectPos)
```

## Examples
```
GetDrawListEntityRef(Object.Value0, 4, Object.EntityNo)
```