# AddDrawListEntityRef

## Description
Adds `objectPos` to drawList `layer`.

## Parameters
`layer`

:   Layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`objectPos`

:   The position of the object to add.

## Return Value
None.

## Syntax
```
AddDrawListEntityRef(int layer, int objectPos)
```

## Example
```
AddDrawListEntityRef(4, object.entityPos)
```