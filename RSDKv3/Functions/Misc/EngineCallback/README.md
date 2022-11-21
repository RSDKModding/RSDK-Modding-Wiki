# EngineCallback

## Description
Sends a callback to the engine.

## Parameters
- `CallbackFuncID`
The index value of the callback

## Return Value
Normally not, but some Origins functions will return a value to `game.callbackResult`

## Syntax
```EngineCallback(int CallbackFunctID)```

## Examples
- ```EngineCallback(4)```

## Notes
Origins functions may use `game.callbackParam` from 0 to 3 to replicate v4's `CallNativeFunction2/4` function