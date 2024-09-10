# NOTIFY_CONTROLLER_SUPPORT

## Description
Opens the controller setup screen in the Nintendo Switch version of the game, then sets `game.callbackResult` based on the platform and controller count.

## Parameters
- `unused`
Unused parameter.

## Return Value
`game.callbackResult` is set based on the platform and controller count:
``` mermaid
flowchart LR
  A[Callback called] --> B{Is on Nintendo\nSwitch version?}
  B --> |Yes| C[Wait until controller\nsetup screen is closed]
  C --> D{Are two controllers\nconnected?}
  D --> |Yes| E[game.callbackResult\nis set to 1]
  D --> |No| F[game.callbackResult\nis set to 0]
  B --> |No| E
```

## Syntax
```
CallNativeFunction2(NotifyCallback, NOTIFY_CONTROLLER_SUPPORT, int unused)
```

## Examples
```
CallNativeFunction2(NotifyCallback, NOTIFY_CONTROLLER_SUPPORT, 0)
```