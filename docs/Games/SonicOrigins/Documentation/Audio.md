# Sonic Origins Audio

Rather than storing or playing audio in the Retro Engine, [Sonic Origins](../README.md) uses [CRIWARE](https://www.criware.com/en/index.html) middleware to play music and sound effects. To achieve this, RSDK communicates with [Hedgehog Engine 2](../HedgehogEngine2.md) by passing the filename of the audio file attempting to be played to the game's Reflections parameters, stored in the `retro_rfl_param.rfl` file in `raw/rfl/rfl_resident.pac`. From there, HE2 plays the audio file associated with the given filename, if one exists.

This page contains tables listing all of the audio files in Sonic Origins' ACB/AWB audio packs, as well as their associated RSDK filenames in the RFL parameters.

!!! note
    Entries with a blank RSDK filename are unused or only used in the Museum.

!!! note
    The `.wav` file extensions in the RSDK filenames for sound effects are not present in the actual Reflections parameters. They have been added in this page for the sake of clarity.

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
| ID | CRIWARE Audio Name      | RSDK Filename        |
| -- | ----------------------- | -------------------- |
| 0  | DA03_R1A_J              | JP/R1A.ogg           |
| 1  | DA04_R1C_J              | JP/R1C.ogg           |
| 2  | DA05_R1D_J              | JP/R1D.ogg           |
| 3  | DA06_R3A_J              | JP/R3A.ogg           |
| 4  | DA07_R3C_J              | JP/R3C.ogg           |
| 5  | DA08_R3D_J              | JP/R3D.ogg           |
| 6  | DA09_R4A_J              | JP/R4A.ogg           |
| 7  | DA10_R4C_J              | JP/R4C.ogg           |
| 8  | DA11_R4D_J              | JP/R4D.ogg           |
| 9  | DA12_R5A_J              | JP/R5A.ogg           |
| 10 | DA13_R5C_J              | JP/R5C.ogg           |
| 11 | DA14_R5D_J              | JP/R5D.ogg           |
| 12 | DA15_R6A_J              | JP/R6A.ogg           |
| 13 | DA16_R6C_J              | JP/R6C.ogg           |
| 14 | DA17_R6D_J              | JP/R6D.ogg           |
| 15 | DA18_R7A_J              | JP/R7A.ogg           |
| 16 | DA19_R7C_J              | JP/R7C.ogg           |
| 17 | DA20_R7D_J              | JP/R7D.ogg           |
| 18 | DA21_R8A_J              | JP/R8A.ogg           |
| 19 | DA22_R8C_J              | JP/R8C.ogg           |
| 20 | DA23_R8D_J              | JP/R8D.ogg           |
| 21 | DA24_Boss_J             | JP/Boss.ogg          |
| 22 | DA25_FinalBoss_J        | JP/FinalBoss.ogg     |
| 23 | DA32_SpecialStage_J     | JP/SpecialStage.ogg  |
| 24 | DA33_DAGarden_J         | JP/DAGarden.ogg      |
| 25 | PCM10_R1B               | R1B.ogg              |
| 26 | PCM11_R3B               | R3B.ogg              |
| 27 | PCM12_R4B               | R4B.ogg              |
| 28 | PCM13_R5B               | R5B.ogg              |
| 29 | PCM14_R6B               | R6B.ogg              |
| 30 | PCM15_R7B               | R7B.ogg              |
| 31 | PCM16_R8B               | R8B.ogg              |
| 32 | DA03_R1A_E              | US/R1A.ogg           |
| 33 | DA04_R1C_E              | US/R1C.ogg           |
| 34 | DA05_R1D_E              | US/R1D.ogg           |
| 35 | DA06_R3A_E              | US/R3A.ogg           |
| 36 | DA07_R3C_E              | US/R3C.ogg           |
| 37 | DA08_R3D_E              | US/R3D.ogg           |
| 38 | DA09_R4A_E              | US/R4A.ogg           |
| 39 | DA10_R4C_E              | US/R4C.ogg           |
| 40 | DA11_R4D_E              | US/R4D.ogg           |
| 41 | DA12_R5A_E              | US/R5A.ogg           |
| 42 | DA13_R5C_E              | US/R5C.ogg           |
| 43 | DA14_R5D_E              | US/R5D.ogg           |
| 44 | DA15_R6A_E              | US/R6A.ogg           |
| 45 | DA16_R6C_E              | US/R6C.ogg           |
| 46 | DA17_R6D_E              | US/R6D.ogg           |
| 47 | DA18_R7A_E              | US/R7A.ogg           |
| 48 | DA19_R7C_E              | US/R7C.ogg           |
| 49 | DA20_R7D_E              | US/R7D.ogg           |
| 50 | DA21_R8A_E              | US/R8A.ogg           |
| 51 | DA22_R8C_E              | US/R8C.ogg           |
| 52 | DA23_R8D_E              | US/R8D.ogg           |
| 53 | DA24_Boss_E             | US/Boss.ogg          |
| 54 | DA25_FinalBoss_E        | US/FinalBoss.ogg     |
| 55 | DA32_SpecialStage_E     | US/SpecialStage.ogg  |
| 56 | DA26_TitleScreen_J      | JP/TitleScreen.ogg   |
| 57 | DA27_TitleScreen_J      |                      |
| 58 | DA28_ZoneComplete_J     | JP/ZoneComplete.ogg  |
| 59 | DA29_SpeedShoes_J       | JP/SpeedShoes.ogg    |
| 60 | DA30_Invincibility_J    | JP/Invincibility.ogg |
| 61 | DA31_GameOver_J         | JP/GameOver.ogg      |
| 62 | DA26_TitleScreen_E      | US/TitleScreen.ogg   |
| 62 | DA27_TitleScreen_E      |                      |
| 63 | DA28_ZoneComplete_E     | US/ZoneComplete.ogg  |
| 64 | DA29_SpeedShoes_E       | US/SpeedShoes.ogg    |
| 65 | DA30_Invincibility_E    | US/Invincibility.ogg |
| 66 | DA31_GameOver_E         | US/GameOver.ogg      |
| 67 | DA33_DAGarden_E         | US/DAGarden.ogg      |
| 68 | SCD_MOV1_Opening_E      |                      |
| 69 | SCD_MOV2_Ending_E       |                      |
| 70 | SCD_MOV2_Ending         |                      |
| 71 | SCD_MOV1_Opening        |                      |
| 72 | RSDK_SCD_J---TimeAttack | JP/TimeAttack.ogg    |

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
| ID | CRIWARE Audio Name               | RSDK Filename         |
| -- | -------------------------------- | --------------------- |
| 0  | 3K2B_Chaos_Emerald               |                       |
| 1  | 3K01_Angel_Island1               | 3K/AngelIsland1.ogg   |
| 2  | 3K02_Angel_Island2               | 3K/AngelIsland2.ogg   |
| 3  | 3K03_Hydro_City1                 | 3K/Hydrocity1.ogg     |
| 4  | 3K04_Hydro_City2                 | 3K/Hydrocity2.ogg     |
| 5  | 3K05_Marble_Garden1              | 3K/MarbleGarden1.ogg  |
| 6  | 3K06_Marble_Garden2              | 3K/MarbleGarden2.ogg  |
| 7  | 3K09_Flying_Battery1             | 3K/FlyingBattery1.ogg |
| 8  | 3K0A_Flying_Battery2             | 3K/FlyingBattery2.ogg |
| 9  | 3K0F_Mushroom_Hill1              | 3K/MushroomHill1.ogg  |
| 10 | 3K10_Mushroom_Hill2              | 3K/MushroomHill2.ogg  |
| 11 | 3K11_Sandopolis1                 | 3K/Sandopolis1.ogg    |
| 12 | 3K12_Sandopolis2                 | 3K/Sandopolis2.ogg    |
| 13 | 3K13_Lava_Reef                   | 3K/LavaReef1.ogg      |
| 14 | 3K14_Hidden_Palace               | 3K/LavaReef2.ogg      |
| 15 | 3K15_Sky_Sanctuary               | 3K/SkySanctuary.ogg   |
| 16 | 3K16_Death_Egg1                  | 3K/DeathEgg1.ogg      |
| 17 | 3K17_Death_Egg2                  | 3K/DeathEgg2.ogg      |
| 18 | 3K18_Boss1                       | 3K/MiniBossK.ogg      |
| 19 | 3K19_Boss2                       | 3K/Boss.ogg           |
| 20 | 3K1A_Last_Boss                   | 3K/Doomsday.ogg       |
| 20 | 3K1A_Last_Boss                   | 3K/TheDoomsday.ogg    |
| 21 | 3K1B_Bonus_Stage_Glowing_Spheres | 3K/SphereBonus.ogg    |
| 22 | 3K1C_Special_Stage               | 3K/SpecialStage.ogg   |
| 23 | 3K1D_Bonus_Stage_Slot_Machine    | 3K/SlotBonus.ogg      |
| 24 | 3K1E_Bonus_Stage_Gumball_Machine | 3K/GachaBonus.ogg     |
| 25 | 3K20_2Pvs_Azure_Lake             | 3K/AzureLake.ogg      |
| 26 | 3K21_2Pvs_Balloon_Park           | 3K/BalloonPark.ogg    |
| 27 | 3K22_2Pvs_Desert_Palace          | 3K/DesertPalace.ogg   |
| 28 | 3K23_2Pvs_Chrome_Gadget          | 3K/ChromeGadget.ogg   |
| 29 | 3K24_2Pvs_Endless_Mine           | 3K/EndlessMine.ogg    |
| 30 | 3K27_Game_Over                   | 3K/GameOver.ogg       |
| 31 | 3K28_Continue                    | 3K/Continue.ogg       |
| 32 | 3K29_Stage_Clear                 | 3K/ActClear.ogg       |
| 33 | 3K2F_Menu_Data_Select            | 3K/Options.ogg        |
| 34 | 3K31_Timer                       | 3K/Drowning.ogg       |
| 35 | 3KF0_Title_STH3                  | 3K/TitleScreen3.ogg   |
| 36 | 3KF1_1up_STH3                    | 3K/Medallion.ogg      |
| 37 | 3KF2_Invincible_STH3             | 3K/Invincibility3.ogg |
| 38 | 3KF3_All_Clear_STH3              |                       |
| 39 | 3KF7_Blue_Spheres                | 3K/Results.ogg        |
| 40 | 3K1F-31_Knuckles_SK              | 3K/Knuckles3.ogg      |
| 40 | 3K1F-31_Knuckles_SK              | 3K/KnucklesK.ogg      |
| 41 | 3K25_Title_SK                    | 3K/TitleScreenK.ogg   |
| 42 | 3K2A_1up_SK                      | 3K/1Up3.ogg           |
| 43 | 3K2C_Invincible_SK               | 3K/InvincibilityK.ogg |
| 44 | 3K30_Final_Eggman                | 3K/FinalBoss.ogg      |
| 45 | 3K32_All_Clear_SK                | 3K/Victory.ogg        |
| 46 | 3K26_Credits_SK                  | 3K/Credits.ogg        |
| 47 | 3KF4_New_Super_Sonic             | 3K/Super.ogg          |
| 48 | 3K07_Carnival_Night1             | 3K/CarnivalNight1.ogg |
| 49 | 3K08_Carnival_Night2             | 3K/CarnivalNight2.ogg |
| 50 | 3K0B_Ice_Cap1                    | 3K/IceCap1.ogg        |
| 51 | 3K0C_Ice_Cap2                    | 3K/IceCap2.ogg        |
| 52 | 3K0D_Launch_Base1                | 3K/LaunchBase1.ogg    |
| 53 | 3K0E_Launch_Base2                | 3K/LaunchBase2.ogg    |
| 54 | 3K2D_2Pvs_Menu_SK                | 3K/Competition.ogg    |
| 55 | 3KF5_Unused_Song                 | 3K/Perfect.ogg        |
| 56 | 3KF6_Unused_Ending               | 3K/Ending.ogg         |
| 57 | RSDK-3---Medallion               | 3K/Medallion.ogg      |

### Fast Music
All fast (Speed Shoes) music plays the original music at 1.2x speed.

| CRIWARE Audio Name      | RSDK Filename           |
| ----------------------- | ----------------------- |
| 3K01_Angel_Island1      | 3K/F/AngelIsland1.ogg   |
| 3K02_Angel_Island2      | 3K/F/AngelIsland2.ogg   |
| 3K03_Hydro_City1        | 3K/F/Hydrocity1.ogg     |
| 3K04_Hydro_City2        | 3K/F/Hydrocity2.ogg     |
| 3K05_Marble_Garden1     | 3K/F/MarbleGarden1.ogg  |
| 3K06_Marble_Garden2     | 3K/F/MarbleGarden2.ogg  |
| 3K09_Flying_Battery1    | 3K/F/FlyingBattery1.ogg |
| 3K0A_Flying_Battery2    | 3K/F/FlyingBattery2.ogg |
| 3K0F_Mushroom_Hill1     | 3K/F/MushroomHill1.ogg  |
| 3K10_Mushroom_Hill2     | 3K/F/MushroomHill2.ogg  |
| 3K11_Sandopolis1        | 3K/F/Sandopolis1.ogg    |
| 3K12_Sandopolis2        | 3K/F/Sandopolis2.ogg    |
| 3K13_Lava_Reef          | 3K/F/LavaReef1.ogg      |
| 3K14_Hidden_Palace      | 3K/F/LavaReef2.ogg      |
| 3K15_Sky_Sanctuary      | 3K/F/SkySanctuary.ogg   |
| 3K16_Death_Egg1         | 3K/F/DeathEgg1.ogg      |
| 3K17_Death_Egg2         | 3K/F/DeathEgg2.ogg      |
| 3K18_Boss1              | 3K/F/Miniboss.ogg       |
| 3K18_Boss1              | 3K/F/MiniBossK.ogg      |
| 3K19_Boss2              | 3K/F/Boss.ogg           |
| 3K1A_Last_Boss          | 3K/F/Doomsday.ogg       |
| 3K20_2Pvs_Azure_Lake    | 3K/F/AzureLake.ogg      |
| 3K21_2Pvs_Balloon_Park  | 3K/F/BalloonPark.ogg    |
| 3K22_2Pvs_Desert_Palace | 3K/F/DesertPalace.ogg   |
| 3K23_2Pvs_Chrome_Gadget | 3K/F/ChromeGadget.ogg   |
| 3K24_2Pvs_Endless_Mine  | 3K/F/EndlessMine.ogg    |
| 3KF2_Invincible_STH3    | 3K/F/Invincibility3.ogg |
| 3K1F-31_Knuckles_SK     | 3K/F/Knuckles3.ogg      |
| 3K1F-31_Knuckles_SK     | 3K/F/KnucklesK.ogg      |
| 3K2C_Invincible_SK      | 3K/F/InvincibilityK.ogg |
| 3K30_Final_Eggman       | 3K/F/FinalBoss.ogg      |
| 3K07_Carnival_Night1    | 3K/F/CarnivalNight1.ogg |
| 3K08_Carnival_Night2    | 3K/F/CarnivalNight2.ogg |
| 3K0B_Ice_Cap1           | 3K/F/IceCap1.ogg        |
| 3K0C_Ice_Cap2           | 3K/F/IceCap2.ogg        |
| 3K0D_Launch_Base1       | 3K/F/LaunchBase1.ogg    |
| 3K0E_Launch_Base2       | 3K/F/LaunchBase2.ogg    |

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

[^1]: The sound effects for 1UPs in Sonic 1 & 2 use an RSDK filename of simply `1up`, despite RSDK never attempting to play a file named `1up.wav` in the root SoundFX folder. This is likely resolved before HE2 references the RFL parameters, possibly as a workaround for these files being recognized as sound effects in the Retro Engine, but played as music in Hedgehog Engine 2. For the sake of clarity, these tables list the actual sound effect filenames instead.
[^2]: The sound effects for obtaining an emerald use an RSDK filename of simply `emerald`, similar to Sonic 1 & 2's `1up` entries.[^1] For the sake of clarity, these tables list the actual sound effect filenames instead.
