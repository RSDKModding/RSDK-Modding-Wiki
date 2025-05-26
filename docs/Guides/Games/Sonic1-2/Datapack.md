# Obtaining the Sonic 1 & 2 Datapacks

The datapacks for Sonic 1 and 2 are required for both playing and modding the games.

## Prerequisites
=== "Android"

    - An APK extractor app (anything from the Google Play Store should work)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - [Sonic 1](https://play.google.com/store/apps/details?id=com.sega.sonic1px) or [Sonic 2](https://play.google.com/store/apps/details?id=com.sega.sonic2.runner) installed from the Google Play Store

=== "iOS"

    - [A jailbroken iOS device](https://ios.cfw.guide/)
    - Filza (Available on the BigBoss package repo: `http://apt.thebigboss.org/repofiles/cydia/`)
    - [Sonic 1](https://apps.apple.com/au/app/sonic-the-hedgehog-classic/id316050001) or [Sonic 2](https://apps.apple.com/au/app/sonic-the-hedgehog-2-classic/id347415188) installed from the App Store

=== "Sonic Origins (Steam)"

    - Steam installed and running
    - [Sonic Origins installed from Steam](https://store.steampowered.com/app/1794960)

=== "Sonic Origins (EGS)"

    - Epic Games Launcher installed and running
    - [Sonic Origins installed from the Epic Games Store](https://store.epicgames.com/en-US/p/sonic-origins)

## Obtaining the Datapacks
=== "Android"

    TODO: -Verify that this still works, I basically just copy-pasted my old tutorial from three years ago, also needs screenshots- Verified by Ivan951236
![Screenshot_20250526-211426_ZArchiver](https://github.com/user-attachments/assets/dafa22b3-2c97-407a-a888-2d26d4c35ec9)
    Use your APK extracting app of choice to get an APK file of Sonic 1 or Sonic 2.
![Screenshot_20250526-211426_ZArchiver](https://github.com/user-attachments/assets/dafa22b3-2c97-407a-a888-2d26d4c35ec9)

    Open ZArchiver, then navigate to the folder containing the extracted APK file.
![Screenshot_20250526-211451_ZArchiver](https://github.com/user-attachments/assets/8003e360-e2df-45e6-879a-aa46043b9dc7)

    Touch and hold down the APK file until a pop-up menu appears. Tap View. (If you don't see View, try tapping the file instead of holding it down.)
![Screenshot_20250526-211509_ZArchiver](https://github.com/user-attachments/assets/5d2e6c9f-0287-4dbb-ab06-3303cbed0e71)

    Navigate into the `assets` folder, then scroll down until you find `Data.rsdk.xmf`. Touch and hold down the file, then tap Copy.
![Screenshot_20250526-211509_ZArchiver](https://github.com/user-attachments/assets/5d2e6c9f-0287-4dbb-ab06-3303cbed0e71)
    Navigate into a folder you know you can easily access. Tap the clipboard button to paste the file into that folder.
![Screenshot_20250526-211558_ZArchiver](https://github.com/user-attachments/assets/dae0acbf-2c4c-4f16-83c1-179dd0a6a10c)

    Touch and hold down the `Data.rsdk.xmf` file once more, then tap Rename. Name the file `Data.rsdk`, then tap OK.

=== "iOS"

    Open Filza, then tap the :octicons-star-24: Favorites icon at the bottom. In the menu that appears, tap Apps manager.

    ![Filza favorites menu](/assets/images/iOS/Filza/Favorites.png){ width="25%" }

    A list of your installed apps will appear. Tap **the :octicons-info-24: info icon** next to Sonic 1 or Sonic 2, then choose Bundle.

    ![Apps manager](/assets/images/iOS/Filza/AppsManager-S1.png){ width="25%" } ![Info menu](/assets/images/iOS/Filza/Info-S1.png){ width="25%" }

    Tap `Sonic 1 US.app` or `Sonic 2 iOS US.app`, then you should see `Data.rsdk` and `DataSonic1.rsdk`. These are the datapacks for Sonic 2 and Sonic 1, respectively.

    ![Bundle directory](/assets/images/iOS/Filza/Bundle-S1.png){ width="25%" } ![.app directory](/assets/images/iOS/Filza/AppDirectory-S1.png){ width="25%" }

    To share the file with another app, tap the file, open the Hex Editor, then tap the :octicons-share-24: Share button in the top right corner. When you're finished, tap Done in the Hex Editor to close it.

    ![Open with ...](/assets/images/iOS/Filza/OpenWith-S1.png){ width="25%" } ![Hex editor](/assets/images/iOS/Filza/HexEditor-S1.png){ width="25%" } ![Share menu](/assets/images/iOS/Filza/Share-S1.png){ width="25%" }

=== "Sonic Origins (Steam)"

    Open your Steam library, then right click Sonic Origins and click `Manage` > `Browse local files`.

    ![Steam library](/assets/images/Steam/BrowseLocalFiles-SonicOrigins.png)

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapacks for Sonic 1 and Sonic 2 are `Sonic1u.rsdk` and `Sonic2u.rsdk` respectively.

    ![Game directory](/assets/images/Windows/FileExplorer/SonicOrigins/RSDK-S12.png)

=== "Sonic Origins (EGS)"

    Open your Epic Games library, then right click Sonic Origins and click `Manage`. In the menu that appears, click the :material-folder-search-outline: Open Install Location button next to the Uninstall button.

    TODO: screenshot of the above

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapacks for Sonic 1 and Sonic 2 are `Sonic1u.rsdk` and `Sonic2u.rsdk` respectively.

    ![Game directory](/assets/images/Windows/FileExplorer/SonicOrigins/RSDK-S12.png)
