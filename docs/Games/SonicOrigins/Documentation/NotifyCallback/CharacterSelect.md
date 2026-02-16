# NOTIFY_CHARACTER_SELECT

Opens Sonic Origins's character select menu, then sets `callbackResult` and `continueFlag` when the menu is closed.

## Parameters
`skipMenu`

:   If true, skips the character select and automatically loads the save slot for the current character.

## Return Value
=== "v3"

    If the menu is backed out of without selecting a save slot, `game.callbackResult` is set to `0`; otherwise, it's set to `1`. If the selected save slot is an existing save, `game.continueFlag` is set to `true`.

=== "v4"

    If the menu is backed out of without selecting a save slot, `game.callbackResult` is set to `0`; otherwise, it's set to `1`. If the selected save slot is an existing save, `game.continueFlag` is set to `true`.

=== "v5"

    If the menu is backed out of without selecting a save slot, `globals->callbackResult` is set to `0`; otherwise, it's set to `1`. If the selected save slot is an existing save, `globals->continueFlag` is set to `true`.

## Syntax
=== "v3"

    ```
    game.callbackParam0 = skipMenu
    EngineCallback(NOTIFY_CHARACTER_SELECT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_CHARACTER_SELECT, int skipMenu)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_CHARACTER_SELECT, int32 skipMenu, NULL, NULL);
    ```

## Example
=== "v3"

    ```
    game.callbackParam0 = false
    EngineCallback(NOTIFY_CHARACTER_SELECT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_CHARACTER_SELECT, false)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_CHARACTER_SELECT, false, NULL, NULL);
    ```
