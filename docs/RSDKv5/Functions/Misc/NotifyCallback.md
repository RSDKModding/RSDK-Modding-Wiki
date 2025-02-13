# NotifyCallback

!!! note
    This function only exists in Sonic Origins.

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
``` cpp
NotifyCallback(int32 callback, int32 param1, int32 param2, int32 param3);
```

## Example
``` cpp
NotifyCallback(NOTIFY_STATS_CHARA_ACTION, 1, 0, 0);
```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        if (HasNotifyCallback())
            RSDK.NotifyCallback(callback, param1, param2, param3);
    	```

    === "C++"

        ``` cpp
        if (HasNotifyCallback())
            RSDKTable->NotifyCallback(callback, param1, param2, param3);
    	```
	[HasNotifyCallback()](HasNotifyCallback.md) is a macro as well.
	The underlying logic for either macro should NEVER be used as it's less safe than the macros. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.