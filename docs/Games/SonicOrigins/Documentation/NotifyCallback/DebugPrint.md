# NOTIFY_DEBUGPRINT

## Description
Has no effect in-game, but would have likely printed the given values to the console in debug builds of Sonic Origins.

## Parameters
`value1`, `value2`, `value3`

:   The values to (supposedly) print.

## Return Value
None.

## Syntax
=== "v3"

    ```
    game.callbackParam0 = value1
    game.callbackParam1 = value2
    game.callbackParam2 = value3
    EngineCallback(NOTIFY_DEBUGPRINT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_DEBUGPRINT, int value1)
    ```
    ```
    CallNativeFunction4(NotifyCallback, NOTIFY_DEBUGPRINT, int value1, int value2, int value3)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_DEBUGPRINT, int32 value1, int32 value2, int32 value3);
    ```

## Examples
=== "v3"

    ```
    game.callbackParam0 = 100
    game.callbackParam1 = Object.PropertyValue
    game.callbackParam2 = Object.Timer
    EngineCallback(NOTIFY_DEBUGPRINT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_DEBUGPRINT, object.state)
    ```
    ```
    CallNativeFunction4(NotifyCallback, NOTIFY_DEBUGPRINT, 100, object.propertyValue, object.timer)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_DEBUGPRINT, 100, this->type, this->timer);
    ```