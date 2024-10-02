# PlayStream

## Description
Plays the given music file, looping it if set to do so.

## Parameters
`filename`

:   The file path to load the music file from, relative to `Data/Music/`. The music file must be in OGG format.

`id`

:   The ID of the channel to play the track in. If the given number is `16` or higher, the channel will be automatically chosen.

`startPos`

:   The point of the track to start at, in samples. `0` will play the track from the beginning.

`loopPoint`

:   The track's loop point, in samples. `0` will disable looping, `1` will loop from the beginning of the track, and anything else is the sample to loop from.

`loadASync`

:   If true, loads the track asynchronously. This should usually be `true`, unless the track is for a video/image, in which case it should be `false`.

## Return Value
Returns the ID of the channel the track plays in as an `int32`. The return value will be `-1` if the track failed to play.

## Syntax
=== "C"

	``` c
	RSDK.PlayStream(const char *filename, uint32 slot, uint32 startPos, uint32 loopPoint, bool32 loadASync);
	```

=== "C++"

	``` cpp
	channels[uint8 slot].PlayStream(const char *filename, uint32 startPos, uint32 loopPoint, bool32 loadASync);
	```

## Example
=== "C"

	``` c
	RSDK.PlayStream("Test.ogg", 0, 0, 0, true);
	```

=== "C++"

	``` cpp
	channels[0].PlayStream("Test.ogg", 0, 0, true);
	```