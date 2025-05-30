# HasNotifyCallback

!!! note
    This function only exists in Sonic Origins.

## Description
Checks if the game has access to [NotifyCallback()](NotifyCallback.md).

## Parameters
None.

## Return Value
Returns `true` if [NotifyCallback()](NotifyCallback.md) exists and is accessible, or `false` if not.

## Syntax
``` cpp
HasNotifyCallback();
```

## Example
``` cpp
if (HasNotifyCallback()) { /* do stuff */ }
```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        RSDK.NotifyCallback != NULL
        ```

    === "C++"

        ``` cpp
        RSDKTable->NotifyCallback != NULL
        ```
    The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.