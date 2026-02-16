# TransmitGlobal

Sets a global variable for the opponent in 2P VS.

## Parameters
`globalName`

:   The name of the global variable to set.

`globalValue`

:   The value to send.

## Return Value
None.

## Syntax
```
CallNativeFunction2(TransmitGlobal, string globalName, int globalValue)
```

## Example
```
CallNativeFunction2(TransmitGlobal, "vs.dataSent", true)
```
