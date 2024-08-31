# AddDrawListEntityRef

## Description
Adds `ObjectPos` to the drawList layer

## Parameters
- `layer`
Layer of the drawList to add the reference, indices 0-7 are valid, additionally 8 is available in V5U.
- `objectPos`
The position of the object to add

## Return Value
None.

## Syntax
```AddDrawListEntityRef(int layer, int objectPos)```

## Examples
- ```AddDrawListEntityRef(4, object.entityPos)```