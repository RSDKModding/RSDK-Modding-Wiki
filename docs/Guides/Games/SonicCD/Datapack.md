# Obtaining the Sonic CD Datapack

TODO: screenshots

The datapack for Sonic CD is required for both playing and modding the game.

## Prerequisites
=== "Android"

    - An Android device **under OS version 12** OR with root access
    - An APK extractor app (anything from the Google Play Store should work)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - Sonic CD installed from the Google Play Store

=== "iOS"

    - [A jailbroken iOS device](https://ios.cfw.guide/)
    - Filza (Available on the BigBoss package repo: `http://apt.thebigboss.org/repofiles/cydia/`)
    - Sonic CD installed from the App Store

=== "Sonic Origins (Steam)"

    - Steam installed and running
    - Sonic Origins installed from Steam

=== "Sonic Origins (EGS)"

    - Epic Games Launcher installed and running
    - Sonic Origins installed from the Epic Games Store

=== "Blit (Steam)"

    - Steam installed and running
    - Sonic CD installed from Steam

## Obtaining the Datapack
=== "Android"

    TODO: Verify that this still works, keep in mind the 

    Use your APK extracting app of choice to get an APK file of Sonic CD.

    Open ZArchiver, then navigate to the folder containing the extracted APK file.

    Touch and hold down the APK file until a pop-up menu appears. Tap View. (If you don't see View, try tapping the file instead of holding it down.)

    Navigate into the `assets` folder, then scroll down until you find `Data.rsdk.xmf`. Touch and hold down the file, then tap Copy.

    Navigate into a folder you know you can easily access. Tap the clipboard button to paste the file into that folder.

    Touch and hold down the `Data.rsdk.xmf` file once more, then tap Rename. Name the file `Data.rsdk`, then tap OK.

=== "iOS"

    Open Filza, then tap the :octicons-star-24: Favorites icon at the bottom. In the menu that appears, tap Apps manager.

    ![Filza favorites menu](/assets/images/iOS/Filza/Favorites.png){ width="25%" }

    A list of your installed apps will appear. Tap **the :octicons-info-24: info icon** next to Sonic CD, then choose Bundle.

    ![Apps manager](/assets/images/iOS/Filza/AppsManager-SCD.png){ width="25%" } ![Info menu](/assets/images/iOS/Filza/Info-SCD.png){ width="25%" }

    Tap `Sonic CD iOS.app`, then you should see the datapack `Data.rsdk`.

    ![Bundle directory](/assets/images/iOS/Filza/Bundle-SCD.png){ width="25%" } ![.app directory](/assets/images/iOS/Filza/AppDirectory-SCD.png){ width="25%" }

    To share one of the files with another app, tap the file, open the Hex Editor, then tap the :octicons-share-24: Share button in the top right corner. When you're finished, tap Done in the Hex Editor to close it.

    ![Open with ...](/assets/images/iOS/Filza/OpenWith-SCD.png){ width="25%" } ![Hex editor](/assets/images/iOS/Filza/HexEditor-SCD.png){ width="25%" } ![Share menu](/assets/images/iOS/Filza/Share-SCD.png){ width="25%" }

=== "Sonic Origins (Steam)"

    Open your Steam library, then right click Sonic Origins and click `Manage` > `Browse local files`.

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapack for Sonic CD is `SonicCDu.rsdk`.

=== "Sonic Origins (EGS)"

    Open your Epic Games library, then right click Sonic Origins and click `Manage`. In the menu that appears, click the :material-folder-outline: Open Install Location button next to the Uninstall button.

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapack for Sonic CD is `SonicCDu.rsdk`.

=== "Blit (Steam)"

    Open your Steam library, then right click Sonic CD and click `Manage` > `Browse local files`.

    In the File Explorer window that appears, the datapack is `Data.rsdk`.