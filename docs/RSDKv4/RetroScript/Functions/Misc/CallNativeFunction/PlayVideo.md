# PlayVideo

!!! note
    This native function only exists in SEGA Classics (2018) and is not available in the decompilations.

Loads and plays a video.

The videos are located outside of the datapack, inside the `res/raw/` folder of the APK. Like the mobile releases of RSDKv3, they use the `.mp4` file format.

## Parameters
`filePath`

:   The path to the video file, relative to the root of the `res/raw/` folder.

`unused`

:   Unused parameter.

## Return Value
None.

## Syntax
```
CallNativeFunction2(PlayVideo, string filePath, int unused)
```

## Example
```
CallNativeFunction2(PlayVideo, "Opening", 0)
```
