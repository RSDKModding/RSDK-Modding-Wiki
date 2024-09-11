# NOTIFY_CHARACTER_SELECT

## Description
Opens Sonic Origins's character select menu, then sets `game.callbackResult` and `game.continueFlag` when the menu is closed.

## Parameters
- `unused`
Unused parameter.

## Return Value
If the menu is backed out of without selecting a save slot, `game.callbackResult` is set to `0`; otherwise, it's set to `1`. If the selected save slot is an existing save, `game.continueFlag` is set to `1`.

## Syntax
```
CallNativeFunction2(NotifyCallback, NOTIFY_CHARACTER_SELECT, int unused)
```

## Example
```
CallNativeFunction2(NotifyCallback, NOTIFY_CHARACTER_SELECT, 0)
```