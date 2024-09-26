# CallNativeFunction

## Description
Sends a callback to the engine to run a native function.
There are three versions of the function that can be used depending on the amount of parameters needed for the callback:

- `CallNativeFunction` (no parameters)
- `CallNativeFunction2` (two parameters)
- `CallNativeFunction4` (four parameters)

In order to call a native function by name, a global variable named after the function must be added to the GameConfig. Once added, the engine will automatically set the value of the global variable to the ID of the native function.

## Parameters
`callback`

:   The index value of the callback.

`param1`, `param2`, `param3`, `param4`

:   Parameters to use for the callback.

## Return Value
Depends on the callback used.

## Syntax
```
CallNativeFunction(int callback)
```
```
CallNativeFunction2(int callback, param1, param2)
```
```
CallNativeFunction4(int callback, param1, param2, param3, param4)
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

### General
| Function                                                          | Description                                                                                             |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [**SetAchievement**](SetAchievement.md)                           | Sets the status of the given achievement.                                                               |
| [**SetLeaderboard**](SetLeaderboard.md)                           | Submits the given score to the given leaderboard.                                                       |
| [**HapticEffect**](HapticEffect.md)                               |                                                                                                         |
| [**Connect2PVS**](Connect2PVS.md)                                 |                                                                                                         |
| [**Disconnect2PVS**](Disconnect2PVS.md)                           |                                                                                                         |
| [**SendEntity**](SendEntity.md)                                   |                                                                                                         |
| [**SendValue**](SendValue.md)                                     |                                                                                                         |
| [**ReceiveEntity**](ReceiveEntity.md)                             |                                                                                                         |
| [**ReceiveValue**](ReceiveValue.md)                               |                                                                                                         |
| [**TransmitGlobal**](TransmitGlobal.md)                           |                                                                                                         |
| [**ShowPromoPopup**](ShowPromoPopup.md)                           |                                                                                                         |
| [**NativePlayerWaitingAds**](NativePlayerWaitingAds.md)           | Creates a `RewardAds` native object, prompting the player to watch an ad.                               |
| [**NativeWaterPlayerWaitingAds**](NativeWaterPlayerWaitingAds.md) | Creates a `RewardAds` native object, prompting the player to watch an ad.                               |
| [**NotifyCallback**](NotifyCallback.md)                           | Sends the given callback to communicate to [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md). |

### Decomp Only
| Function                                                      | Description                                 |
| ------------------------------------------------------------- | ------------------------------------------- |
| [**SetNetworkGameName**](SetNetworkGameName.md)               |                                             |
| [**ExitGame**](ExitGame.md)                                   | Closes the engine.                          |
| [**FileExists**](FileExists.md)                               | Checks if a file exists in the Data assets. |
| [**OpenModMenu**](OpenModMenu.md)                             |                                             |
| [**AddAchievement**](AddAchievement.md)                       |                                             |
| [**SetAchievementDescription**](SetAchievementDescription.md) |                                             |
| [**ClearAchievements**](ClearAchievements.md)                 |                                             |
| [**GetAchievementCount**](GetAchievementCount.md)             |                                             |
| [**GetAchievement**](GetAchievement.md)                       |                                             |
| [**GetAchievementName**](GetAchievementName.md)               |                                             |
| [**GetAchievementDescription**](GetAchievementDescription.md) |                                             |
| [**GetScreenWidth**](GetScreenWidth.md)                       |                                             |
| [**SetScreenWidth**](SetScreenWidth.md)                       |                                             |
| [**GetWindowScale**](GetWindowScale.md)                       |                                             |
| [**SetWindowScale**](SetWindowScale.md)                       |                                             |
| [**GetWindowScaleMode**](GetWindowScaleMode.md)               |                                             |
| [**SetWindowScaleMode**](SetWindowScaleMode.md)               |                                             |
| [**GetWindowFullScreen**](GetWindowFullScreen.md)             |                                             |
| [**SetWindowFullScreen**](SetWindowFullScreen.md)             |                                             |
| [**GetWindowBorderless**](GetWindowBorderless.md)             |                                             |
| [**SetWindowBorderless**](SetWindowBorderless.md)             |                                             |
| [**GetWindowVSync**](GetWindowVSync.md)                       |                                             |
| [**SetWindowVSync**](SetWindowVSync.md)                       |                                             |
| [**ApplyWindowChanges**](ApplyWindowChanges.md)               |                                             |
| [**GetModCount**](GetModCount.md)                             |                                             |
| [**GetModName**](GetModName.md)                               |                                             |
| [**GetModDescription**](GetModDescription.md)                 |                                             |
| [**GetModAuthor**](GetModAuthor.md)                           |                                             |
| [**GetModVersion**](GetModVersion.md)                         |                                             |
| [**GetModActive**](GetModActive.md)                           |                                             |
| [**SetModActive**](SetModActive.md)                           |                                             |
| [**MoveMod**](MoveMod.md)                                     |                                             |
| [**RefreshEngine**](RefreshEngine.md)                         |                                             |