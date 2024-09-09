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
- [SetAchievement](CallNativeFunction/SetAchievement.md)
- [SetLeaderboard](CallNativeFunction/SetLeaderboard.md)
- [HapticEffect](CallNativeFunction/HapticEffect.md)
- [Connect2PVS](CallNativeFunction/Connect2PVS.md)
- [Disconnect2PVS](CallNativeFunction/Disconnect2PVS.md)
- [SendEntity](CallNativeFunction/SendEntity.md)
- [SendValue](CallNativeFunction/SendValue.md)
- [ReceiveEntity](CallNativeFunction/ReceiveEntity.md)
- [ReceiveValue](CallNativeFunction/ReceiveValue.md)
- [TransmitGlobal](CallNativeFunction/TransmitGlobal.md)
- [ShowPromoPopup](CallNativeFunction/ShowPromoPopup.md)
- [NativePlayerWaitingAds](CallNativeFunction/NativePlayerWaitingAds.md)
- [NativeWaterPlayerWaitingAds](CallNativeFunction/NativeWaterPlayerWaitingAds.md)
- [NotifyCallback](CallNativeFunction/NotifyCallback.md)

## Decomp-Only Native Functions
- [SetNetworkGameName](CallNativeFunction/SetNetworkGameName.md)
- [ExitGame](CallNativeFunction/ExitGame.md)
- [FileExists](CallNativeFunction/FileExists.md)
- [OpenModMenu](CallNativeFunction/OpenModMenu.md)
- [AddAchievement](CallNativeFunction/AddAchievement.md)
- [SetAchievementDescription](CallNativeFunction/SetAchievementDescription.md)
- [ClearAchievements](CallNativeFunction/ClearAchievements.md)
- [GetAchievementCount](CallNativeFunction/GetAchievementCount.md)
- [GetAchievement](CallNativeFunction/GetAchievement.md)
- [GetAchievementName](CallNativeFunction/GetAchievementName.md)
- [GetAchievementDescription](CallNativeFunction/GetAchievementDescription.md)
- [GetScreenWidth](CallNativeFunction/GetScreenWidth.md)
- [SetScreenWidth](CallNativeFunction/SetScreenWidth.md)
- [GetWindowScale](CallNativeFunction/GetWindowScale.md)
- [SetWindowScale](CallNativeFunction/SetWindowScale.md)
- [GetWindowScaleMode](CallNativeFunction/GetWindowScaleMode.md)
- [SetWindowScaleMode](CallNativeFunction/SetWindowScaleMode.md)
- [GetWindowFullScreen](CallNativeFunction/GetWindowFullScreen.md)
- [SetWindowFullScreen](CallNativeFunction/SetWindowFullScreen.md)
- [GetWindowBorderless](CallNativeFunction/GetWindowBorderless.md)
- [SetWindowBorderless](CallNativeFunction/SetWindowBorderless.md)
- [GetWindowVSync](CallNativeFunction/GetWindowVSync.md)
- [SetWindowVSync](CallNativeFunction/SetWindowVSync.md)
- [ApplyWindowChanges](CallNativeFunction/ApplyWindowChanges.md)
- [GetModCount](CallNativeFunction/GetModCount.md)
- [GetModName](CallNativeFunction/GetModName.md)
- [GetModDescription](CallNativeFunction/GetModDescription.md)
- [GetModAuthor](CallNativeFunction/GetModAuthor.md)
- [GetModVersion](CallNativeFunction/GetModVersion.md)
- [GetModActive](CallNativeFunction/GetModActive.md)
- [SetModActive](CallNativeFunction/SetModActive.md)
- [MoveMod](CallNativeFunction/MoveMod.md)
- [RefreshEngine](CallNativeFunction/RefreshEngine.md)