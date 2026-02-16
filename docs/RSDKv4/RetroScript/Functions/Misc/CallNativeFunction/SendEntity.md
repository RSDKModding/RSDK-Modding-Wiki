# SendEntity

Sends the data for an object to the opponent in 2P VS.

## Parameters
`entityID`

:   The ID of the object to send.

`verify`

:   Verifies the object.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SendEntity, int entityID, bool verify)
```

## Example
```
CallNativeFunction2(SendEntity, object.entityPos, false)
```
