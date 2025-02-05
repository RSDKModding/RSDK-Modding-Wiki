# NotifyCallback

!!! note
    This native function only exists in Sonic Origins.

## Description
Sends the given callback to communicate to [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md).

For more information on NotifyCallback, including a list of usable callbacks, see [this page](/Games/SonicOrigins/Documentation/NotifyCallback/README.md).

## Parameters
`callback`

:   The index value of the callback.

`param1`, `param2`, `param3`

:   Parameters to use for the callback.

## Return Value
Depends on the callback used.

## Syntax
```
CallNativeFunction2(NotifyCallback, int callback, int param1)
```
```
CallNativeFunction4(NotifyCallback, int callback, int param1, int param2, int param3)
```

## Examples
```
CallNativeFunction2(NotifyCallback, NOTIFY_ADD_COIN, 1)
```
```
CallNativeFunction4(NotifyCallback, NOTIFY_STATS_CHARA_ACTION, 1, 0, 0)
```