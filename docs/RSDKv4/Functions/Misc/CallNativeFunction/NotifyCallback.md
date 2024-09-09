# NotifyCallback

## Description
Sends the given callback to communicate to Hedgehog Engine 2.

Unlike native functions, NotifyCallback callbacks do not have their IDs automatically set by the engine; they must be manually specified instead. However, Sonic Team still elected to define callback names as global varaiables.

This native function only exists in Sonic Origins.

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
| ID  | Callback                                                          |
| --- | ----------------------------------------------------------------- |
| 128 | [NOTIFY_DEATH_EVENT](NotifyCallback/DeathEvent.md)                |
| 129 | [NOTIFY_TOUCH_SIGNPOST](NotifyCallback/TouchSignPost.md)          |
| 130 | [NOTIFY_HUD_ENABLE](NotifyCallback/HUDEnable.md)                  |
| 131 | [NOTIFY_ADD_COIN](NotifyCallback/AddCoin.md)                      |
| 132 | [NOTIFY_KILL_ENEMY](NotifyCallback/KillEnemy.md)                  |
| 133 | [NOTIFY_SAVESLOT_SELECT](NotifyCallback/SaveSlotSelect.md)        |
| 134 | [NOTIFY_FUTURE_PAST](NotifyCallback/FuturePast.md)                |
| 135 | [NOTIFY_GOTO_FUTURE_PAST](NotifyCallback/GotoFuturePast.md)       |
| 136 | [NOTIFY_BOSS_END](NotifyCallback/BossEnd.md)                      |
| 137 | [NOTIFY_SPECIAL_END](NotifyCallback/SpecialEnd.md)                |
| 138 | [NOTIFY_DEBUGPRINT](NotifyCallback/DebugPrint.md)                 |
| 139 | [NOTIFY_KILL_BOSS](NotifyCallback/KillBoss.md)                    |
| 140 | [NOTIFY_TOUCH_EMERALD](NotifyCallback/TouchEmerald.md)            |
| 141 | [NOTIFY_STATS_ENEMY](NotifyCallback/StatsEnemy.md)                |
| 142 | [NOTIFY_STATS_CHARA_ACTION](NotifyCallback/StatsCharaAction.md)   |
| 143 | [NOTIFY_STATS_RING](NotifyCallback/StatsRing.md)                  |
| 144 | [NOTIFY_STATS_MOVIE](NotifyCallback/StatsMovie.md)                |
| 145 | [NOTIFY_STATS_PARAM_1](NotifyCallback/StatsParam1.md)             |
| 146 | [NOTIFY_STATS_PARAM_2](NotifyCallback/StatsParam2.md)             |
| 147 | [NOTIFY_CHARACTER_SELECT](NotifyCallback/CharacterSelect.md)      |
| 148 | [NOTIFY_SPECIAL_RETRY](NotifyCallback/SpecialRetry.md)            |
| 149 | [NOTIFY_TOUCH_CHECKPOINT](NotifyCallback/TouchCheckpoint.md)      |
| 150 | [NOTIFY_ACT_FINISH](NotifyCallback/ActFinish.md)                  |
| 151 | [NOTIFY_1P_VS_SELECT](NotifyCallback/1PVSSelect.md)               |
| 152 | [NOTIFY_CONTROLLER_SUPPORT](NotifyCallback/ControllerSupport.md)  |
| 153 | [NOTIFY_STAGE_RETRY](NotifyCallback/StageRetry.md)                |
| 154 | [NOTIFY_SOUND_TRACK](NotifyCallback/SoundTrack.md)                |
| 155 | [NOTIFY_GOOD_ENDING](NotifyCallback/GoodEnding.md)                |
| 156 | [NOTIFY_BACK_TO_MAINMENU](NotifyCallback/BackToMainMenu.md)       |
| 157 | [NOTIFY_LEVEL_SELECT_MENU](NotifyCallback/LevelSelectMenu.md)     |
| 158 | [NOTIFY_PLAYER_SET](NotifyCallback/PlayerSet.md)                  |
| 159 | [NOTIFY_EXTRAS_MODE](NotifyCallback/ExtrasMode.md)                |
| 160 | [NOTIFY_SPIN_DASH_TYPE](NotifyCallback/SpindashType.md)           |
| 161 | [NOTIFY_TIME_OVER](NotifyCallback/TimeOver.md)                    |
| 162 | [NOTIFY_TIMEATTACK_MODE](NotifyCallback/TimeAttackMode.md)        |
| 163 | [NOTIFY_STATS_BREAK_OBJECT](NotifyCallback/StatsBreakObject.md)   |
| 164 | [NOTIFY_STATS_SAVE_FUTURE](NotifyCallback/StatsSaveFuture.md)     |
| 165 | [NOTIFY_STATS_CHARA_ACTION2](NotifyCallback/StatsCharaAction2.md) |