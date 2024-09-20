# Obtaining the Sonic 1 & 2 Datapacks

TODO: screenshots

The datapacks for Sonic 1 and 2 are required for both playing and modding the games.

## Prerequisites
=== "Android"

    - An APK extractor app (anything from the Google Play Store should work)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - Sonic 1 or Sonic 2 installed from the Google Play Store

=== "iOS"

    - [A jailbroken iOS device](https://ios.cfw.guide/)
    - Filza (Available on the BigBoss package repo: `http://apt.thebigboss.org/repofiles/cydia/`)
    - Sonic 1 or Sonic 2 installed from the App Store

=== "Sonic Origins (Steam)"

    - Steam installed and running
    - Sonic Origins installed from Steam

=== "Sonic Origins (EGS)"

    - Epic Games Launcher installed and running
    - Sonic Origins installed from the Epic Games Store

## Obtaining the Datapacks
=== "Android"

    TODO: Verify that this still works, I basically just copy-pasted my old tutorial from three years ago

    Use your APK extracting app of choice to get an APK file of Sonic 1 or Sonic 2.

    Open ZArchiver, then navigate to the folder containing the extracted APK file.

    Touch and hold down the APK file until a pop-up menu appears. Tap View. (If you don't see View, try tapping the file instead of holding it down.)

    Navigate into the `assets` folder, then scroll down until you find `Data.rsdk.xmf`. Touch and hold down the file, then tap Copy.

    Navigate into a folder you know you can easily access. Tap the clipboard button to paste the file into that folder.

    Touch and hold down the `Data.rsdk.xmf` file once more, then tap Rename. Name the file `Data.rsdk`, then tap OK.

=== "iOS"

    Open Filza, then tap the :octicons-star-24: Favorites icon at the bottom. In the menu that appears, tap Apps manager.

    ![Filza favorites menu](site:assets/images/iOS/Filza/Favorites.png){ width="25%" }

    A list of your installed apps will appear. Tap **the :octicons-info-24: info icon** next to Sonic 1 or Sonic 2, then choose Bundle.

    ![Apps manager](site:assets/images/iOS/Filza/AppsManager-S1.png){ width="25%" } ![Info menu](site:assets/images/iOS/Filza/Info-S1.png){ width="25%" }

    Tap `Sonic 1 US.app` or `Sonic 2 iOS US.app`, then you should see `Data.rsdk` and `DataSonic1.rsdk`. These are the datapacks for Sonic 2 and Sonic 1, respectively.

    ![Bundle directory](site:assets/images/iOS/Filza/Bundle-S1.png){ width="25%" } ![.app directory](site:assets/images/iOS/Filza/AppDirectory-S1.png){ width="25%" }

    To share the file with another app, tap the file, open the Hex Editor, then tap the :octicons-share-24: Share button in the top right corner. When you're finished, tap Done in the Hex Editor to close it.

    ![Open with ...](site:assets/images/iOS/Filza/OpenWith-S1.png){ width="25%" } ![Hex editor](site:assets/images/iOS/Filza/HexEditor-S1.png){ width="25%" } ![Share menu](site:assets/images/iOS/Filza/Share-S1.png){ width="25%" }

=== "Sonic Origins (Steam)"

    Open your Steam library, then right click Sonic Origins and click `Manage` > `Browse local files`.

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapacks for Sonic 1 and Sonic 2 are `Sonic1u.rsdk` and `Sonic2u.rsdk` respectively.

=== "Sonic Origins (EGS)"

    Open your Epic Games library, then right click Sonic Origins and click `Manage`. In the menu that appears, click the :material-folder-outline: Open Install Location button next to the Uninstall button.

    In the File Explorer window that appears, open `image/x64/raw/retro`. The datapacks for Sonic 1 and Sonic 2 are `Sonic1u.rsdk` and `Sonic2u.rsdk` respectively.