# LoadVideo

## Description
Loads and plays a video.

## Parameters
`filename`

:   The file path of the video to load, relative to `Data/Videos/`. Videos may **ONLY** be in OGV format.

`startDelay`

:   The amount of time, in seconds, to wait before playing the video after loading it.

`skipCallback`

:   The function that will be called every frame during the video to determine if it should be skipped. The function must return a `bool32` value. Setting this to `NULL` will make the video unskippable.

## Return Value
Returns `true` as a `bool32` if the video loaded successfully; otherwise, returns `false`.

## Syntax
=== "C"

	``` c
	RSDK.LoadVideo(const char *filename, double startDelay, bool32 (*skipCallback)());
	```

=== "C++"

	``` cpp
	Video::LoadVideo(const char *filename, double startDelay, bool32 (*skipCallback)());
	```

## Example
=== "C"

	``` c
	RSDK.LoadVideo("Opening.ogv", 0.0, MyObject_VideoSkipCB);
	```

=== "C++"

	``` cpp
	Video::LoadVideo("Opening.ogv", 0.0, VideoSkipCB);
	```