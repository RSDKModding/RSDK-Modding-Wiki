# AddDrawListEntityRef

## Description
Adds `ObjectPos` to drawList `Layer`.

## Parameters
`Layer`

:   Layer of the drawList to add the reference. Indices 0-6 are valid, as well as 7 in RSDKv5U.

`ObjectPos`

:   The position of the object to add.

## Return Value
None.

## Syntax
```
AddDrawListEntityRef(int Layer, int ObjectPos)
```

## Example
```
AddDrawListEntityRef(4, Object.EntityNo)
```