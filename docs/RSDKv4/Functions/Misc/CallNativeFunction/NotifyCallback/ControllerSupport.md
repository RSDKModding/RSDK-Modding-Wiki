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
  A[Callback called] --> B{Is on Nintendo<br/>Switch version?}
  B --> |Yes| C[Wait until controller<br/>setup screen is closed]
  C --> D{Are two controllers<br/>connected?}
  D --> |Yes| E[game.callbackResult<br/>is set to 1]
  D --> |No| F[game.callbackResult<br/>is set to 0]
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