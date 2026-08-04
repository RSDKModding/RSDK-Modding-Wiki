# SetMusicTrack

Loads a music file in the given track slot with the given loop point.

## Parameters
`Path`

:   The file path to load the music file from, relative to `Data/Music/`. The music file must be in OGG format.

`TrackID`

:   The trackList slot to load the music in.

`Loop`

:   Determines if the track should loop. `false` will disable looping, and `true` will loop from the beginning of the track.

## Return Value
None.

## Syntax
```
SetMusicTrack(string Path, int TrackID, bool Loop)
```

## Example
```
SetMusicTrack("Test.ogg", 0, true)
```
