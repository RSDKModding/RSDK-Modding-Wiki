# NOTIFY_DEATH_EVENT

Notifies [Hedgehog Engine 2](../../HedgehogEngine2.md) of a Player death.

## Parameters
=== "v3"

    `todo`
    
    :    Todo.

=== "v4"

    `todo`
    
    :    Todo.

=== "v5"

    None.

## Return Value
None.

## Syntax
=== "v3"

    ```
    game.callbackParam0 = todo
    EngineCallback(NOTIFY_CALLBACK)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_CALLBACK, int todo)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_DEATH_EVENT, NULL, NULL, NULL);
    ```

## Example
=== "v3"

    ```
    game.callbackParam0 = 0
    EngineCallback(NOTIFY_CALLBACK)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_CALLBACK, 0)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_DEATH_EVENT, NULL, NULL, NULL);
    ```
