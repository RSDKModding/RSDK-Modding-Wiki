# PlayVideo

!!! note
    This native function only exists in SEGA Classics (2018).

Loads and plays a video stored inside the `res/raw/` folder of the APK. Similar to the v3 counterpart, the videos are stored in an `.mp4` file format

## Parameters
`filePath`

:   The path to the video file, relative to the root of `res/raw/` folder.

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
