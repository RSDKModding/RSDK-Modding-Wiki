# NOTIFY_ADD_COIN

## Description
Awards the player the given amount of coins.

## Parameters
- `count`
The number of coins to give the player.

## Return Value
=== "v3/v4"

    Sets `game.coinCount` to the new coin count.

=== "v5"

    Sets `globals->coinCount` to the new coin count.

## Syntax
=== "v3"

    ```
    game.callbackParam0 = count
    EngineCallback(NOTIFY_ADD_COIN)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_ADD_COIN, int count)
    ```

=== "v5"

    ```c++
    NotifyCallback(NOTIFY_ADD_COIN, int32 count, NULL, NULL);
    ```

## Example
=== "v3"

    ```
    game.callbackParam0 = 1
    EngineCallback(NOTIFY_ADD_COIN)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_ADD_COIN, 1)
    ```

=== "v5"

    ```c++
    NotifyCallback(NOTIFY_ADD_COIN, 1, NULL, NULL);
    ```