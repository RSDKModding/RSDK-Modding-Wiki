# EngineCallback

Sends a callback to the engine.

!!! note
    The names of each callback are not defined by the engine itself; they must be manually defined as aliases or global variables.

## Parameters
`Callback`

:   The index value of the callback.

## Return Value
Depends on the callback used.

## Syntax
```
EngineCallback(int Callback)
```

## Example
```
EngineCallback(CALLBACK_FINISHGAME_NOTIFY)
```

## Callbacks
| ID   | Callback                                      | Description                                                                                                                                                                                                                                  |
| ---- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0    | **CALLBACK_DISPLAYLOGOS**                     | In the Blit releases of Sonic CD, displays the splash screens.                                                                                                                                                                               |
| 1    | **CALLBACK_PRESS_START**                      | Notifies the backend that a button has been pressed on the title screen.                                                                                                                                                                     |
| 2    | **CALLBACK_TIMEATTACK_NOTIFY_ENTER**          | Notifies the backend that Time Attack mode has been entered.                                                                                                                                                                                 |
| 3    | **CALLBACK_TIMEATTACK_NOTIFY_EXIT**           | Notifies the backend that Time Attack mode has been exited.                                                                                                                                                                                  |
| 4    | **CALLBACK_FINISHGAME_NOTIFY**                | Notifies the backend that the game has been finished.                                                                                                                                                                                        |
| 5    | **CALLBACK_RETURNSTORE_SELECTED**             | Notifies the backend that "Return to Store" has been selected and closes the engine.                                                                                                                                                         |
| 6    | **CALLBACK_RESTART_SELECTED**                 | Reloads the current scene.                                                                                                                                                                                                                   |
| 7    | **CALLBACK_EXIT_SELECTED**                    | In the Blit releases of Sonic CD, closes the engine. In other versions of RSDKv3, loads the first scene in the Presentation stage list.                                                                                                      |
| 8    | **CALLBACK_BUY_FULL_GAME_SELECTED**           | Notifies the backend that "Buy Full Game" has been selected and closes the engine.                                                                                                                                                           |
| 9    | **CALLBACK_TERMS_SELECTED**                   | In the Blit releases of Sonic CD, shows the Help screen. In the mobile version of Sonic CD, shows the Terms & Conditions screen.                                                                                                             |
| 10   | **CALLBACK_PRIVACY_SELECTED**                 | In the Blit releases of Sonic CD, shows the Controls screen. In the mobile version of Sonic CD, shows the Privacy screen.                                                                                                                    |
| 11   | **CALLBACK_TRIAL_ENDED**                      | In the mobile version of Sonic CD, shows the Trial Ended screen if in trial mode. If not in trial mode, loads `http://www.sega.com` in a web browser.                                                                                        |
| 12   | **CALLBACK_SETTINGS_SELECTED**                | In the Blit releases of Sonic CD, shows the Settings screen. In the mobile version of Sonic CD, shows the Full Game Only screen if in trial mode. If not in trial mode, loads `http://www.sega.com/legal/terms_mobile.php` in a web browser. |
| 13   | **CALLBACK_PAUSE_REQUESTED**                  | Shows the pause screen, loading the hardcoded menu if the Dev Menu is disabled in the Blit releases of Sonic CD.                                                                                                                             |
| 14   | **CALLBACK_FULL_VERSION_ONLY**                | In the mobile version of Sonic CD, shows the Full Game Only screen.                                                                                                                                                                          |
| 15   | **CALLBACK_STAFF_CREDITS**                    | In the Blit releases of Sonic CD, shows the credits. In the mobile version of Sonic CD, loads `http://www.sega.com/legal/privacy_mobile.php` in a web browser.                                                                               |
| 16   | **CALLBACK_MOREGAMES**                        | In the mobile version of Sonic CD, shows the See More Games screen.                                                                                                                                                                          |
| 20   | **CALLBACK_SHOWREMOVEADS**                    | In the mobile version of Sonic CD, shows the Remove Ads screen.                                                                                                                                                                              |
| 100  | **CALLBACK_AGEGATE**                          | In the mobile version of Sonic CD, shows the Age Gate screen and sets `HaveLoadAllGDPRValue` to `1` when it's closed.                                                                                                                        |
| 101  | **CALLBACK_STARTGAME**                        | In the mobile version of Sonic CD, sets the default lives count and whether the user is a "premium user".                                                                                                                                    |
| 104  | **CALLBACK_NONE_104**                         | Unknown callback.                                                                                                                                                                                                                            |
| 107  | **CALLBACK_SHOWURL**                          | In the mobile version of Sonic CD, loads `https://www.sega.com` in a web browser.                                                                                                                                                            |
| 997  | **CALLBACK_SHOWMENU_2**                       | In the Sega Forver version of Sonic CD, shows a menu.                                                                                                                                                                                        |
| 998  | **CALLBACK_SHOWHELPCENTER**                   | In the Sega Forver version of Sonic CD, shows the Help Center.                                                                                                                                                                               |
| 999  | **CALLBACK_CHANGEADSTYPE**                    | In the Sega Forver version of Sonic CD, shows the Change Ads Type screen.                                                                                                                                                                    |
| 1000 | **CALLBACK_NONE_1000**                        | Unknown callback.                                                                                                                                                                                                                            |
| 1001 | **CALLBACK_NONE_1001**                        | Unknown callback.                                                                                                                                                                                                                            |
| 1002 | **CALLBACK_NONE_1006**                        | Unknown callback.                                                                                                                                                                                                                            |
| 1003 | **CALLBACK_ONSHOWINTERSTITIAL**               | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is shown.                                                                                                                                                  |
| 1004 | **CALLBACK_ONSHOWBANNER**                     | In the Sega Forver version of Sonic CD, notifies the backend that a banner is shown.                                                                                                                                                         |
| 1005 | **CALLBACK_ONSHOWBANNER_PAUSESTART**          | In the Sega Forver version of Sonic CD, notifies the backend that a banner is in an animation.                                                                                                                                               |
| 1006 | **CALLBACK_ONHIDEBANNER**                     | In the Sega Forver version of Sonic CD, notifies the backend that a banner is hidden.                                                                                                                                                        |
| 1007 | **CALLBACK_REMOVEADSBUTTON_FADEOUT**          | In the Sega Forver version of Sonic CD, notifies the backend that the Remove Ads button is fading out.                                                                                                                                       |
| 1008 | **CALLBACK_REMOVEADSBUTTON_FADEIN**           | In the Sega Forver version of Sonic CD, notifies the backend that the Remove Ads button is fading in.                                                                                                                                        |
| 1009 | **CALLBACK_ONSHOWINTERSTITIAL_2**             | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is shown.                                                                                                                                                  |
| 1010 | **CALLBACK_ONSHOWINTERSTITIAL_3**             | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is shown.                                                                                                                                                  |
| 1011 | **CALLBACK_ONSHOWINTERSTITIAL_4**             | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is shown.                                                                                                                                                  |
| 1012 | **CALLBACK_ONVISIBLEGRIDBTN_1**               | In the Sega Forver version of Sonic CD, notifies the backend that a grid button is visible.                                                                                                                                                  |
| 1013 | **CALLBACK_ONVISIBLEGRIDBTN_0**               | In the Sega Forver version of Sonic CD, notifies the backend that a grid button is visible and disables high res mode.                                                                                                                       |
| 1014 | **CALLBACK_ONSHOWINTERSTITIAL_PAUSEDURATION** | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is in an animation.                                                                                                                                        |
| 1015 | **CALLBACK_SHOWCOUNTDOWNMENU**                | In the Sega Forver version of Sonic CD, shows a countdown menu.                                                                                                                                                                              |
| 1016 | **CALLBACK_ONVISIBLEMAINMENU_1**              | In the Sega Forver version of Sonic CD, notifies the backend that the main menu is visible.                                                                                                                                                  |
| 1017 | **CALLBACK_ONVISIBLEMAINMENU_0**              | In the Sega Forver version of Sonic CD, notifies the backend that the main menu is visible.                                                                                                                                                  |
| 1018 | **CALLBACK_ONSHOWREWARDADS**                  | In the Sega Forver version of Sonic CD, plays an ad and sets `RewardAdCallback` to `1`.                                                                                                                                                      |
| 1019 | **CALLBACK_ONSHOWBANNER_2**                   | In the Sega Forver version of Sonic CD, notifies the backend that a banner is shown.                                                                                                                                                         |
| 1020 | **CALLBACK_ONSHOWINTERSTITIAL_5**             | In the Sega Forver version of Sonic CD, notifies the backend that an interstitial is shown.                                                                                                                                                  |
| 4097 | **CALLBACK_SET1P**                            | Sets `activePlayerCount` to `1`. **Decomp only.**                                                                                                                                                                                            |
| 4098 | **CALLBACK_SET2P**                            | Sets `activePlayerCount` to `2`. **Decomp only.**                                                                                                                                                                                            |

In Sonic Origins, you can also call NotifyCallback callbacks with this function. For more information, including a list of usable callbacks, see [this page](/Games/SonicOrigins/Documentation/NotifyCallback/README.md).
