# Extracting a Datapack With RetroED

## Prerequisites
- [RetroED](/Tools/RetroED/README.md)
- The datapack you'd like to extract. If you haven't obtained/located it, read the Obtaining the Datapack guide for the desired game.

Open RetroED, then open `Tools` > `RSDK Unpacker`.

![Tools menu](/assets/images/RetroED/Tools-RSDKUnpacker.png)

Click `Select DataPack`, then locate and select the datapack you'd like to extract in the window that appears. If you're extracting an RSDKv1 or RSDKv2 datapack, you will need to select the appropriate option in the file extension dropdown menu.

![Select Datapack](/assets/images/RetroED/RSDKUnpacker-SelectDatapack.png)

If the datapack is for RSDKv4 or later, RetroED will ask you to select a file list. Choose the appropriate file list depending on the game you're extracting:

- `RSDKv4FileList.txt` - Sonic 1 & 2 (Mobile)
- `RSDKv5FileList.txt` - Sonic Mania
- `RSDKv5UFileList.txt` - Sonic Origins (All Games)

![Select File List](/assets/images/RetroED/RSDKUnpacker-SelectFileList.png)

RetroED will show a list of all files in the datapack. Check the list to make sure there are not a noticable amount of ambiguous `File #.bin` files. If there are, try selecting the datapack again and ensure you're selecting the correct file list.

![Datapack filelist](/assets/images/RetroED/RSDKUnpacker.png)

Click `Export DataPack`, then select the folder you'd like to save the exported `Data` folder (and `Bytecode` folder, if applicable) in.

![Export DataPack](/assets/images/RetroED/RSDKUnpacker-ExportDatapack.png)

If the files are extracted successfully, the text `Datapack unpacked to [location of extracted files]` should appear at the bottom of the RetroED window.