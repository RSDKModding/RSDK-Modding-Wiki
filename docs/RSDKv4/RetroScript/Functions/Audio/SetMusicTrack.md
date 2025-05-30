# SetMusicTrack

## Description
Loads a music file in the given track slot with the given loop point.

## Parameters
`path`

:   The file path to load the music file from, relative to `Data/Music/`. The music file must be in OGG format.

`trackID`

:   The trackList slot to load the music in.

`loopPoint`

:   The track's loop point, in samples. `0` will disable looping, `1` will loop from the beginning of the track, and anything else is the sample to loop from.

## Return Value
None.

## Syntax
```
SetMusicTrack(string path, int trackID, int loopPoint)
```

## Example
```
SetMusicTrack("Test.ogg", 0, 1)
```