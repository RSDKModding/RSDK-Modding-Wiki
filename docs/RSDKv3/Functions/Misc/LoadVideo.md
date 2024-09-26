# LoadVideo

## Description
Loads and plays a video.

The compatible video formats and directory containing the videos vary depending on the version of the game/engine:

- Blit releases, RSDKv3 Decompilation:
    - `.ogv` files stored in the `videos` folder located outside of the datapack.
    - `.rsv` files stored in `Data/Sprites/`.
- Mobile releases: `.mp4` files located in a directory outside of the datapack depending on the version of Sonic CD.
- Sonic Origins: Videos are stored and handled by [Hedgehog Engine 2](/Games/SonicOrigins/HedgehogEngine2.md).
- RSDKv5U Decompilation: `.ogv` files stored in `Data/Videos/`.

## Parameters
`Name`

:   The name of the video file to load. Unless you're loading an RSV file, the file extension should be excluded. See the list above for what path this is relative to.

## Return Value
None.

## Syntax
```
LoadVideo(string Name)
```

## Examples
```
LoadVideo("Opening")
```
```
LoadVideo("Cutscenes/Opening.rsv")
```