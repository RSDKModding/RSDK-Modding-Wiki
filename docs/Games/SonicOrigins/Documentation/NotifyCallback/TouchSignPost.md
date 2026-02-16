# NOTIFY_TOUCH_SIGNPOST

Notifies [Hedgehog Engine 2](../../HedgehogEngine2.md) when a sign post has been touched to signify the completion of the stage in mission mode. In Sonic 3 & Knuckles this is only called from the `SignPost2` object.

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
    NotifyCallback(NOTIFY_TOUCH_SIGNPOST, NULL, NULL, NULL);
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
    NotifyCallback(NOTIFY_TOUCH_SIGNPOST, NULL, NULL, NULL);
    ```
