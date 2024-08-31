# CallNativeFunction

## Description
Sends a callback to the engine.
Depending of the amount of parameters needed for the callback, the function to use can be:
- `CallNativeFunction`
- `CallNativeFunction2`
- `CallNativeFunction4`

## Parameters
- `callbackFuncID`
The index value of the callback
- `param1`,`param2`,`param3`,`param4`

## Return Value
Depends of callback.

## Syntax
```CallNativeFunction(int callbackFuncID)```
```CallNativeFunction2(int callbackFuncID, int param1, int param2)```
```CallNativeFunction4(int callbackFuncID, int param1, int param2, int param3, int param4)```

## Examples
- ```CallNativeFunction(Disconnect2PVS)```
- ```CallNativeFunction2(TransmitGlobal, "vs.randomValue", vs.randomValue)```
- ```CallNativeFunction4(NotifyCallback, NOTIFY_STATS_ENEMY, StageStatsUsabilityParam1, StageStatsUsabilityParam2, StageStatsUsabilityParam3)```