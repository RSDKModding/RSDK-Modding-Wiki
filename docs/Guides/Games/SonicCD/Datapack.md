# Obtaining the Sonic CD Datapack

The datapack for Sonic CD is required for both playing and modding the game.

## Prerequisites
=== "Android"

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

    Open ZArchiver, then keep pressing `..` until you reach the root `/` directory.

    ![Root directory](/assets/images/Android/ZArchiver/Root.jpg){ width="25%" }

    Navigate to `/data/app/`, then find and open the folder attributed to Sonic CD.

    ![data directory](/assets/images/Android/ZArchiver/RootData.jpg){ width="25%" } ![app directory](/assets/images/Android/ZArchiver/RootDataApp-SCD.jpg){ width="25%" }

    Open the folder beginning with `com.sega.soniccd.classic`, then you will find a file named `split_packs.apk`. Tap the file and then select `View` in the menu that appears.

    ![Sonic CD directory](/assets/images/Android/ZArchiver/DataApp-SCD.jpg){ width="25%" } ![com.sega.soniccd.classic directory](/assets/images/Android/ZArchiver/com.sega.soniccd.jpg){ width="25%" } ![split_packs.apk menu](/assets/images/Android/ZArchiver/split_packs_View-SCD.jpg){ width="25%" }

    Open the `assets` folder, then you will find a file named `Data.rsdk.xmf`. Copy the file into a directory of your choice and then rename the file to `Data.rsdk`.

    ![split_packs.apk](/assets/images/Android/ZArchiver/split_packs-SCD.jpg){ width="25%" } ![assets directory](/assets/images/Android/ZArchiver/assets-SCD.jpg){ width="25%" }

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

    ![Steam library](/assets/images/Steam/BrowseLocalFiles-SonicOrigins.png)

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapack for Sonic CD is `SonicCDu.rsdk`.

    ![Game directory](/assets/images/Windows/FileExplorer/SonicOrigins/RSDK-SCD.png)

=== "Sonic Origins (EGS)"

    Open your Epic Games library, then right click Sonic Origins and click `Manage`. In the menu that appears, click the :material-folder-search-outline: Open Install Location button next to the Uninstall button.

    TODO: screenshot of the above

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapack for Sonic CD is `SonicCDu.rsdk`.

    ![Game directory](/assets/images/Windows/FileExplorer/SonicOrigins/RSDK-SCD.png)

=== "Blit (Steam)"

    Open your Steam library, then right click Sonic CD and click `Manage` > `Browse local files`.

    ![Steam library](/assets/images/Steam/BrowseLocalFiles-SonicCD.png)

    In the File Explorer window that appears, the datapack is `Data.rsdk`.

    ![Game directory](/assets/images/Windows/FileExplorer/SonicCD/RSDK-Steam.png)