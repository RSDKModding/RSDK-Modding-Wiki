# NOTIFY_TOUCH_EMERALD

## Description
Todo.

## Parameters
`todo`

:   Todo.

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
    NotifyCallback(NOTIFY_CALLBACK, int32 todo, NULL, NULL);
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
    NotifyCallback(NOTIFY_CALLBACK, 0, NULL, NULL);
    ```
