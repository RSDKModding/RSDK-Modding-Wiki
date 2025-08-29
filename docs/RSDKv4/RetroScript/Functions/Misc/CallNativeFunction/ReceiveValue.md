# ReceiveValue

## Description
Sets a variable to a value sent from the opponent in 2P VS.

## Parameters
`value`

:   The variable to set.

`incrementPos`

:   If set to `true`, verifies the match value positions.

## Return Value
None.

## Syntax
```
CallNativeFunction2(ReceiveValue, var value, bool incrementPos)
```

## Example
```
CallNativeFunction2(ReceiveValue, object.value6, true)
```
