# SwapMusicTrack

## Description
Loads a music file in the given track slot with the given loop point. If the track slot that's currently playing is the one that's been overwritten, the new song will automatically play at a position based on the given ratio of the current track's position. The music file must be in OGG format.

## Parameters
- `path`
The file path to load the music file from, relative to `Data/Music/`.
- `trackID`
The trackList slot to load the music in.
- `loopPoint`
The track's loop point, in samples. 0 will disable looping, 1 will loop from the beginning of the track, and anything else is the sample to loop from.
- `ratio`
The ratio to base setting the position on if the track automatically plays as described above. This uses a 10000-based value, meaning 10000 = 1x music speed, 5000 = 0.5x music speed, etc.

## Return Value
None.

## Syntax
```
SwapMusicTrack(string path, int trackID, int loopPoint, int ratio)
```

## Example
```
SwapMusicTrack("Test2xSpeed.ogg", 0, 1, 20000)
```