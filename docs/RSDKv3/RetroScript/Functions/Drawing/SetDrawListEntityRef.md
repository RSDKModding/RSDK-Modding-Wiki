## SetDrawListEntityRef

## Description
Sets `ObjectPos` in drawList `Layer` to `Value`.

## Parameters
`Value`

:   The new value for `ObjectPos`.

`Layer`

:   The Layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`ObjectPos`

:   The position of the object to add.

## Return Value
None.

## Syntax
```
SetDrawListEntityRef(int Value, int Layer, int ObjectPos)
```

## Example
```
SetDrawListEntityRef(Object.Value0, 4, Object.EntityNo)
```