# NotifyCallback

!!! note
    This native function only exists in Sonic Origins.

## Description
Sends the given callback to communicate to Hedgehog Engine 2.

Unlike native functions, NotifyCallback callbacks do not have their IDs automatically set by the engine; they must be manually specified instead. However, Sonic Team still elected to define callback aliases as global varaiables.

## Parameters
- `callback`
The index value of the callback.
- `param1`, `param2`, `param3`
Parameters to use for the callback.

## Return Value
Depends on the callback used.

## Syntax
```
CallNativeFunction2(NotifyCallback, int callback, int param1)
```
```
CallNativeFunction4(NotifyCallback, int callback, int param1, int param2, int param3)
```

## Examples
```
CallNativeFunction2(NotifyCallback, NOTIFY_ADD_COIN, 1)
```
```
CallNativeFunction4(NotifyCallback, NOTIFY_STATS_CHARA_ACTION, 1, 0, 0)
```

## Callbacks
| ID  | Callback                                           | Description                                                                                                                                               |
| --- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 128 | [NOTIFY_DEATH_EVENT](DeathEvent.md)                |                                                                                                                                                           |
| 129 | [NOTIFY_TOUCH_SIGNPOST](TouchSignPost.md)          |                                                                                                                                                           |
| 130 | [NOTIFY_HUD_ENABLE](HUDEnable.md)                  |                                                                                                                                                           |
| 131 | [NOTIFY_ADD_COIN](AddCoin.md)                      | Awards the player the given amount of coins.                                                                                                              |
| 132 | [NOTIFY_KILL_ENEMY](KillEnemy.md)                  |                                                                                                                                                           |
| 133 | [NOTIFY_SAVESLOT_SELECT](SaveSlotSelect.md)        |                                                                                                                                                           |
| 134 | [NOTIFY_FUTURE_PAST](FuturePast.md)                |                                                                                                                                                           |
| 135 | [NOTIFY_GOTO_FUTURE_PAST](GotoFuturePast.md)       |                                                                                                                                                           |
| 136 | [NOTIFY_BOSS_END](BossEnd.md)                      |                                                                                                                                                           |
| 137 | [NOTIFY_SPECIAL_END](SpecialEnd.md)                |                                                                                                                                                           |
| 138 | [NOTIFY_DEBUGPRINT](DebugPrint.md)                 | Has no effect in-game, but would have likely printed the given values to the console in debug builds of Sonic Origins.                                    |
| 139 | [NOTIFY_KILL_BOSS](KillBoss.md)                    |                                                                                                                                                           |
| 140 | [NOTIFY_TOUCH_EMERALD](TouchEmerald.md)            |                                                                                                                                                           |
| 141 | [NOTIFY_STATS_ENEMY](StatsEnemy.md)                |                                                                                                                                                           |
| 142 | [NOTIFY_STATS_CHARA_ACTION](StatsCharaAction.md)   |                                                                                                                                                           |
| 143 | [NOTIFY_STATS_RING](StatsRing.md)                  |                                                                                                                                                           |
| 144 | [NOTIFY_STATS_MOVIE](StatsMovie.md)                |                                                                                                                                                           |
| 145 | [NOTIFY_STATS_PARAM_1](StatsParam1.md)             |                                                                                                                                                           |
| 146 | [NOTIFY_STATS_PARAM_2](StatsParam2.md)             |                                                                                                                                                           |
| 147 | [NOTIFY_CHARACTER_SELECT](CharacterSelect.md)      | Opens Sonic Origins's character select menu, then sets `game.callbackResult` and `game.continueFlag` when the menu is closed.                             |
| 148 | [NOTIFY_SPECIAL_RETRY](SpecialRetry.md)            |                                                                                                                                                           |
| 149 | [NOTIFY_TOUCH_CHECKPOINT](TouchCheckpoint.md)      | Notifies Hedgehog Engine 2 that a Lamp Post/Star Post has been touched.                                                                                   |
| 150 | [NOTIFY_ACT_FINISH](ActFinish.md)                  |                                                                                                                                                           |
| 151 | [NOTIFY_1P_VS_SELECT](1PVSSelect.md)               |                                                                                                                                                           |
| 152 | [NOTIFY_CONTROLLER_SUPPORT](ControllerSupport.md)  | Opens the controller setup screen in the Nintendo Switch version of the game, then sets `game.callbackResult` based on the platform and controller count. |
| 153 | [NOTIFY_STAGE_RETRY](StageRetry.md)                |                                                                                                                                                           |
| 154 | [NOTIFY_SOUND_TRACK](SoundTrack.md)                |                                                                                                                                                           |
| 155 | [NOTIFY_GOOD_ENDING](GoodEnding.md)                |                                                                                                                                                           |
| 156 | [NOTIFY_BACK_TO_MAINMENU](BackToMainMenu.md)       |                                                                                                                                                           |
| 157 | [NOTIFY_LEVEL_SELECT_MENU](LevelSelectMenu.md)     |                                                                                                                                                           |
| 158 | [NOTIFY_PLAYER_SET](PlayerSet.md)                  |                                                                                                                                                           |
| 159 | [NOTIFY_EXTRAS_MODE](ExtrasMode.md)                |                                                                                                                                                           |
| 160 | [NOTIFY_SPIN_DASH_TYPE](SpindashType.md)           |                                                                                                                                                           |
| 161 | [NOTIFY_TIME_OVER](TimeOver.md)                    |                                                                                                                                                           |
| 162 | [NOTIFY_TIMEATTACK_MODE](TimeAttackMode.md)        |                                                                                                                                                           |
| 163 | [NOTIFY_STATS_BREAK_OBJECT](StatsBreakObject.md)   |                                                                                                                                                           |
| 164 | [NOTIFY_STATS_SAVE_FUTURE](StatsSaveFuture.md)     |                                                                                                                                                           |
| 165 | [NOTIFY_STATS_CHARA_ACTION2](StatsCharaAction2.md) |                                                                                                                                                           |