# GetDrawListEntityRef

## Description
Gets `ObjectPos` in drawList `Layer` and stores it in `Store`.

## Parameters
`Store`

:   The variable where `ObjectPos` will be stored.

`Layer`

:   Layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`ObjectPos`

:   The position of the object to add.

## Return Value
Sets `Store` to the result.

## Syntax
```
GetDrawListEntityRef(var Store, int Layer, int ObjectPos)
```

## Example
```
GetDrawListEntityRef(Object.Value0, 4, Object.EntityNo)
```