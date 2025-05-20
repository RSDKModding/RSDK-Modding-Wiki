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
| [**HapticEffect**](HapticEffect.md)                               | Queues/Plays a haptic effect, if the engine build and device support it.                                |
| [**Connect2PVS**](Connect2PVS.md)                                 | Opens the menu for connecting to an opponent for 2P VS.                                                 |
| [**Disconnect2PVS**](Disconnect2PVS.md)                           | Disconnects from a 2P VS game.                                                                          |
| [**SendEntity**](SendEntity.md)                                   | Sends the data for an object to the opponent in 2P VS.                                                  |
| [**SendValue**](SendValue.md)                                     | Sends a value to the opponent in 2P VS.                                                                 |
| [**ReceiveEntity**](ReceiveEntity.md)                             | Recieves an object sent from the opponent in 2P VS.                                                     |
| [**ReceiveValue**](ReceiveValue.md)                               | Sets a variable to a value sent from the opponent in 2P VS.                                             |
| [**TransmitGlobal**](TransmitGlobal.md)                           | Sets a global variable for the opponent in 2P VS.                                                       |
| [**ShowPromoPopup**](ShowPromoPopup.md)                           | Shows a promo popup.                                                                                    |
| [**NativePlayerWaitingAds**](NativePlayerWaitingAds.md)           | Creates a `RewardAds` native object, prompting the player to watch an ad.                               |
| [**NativeWaterPlayerWaitingAds**](NativeWaterPlayerWaitingAds.md) | Creates a `RewardAds` native object, prompting the player to watch an ad.                               |
| [**NotifyCallback**](NotifyCallback.md)                           | Sends the given callback to communicate to [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md). |

### Decomp Only
| Function                                                      | Description                                                                |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [**SetNetworkGameName**](SetNetworkGameName.md)               | Sets the name of the game to find 2P VS opponents for.                     |
| [**ExitGame**](ExitGame.md)                                   | Closes the engine.                                                         |
| [**FileExists**](FileExists.md)                               | Checks if a file exists in the assets.                                     |
| [**OpenModMenu**](OpenModMenu.md)                             | Opens the Mods List.                                                       |
| [**AddAchievement**](AddAchievement.md)                       | Adds an achievement to the backend with the given name.                    |
| [**SetAchievementDescription**](SetAchievementDescription.md) | Sets the description for an achievement.                                   |
| [**ClearAchievements**](ClearAchievements.md)                 | Removes all achievements from the backend.                                 |
| [**GetAchievementCount**](GetAchievementCount.md)             | Gets the number of achievements in the backend.                            |
| [**GetAchievement**](GetAchievement.md)                       | Gets the status of an achievement.                                         |
| [**GetAchievementName**](GetAchievementName.md)               | Adds a text entry to `menu` with an achievement's name as the text.        |
| [**GetAchievementDescription**](GetAchievementDescription.md) | Adds a text entry to `menu` with an achievement's description as the text. |
| [**GetScreenWidth**](GetScreenWidth.md)                       | Gets the screen width.                                                     |
| [**SetScreenWidth**](SetScreenWidth.md)                       | Sets the screen width.                                                     |
| [**GetWindowScale**](GetWindowScale.md)                       | Gets the window scale.                                                     |
| [**SetWindowScale**](SetWindowScale.md)                       | Sets the window scale.                                                     |
| [**GetWindowScaleMode**](GetWindowScaleMode.md)               | Gets the window scale mode.                                                |
| [**SetWindowScaleMode**](SetWindowScaleMode.md)               | Sets the window scale mode.                                                |
| [**GetWindowFullScreen**](GetWindowFullScreen.md)             | Gets if fullscreen is enabled.                                             |
| [**SetWindowFullScreen**](SetWindowFullScreen.md)             | Sets if fullscreen is enabled.                                             |
| [**GetWindowBorderless**](GetWindowBorderless.md)             | Gets if the window is borderless.                                          |
| [**SetWindowBorderless**](SetWindowBorderless.md)             | Sets if the window is borderless.                                          |
| [**GetWindowVSync**](GetWindowVSync.md)                       | Gets if VSync is enabled.                                                  |
| [**SetWindowVSync**](SetWindowVSync.md)                       | Sets if VSync is enabled.                                                  |
| [**ApplyWindowChanges**](ApplyWindowChanges.md)               | Applies any window changes.                                                |
| [**GetModCount**](GetModCount.md)                             | Gets the number of mods in the mods list.                                  |
| [**GetModName**](GetModName.md)                               | Adds a text entry to `menu` with a mod's name as the text.                 |
| [**GetModDescription**](GetModDescription.md)                 | Adds a text entry to `menu` with a mod's description as the text.          |
| [**GetModAuthor**](GetModAuthor.md)                           | Adds a text entry to `menu` with a mod's author as the text.               |
| [**GetModVersion**](GetModVersion.md)                         | Adds a text entry to `menu` with a mod's version as the text.              |
| [**GetModActive**](GetModActive.md)                           | Gets if a mod is enabled.                                                  |
| [**SetModActive**](SetModActive.md)                           | Sets if a mod is enabled.                                                  |
| [**MoveMod**](MoveMod.md)                                     | Shifts a mod up or down in the mods list.                                  |
| [**RefreshEngine**](RefreshEngine.md)                         | Reloads the engine, the game, and all mods.                                |