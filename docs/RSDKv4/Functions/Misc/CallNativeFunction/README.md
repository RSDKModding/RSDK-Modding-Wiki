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
- [SetAchievement](NativeFunctions/SetAchievement.md)
- [SetLeaderboard](NativeFunctions/SetLeaderboard.md)
- [HapticEffect](NativeFunctions/HapticEffect.md)
- [Connect2PVS](NativeFunctions/Connect2PVS.md)
- [Disconnect2PVS](NativeFunctions/Disconnect2PVS.md)
- [SendEntity](NativeFunctions/SendEntity.md)
- [SendValue](NativeFunctions/SendValue.md)
- [ReceiveEntity](NativeFunctions/ReceiveEntity.md)
- [ReceiveValue](NativeFunctions/ReceiveValue.md)
- [TransmitGlobal](NativeFunctions/TransmitGlobal.md)
- [ShowPromoPopup](NativeFunctions/ShowPromoPopup.md)
- [NativePlayerWaitingAds](NativeFunctions/NativePlayerWaitingAds.md)
- [NativeWaterPlayerWaitingAds](NativeFunctions/NativeWaterPlayerWaitingAds.md)
- [NotifyCallback](NativeFunctions/NotifyCallback.md)

## Decomp-Only Native Functions
- [SetNetworkGameName](DecompFunctions/SetNetworkGameName.md)
- [ExitGame](DecompFunctions/ExitGame.md)
- [FileExists](DecompFunctions/FileExists.md)
- [OpenModMenu](DecompFunctions/OpenModMenu.md)
- [AddAchievement](DecompFunctions/AddAchievement.md)
- [SetAchievementDescription](DecompFunctions/SetAchievementDescription.md)
- [ClearAchievements](DecompFunctions/ClearAchievements.md)
- [GetAchievementCount](DecompFunctions/GetAchievementCount.md)
- [GetAchievement](DecompFunctions/GetAchievement.md)
- [GetAchievementName](DecompFunctions/GetAchievementName.md)
- [GetAchievementDescription](DecompFunctions/GetAchievementDescription.md)
- [GetScreenWidth](DecompFunctions/GetScreenWidth.md)
- [SetScreenWidth](DecompFunctions/SetScreenWidth.md)
- [GetWindowScale](DecompFunctions/GetWindowScale.md)
- [SetWindowScale](DecompFunctions/SetWindowScale.md)
- [GetWindowScaleMode](DecompFunctions/GetWindowScaleMode.md)
- [SetWindowScaleMode](DecompFunctions/SetWindowScaleMode.md)
- [GetWindowFullScreen](DecompFunctions/GetWindowFullScreen.md)
- [SetWindowFullScreen](DecompFunctions/SetWindowFullScreen.md)
- [GetWindowBorderless](DecompFunctions/GetWindowBorderless.md)
- [SetWindowBorderless](DecompFunctions/SetWindowBorderless.md)
- [GetWindowVSync](DecompFunctions/GetWindowVSync.md)
- [SetWindowVSync](DecompFunctions/SetWindowVSync.md)
- [ApplyWindowChanges](DecompFunctions/ApplyWindowChanges.md)
- [GetModCount](DecompFunctions/GetModCount.md)
- [GetModName](DecompFunctions/GetModName.md)
- [GetModDescription](DecompFunctions/GetModDescription.md)
- [GetModAuthor](DecompFunctions/GetModAuthor.md)
- [GetModVersion](DecompFunctions/GetModVersion.md)
- [GetModActive](DecompFunctions/GetModActive.md)
- [SetModActive](DecompFunctions/SetModActive.md)
- [MoveMod](DecompFunctions/MoveMod.md)
- [RefreshEngine](DecompFunctions/RefreshEngine.md)