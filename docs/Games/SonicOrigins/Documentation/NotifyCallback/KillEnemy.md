# NOTIFY_KILL_ENEMY

## Description
Notifies [Hedgehog Engine 2](../../HedgehogEngine2.md) to update the mission objective.

## Parameters
=== "v3"

    `todo`
    
    :    Todo.

=== "v4"

    `todo`
    
    :    Todo.

=== "v5"

    `todo`

    :    Todo.

    `todo2`

    :    Todo. Used to add an amount.

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
    NotifyCallback(NOTIFY_KILL_ENEMY, int32 todo, int32 todo2, NULL);
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
    NotifyCallback(NOTIFY_KILL_ENEMY, 0, 0, NULL);
    ```