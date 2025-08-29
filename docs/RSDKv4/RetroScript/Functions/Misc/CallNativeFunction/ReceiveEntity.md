# ReceiveEntity

## Description
Recieves an object sent from the opponent in 2P VS.

## Parameters
`entityID`

:   The object slot/ID to store the recieved object in.

`incrementPos`

:   If set to `true`, verifies the data type.

## Return Value
None.

## Syntax
```
CallNativeFunction2(ReceiveEntity, int entityID, bool incrementPos)
```

## Example
```
CallNativeFunction2(ReceiveEntity, 2, true)
```
