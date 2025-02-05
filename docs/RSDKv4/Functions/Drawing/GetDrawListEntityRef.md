# GetDrawListEntityRef

## Description
Gets `objectPos` in drawList `layer` and stores it in `store`.

## Parameters
`store`

:   The variable where `objectPos` will be stored.

`layer`

:   Layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`objectPos`

:   The position of the object to add.

## Return Value
Sets `store` to the result.

## Syntax
```
GetDrawListEntityRef(var store, int layer, int objectPos)
```

## Example
```
GetDrawListEntityRef(object.value0, 4, object.entityPos)
```