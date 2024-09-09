# CallNativeFunction

## Description
Sends a callback to the engine to run a native function.
There are three versions of the function that can be used depending on the amount of parameters needed for the callback:

- `CallNativeFunction` (no parameters)
- `CallNativeFunction2` (two parameters)
- `CallNativeFunction4` (four parameters)

In order to call a native function by name, a global variable named after the function must be added to the GameConfig. Once added, the engine will automatically set the value of the global variable to the ID of the native function.

## Parameters
- `callbackFuncID`
The index value of the callback.
- `param1`, `param2`, `param3`, `param4`
Parameters to use for the callback.

## Return Value
Depends on the callback used.

## Syntax
```
CallNativeFunction(int callbackFuncID)
```
```
CallNativeFunction2(int callbackFuncID, param1, param2)
```
```
CallNativeFunction4(int callbackFuncID, param1, param2, param3, param4)
```

## Examples
```
CallNativeFunction(Disconnect2PVS)
```
```
CallNativeFunction2(TransmitGlobal, "vs.randomValue", vs.randomValue)
```
```
CallNativeFunction4(NotifyCallback, NOTIFY_STATS_ENEMY, StageStatsUsabilityParam1, StageStatsUsabilityParam2, StageStatsUsabilityParam3)
```

## Native Functions
- [SetAchievement](SetAchievement.md)
- [SetLeaderboard](SetLeaderboard.md)
- [HapticEffect](HapticEffect.md)
- [Connect2PVS](Connect2PVS.md)
- [Disconnect2PVS](Disconnect2PVS.md)
- [SendEntity](SendEntity.md)
- [SendValue](SendValue.md)
- [ReceiveEntity](ReceiveEntity.md)
- [ReceiveValue](ReceiveValue.md)
- [TransmitGlobal](TransmitGlobal.md)
- [ShowPromoPopup](ShowPromoPopup.md)
- [NativePlayerWaitingAds](NativePlayerWaitingAds.md)
- [NativeWaterPlayerWaitingAds](NativeWaterPlayerWaitingAds.md)
- [NotifyCallback](NotifyCallback/README.md)

## Decomp-Only Native Functions
- [SetNetworkGameName](SetNetworkGameName.md)
- [ExitGame](ExitGame.md)
- [FileExists](FileExists.md)
- [OpenModMenu](OpenModMenu.md)
- [AddAchievement](AddAchievement.md)
- [SetAchievementDescription](SetAchievementDescription.md)
- [ClearAchievements](ClearAchievements.md)
- [GetAchievementCount](GetAchievementCount.md)
- [GetAchievement](GetAchievement.md)
- [GetAchievementName](GetAchievementName.md)
- [GetAchievementDescription](GetAchievementDescription.md)
- [GetScreenWidth](GetScreenWidth.md)
- [SetScreenWidth](SetScreenWidth.md)
- [GetWindowScale](GetWindowScale.md)
- [SetWindowScale](SetWindowScale.md)
- [GetWindowScaleMode](GetWindowScaleMode.md)
- [SetWindowScaleMode](SetWindowScaleMode.md)
- [GetWindowFullScreen](GetWindowFullScreen.md)
- [SetWindowFullScreen](SetWindowFullScreen.md)
- [GetWindowBorderless](GetWindowBorderless.md)
- [SetWindowBorderless](SetWindowBorderless.md)
- [GetWindowVSync](GetWindowVSync.md)
- [SetWindowVSync](SetWindowVSync.md)
- [ApplyWindowChanges](ApplyWindowChanges.md)
- [GetModCount](GetModCount.md)
- [GetModName](GetModName.md)
- [GetModDescription](GetModDescription.md)
- [GetModAuthor](GetModAuthor.md)
- [GetModVersion](GetModVersion.md)
- [GetModActive](GetModActive.md)
- [SetModActive](SetModActive.md)
- [MoveMod](MoveMod.md)
- [RefreshEngine](RefreshEngine.md)