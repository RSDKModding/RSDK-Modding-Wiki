# Sonic Origins Audio

Rather than storing or playing audio in the Retro Engine, [Sonic Origins](../README.md) uses [CRIWARE](https://www.criware.com/en/index.html) middleware to play music and sound effects. To achieve this, RSDK communicates with [Hedgehog Engine 2](../HedgehogEngine2.md) by passing the filename of the audio file attempting to be played to the game's Reflections parameters, stored in the `retro_rfl_param.rfl` file in `raw/rfl/rfl_resident.pac`. From there, HE2 plays the audio file associated with the given filename, if one exists.

This page contains tables listing all of the audio files in Sonic Origins' ACB/AWB audio packs, as well as their associated RSDK filenames in the RFL parameters.

!!! note
    Entries with a blank RSDK filename are unused or only used in the Museum.

!!! note
    The file extensions in the RSDK filenames for sound effects are not present in the actual Reflections parameters. They have been added in this page for the sake of clarity.

## Keycodes
CRIWARE audio packs are encrypted, and require a keycode unique to each pack in order to decrypt them and extract/modify their contents. Here is a table of all audio packs for Sonic Origins and their respective keycodes.

| CRIWARE Audio Pack     | Keycode              |
| ---------------------- | -------------------- |
| HITE_missions.acb/awb  | 7247603164247025552  |
| HITE_music.acb/awb     | 11538393028480221496 |
| HITE_sfx.acb           | 1441441318033510872  |
| Music03_S3K.acb/awb    | 7536411022915609276  |
| Music09_Museum.acb/awb | 11072514307527781104 |
| Music10_DLC.acb/awb    | 8015507015573856737  |
| SCD_music.acb/awb      | 15760211266427465005 |
| SCD_sfx.acb            | 13112347560991493607 |
| STH1_music.acb/awb     | 6005974353133017519  |
| STH1_sfx.acb           | 11064953427723590053 |
| STH2_music.acb/awb     | 7014663803770805356  |
| STH2_sfx.acb           | 1290919142773486504  |
| STH3_sfx.acb           | 17938273131493627783 |

## Sonic 1 Music (STH1_music.awb) { id="sonic-1-music" }
| ID | CRIWARE Audio Name | RSDK Filename         |
| -- | ------------------ | --------------------- |
| 0  | 88_1up             | Global/1Up.wav[^1]    |
| 1  | 8A_TitleScreen     | Titlescreen.ogg       |
| 2  | 8B_Ending          | Ending.ogg            |
| 3  | 8E_ActComplete     | ActComplete.ogg       |
| 4  | 8F_GameOver        | GameOver.ogg          |
| 5  | 90_Continue        | Continue.ogg          |
| 6  | 91_Credits         | Credits.ogg           |
| 7  | 81_z1_GreenHill    | GreenHill.ogg         |
| 8  | 82_z4_Labyrinth    | Labyrinth.ogg         |
| 9  | 83_z2_Marble       | Marble.ogg            |
| 10 | 84_z5_StarLight    | Starlight.ogg         |
| 11 | 85_z3_SpringYard   | SpringYard.ogg        |
| 12 | 86_z6_ScrapBrain   | ScrapBrain.ogg        |
| 13 | 87_Invincibility   | Invincibility.ogg     |
| 14 | 89_SpecialStage    | Specialstage.ogg      |
| 15 | 8C_Boss            | Boss.ogg              |
| 16 | 8D_Final           | Final.ogg             |
| 17 | 92_Drowning        | Drowning.ogg          |
| 18 | 93_ChaosEmerald    | Stage/Emerald.wav[^2] |

### Fast Music
All fast (Speed Shoes) music plays the original music at 1.2x speed.

| CRIWARE Audio Name | RSDK Filename       |
| ------------------ | ------------------- |
| 81_z1_GreenHill    | GreenHill_F.ogg     |
| 82_z4_Labyrinth    | Labyrinth_F.ogg     |
| 83_z2_Marble       | Marble_F.ogg        |
| 84_z5_StarLight    | Starlight_F.ogg     |
| 85_z3_SpringYard   | SpringYard_F.ogg    |
| 86_z6_ScrapBrain   | ScrapBrain_F.ogg    |
| 87_Invincibility   | Invincibility_F.ogg |

### Unused Entries
These entries exist in the RFL parameters but are duplicates of others or have no associated audio in the audio packs.

| CRIWARE Audio Name | RSDK Filename    |
| ------------------ | ---------------- |
| _BGM_MainMenu.ogg  | MainMenu.ogg     |
| _BGM_MenuIntro.ogg | MenuIntro.ogg    |
| 89_SpecialStage    | SpecialStage.ogg |

## Sonic CD Music (SCD_music.awb) { id="sonic-cd-music" }
| ID | CRIWARE Audio Name                       | RSDK Filename        |
| -- | ---------------------------------------- | -------------------- |
| 0  | DA03_R1A_J                               | JP/R1A.ogg           |
| 1  | DA04_R1C_J                               | JP/R1C.ogg           |
| 2  | DA05_R1D_J                               | JP/R1D.ogg           |
| 3  | DA06_R3A_J                               | JP/R3A.ogg           |
| 4  | DA07_R3C_J                               | JP/R3C.ogg           |
| 5  | DA08_R3D_J                               | JP/R3D.ogg           |
| 6  | DA09_R4A_J                               | JP/R4A.ogg           |
| 7  | DA10_R4C_J                               | JP/R4C.ogg           |
| 8  | DA11_R4D_J                               | JP/R4D.ogg           |
| 9  | DA12_R5A_J                               | JP/R5A.ogg           |
| 10 | DA13_R5C_J                               | JP/R5C.ogg           |
| 11 | DA14_R5D_J                               | JP/R5D.ogg           |
| 12 | DA15_R6A_J                               | JP/R6A.ogg           |
| 13 | DA16_R6C_J                               | JP/R6C.ogg           |
| 14 | DA17_R6D_J                               | JP/R6D.ogg           |
| 15 | DA18_R7A_J                               | JP/R7A.ogg           |
| 16 | DA19_R7C_J                               | JP/R7C.ogg           |
| 17 | DA20_R7D_J                               | JP/R7D.ogg           |
| 18 | DA21_R8A_J                               | JP/R8A.ogg           |
| 19 | DA22_R8C_J                               | JP/R8C.ogg           |
| 20 | DA23_R8D_J                               | JP/R8D.ogg           |
| 21 | DA24_Boss_J                              | JP/Boss.ogg          |
| 22 | DA25_FinalBoss_J                         | JP/FinalBoss.ogg     |
| 23 | DA32_SpecialStage_J                      | JP/SpecialStage.ogg  |
| 24 | DA33_DAGarden_J                          | JP/DAGarden.ogg      |
| 25 | PCM10_R1B                                | R1B.ogg              |
| 26 | PCM11_R3B                                | R3B.ogg              |
| 27 | PCM12_R4B                                | R4B.ogg              |
| 28 | PCM13_R5B                                | R5B.ogg              |
| 29 | PCM14_R6B                                | R6B.ogg              |
| 30 | PCM15_R7B                                | R7B.ogg              |
| 31 | PCM16_R8B                                | R8B.ogg              |
| 32 | DA03_R1A_E                               | US/R1A.ogg           |
| 33 | DA04_R1C_E                               | US/R1C.ogg           |
| 34 | DA05_R1D_E                               | US/R1D.ogg           |
| 35 | DA06_R3A_E                               | US/R3A.ogg           |
| 36 | DA07_R3C_E                               | US/R3C.ogg           |
| 37 | DA08_R3D_E                               | US/R3D.ogg           |
| 38 | DA09_R4A_E                               | US/R4A.ogg           |
| 39 | DA10_R4C_E                               | US/R4C.ogg           |
| 40 | DA11_R4D_E                               | US/R4D.ogg           |
| 41 | DA12_R5A_E                               | US/R5A.ogg           |
| 42 | DA13_R5C_E                               | US/R5C.ogg           |
| 43 | DA14_R5D_E                               | US/R5D.ogg           |
| 44 | DA15_R6A_E                               | US/R6A.ogg           |
| 45 | DA16_R6C_E                               | US/R6C.ogg           |
| 46 | DA17_R6D_E                               | US/R6D.ogg           |
| 47 | DA18_R7A_E                               | US/R7A.ogg           |
| 48 | DA19_R7C_E                               | US/R7C.ogg           |
| 49 | DA20_R7D_E                               | US/R7D.ogg           |
| 50 | DA21_R8A_E                               | US/R8A.ogg           |
| 51 | DA22_R8C_E                               | US/R8C.ogg           |
| 52 | DA23_R8D_E                               | US/R8D.ogg           |
| 53 | DA24_Boss_E                              | US/Boss.ogg          |
| 54 | DA25_FinalBoss_E                         | US/FinalBoss.ogg     |
| 55 | DA32_SpecialStage_E                      | US/SpecialStage.ogg  |
| 56 | DA26_TitleScreen_J                       | JP/TitleScreen.ogg   |
| 57 | DA27_TitleScreen_J                       |                      |
| 58 | DA28_ZoneComplete_J                      | JP/ZoneComplete.ogg  |
| 59 | DA29_SpeedShoes_J                        | JP/SpeedShoes.ogg    |
| 60 | DA30_Invincibility_J                     | JP/Invincibility.ogg |
| 61 | DA31_GameOver_J                          | JP/GameOver.ogg      |
| 62 | DA26_TitleScreen_E<br>DA27_TitleScreen_E | US/TitleScreen.ogg   |
| 63 | DA28_ZoneComplete_E                      | US/ZoneComplete.ogg  |
| 64 | DA29_SpeedShoes_E                        | US/SpeedShoes.ogg    |
| 65 | DA30_Invincibility_E                     | US/Invincibility.ogg |
| 66 | DA31_GameOver_E                          | US/GameOver.ogg      |
| 67 | DA33_DAGarden_E                          | US/DAGarden.ogg      |
| 68 | SCD_MOV1_Opening_E                       |                      |
| 69 | SCD_MOV2_Ending_E                        |                      |
| 70 | SCD_MOV2_Ending                          |                      |
| 71 | SCD_MOV1_Opening                         |                      |
| 72 | RSDK_SCD_J---TimeAttack                  | JP/TimeAttack.ogg    |

## Sonic 2 Music (STH2_music.awb) { id="sonic-2-music" }
| ID | CRIWARE Audio Name | RSDK Filename     |
| -- | ------------------ | ----------------- |
| 0  | 02_EmeraldHill     | EmeraldHill.ogg   |
| 1  | 03_MysticCave2     | MysticCave2.ogg   |
| 2  | 04_OilOcean        | OilOcean.ogg      |
| 3  | 05_Metropolis      | Metropolis.ogg    |
| 4  | 06_HillTop         | HillTop.ogg       |
| 5  | 07_AquaticRuin     | AquaticRuin.ogg   |
| 6  | 08_CasinoNight2    | CasinoNight2.ogg  |
| 7  | 09_CasinoNight     | CasinoNight.ogg   |
| 8  | 0A_DeathEgg        | DeathEgg.ogg      |
| 9  | 0B_MysticCave      | MysticCave.ogg    |
| 10 | 0C_EmeraldHill2    | EmeraldHill2.ogg  |
| 11 | 0D_SkyChase        | SkyChase.ogg      |
| 12 | 0E_ChemicalPlant   | ChemicalPlant.ogg |
| 13 | 0F_WingFortress    | WingFortress.ogg  |
| 14 | 11_Options         | Options.ogg       |
| 15 | 12_SpecialStage    | SpecialStage.ogg  |
| 16 | 13_Boss            | Boss.ogg          |
| 17 | 14_FinalBoss       | FinalBoss.ogg     |
| 18 | 16_Super           | Super.ogg         |
| 19 | 17_Invincibility   | Invincibility.ogg |
| 20 | 01_Results         | Results.ogg       |
| 21 | 10_Extra           | Extra.ogg         |
| 22 | 15_Ending          | Ending.ogg        |
| 23 | 19_TitleScreen     | Titlescreen.ogg   |
| 24 | 1A_ActComplete     | ActComplete.ogg   |
| 25 | 1B_GameOver        | GameOver.ogg      |
| 26 | 1C_Continue        | Continue.ogg      |
| 27 | 1E_Credits         | Credits.ogg       |

!!! note
    Sonic 2 shares its 1-UP, Drowning, and Chaos Emerald jingles with Sonic 1, as the songs stored in `STH1_music.awb` are played in both games.

### Fast Music
All fast (Speed Shoes) music plays the original music at 1.2x speed.

| CRIWARE Audio Name | RSDK Filename       |
| ------------------ | ------------------- |
| 02_EmeraldHill     | EmeraldHill_F.ogg   |
| 03_MysticCave2     | MysticCave2_F.ogg   |
| 04_OilOcean        | OilOcean_F.ogg      |
| 05_Metropolis      | Metropolis_F.ogg    |
| 06_HillTop         | HillTop_F.ogg       |
| 07_AquaticRuin     | AquaticRuin_F.ogg   |
| 08_CasinoNight2    | CasinoNight2_F.ogg  |
| 09_CasinoNight     | CasinoNight_F.ogg   |
| 0A_DeathEgg        | DeathEgg_F.ogg      |
| 0B_MysticCave      | MysticCave_F.ogg    |
| 0C_EmeraldHill2    | EmeraldHill2_F.ogg  |
| 0E_ChemicalPlant   | ChemicalPlant_F.ogg |
| 0F_WingFortress    | WingFortress_F.ogg  |
| 17_Invincibility   | Invincibility_F.ogg |

### Unused Entries
These entries exist in the RFL parameters but are duplicates of others or have no associated audio in the audio packs.

| CRIWARE Audio Name | RSDK Filename   |
| ------------------ | --------------- |
| _BGM_MainMenu      | MainMenu.ogg    |
| _BGM_MenuIntro     | MenuIntro.ogg   |
| 19_TitleScreen     | TitleScreen.ogg |

## Sonic 3 & Knuckles Music (Music03_S3K.awb) { id="sonic-3-knuckles-music" }
| ID | CRIWARE Audio Name               | RSDK Filename                         |
| -- | -------------------------------- | ------------------------------------- |
| 0  | 3K2B_Chaos_Emerald               |                                       |
| 1  | 3K01_Angel_Island1               | 3K/AngelIsland1.ogg                   |
| 2  | 3K02_Angel_Island2               | 3K/AngelIsland2.ogg                   |
| 3  | 3K03_Hydro_City1                 | 3K/Hydrocity1.ogg                     |
| 4  | 3K04_Hydro_City2                 | 3K/Hydrocity2.ogg                     |
| 5  | 3K05_Marble_Garden1              | 3K/MarbleGarden1.ogg                  |
| 6  | 3K06_Marble_Garden2              | 3K/MarbleGarden2.ogg                  |
| 7  | 3K09_Flying_Battery1             | 3K/FlyingBattery1.ogg                 |
| 8  | 3K0A_Flying_Battery2             | 3K/FlyingBattery2.ogg                 |
| 9  | 3K0F_Mushroom_Hill1              | 3K/MushroomHill1.ogg                  |
| 10 | 3K10_Mushroom_Hill2              | 3K/MushroomHill2.ogg                  |
| 11 | 3K11_Sandopolis1                 | 3K/Sandopolis1.ogg                    |
| 12 | 3K12_Sandopolis2                 | 3K/Sandopolis2.ogg                    |
| 13 | 3K13_Lava_Reef                   | 3K/LavaReef1.ogg                      |
| 14 | 3K14_Hidden_Palace               | 3K/LavaReef2.ogg                      |
| 15 | 3K15_Sky_Sanctuary               | 3K/SkySanctuary.ogg                   |
| 16 | 3K16_Death_Egg1                  | 3K/DeathEgg1.ogg                      |
| 17 | 3K17_Death_Egg2                  | 3K/DeathEgg2.ogg                      |
| 18 | 3K18_Boss1                       | 3K/MiniBossK.ogg                      |
| 19 | 3K19_Boss2                       | 3K/Boss.ogg                           |
| 20 | 3K1A_Last_Boss                   | 3K/Doomsday.ogg<br>3K/TheDoomsday.ogg |
| 21 | 3K1B_Bonus_Stage_Glowing_Spheres | 3K/SphereBonus.ogg                    |
| 22 | 3K1C_Special_Stage               | 3K/SpecialStage.ogg                   |
| 23 | 3K1D_Bonus_Stage_Slot_Machine    | 3K/SlotBonus.ogg                      |
| 24 | 3K1E_Bonus_Stage_Gumball_Machine | 3K/GachaBonus.ogg                     |
| 25 | 3K20_2Pvs_Azure_Lake             | 3K/AzureLake.ogg                      |
| 26 | 3K21_2Pvs_Balloon_Park           | 3K/BalloonPark.ogg                    |
| 27 | 3K22_2Pvs_Desert_Palace          | 3K/DesertPalace.ogg                   |
| 28 | 3K23_2Pvs_Chrome_Gadget          | 3K/ChromeGadget.ogg                   |
| 29 | 3K24_2Pvs_Endless_Mine           | 3K/EndlessMine.ogg                    |
| 30 | 3K27_Game_Over                   | 3K/GameOver.ogg                       |
| 31 | 3K28_Continue                    | 3K/Continue.ogg                       |
| 32 | 3K29_Stage_Clear                 | 3K/ActClear.ogg                       |
| 33 | 3K2F_Menu_Data_Select            | 3K/Options.ogg                        |
| 34 | 3K31_Timer                       | 3K/Drowning.ogg                       |
| 35 | 3KF0_Title_STH3                  | 3K/TitleScreen3.ogg                   |
| 36 | 3KF1_1up_STH3                    | 3K/Medallion.ogg                      |
| 37 | 3KF2_Invincible_STH3             | 3K/Invincibility3.ogg                 |
| 38 | 3KF3_All_Clear_STH3              |                                       |
| 39 | 3KF7_Blue_Spheres                | 3K/Results.ogg                        |
| 40 | 3K1F-31_Knuckles_SK              | 3K/Knuckles3.ogg<br>3K/KnucklesK.ogg  |
| 41 | 3K25_Title_SK                    | 3K/TitleScreenK.ogg                   |
| 42 | 3K2A_1up_SK                      | 3K/1Up3.ogg                           |
| 43 | 3K2C_Invincible_SK               | 3K/InvincibilityK.ogg                 |
| 44 | 3K30_Final_Eggman                | 3K/FinalBoss.ogg                      |
| 45 | 3K32_All_Clear_SK                | 3K/Victory.ogg                        |
| 46 | 3K26_Credits_SK                  | 3K/Credits.ogg                        |
| 47 | 3KF4_New_Super_Sonic             | 3K/Super.ogg                          |
| 48 | 3K07_Carnival_Night1             | 3K/CarnivalNight1.ogg                 |
| 49 | 3K08_Carnival_Night2             | 3K/CarnivalNight2.ogg                 |
| 50 | 3K0B_Ice_Cap1                    | 3K/IceCap1.ogg                        |
| 51 | 3K0C_Ice_Cap2                    | 3K/IceCap2.ogg                        |
| 52 | 3K0D_Launch_Base1                | 3K/LaunchBase1.ogg                    |
| 53 | 3K0E_Launch_Base2                | 3K/LaunchBase2.ogg                    |
| 54 | 3K2D_2Pvs_Menu_SK                | 3K/Competition.ogg                    |
| 55 | 3KF5_Unused_Song                 | 3K/Perfect.ogg                        |
| 56 | 3KF6_Unused_Ending               | 3K/Ending.ogg                         |
| 57 | RSDK-3---Medallion               | 3K/Medallion.ogg                      |

### Fast Music
All fast (Speed Shoes) music plays the original music at 1.2x speed.

| CRIWARE Audio Name      | RSDK Filename                            |
| ----------------------- | ---------------------------------------- |
| 3K01_Angel_Island1      | 3K/F/AngelIsland1.ogg                    |
| 3K02_Angel_Island2      | 3K/F/AngelIsland2.ogg                    |
| 3K03_Hydro_City1        | 3K/F/Hydrocity1.ogg                      |
| 3K04_Hydro_City2        | 3K/F/Hydrocity2.ogg                      |
| 3K05_Marble_Garden1     | 3K/F/MarbleGarden1.ogg                   |
| 3K06_Marble_Garden2     | 3K/F/MarbleGarden2.ogg                   |
| 3K09_Flying_Battery1    | 3K/F/FlyingBattery1.ogg                  |
| 3K0A_Flying_Battery2    | 3K/F/FlyingBattery2.ogg                  |
| 3K0F_Mushroom_Hill1     | 3K/F/MushroomHill1.ogg                   |
| 3K10_Mushroom_Hill2     | 3K/F/MushroomHill2.ogg                   |
| 3K11_Sandopolis1        | 3K/F/Sandopolis1.ogg                     |
| 3K12_Sandopolis2        | 3K/F/Sandopolis2.ogg                     |
| 3K13_Lava_Reef          | 3K/F/LavaReef1.ogg                       |
| 3K14_Hidden_Palace      | 3K/F/LavaReef2.ogg                       |
| 3K15_Sky_Sanctuary      | 3K/F/SkySanctuary.ogg                    |
| 3K16_Death_Egg1         | 3K/F/DeathEgg1.ogg                       |
| 3K17_Death_Egg2         | 3K/F/DeathEgg2.ogg                       |
| 3K18_Boss1              | 3K/F/Miniboss.ogg<br>3K/F/MiniBossK.ogg  |
| 3K19_Boss2              | 3K/F/Boss.ogg                            |
| 3K1A_Last_Boss          | 3K/F/Doomsday.ogg                        |
| 3K20_2Pvs_Azure_Lake    | 3K/F/AzureLake.ogg                       |
| 3K21_2Pvs_Balloon_Park  | 3K/F/BalloonPark.ogg                     |
| 3K22_2Pvs_Desert_Palace | 3K/F/DesertPalace.ogg                    |
| 3K23_2Pvs_Chrome_Gadget | 3K/F/ChromeGadget.ogg                    |
| 3K24_2Pvs_Endless_Mine  | 3K/F/EndlessMine.ogg                     |
| 3KF2_Invincible_STH3    | 3K/F/Invincibility3.ogg                  |
| 3K1F-31_Knuckles_SK     | 3K/F/Knuckles3.ogg<br>3K/F/KnucklesK.ogg |
| 3K2C_Invincible_SK      | 3K/F/InvincibilityK.ogg                  |
| 3K30_Final_Eggman       | 3K/F/FinalBoss.ogg                       |
| 3K07_Carnival_Night1    | 3K/F/CarnivalNight1.ogg                  |
| 3K08_Carnival_Night2    | 3K/F/CarnivalNight2.ogg                  |
| 3K0B_Ice_Cap1           | 3K/F/IceCap1.ogg                         |
| 3K0C_Ice_Cap2           | 3K/F/IceCap2.ogg                         |
| 3K0D_Launch_Base1       | 3K/F/LaunchBase1.ogg                     |
| 3K0E_Launch_Base2       | 3K/F/LaunchBase2.ogg                     |

### Special Stage Speed-Up Music
| CRIWARE Audio Name | RSDK Filename         | Speed |
| ------------------ | --------------------- | ----- |
| 3K1C_Special_Stage | 3K/SpecialStageS0.ogg | 1.05x |
| 3K1C_Special_Stage | 3K/SpecialStageS1.ogg | 1.1x  |
| 3K1C_Special_Stage | 3K/SpecialStageS2.ogg | 1.15x |
| 3K1C_Special_Stage | 3K/SpecialStageS3.ogg | 1.2x  |

### Unused Entries
These entries exist in the RFL parameters but use RSDK filenames not used in Sonic 3 & Knuckles and/or have no associated audio in the audio packs.

| CRIWARE Audio Name        | RSDK Filename                |
| ------------------------- | ---------------------------- |
| 3K07_Carnival_Night1      | 3K/CarnivalNight1_Old1.ogg   |
| 3K08_Carnival_Night2      | 3K/CarnivalNight2_Old1.ogg   |
| 3K0B_Ice_Cap1             | 3K/IceCap1_Old1.ogg          |
| 3K0C_Ice_Cap2             | 3K/IceCap2_Old1.ogg          |
| 3K0D_Launch_Base1         | 3K/LaunchBase1_Old345426.ogg |
| 3K0E_Launch_Base2         | 3K/LaunchBase2_Old345426.ogg |
| 3K2D_2Pvs_Menu_SK         | 3K/Competition_Old1.ogg      |
| _BGM_Ending_Old107893.ogg | 3K/Ending_Old107893.ogg      |
| _BGM_Perfect_Old1.ogg     | 3K/Perfect_Old1.ogg          |
| 3KF4_New_Super_Sonic      | 3K/Hyper.ogg                 |
| 3K18_Boss1                | 3K/Miniboss.ogg              |
| 3K18_Boss1                | 3K/F/Miniboss.ogg            |
| _BGM_MiniBoss3.ogg        | 3K/MiniBoss3.ogg             |
| 3K19_Boss2                | 3K/StageBoss.ogg             |
| 3K19_Boss2                | 3K/F/StageBoss.ogg           |
| 3K1A_Last_Boss            | 3K/F/TheDoomsday.ogg         |
| Dummy                     | xxxxx                        |

## Common SFX (HITE_sfx.acb) { id="common-sfx" }
| ID | CRIWARE Audio Name | RSDK Filename  |
| -- | ------------------ | -------------- |
| 7  | SFX_07_SEGA        | Stage/Sega.wav |

!!! note
    Sonic 3 & Knuckles uses its own SEGA sound effect (`RSDK-3-Stage---Sega`) instead of this global one.

### Unused Entries
These entries exist in the RFL parameters for each game but use RSDK filenames not used in them.

| CRIWARE Audio Name | RSDK Filename    |
| ------------------ | ---------------- |
| SFX_01_cursor_move | Global/xxxxx.wav |
| SFX_02_ok          | Global/xxxxx.wav |
| SFX_03_cancel      | Global/xxxxx.wav |
| SFX_04_coin        | Global/xxxxx.wav |
| SFX_05_pause       | Global/xxxxx.wav |
| SFX_06_mirror      | Global/xxxxx.wav |
| SFX_07_SEGA        | Global/xxxxx.wav |
| SFX_08_aim         | Global/xxxxx.wav |
| SFX_09_map         | Global/xxxxx.wav |
| SFX_10_menu        | Global/xxxxx.wav |
| SFX_11_island_move | Global/xxxxx.wav |

## Sonic 1 SFX (STH1_sfx.acb) { id="sonic-1-sfx" }
| ID | CRIWARE Audio Name         | RSDK Filename              |
| -- | -------------------------- | -------------------------- |
| 0  | SFX_A0_Jump                | Global/Jump.wav            |
| 1  | SFX_A1_LampPost            | Global/LampPost.wav        |
| 2  | SFX_A2                     |                            |
| 3  | SFX_A3_BubbleBounce        |                            |
| 4  | SFX_A4_Skidding            | Global/Skidding.wav        |
| 5  | SFX_A5                     |                            |
| 6  | SFX_A6_Spike               | Global/Spike.wav           |
| 7  | SFX_A7_PushBlock           | Stage/PushBlock.wav        |
| 8  | SFX_A8_Exit_SS             | Stage/Exit_SS.wav          |
| 9  | SFX_AB                     |                            |
| 10 | SFX_AC_BossHit             | Stage/BossHit.wav          |
| 11 | SFX_AD_Breathing           | Stage/Breathing.wav        |
| 12 | SFX_AE_SmallFireball       | Stage/SmallFireball.wav    |
| 13 | SFX_AF_BlueShield          | Global/BlueShield.wav      |
| 14 | SFX_B0_Buzzsaw             | Stage/Buzzsaw.wav          |
| 15 | SFX_B1_ElectricArc         | Stage/ElectricArc.wav      |
| 16 | SFX_B2_Drowning            | Stage/Drowning.wav         |
| 17 | SFX_B3_FlameThrower        | Stage/FlameThrower.wav     |
| 18 | SFX_B4_Bumper              | Stage/Bumper.wav           |
| 19 | SFX_B5_Ring<br>SFX_CE_Ring | Global/Ring.wav            |
| 20 | SFX_B6_SpikesMove          | Global/SpikesMove.wav      |
| 21 | SFX_B7_LargeWall           | Stage/LargeWall.wav        |
| 22 | SFX_B8                     |                            |
| 23 | SFX_B9_LedgeBreak2         | Stage/LedgeBreak2.wav      |
| 24 | SFX_BA_GemBlockSS          | Stage/GemBlockSS.wav       |
| 25 | SFX_BB_FlappingDoor        | Stage/FlappingDoor.wav     |
| 26 | SFX_BC_Release             | Global/Release.wav         |
| 27 | SFX_BD_Crusher             | Stage/Crusher.wav          |
| 28 | SFX_BE_Rolling             | Global/Rolling.wav         |
| 29 | SFX_BF_Continue            | Stage/Continue.wav         |
| 30 | SFX_C0_BatbrainFly         | Stage/BatbrainFly.wav      |
| 31 | SFX_C2_DrownAlert          | Stage/DrownAlert.wav       |
| 32 | SFX_C3_SpecialRing         | Global/SpecialRing.wav     |
| 33 | SFX_C4_Explosion           | Global/Explosion.wav       |
| 34 | SFX_C5_ScoreTotal          | Global/ScoreTotal.wav      |
| 35 | SFX_C6_LoseRings           | Global/LoseRings.wav       |
| 36 | SFX_C7_ChainPull           | Stage/ChainPull.wav        |
| 37 | SFX_C8_FireBurn            | Stage/FireBurn.wav         |
| 38 | SFX_C9_BonusPoints         | Global/BonusPoints.wav     |
| 39 | SFX_CA_SpecialWarp         | Global/SpecialWarp.wav     |
| 40 | SFX_CB_BlockBreak          | Stage/BlockBreak.wav       |
| 41 | SFX_CC_Spring              | Global/Spring.wav          |
| 42 | SFX_CD_ScoreAdd            | Global/ScoreAdd.wav        |
| 43 | SFX_B5_Ring<br>SFX_CE_Ring | Global/Ring.wav            |
| 44 | SFX_CF_SignPost            | Global/SignPost.wav        |
| 45 | SFX_D0                     |                            |
| 46 | SFX_A9_RotateSS            | Stage/RotateSS.wav         |
| 47 | SFX_AA_WaterSplash         | Stage/WaterSplash.wav      |
| 48 | SFX_C1_Destroy             | Global/Destroy.wav         |
| 49 | RSDK-1---LedgeBreak        | Stage/LedgeBreak.wav       |
| 50 | RSDK-1---ButtonPress       | Stage/ButtonPress.wav      |
| 51 | RSDK-1---Transform         | Global/Transform.wav       |
| 52 | RSDK-1---Charge            | Global/Charge.wav          |
| 53 | RSDK-1---Hurt              | Global/Hurt.wav            |
| 54 | S011_S3E_FireShield        | Global/FireShield.wav      |
| 55 | S012_S3F_BubbleShield      | Global/BubbleShield.wav    |
| 56 | S014_S41_LightningShield   | Global/LightningShield.wav |
| 57 | S015_S42_InstaShield       | Global/InstaShield.wav     |
| 58 | S016_S43_FireDash          | Global/FireDash.wav        |
| 59 | S017_S44_BubbleBounce      | Global/BubbleBounce.wav    |
| 60 | S018_S45_LightningJump     | Global/LightningJump.wav   |
| 61 | RSDK-1---Catch             | Global/Catch.wav           |
| 62 | RSDK-1---Landing           | Global/Landing.wav         |
| 62 | RSDK-1---Event             | Global/Event.wav           |
| 63 | RSDK-1---Sliding           | Global/Sliding.wav         |
| 64 | RSDK-1---Flying            | Global/Flying.wav          |
| 65 | RSDK-1---Tired             | Global/Tired.wav           |
| 66 | SFX_Plus_AM1_Hammer-Jump   | Global/HammerJump.wav      |
| 67 | SFX_Plus_AM2_Hammer-Attack | Global/HammerDash.wav      |
| 68 | SFX_Plus_AM3_Hammer-Hit    | Global/HammerHit.wav       |
| 69 | SFX_Add00_DropDash         | Global/DropDash.wav        |
| 70 | RSDK-1---BackButton        | Global/BackButton.wav      |
| 71 | RSDK-1---MenuButton        | Global/MenuButton.wav      |
| 72 | RSDK-1---Resume            | Global/Resume.wav          |
| 73 | RSDK-1---Select            | Global/Select.wav          |
| 74 | RSDK-1---Waterfall         | Stage/Waterfall.wav        |
| 75 | RSDK-1---Waterfall2        | Stage/Waterfall2.wav       |

## Sonic CD SFX (SCD_sfx.acb) { id="sonic-cd-sfx" }
| ID | CRIWARE Audio Name                                       | RSDK Filename                            |
| -- | -------------------------------------------------------- | ---------------------------------------- |
| 0  | SFX_Plus_KN3_Grab                                        | Global/Grab.wav                          |
| 1  | SFX_Plus_KN2_Land                                        | Global/GlideDropLand.wav                 |
| 2  | RSDK-CD---Event                                          | Stage/Event.wav                          |
| 3  | SFX_Plus_KN1_Slide                                       | Global/Slide.wav                         |
| 4  | RSDK-CD---Flying                                         | Global/Flying.wav                        |
| 5  | RSDK-CD---Tired                                          | Global/Tired.wav                         |
| 6  | SFX_SCD_F59_BombCarrier                                  | Stage/BombCarrier.wav                    |
| 7  | SFX_SCD_F00_Skidding                                     | Global/Skidding.wav                      |
| 8  | SFX_SCD_F01_Release                                      | Global/Release.wav                       |
| 9  | SFX_SCD_F02_Jump                                         | Global/Jump.wav                          |
| 10 | SFX_SCD_F03_Hurt                                         | Global/Hurt.wav                          |
| 11 | SFX_SCD_F04_LoseRings                                    | Global/LoseRings.wav                     |
| 12 | SFX_SCD_F05_Ring<br>SFX_SCD_F24_Ring<br>SFX_SCD_F25_Ring | Global/Ring.wav                          |
| 13 | SFX_SCD_F05_Ring<br>SFX_SCD_F24_Ring<br>SFX_SCD_F25_Ring | Global/Ring.wav                          |
| 14 | SFX_SCD_F06_Destroy                                      | Global/Destroy.wav                       |
| 15 | SFX_SCD_F07_BlueShield                                   | Global/BlueShield.wav                    |
| 16 | SFX_SCD_F08_Spring                                       | Global/Spring.wav                        |
| 17 | SFX_SCD_F09                                              |                                          |
| 18 | SFX_SCD_F10_ScoreTotal                                   | Global/ScoreTotal.wav                    |
| 19 | SFX_SCD_F11_Charge                                       | Global/Charge.wav                        |
| 20 | SFX_SCD_F12_Charge                                       |                                          |
| 21 | SFX_SCD_F13_SignPost                                     | Global/SignPost.wav                      |
| 22 | SFX_SCD_F14_Explosion                                    | Global/Explosion.wav                     |
| 23 | SFX_SCD_F15_ChuteExit                                    | Stage/ChuteExit.wav                      |
| 24 | SFX_SCD_F16_Shot                                         | Stage/Shot.wav                           |
| 25 | SFX_SCD_F17                                              |                                          |
| 26 | SFX_SCD_F18_WaterSplash                                  | Stage/WaterSplash.wav                    |
| 27 | SFX_SCD_F19_Crumble                                      | Stage/Crumble.wav                        |
| 28 | SFX_SCD_F20_Door                                         | Stage/Door.wav                           |
| 29 | SFX_SCD_F21                                              |                                          |
| 29 | SFX_SCD_F22                                              |                                          |
| 30 | SFX_SCD_F23_Jab                                          | Stage/Jab.wav                            |
| 31 | SFX_SCD_F26<br>SFX_SCD_F27                               |                                          |
| 32 | SFX_SCD_F28_BossHit                                      | Stage/BossHit.wav                        |
| 33 | SFX_SCD_F29_Breathing                                    | Stage/Breathing.wav                      |
| 34 | SFX_SCD_F30_LampPost                                     | Global/LampPost.wav                      |
| 35 | SFX_SCD_F31_SpecialRing                                  | Global/SpecialRing.wav                   |
| 36 | SFX_SCD_F32_Explosion                                    |                                          |
| 37 | SFX_SCD_F33_Buzzsaw                                      | Stage/Buzzsaw.wav                        |
| 38 | SFX_SCD_F34_Electricity                                  | Stage/Electricity.wav                    |
| 39 | SFX_SCD_F35_LargeBooster                                 | Stage/LargeBooster.wav                   |
| 40 | SFX_SCD_F36_Impact1                                      | Stage/Impact1.wav                        |
| 41 | SFX_SCD_F37_Bumper2                                      | Stage/Bumper2.wav                        |
| 42 | SFX_SCD_F38_Drowning                                     | Stage/Drowning.wav                       |
| 43 | SFX_SCD_F39_Spikes                                       | Stage/Spikes.wav                         |
| 44 | SFX_SCD_F40_Fan                                          | Stage/Fan.wav                            |
| 45 | SFX_SCD_F41_Blades                                       | Stage/Blades.wav                         |
| 46 | SFX_SCD_F42_WingRotate                                   | Stage/WingRotate.wav                     |
| 47 | SFX_SCD_F43_DoorClose                                    | Stage/DoorClose.wav                      |
| 48 | SFX_SCD_F44_TimeUFO                                      | Stage/TimeUFO.wav                        |
| 49 | SFX_SCD_F45                                              |                                          |
| 50 | SFX_SCD_F46_MiniBumper                                   | Stage/MiniBumper.wav                     |
| 51 | SFX_SCD_F47_Switch                                       | Stage/Switch.wav                         |
| 52 | SFX_SCD_F48_Switch                                       |                                          |
| 53 | SFX_SCD_F49_AirAlert                                     | Stage/AirAlert.wav                       |
| 54 | SFX_SCD_F50_Catch                                        | Stage/Catch.wav                          |
| 55 | SFX_SCD_F51_SmallBooster<br>SFX_SCD_F52_SmallBooster     | Stage/SmallBooster.wav                   |
| 56 | SFX_SCD_F53_ShrinkLaser                                  | Stage/ShrinkLaser.wav                    |
| 57 | SFX_SCD_F54                                              |                                          |
| 58 | SFX_SCD_F55                                              |                                          |
| 59 | SFX_SCD_F56_SpecialWarp                                  | Global/SpecialWarp.wav                   |
| 60 | SFX_SCD_F57_MSCharge                                     | Stage/MSCharge.wav                       |
| 61 | SFX_SCD_F58_MSJet                                        | Stage/MSJet.wav                          |
| 62 | SFX_SCD_F60                                              |                                          |
| 63 | SFX_SCD_F61                                              |                                          |
| 64 | SFX_SCD_F62_Launcher                                     | Stage/Launcher.wav                       |
| 65 | SFX_SCD_F63                                              |                                          |
| 66 | SFX_SCD_F64_MSElectric<br>SFX_SCD_F65_MSElectric         | Stage/MSElectric.wav                     |
| 67 | SFX_SCD_F66                                              |                                          |
| 68 | SFX_SCD_F67                                              |                                          |
| 69 | SFX_SCD_F68                                              |                                          |
| 70 | SFX_SCD_F69                                              |                                          |
| 71 | SFX_SCD_F70                                              |                                          |
| 72 | SFX_SCD_F71_ScoreChute                                   | Stage/ScoreChute.wav                     |
| 73 | SFX_SCD_F72_TimeWarp                                     | Global/TimeWarp.wav                      |
| 74 | SFX_SCD_F73_Achievement<br>SFX_SCD_P04_1Up               | Global/Achievement.wav<br>Global/1Up.wav |
| 75 | SFX_SCD_F74_BounceFloor                                  | Stage/BounceFloor.wav                    |
| 76 | SFX_SCD_F75                                              |                                          |
| 77 | SFX_SCD_F76                                              |                                          |
| 78 | SFX_SCD_F77                                              |                                          |
| 79 | SFX_SCD_F78                                              |                                          |
| 80 | SFX_SCD_F79_DrownAlert                                   | Stage/DrownAlert.wav                     |
| 81 | SFX_SCD_P00_Future                                       | Global/Future.wav                        |
| 82 | SFX_SCD_P01_Past                                         | Global/Past.wav                          |
| 83 | SFX_SCD_P08_MechStep                                     | Stage/MechStep.wav                       |
| 84 | SFX_SCD_P09_Bumper                                       | Stage/Bumper.wav                         |
| 85 | SFX_Plus_AM1_Hammer-Jump                                 | Global/HammerJump.wav                    |
| 86 | SFX_Plus_AM2_Hammer-Attack                               | Global/HammerDash.wav                    |
| 87 | SFX_Plus_AM3_Hammer-Hit                                  | Global/HammerHit.wav                     |
| 88 | SFX_Add00_DropDash                                       | Global/DropDash.wav                      |
| 89 | SFX_RSDK_SCD_BackButton                                  | Stage/BackButton.wav                     |
| 90 | RSDK-CD---Bomb                                           | Stage/Bomb.wav                           |
| 91 | RSDK-CD---Flipper                                        | Stage/Flipper.wav                        |
| 92 | RSDK-CD---GlassSmash                                     | Stage/GlassSmash.wav                     |
| 93 | RSDK-CD---GrittyGround                                   | Stage/GrittyGround.wav                   |
| 94 | RSDK-CD---HLaser                                         | Stage/HLaser.wav                         |
| 95 | SFX_RSDK_SCD_MenuButton                                  | Global/MenuButton.wav                    |
| 96 | RSDK-CD---ScoreAdd                                       | Global/ScoreAdd.wav                      |
| 97 | SFX_RSDK_SCD_Select                                      | Global/Select.wav                        |
| 98 | RSDK-CD---Shot2                                          | Stage/Shot2.wav                          |

### Unused Entries
These entries exist in the RFL parameters but are duplicates of others or have no associated audio in the audio packs.

| CRIWARE Audio Name      | RSDK Filename         |
| ----------------------- | --------------------- |
| SFX_SCD_P03_OuttaHere   | _Global/OuttaHere.wav |
| SFX_SCD_P07_AmyCaptured | Stage/AmyCaptured.wav |
| SFX_SCD_P06_Giggle      | Stage/Giggle.wav      |

## Sonic 2 SFX (STH2_sfx.acb) { id="sonic-2-sfx" }
| ID  | CRIWARE Audio Name                   | RSDK Filename                                |
| --- | ------------------------------------ | -------------------------------------------- |
| 0   | RSDK-2---Exit_SS                     | Stage/Exit_SS.wav                            |
| 1   | SFX_STH2_35_Ring<br>SFX_STH2_4E_Ring | Global/Ring.ogg                              |
| 2   | SFX_STH2_35_Ring<br>SFX_STH2_4E_Ring | Global/Ring.ogg                              |
| 3   | SFX_STH2_20_Jump                     | Global/Jump.ogg                              |
| 4   | SFX_STH2_21_StarPost                 | Global/StarPost.ogg                          |
| 5   | SFX_STH2_22_SpikesMove               | Global/SpikesMove.ogg                        |
| 6   | SFX_STH2_23_Hurt                     | Global/Hurt.ogg                              |
| 7   | SFX_STH2_24_Skidding                 | Global/Skidding.ogg                          |
| 8   | SFX_STH2_28_Beep                     | Stage/Beep.wav                               |
| 9   | SFX_STH2_29                          |                                              |
| 10  | SFX_STH2_2A_WaterSplash              | Stage/WaterSplash.wav                        |
| 11  | SFX_STH2_2B_Swish                    | Stage/Swish.wav                              |
| 12  | SFX_STH2_2C_BossHit                  | Stage/BossHit.wav                            |
| 13  | SFX_STH2_2D_Breathing                | Stage/Breathing.wav                          |
| 14  | SFX_STH2_2E_SmallFireball            | Stage/SmallFireball.wav                      |
| 15  | SFX_STH2_33_FlameThrower             | Stage/FlameThrower.wav                       |
| 16  | SFX_STH2_34_Bumper                   | Stage/Bumper.wav                             |
| 17  | SFX_STH2_38                          |                                              |
| 18  | SFX_STH2_39_BlockBreak               | Stage/BlockBreak.wav                         |
| 19  | SFX_STH2_3A                          |                                              |
| 20  | SFX_STH2_3B_FlappingDoor             | Stage/FlappingDoor.wav                       |
| 21  | SFX_STH2_3D_Crusher                  | Stage/Crusher.wav                            |
| 22  | SFX_STH2_3F_Continue                 | Global/Continue.ogg                          |
| 23  | SFX_STH2_41_Destroy                  | Global/Destroy.ogg                           |
| 24  | SFX_STH2_44_Explosion                | Global/Explosion.ogg                         |
| 25  | SFX_STH2_47                          |                                              |
| 26  | SFX_STH2_48_FireDash                 | Global/FireDash.ogg                          |
| 27  | SFX_STH2_49_BonusPoints              | Global/BonusPoints.ogg                       |
| 28  | SFX_STH2_4A_SpecialWarp              | Global/SpecialWarp.ogg                       |
| 29  | SFX_STH2_50_BossSpark                | Stage/BossSpark.wav                          |
| 30  | SFX_STH2_51_Catch                    | Global/Catch.ogg                             |
| 31  | SFX_STH2_52                          |                                              |
| 32  | SFX_STH2_54_GasPop                   | Stage/GasPop.wav                             |
| 33  | SFX_STH2_57_PlatCollide              | Stage/PlatCollide.wav                        |
| 34  | SFX_STH2_58_TargetBumper             | Stage/TargetBumper.wav                       |
| 35  | SFX_STH2_59_CNZBumper                | Stage/CNZBumper.wav                          |
| 36  | SFX_STH2_5A_ChemJump                 | Stage/ChemJump.wav                           |
| 37  | SFX_STH2_5B_Sliding                  | Global/Sliding.ogg                           |
| 38  | SFX_STH2_5C_Thruster                 | Stage/Thruster.wav                           |
| 39  | SFX_STH2_5D_ArrowHit                 | Stage/ArrowHit.wav                           |
| 40  | SFX_STH2_5E_Helicopter               | Stage/Helicopter.wav                         |
| 41  | SFX_STH2_5F_Transform                | Global/Transform.ogg                         |
| 42  | SFX_STH2_61_Rumble                   | Stage/Rumble.wav                             |
| 43  | SFX_STH2_62_Plunger                  | Stage/Plunger.wav                            |
| 44  | SFX_STH2_63_Flipper                  | Stage/Flipper.wav                            |
| 45  | SFX_STH2_64_LiftTick                 | Stage/LiftTick.wav                           |
| 46  | SFX_STH2_65_Rustle                   | Stage/Rustle.wav                             |
| 47  | SFX_STH2_66_ChemSplash               | Stage/ChemSplash.wav                         |
| 48  | SFX_STH2_67_DropBridge               | Stage/DropBridge.wav                         |
| 49  | SFX_STH2_68_Landing                  | Global/Landing.ogg                           |
| 50  | SFX_STH2_69_DropBridge2              | Stage/DropBridge2.wav                        |
| 51  | SFX_STH2_6B_InstaShield              | Stage/LaserSkim.wav                          |
| 52  | SFX_STH2_6C_Teleport                 | Global/Teleport.ogg                          |
| 53  | SFX_STH2_6D_Fail                     | Stage/Fail.wav                               |
| 54  | SFX_STH2_6E_Saw                      | Stage/Saw.wav                                |
| 55  | SFX_STH2_6F_MediumLaser              | Stage/MediumLaser.wav                        |
| 56  | SFX_STH2_70_OilSlide                 | Stage/OilSlide.wav                           |
| 57  | SFX_STH2_25                          |                                              |
| 58  | SFX_STH2_26_Spike                    | Global/Spike.ogg                             |
| 59  | SFX_STH2_27_Twinkle                  | Stage/Twinkle.wav                            |
| 60  | SFX_STH2_2F_BlueShield               | Global/BlueShield.ogg                        |
| 61  | SFX_STH2_30_Buzzsaw                  | Stage/Buzzsaw.wav                            |
| 62  | SFX_STH2_31_Electricity              | Stage/Electricity.wav                        |
| 63  | SFX_STH2_32_Drowning                 | Stage/Drowning.wav                           |
| 64  | SFX_STH2_36_Spear                    | Stage/Spear.wav                              |
| 65  | SFX_STH2_37_LargeWall                | Stage/LargeWall.wav                          |
| 66  | SFX_STH2_3C_Release                  | Global/Release.ogg                           |
| 67  | SFX_STH2_3E_Rolling                  | Global/Rolling.ogg                           |
| 68  | SFX_STH2_40_SlotMachine              | Stage/SlotMachine.wav                        |
| 69  | SFX_STH2_42_DrownAlert               | Stage/DrownAlert.wav                         |
| 70  | SFX_STH2_43_SpecialRing              | Global/SpecialRing.ogg                       |
| 71  | SFX_STH2_45_ScoreTotal               | Global/ScoreTotal.ogg                        |
| 72  | SFX_STH2_46_LoseRings                | Global/LoseRings.ogg                         |
| 73  | SFX_STH2_4B_LedgeBreak               | Stage/LedgeBreak.wav                         |
| 74  | SFX_STH2_4C_Spring                   | Global/Spring.ogg                            |
| 75  | SFX_STH2_4D_ButtonPress              | Stage/ButtonPress.wav<br>Global/ScoreAdd.ogg |
| 76  | SFX_STH2_4F_SignPost                 | Global/SignPost.ogg                          |
| 77  | SFX_STH2_53_SignPost2p               | Global/SignPost2p.ogg                        |
| 78  | SFX_STH2_55_Clank                    | Stage/Clank.wav                              |
| 79  | SFX_STH2_56_Elevator                 | Stage/Elevator.wav                           |
| 80  | SFX_STH2_60_Charge                   | Global/Charge.ogg                            |
| 81  | SFX_STH2_6A_SmallLaser               | Stage/SmallLaser.wav                         |
| 82  | S011_S3E_FireShield                  | Global/FireShield.ogg                        |
| 83  | S012_S3F_BubbleShield                | Global/BubbleShield.ogg                      |
| 84  | S014_S41_LightningShield             | Global/LightningShield.ogg                   |
| 85  | S015_S42_InstaShield                 | Global/InstaShield.ogg                       |
| 86  | S016_S43_FireDash                    | Global/FireDash.ogg                          |
| 87  | S017_S44_BubbleBounce                | Global/BubbleBounce.ogg                      |
| 88  | S018_S45_LightningJump               | Global/LightningJump.ogg                     |
| 89  | RSDK-2---Explosion3                  | Stage/Explosion3.wav                         |
| 90  | RSDK-2---LaserCharge                 | Stage/LaserCharge.wav                        |
| 91  | RSDK-2---LargeLaser                  | Stage/LargeLaser.wav                         |
| 92  | RSDK-2---LaserSkim                   |                                              |
| 93  | RSDK-2---HullClose                   | Stage/HullClose.wav                          |
| 94  | RSDK-2---Explosion2                  | Stage/Explosion2.wav                         |
| 95  | RSDK-2---Flying                      | Global/Flying.ogg                            |
| 96  | RSDK-2---Tired                       | Global/Tired.ogg                             |
| 97  | SFX_Plus_AM1_Hammer-Jump             | Global/HammerJump.wav                        |
| 98  | SFX_Plus_AM2_Hammer-Attack           | Global/HammerDash.wav                        |
| 99  | SFX_Plus_AM3_Hammer-Hit              | Global/HammerHit.wav                         |
| 100 | SFX_Add00_DropDash                   | Global/DropDash.wav                          |
| 101 | RSDK-2---BackButton                  | Global/BackButton.ogg                        |
| 102 | RSDK-2---MenuButton                  | Global/MenuButton.ogg                        |
| 103 | RSDK-2---Resume                      | Global/Resume.ogg                            |
| 104 | RSDK-2---Select                      | Global/Select.ogg                            |
| 105 | RSDK-2---Waterfall                   | Stage/Waterfall.wav                          |
| 106 | RSDK-2---Waterfall2                  | Stage/Waterfall2.wav                         |
| 107 | RSDK-2---Horn1                       | Stage/Horn1.wav                              |
| 108 | RSDK-2---Horn2                       | Stage/Horn2.wav                              |
| 109 | RSDK-2---Horn3                       | Stage/Horn3.wav                              |
| 110 | RSDK-2---Horn4                       | Stage/Horn4.wav                              |
| 111 | RSDK-2---HornSweep                   | Stage/HornSweep.wav                          |
| 112 | RSDK-2---Impact1                     | Stage/Impact1.wav                            |
| 113 | RSDK-2---Impact2                     | Stage/Impact2.wav                            |
| 114 | RSDK-2---Launch                      | Stage/Launch.wav                             |
| 115 | RSDK-2---LoudHorn                    | Stage/LoudHorn.wav                           |
| 116 | RSDK-2---MachineMove                 | Stage/MachineMove.wav                        |
| 117 | RSDK-2---OctusShot                   | Stage/OctusShot.wav                          |
| 118 | RSDK-2---Rev                         | Stage/Rev.wav                                |
| 119 | RSDK-2---WaterGeyser                 | Stage/WaterGeyser.wav                        |

### Unused Entries
These entries exist in the RFL parameters but are duplicates of others or have no associated audio in the audio packs.

| CRIWARE Audio Name      | RSDK Filename          |
| ----------------------- | ---------------------- |
| _SE_Event               | Global/Event.ogg       |
| SFX_STH2_6B_InstaShield | Global/InstaShield.ogg |

## Sonic 3 & Knuckles SFX (STH3_sfx.acb) { id="sonic-3-knuckles-sfx" }
| ID  | CRIWARE Audio Name                 | RSDK Filename                            |
| --- | ---------------------------------- | --------------------------               |
| 0   | RSDK-3-Global---Spring             | Global/Spring.wav                        |
| 1   | RSDK-3-Special---Emerald           | Special/Emerald.wav                      |
| 2   | RSDK-3-Global---Transform          | Global/Transform.wav                     |
| 3   | S001_S33_Ring<br>S001_S34_Ring     | <br>Global/Ring.wav                      |
| 4   | S001_S33_Ring<br>S001_S34_Ring     | <br>Global/Ring.wav                      |
| 5   | S002_S35_Hurt                      | Global/Hurt.wav                          |
| 6   | S003_S36_Skidding                  | Global/Skidding.wav                      |
| 7   | S004_S37_Spike                     | Global/Spike.wav                         |
| 8   | S005_S38_Breathe                   | Stage/Breathe.wav                        |
| 9   | S006_S39_Splash                    | Stage/Splash.wav                         |
| 10  | S007_S3A_BlueShield                | Global/BlueShield.wav                    |
| 11  | S008_S3B_Drown                     | Stage/Drown.wav                          |
| 12  | S009_S3C_Roll                      | Global/Roll.wav                          |
| 13  | S010_S3D_Destroy                   | Global/Destroy.wav                       |
| 14  | S011_S3E_FireShield                | Global/FireShield.wav                    |
| 15  | S012_S3F_BubbleShield              | Global/BubbleShield.wav                  |
| 16  | S013_S40_                          |                                          |
| 17  | S014_S41_LightningShield           | Global/LightningShield.wav               |
| 18  | S015_S42_InstaShield               | Global/InstaShield.wav                   |
| 19  | S016_S43_FireDash                  | Global/FireDash.wav                      |
| 20  | S017_S44_BubbleBounce              | Global/BubbleBounce.wav                  |
| 21  | S018_S45_LightningJump             | Global/LightningJump.wav                 |
| 22  | S019_S46_Recovery                  | Global/Recovery.wav                      |
| 23  | S020_S47_SandPillar                | 3K_SPZ/SandPillar.wav                    |
| 24  | S021_S48_Huff                      | Stage/Huff.wav                           |
| 25  | S022_S49_Impact5                   | Stage/Impact5.wav                        |
| 26  | S023_S4A_Grab<br>S023_S4A_Grab_1   | Global/Grab.wav                          |
| 27  | S024_S4B_Splash3                   | Stage/Splash3.wav                        |
| 28  | S025_S4C_Land<br>S025_S4C_Land_1   | Global/Land.wav                          |
| 29  | S026_S4D_Shot                      | Stage/Shot.wav                           |
| 30  | S027_S4E_Explosion3                | Stage/Explosion3.wav                     |
| 31  | S028_S4F_SmallFlame                | Stage/SmallFlame.wav                     |
| 32  | S029_S50_MachineActivate           | Stage/MachineActivate.wav                |
| 33  | S030_S51_Drop                      | Stage/Drop.wav                           |
| 34  | S031_S52_SpikesMove3               | Global/SpikesMove3.wav                   |
| 35  | S032_S53_Charge                    | Stage/Charge.wav                         |
| 36  | S033_S54_BigLaser                  | Stage/BigLaser.wav                       |
| 37  | S034_S55_PlatformTrack             | 3K_SPZ/PlatformTrack.wav                 |
| 38  | S035_S56_                          |                                          |
| 39  | S036_S57_WaterGush                 | 3K_HCZ/WaterGush.wav                     |
| 40  | S037_S58_Clack2                    | Stage/Clack2.wav                         |
| 41  | S038_S59_LedgeBreak3               | Stage/LedgeBreak3.wav                    |
| 42  | S039_S5A_                          | Stage/Rev.wav                            |
| 43  | S040_S5B_Button                    | Stage/Button.wav                         |
| 44  | S041_S5C_MechaSpark                | 3K_SSZ/MechaSpark.wav                    |
| 45  | S042_S5D_Impact3                   | Stage/Impact3.wav                        |
| 46  | S043_S5E_LaserFire                 | Stage/LaserFire.wav                      |
| 47  | S044_S5F_Impact4                   | Stage/Impact4.wav                        |
| 48  | S045_S60_FlyAway                   | 3K_MGZ/FlyAway.wav                       |
| 49  | S046_S61_ThunkThunk                | Stage/ThunkThunk.wav                     |
| 50  | S047_S62_Jump                      | Global/Jump.wav                          |
| 51  | S048_S63_StarPost                  | Global/StarPost.wav                      |
| 52  | S049_S64_PulleyGrab                | 3K_MGZ/PulleyGrab.wav                    |
| 53  | S050_S65_BlueSphere                | Special/BlueSphere.wav                   |
| 54  | S051_S66_SSJettison                | Special/SSJettison.wav                   |
| 55  | S052_S67_Push                      | Global/Push.wav                          |
| 56  | S053_S68_Event                     | Special/Event.wav                        |
| 57  | S054_S69_Push                      | Stage/Push.wav                           |
| 58  | S055_S6A_SSExit                    | Special/SSExit.wav                       |
| 59  | S056_S6B_SSRotate                  | Special/SSRotate.wav                     |
| 60  | S057_S6C_Splash                    | Stage/Splash2.wav                        |
| 61  | S058_S6D_Clack4                    | Stage/Clack4.wav                         |
| 62  | S059_S6E_BossHit                   | Stage/BossHit.wav                        |
| 63  | S060_S6F_RumbleShort_RumbleEnd     | Stage/RumbleShort.wav                    |
| 64  | S061_S70_Fireball                  | Stage/Fireball.wav                       |
| 65  | S062_S71_                          |                                          |
| 66  | S063_S72_Rotate                    | Stage/Rotate.wav                         |
| 67  | S064_S73_Elevator                  | Stage/Elevator.wav                       |
| 68  | S065_S74_Repel                     | Stage/Repel.wav                          |
| 69  | S066_S75_PlatformInflate           | 3K_CNZ/PlatformInflate.wav               |
| 70  | S067_S76_TrapDoor                  | 3K_CNZ/TrapDoor.wav                      |
| 71  | S068_S77_BalloonPop                | Stage/BalloonPop.wav                     |
| 72  | S069_S78_Zap                       | Stage/Zap.wav                            |
| 73  | S070_S79_Sparks                    | 3K_CNZ/Sparks.wav                        |
| 74  | S071_S7A_Emerge                    | 3K_LRZ/Emerge.wav                        |
| 75  | S072_S7B_Bumper3                   | Stage/Bumper3.wav                        |
| 76  | S073_S7C_Chain                     | Stage/Chain.wav                          |
| 77  | S074_S7D_                          |                                          |
| 78  | S075_S7E_Slide<br>S075_S7E_Slide_1 | Global/Slide.wav                         |
| 79  | S076_S7F_FrostBlower               | 3K_ICZ/FrostBlower.wav                   |
| 80  | S077_S80_Freeze                    | 3K_ICZ/Freeze.wav                        |
| 81  | S078_S81_CannonFire                | Stage/CannonFire.wav                     |
| 82  | S079_S82_Puff                      | Stage/Puff.wav                           |
| 83  | S080_S83_BridgeExplode             | Stage/BridgeExplode.wav                  |
| 84  | S081_S84_                          |                                          |
| 85  | S082_S85_                          |                                          |
| 86  | S083_S86_Alarm                     | 3K_LBZ/Alarm.wav                         |
| 87  | S084_S87_Bounce                    | Stage/Bounce.wav                         |
| 88  | S085_S88_Hoist                     | 3K_MHZ/Hoist.wav                         |
| 89  | S086_S89_Blip                      | 3K_MHZ/Blip.wav                          |
| 90  | S087_S8A_Vanish                    | Stage/Vanish.wav                         |
| 91  | S088_S8B_Chop                      | 3K_MHZ/Chop.wav                          |
| 92  | S089_S8C_Strain                    | Stage/Strain.wav                         |
| 93  | S090_S8D_                          |                                          |
| 94  | S091_S8E_WheelSpin                 | 3K_MGZ/WheelSpin.wav                     |
| 95  | S092_S8F_Open                      | Stage/Open.wav                           |
| 96  | S093_S90_DoorReturn                | 3K_SPZ/DoorReturn.wav                    |
| 97  | S094_S91_HullClose                 | Stage/HullClose.wav                      |
| 98  | S095_S92_Hyudoro                   | 3K_SPZ/Hyudoro.wav                       |
| 99  | S096_S93_Assemble                  | Stage/Assemble.wav                       |
| 100 | S097_S94_Shift                     | Stage/Shift.wav                          |
| 101 | S098_S95_Rise                      | 3K_LRZ/Rise.wav                          |
| 102 | S099_S96_Impact2                   | Stage/Impact2.wav                        |
| 103 | S100_S97_Mist                      | 3K_LRZ/Mist.wav                          |
| 104 | S101_S98_Shoot                     | Stage/Shoot.wav                          |
| 105 | S102_S99_                          |                                          |
| 106 | S103_S9A_Clack3                    | Stage/Clack3.wav                         |
| 107 | S104_S9B_Impact6                   | Stage/Impact6.wav                        |
| 108 | S105_S9C_SuperEmerald              | Stage/SuperEmerald.wav                   |
| 109 | S106_S9D_Targeting1                | Stage/Targeting1.wav                     |
| 110 | S107_S9E_Whack                     | Stage/Whack.wav                          |
| 111 | S108_S9F_Transform2                | Global/Transform2.wav                    |
| 112 | S109_SA0_RocketJet                 | Stage/RocketJet.wav                      |
| 113 | S110_SA1_                          |                                          |
| 114 | S111_SA2_Launch                    | Stage/Launch.wav                         |
| 115 | S112_SA3_Extend                    | Stage/Extend.wav                         |
| 116 | S113_SA4_PowerUp                   | Stage/PowerUp.wav                        |
| 117 | S114_SA5_                          |                                          |
| 118 | S115_SA6_Kshink                    | Stage/Kshink.wav                         |
| 119 | S116_SA7_Beep3                     |                                          |
| 120 | S117_SA8_LaserSweep                | Stage/LaserSweep.wav                     |
| 121 | S118_SA9_Warning                   | Stage/Warning.wav                        |
| 122 | S119_SAA_Bumper                    | Stage/Bumper.wav                         |
| 123 | S120_SAB_Charge                    | Global/Charge.wav                        |
| 124 | S121_SAC_Continue                  | Special/Continue.wav                     |
| 125 | S122_SAD_Beep4                     | Stage/Beep4.wav                          |
| 126 | S123_SAE_Flipper                   | Stage/Flipper.wav                        |
| 127 | S124_SAF_SpecialWarp               | Global/SpecialWarp.wav                   |
| 128 | S125_SB0_ScoreTotal                | Global/ScoreTotal.wav                    |
| 129 | S126_SB1_Spring3                   | Global/Spring3.wav                       |
| 130 | S127_SB2_Fail                      | Global/Fail.wav                          |
| 131 | S128_SB3_SpecialRing               | Global/SpecialRing.wav                   |
| 132 | S129_SB4_Explosion2                | Stage/Explosion2.wav                     |
| 133 | S130_SB5_                          |                                          |
| 134 | S131_SB6_Release                   | Global/Release.wav                       |
| 135 | S132_SB7_SlotMachine               | Stage/SlotMachine.wav                    |
| 136 | S133_SB8_Twinkle                   | Global/Twinkle.wav                       |
| 137 | S134_SB9_LoseRings                 | Global/LoseRings.wav                     |
| 138 | S135_SBA_Flying                    | Global/Flying.wav                        |
| 139 | S136_SBB_Tired                     | Global/Tired.wav                         |
| 140 | S137_SBC_Waterfall                 | Stage/Waterfall.wav                      |
| 141 | S138_SBD_Airship                   | Stage/Airship.wav                        |
| 142 | S139_SBE_Siren                     | Stage/Siren.wav                          |
| 143 | S140_SBF_Wash                      | 3K_HCZ/Wash.wav                          |
| 144 | S141_SC0_LargeFan                  | 3K_HCZ/LargeFan.wav                      |
| 145 | S142_SC1_SmallFan                  | 3K_HCZ/SmallFan.wav                      |
| 146 | S143_SC2_Flame2                    | Stage/Flame2.wav                         |
| 147 | S144_SC3_Hover3                    | Stage/Hover3.wav                         |
| 148 | S145_SC4_Laser                     | 3K_DEZ/Laser.wav                         |
| 149 | S146_SC5_LaserReleasewav           | 3K_DEZ/LaserRelease.wav                  |
| 150 | S147_SC6_Hover_Hover2              | Stage/Hover.wav<br>Stage/Hover2.wav      |
| 151 | S148_SC7_CannonTurn                | 3K_CNZ/CannonTurn.wav                    |
| 152 | S149_SC8_SnowSlide                 | 3K_ICZ/SnowSlide.wav                     |
| 153 | S150_SC9_Flail                     | Stage/Flail.wav                          |
| 154 | S151_SCA_Brip                      | Stage/Brip.wav                           |
| 155 | S152_SCB_Rumble                    | Stage/Rumble.wav                         |
| 156 | S153_SCC_Drill_DrillEnd_DrillShort | Stage/Drill.wav<br>Stage/DrillWarble.wav |
| 157 | S154_SCD_TakeOff                   | Stage/TakeOff.wav                        |
| 158 | S155_SCE_AirFlow                   | Stage/Airflow.wav                        |
| 159 | S156_SCF_                          |                                          |
| 160 | S157_SD0_EggMobile                 | Stage/EggMobile.wav                      |
| 161 | S158_SD1_                          |                                          |
| 162 | S159_SD2_Unravel                   | Stage/Unravel.wav                        |
| 163 | S160_SD3_DeathEggRise              | 3K_SSZ/DeathEggRise.wav                  |
| 164 | S161_SD4_Engine                    | 3K_DEZ/Engine.wav                        |
| 165 | S162_SD5_Lava                      | Stage/Lava.wav                           |
| 166 | S163_SD6_                          |                                          |
| 167 | S164_SD7_Pulley                    | Stage/Pulley.wav                         |
| 168 | S165_SD8_                          |                                          |
| 169 | S166_SD9_Magnet                    | Stage/Magnet.wav                         |
| 170 | S167_SDA_Gust                      | 3K_MHZ/Gust.wav                          |
| 171 | S168_SDB_Skim                      | 3K_HCZ/Skim.wav                          |
| 172 | SFX_Plus_AM4_Hammer-Throw          | Global/HammerThrow.wav                   |
| 173 | SFX_Plus_AM1_Hammer-Jump           | Global/HammerJump.wav                    |
| 174 | SFX_Plus_AM2_Hammer-Attack         | Global/HammerDash.wav                    |
| 175 | SFX_Plus_AM3_Hammer-Hit            | Global/HammerHit.wav                     |
| 176 | SFX_Add00_DropDash                 | Global/DropDash.wav                      |
| 177 | RSDK-3---Charge                    |                                          |
| 178 | RSDK-3---Clack                     | Stage/Clack.wav                          |
| 179 | RSDK-3---DrillEnd                  | Stage/DrillEnd.wav                       |
| 180 | RSDK-3---DrillWarble               |                                          |
| 181 | RSDK-3---LRZ-Shatter               | 3K_LRZ/Shatter.wav                       |
| 182 | RSDK-3---Siren                     |                                          |
| 183 | RSDK-3---Swing                     | Stage/Swing.wav                          |
| 184 | RSDK-3-CNZ---CannonTurn1           | 3K_CNZ/CannonTurn1.wav                   |
| 185 | RSDK-3-CNZ---CannonTurn2           | 3K_CNZ/CannonTurn2.wav                   |
| 186 | RSDK-3-CNZ---CannonTurnOG          | 3K_CNZ/CannonTurnOG.wav                  |
| 187 | RSDK-3-Global---ChargeOld          | Global/ChargeOld.wav                     |
| 188 | RSDK-3-Global---HyperRing          | Global/HyperRing.wav                     |
| 189 | RSDK-3-Global---MenuAccept         | Global/MenuAccept.wav                    |
| 190 | RSDK-3-Global---MenuBleep          | Global/MenuBleep.wav                     |
| 191 | RSDK-3-Global---MenuWoosh          | Global/MenuWoosh.wav                     |
| 192 | RSDK-3-Global---PeelCharge         | Global/PeelCharge.wav                    |
| 193 | RSDK-3-Global---PeelRelease        | Global/PeelRelease.wav                   |
| 194 | RSDK-3-Global---ScoreAdd           | Global/ScoreAdd.wav                      |
| 195 | RSDK-3-Global---SignPost           | Global/SignPost.wav                      |
| 196 | RSDK-3-Global---SignPost2p         | Global/SignPost2p.wav                    |
| 197 | RSDK-3-Global---SpikesMove         | Global/SpikesMove.wav                    |
| 198 | RSDK-3-Global---Swap               | Global/Swap.wav                          |
| 199 | RSDK-3-Global---SwapFail           | Global/SwapFail.wav                      |
| 200 | RSDK-3-Global---Teleport           | Global/Teleport.wav                      |
| 201 | RSDK-3-Global---Warp               | Global/Warp.wav                          |
| 202 | RSDK-3-HCZ---Whirlpool             | 3K_HCZ/Whirlpool.wav                     |
| 203 | RSDK-3-ICZ---PenPenSlide           | 3K_ICZ/PenPenSlide.wav                   |
| 204 | RSDK-3-LRZ---Turbine               | 3K_LRZ/Turbine.wav                       |
| 205 | RSDK-3-Special---GrittyGround      | Special/GrittyGround.wav                 |
| 206 | RSDK-3-Stage---Beep                | Stage/Beep2.wav                          |
| 207 | RSDK-3-Stage---Beep2               | Stage/Beep3.wav                          |
| 208 | RSDK-3-Stage---Bloop               | Stage/Bloop.wav                          |
| 209 | RSDK-3-Stage---Bumper2             | Stage/Bumper2.wav                        |
| 210 | RSDK-3-Stage---Button2             | Stage/Button2.wav                        |
| 211 | RSDK-3-Stage---BuzzSaw             | Stage/BuzzSaw.wav                        |
| 212 | RSDK-3-Stage---Chopper             | Stage/Chopper.wav                        |
| 213 | RSDK-3-Stage---Clacker             | Stage/Clacker.wav                        |
| 214 | RSDK-3-Stage---Clang               | Stage/Clang.wav                          |
| 215 | RSDK-3-Stage---Clang2              | Stage/Clang2.wav                         |
| 216 | RSDK-3-Stage---Click               | Stage/Click.wav                          |
| 217 | RSDK-3-Stage---Click2              | Stage/Click2.wav                         |
| 218 | RSDK-3-Stage---DBridgeOpen         | Stage/DBridgeOpen.wav                    |
| 219 | RSDK-3-Stage---DBridgeStop         | Stage/DBridgeStop.wav                    |
| 220 | RSDK-3-Stage---DrillShort          | Stage/DrillShort.wav                     |
| 221 | RSDK-3-Stage---DrownAlert          | Stage/DrownAlert.wav                     |
| 222 | RSDK-3-Stage---ElecCharge          | Stage/ElecCharge.wav                     |
| 223 | RSDK-3-Stage---ElecPulse           | Stage/ElecPulse.wav                      |
| 224 | RSDK-3-Stage---Electrify           | Stage/Electrify.wav                      |
| 225 | RSDK-3-Stage---Electrify2          | Stage/Electrify2.wav                     |
| 226 | RSDK-3-Stage---Explosion           | Stage/Explosion.wav                      |
| 227 | RSDK-3-Stage---Explosion4          | Stage/Explosion4.wav                     |
| 228 | RSDK-3-Stage---Fall                | Stage/Fall.wav                           |
| 229 | RSDK-3-Stage---FallL               | Stage/FallL.wav                          |
| 230 | RSDK-3-Stage---FallR               | Stage/FallR.wav                          |
| 231 | RSDK-3-Stage---Flame               | Stage/Flame.wav                          |
| 232 | RSDK-3-Stage---Flap                | Stage/Flap.wav                           |
| 233 | RSDK-3-Stage---Flip                | Stage/Flip.wav                           |
| 234 | RSDK-3-Stage---GasPop              | Stage/GasPop.wav                         |
| 235 | RSDK-3-Stage---GoodFuture          | Stage/GoodFuture.wav                     |
| 236 | RSDK-3-Stage---HangPointRise       | Stage/HangPointRise.wav                  |
| 237 | RSDK-3-Stage---Hover2              |                                          |
| 238 | RSDK-3-Stage---Hover4              | Stage/Hover4.wav                         |
| 239 | RSDK-3-Stage---Jump2               | Stage/Jump2.wav                          |
| 240 | RSDK-3-Stage---Landing             | Stage/Landing.wav                        |
| 241 | RSDK-3-Stage---LargeWall           | Stage/LargeWall.wav                      |
| 242 | RSDK-3-Stage---LedgeBreak          | Stage/LedgeBreak.wav                     |
| 243 | RSDK-3-Stage---LedgeBreak2         | Stage/LedgeBreak2.wav                    |
| 244 | RSDK-3-Stage---LightSlide          | Stage/LightSlide.wav                     |
| 245 | RSDK-3-Stage---PimPom              | Stage/PimPom.wav                         |
| 246 | RSDK-3-Stage---Pon                 | Stage/Pon.wav                            |
| 247 | RSDK-3-Stage---Retract             | Stage/Retract.wav                        |
| 248 | RSDK-3-Stage---Rev                 |                                          |
| 249 | RSDK-3-Stage---RumbleEnd           | Stage/RumbleEnd.wav                      |
| 250 | RSDK-3-Stage---Sega                | Stage/Sega.wav                           |
| 251 | RSDK-3-Stage---Sharp               | Stage/Sharp.wav                          |
| 252 | RSDK-3-Stage---SpeedBooster        | Stage/SpeedBooster.wav                   |
| 253 | RSDK-3-Stage---Tilt                | Stage/Tilt.wav                           |
| 254 | RSDK-3-Stage---TubeSpin            | Stage/TubeSpin.wav                       |
| 255 | RSDK-3-Stage---TubeTravel          | Stage/TubeTravel.wav                     |
| 256 | RSDK-3-Stage---Wall                | Stage/Wall.wav                           |
| 257 | RSDK-3-Stage---Waterfall2          | Stage/Waterfall2.wav                     |
| 258 | RSDK-3-Stage---WaterfallLoop       | Stage/WaterfallLoop.wav                  |
| 259 | RSDK-3-Stage---Wind                | Stage/Wind.wav                           |
| 260 | RSDK-3-Tube---Exit                 | Tube/Exit.wav                            |
| 261 | RSDK-3-Tube---Spin                 | Tube/Spin.wav                            |
| 262 | RSDK-3-Tube---Travel               | Tube/Travel.wav                          |

### Unused Entries
These entries exist in the RFL parameters but are duplicates of others or have no associated audio in the audio packs.

| CRIWARE Audio Name            | RSDK Filename            |
| ----------------------------- | ------------------------ |
| RSDK-3-Global---MightyDeflect | Global/MightyDeflect.wav |
| RSDK-3-Global---MightyDrill   | Global/MightyDrill.wav   |
| RSDK-3-Global---MightyLand    | Global/MightyLand.wav    |
| RSDK-3-Global---MightyUnspin  | Global/MightyUnspin.wav  |
| RSDK-3-Global---OuttaHere     | Global/OuttaHere.wav     |
| RSDK-3-Global---RayDive       | Global/RayDive.wav       |
| RSDK-3-Global---RaySwoop      | Global/RaySwoop.wav      |
| _SE_Stage_Beep                | Stage/Beep.wav           |

[^1]: The jingles for 1UPs in Sonic 1 & 2 use an RSDK filename of simply `1up`. To get around issues involving the jingles being music in CRIWARE but sound effects in RSDK, the SFX RFL parameters include a `m_music` field that allows playing a song by audio name while playing a sound effect, which the `_SE_1Up` entries do by setting their music fields to `1up`. For the sake of clarity, these tables list the actual sound effect filenames instead.
[^2]: The jingles for obtaining a Chaos Emerald in Sonic 1 & 2 use an RSDK filename of simply `emerald`, similar to the `1up` entries.[^1] The `_SE_Emerald` sound effect parameter entries set their `m_music` fields to `emerald`. For the sake of clarity, these tables list the actual sound effect filenames instead.
