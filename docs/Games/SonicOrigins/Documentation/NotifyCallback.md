# NotifyCallback

NotifyCallback is a function in [Sonic Origins](../README.md) that handles communicating between [RSDKv5U](/RSDKv5) and [Hedgehog Engine 2](../HedgehogEngine2.md).

## Usage
=== "v3"

    Set `game.callbackParam0`, `game.callbackParam1`, and `game.callbackParam2` to the needed parameters (unused parameters do not need to be set), then call [EngineCallback()](/RSDKv3/RetroScript/Functions/Misc/EngineCallback) with `Callback` set to the [appropriate callback ID](#callbacks).

    ``` title="Examples"
    EngineCallback(NOTIFY_TOUCH_SIGNPOST)

    game.callbackParam0 = 1
    game.callbackParam1 = 3
    game.callbackParam2 = 0x03
    EngineCallback(NOTIFY_SPECIAL_RETRY)
    ```

    !!! note
        The names of each callback are not defined by the engine itself. Instead, the names and their corresponding IDs are defined as global variables in Sonic CD's GameConfig.

=== "v4"

    Call [CallNativeFunction2() or CallNativeFunction4()](/RSDKv4/RetroScript/Functions/Misc/CallNativeFunction) (depending on the amount of parameters needed) with `callback` set to [NotifyCallback](/RSDKv4/RetroScript/Functions/Misc/CallNativeFunction/NotifyCallback) and `param1` set to the [appropriate callback ID](#callbacks). Set `param2`, `param3`, and `param4` to the needed parameters. Unused parameters should be set to `0`.

    ``` title="Examples"
    CallNativeFunction2(NotifyCallback, NOTIFY_TOUCH_SIGNPOST, 0)
    CallNativeFunction4(NotifyCallback, NOTIFY_SPECIAL_RETRY, 1, 3, 0x03)
    ```

    !!! note
        The names of each callback are not defined by the engine itself. Instead, the names and their corresponding IDs are defined as global variables in Sonic 1 and 2's GameConfigs.

=== "v5"

    Call [NotifyCallback()](/RSDKv5/GameAPI/Functions/Misc/NotifyCallback) with `callback` set to the [appropriate callback ID](#callbacks) and `param1`, `param2`, and `param3` set to the needed parameters. Unused parameters should be set to `0`.

    ``` c++ title="Examples"
    NotifyCallback(NOTIFY_TOUCH_SIGNPOST, 0, 0, 0);
    NotifyCallback(NOTIFY_SPECIAL_RETRY, 1, 3, 0x03);
    ```

## Callbacks

### ID 128 - NOTIFY_DEATH_EVENT { id="notify-death-event" }

Notifies of a Player death.

*No parameters*

### ID 129 - NOTIFY_TOUCH_SIGNPOST { id="notify-touch-signpost" }

Notifies when a Sign Post has been touched.

*No parameters*

### ID 130 - NOTIFY_HUD_ENABLE { id="notify-hud-enable" }

Seemingly has no effect. Presumably replaced with the `game.hudEnable` global variable. 

### ID 131 - NOTIFY_ADD_COIN { id="notify-add-coin" }

Awards the player the given amount of coins.

`param1`

:   The number of coins to give the player.

### ID 132 - NOTIFY_KILL_ENEMY { id="notify-kill-enemy" }

Notifies that an enemy has been killed.

`param1`

:   The attribute (method) an enemy was killed with, if relevant to a mission being played.

#### Kill Enemy Attributes
  - `0` - KILL_ENEMY_ATTR_DEFAULT
  - `1` - KILL_ENEMY_ATTR_ANIMALPRISON
  - `2` - KILL_ENEMY_ATTR_SPINDASH
  - `3` - KILL_ENEMY_ATTR_GLIDING
  - `4` - KILL_ENEMY_ATTR_RINGVACUUM (Lightning Shield)
  - `5` - KILL_ENEMY_ATTR_BALLOON
  - `6` - KILL_ENEMY_ATTR_FIREDASH (Fire Shield)

### ID 133 - NOTIFY_SAVESLOT_SELECT { id="notify-saveslot-select" }

Notifies that a save has been selected in the save select.

`param1`

:   The save slot selected.

### ID 134 - NOTIFY_FUTURE_PAST { id="notify-future-past" }

Notifies of the time period that is being or has been traveled to.

`param1`

:   The new time period.

### ID 135 - NOTIFY_GOTO_FUTURE_PAST { id="notify-goto-future-past" }

Notifies of the time period that is being traveled to. Unlike [NOTIFY_FUTURE_PAST](#notify-future-past), this callback should be called when loading the stage.

`param1`

:   The new time period.

### ID 136 - NOTIFY_BOSS_END { id="notify-boss-end" }

Notifies that a boss fight is over.

`param1`

:   Unknown, but usually set to `1`/`true`.

### ID 137 - NOTIFY_SPECIAL_END { id="notify-special-end" }

Seemingly has no effect.

### ID 138 - NOTIFY_DEBUGPRINT { id="notify-debugprint" }

Has no effect in-game, but would have likely printed the given values to the console in debug builds of the game.

### ID 139 - NOTIFY_KILL_BOSS { id="notify-kill-boss" }

Notifies that a boss has been defeated.

*No parameters*

### ID 140 - NOTIFY_TOUCH_EMERALD { id="notify-touch-emerald" }

Notifies that a Chaos/Super Emerald or Time Stone has been collected. This callback is typically ran when the emerald jingle plays.

*No parameters*

### ID 141 - NOTIFY_STATS_ENEMY { id="notify-stats-enemy" }

Reports badnik-related statistics.

`param1`

:   The amount of total badniks destroyed.

`param2`

:   The amount of badniks destroyed using the Spin Dash.

`param3`

:   The amount of a specific badnik destroyed (Motobugs in Sonic 1, Buzzbombers in Sonic 2, Cyclones in Sonic 3 & Knuckles). Unused in Sonic CD.

### ID 142 - NOTIFY_STATS_CHARA_ACTION { id="notify-stats-chara-action" }

Reports statistics related to player characters.

`param1`

:   Whether the player is transforming into their Super or Hyper form.

`param2`

:   Whether the player is using Tails' flight.

### ID 143 - NOTIFY_STATS_RING { id="notify-stats-ring" }

Reports ring-related statistics.

`param1`

:   The amount of rings player 1 currently has.

### ID 144 - NOTIFY_STATS_MOVIE { id="notify-stats-movie" }

Unlocks the current game's ending in the Museum.

`param1`

:   Unknown, but usually set to `1`/`true`.

### ID 145 - NOTIFY_STATS_PARAM_1 { id="notify-stats-param-1" }

Reports statistics tied to achievements and Museum unlocks.

`param1`

:   Whether the following condition has been met based on the game:

- Sonic 1: The player grabbed an air bubble.
- Sonic CD: The player has time traveled.
- Sonic 2: The player got three Jackpots at a slot machine in Casino Night Zone.
- Sonic 3 & Knuckles: The player broke a monitor containing a Fire Shield.

`param2`

:   Whether the player broke a monitor containing a Lightning Shield. Only used in Sonic 3 & Knuckles.

`param3`

:   Whether the player broke a monitor containing a Bubble Shield. Only used in Sonic 3 & Knuckles.

### ID 146 - NOTIFY_STATS_PARAM_2 { id="notify-stats-param-2" }

Notifies that all Chaos Emeralds or Time Stones have been collected. Note that this does not include the Super Emeralds in Sonic 3 & Knuckles.

*No parameters*

### ID 147 - NOTIFY_CHARACTER_SELECT { id="notify-character-select" }

Opens the character select menu. If the menu is backed out of without selecting a save slot, `game.callbackResult` is set to `0`; otherwise, it's set to `1`. If the selected save slot is an existing save, `game.continueFlag` is set to `1`.

`param1`

:   If true, skips the character select and automatically loads the save slot for the current character.

### ID 148 - NOTIFY_SPECIAL_RETRY { id="notify-special-retry" }

Opens the Special Stage retry screen. If the player chooses not to, `game.callbackResult` is set to `0`.

`param1`

:   Whether or not the retry screen should be skipped (i.e. the player completed the Special Stage).

`param2`

:   The ID of the current Special Stage.

`param3`

:   Seemingly unused, but usually set to the player's emerald count.

### ID 149 - NOTIFY_TOUCH_CHECKPOINT { id="notify-touch-checkpoint" }

Notifies when a Lamp Post or Star Post has been touched.

*No parameters*

### ID 150 - NOTIFY_ACT_FINISH { id="notify-act-finish" }

Notifies when an act has been completed.

`param1`

:   Whether or not the act has been skipped, such as falling into the pit that leads to Hidden Palace Zone in Mystic Cave Zone Act 2.

### ID 151 - NOTIFY_1P_VS_SELECT { id="notify-1p-vs-select" }

It's not entirely clear what this callback is for, but it seems to be related to whether the player chose 1 PLAYER or 2 PLAYER VS in Sonic 2's title screen.

`param1`

:   Set to `0` for 1 PLAYER or `1` for 2 PLAYER VS.

### ID 152 - NOTIFY_CONTROLLER_SUPPORT { id="notify-controller-support" }

Opens the controller setup screen in the Nintendo Switch version of the game. If not on the Nintendo Switch or there is only one controller connected when the screen is closed, `game.callbackResult` is set to `0`; otherwise, it's set to `1`.

*No parameters*

### ID 153 - NOTIFY_STAGE_RETRY { id="notify-stage-retry" }

Opens the stage retry screen for My Data & Ranking mode.

`param1`

:   Set to `0` for the regular retry screen (player death) or anything else to show the current and best time (stage completed).

`param2`

:   The current stage ID.

### ID 154 - NOTIFY_SOUND_TRACK { id="notify-sound-track" }

Reports the new soundtrack setting selected.

`param1`

:   The soundtrack setting to use (`0` for JP, `1` for US).

### ID 155 - NOTIFY_GOOD_ENDING { id="notify-good-ending" }

Notifies that a good ending has been achieved.

*No parameters*

### ID 156 - NOTIFY_BACK_TO_MAINMENU { id="notify-back-to-mainmenu" }

Prompts the player if they'd like to return to the main menu.

`param1`

:   Seemingly unused, but sometimes set to `1`.

### ID 157 - NOTIFY_LEVEL_SELECT_MENU { id="notify-level-select-menu" }

Reports whether the player has visited a level select menu.

`param1`

:   Whether the player has visited a level select menu.

### ID 158 - NOTIFY_PLAYER_SET { id="notify-player-set" }

Reports the character the player should be set to.

`param1`

:   The ID of the character.

`param2`

:   In Sonic 3 & Knuckles, the save slot ID to use (`-1` for the level select). In other games, whether a sidekick should be present.

`param3`

:   Whether the player is starting a new game. Only used in Sonic 3 & Knuckles.

### ID 159 - NOTIFY_EXTRAS_MODE { id="notify-extras-mode" }

Reports whether the player is in the Extras menu.

`param1`

:   Whether the player is in the Extras menu.

### ID 160 - NOTIFY_SPIN_DASH_TYPE { id="notify-spin-dash-type" }

Reports the new Spin Dash Type setting selected.

`param1`

:   The Spin Dash type to use (`0` for Genesis, `1` for Original).

### ID 161 - NOTIFY_TIME_OVER { id="notify-time-over" }

Notifies that a Game Over has been achieved. Note that Sonic Origins uses a different method of differentiating a Game Over from a Time Over than usual.

`param1`

:   Whether an actual Time Over has been achieved.

### ID 162 - NOTIFY_TIMEATTACK_MODE { id="notify-timeattack-mode" }

Reports whether the player is in the Time Attack menu.

`param1`

:   Whether the player is in the Time Attack menu.

### ID 163 - NOTIFY_STATS_BREAK_OBJECT { id="notify-stats-break-object" }

!!! note
    This callback was added in version 2.0.0.

Reports statistics related to stage objects.

`param1`

:   If set to `0`, the player broke a Metal Sonic projector; if set to `1`, the player destroyed the Eggman statue in Wacky Workbench Zone Act 1.

`param2`

:   The character ID. Note that Amy uses ID `3` for this rather than `5`.

### ID 164 - NOTIFY_STATS_SAVE_FUTURE { id="notify-stats-break-object" }

!!! note
    This callback was added in version 2.0.0.

Notifies that the player made a good future in an act.

*No parameters*

### ID 165 - NOTIFY_STATS_CHARA_ACTION2 { id="notify-stats-chara-action2" }

!!! note
    This callback was added in version 2.0.0.

Reports statistics related to player characters.

`param1`

:   Whether the player is using Knuckles' glide (`1`) or wall climb (`2`). Set to `0` for neither.

`param2`

:   Whether the player is using Amy's Hammer Jump.

### ID 1000 - NOTIFY_1000 { id="notify-1000" }

Unknown callback.

### ID 1001 - NOTIFY_1001 { id="notify-1001" }

Unknown callback.

### ID 1002 - NOTIFY_1002 { id="notify-1002" }

Unknown callback.

### ID 1003 - NOTIFY_PLAYER_SAVED_VALUES { id="notify-player-saved-values" }

Records the player's current score.

`param1`

:   The score to record.

### ID 1004 - NOTIFY_1004 { id="notify-1004" }

Unknown callback.

### ID 1005 - NOTIFY_1005 { id="notify-1005" }

Unknown callback.

### ID 1006 - NOTIFY_TITLECARD_INIT { id="notify-titlecard-init" }

Notifies that the title card is being displayed.

*No parameters*

### ID 1007 - NOTIFY_1007 { id="notify-1007" }

Displays an error message for trying to access a save file with DLC content without said DLC installed.

*No parameters*
