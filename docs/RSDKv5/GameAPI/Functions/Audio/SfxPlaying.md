# SfxPlaying

## Description
Checks if the given sound effect is playing in any channels.

## Parameters
`sfx`

:   The slot of the sound effect.

## Return Value
Returns the result of the check as a `bool32`.

## Syntax
=== "C"

	``` c
	RSDK.SfxPlaying(uint16 sfx);
	```

=== "C++"

	``` cpp
	SoundFX.IsPlaying();
	```

## Example
=== "C"

	``` c
	bool32 isPlaying = RSDK.SfxPlaying(MyObject->mySfx);
	```

=== "C++"

	``` cpp
	bool32 isPlaying = sVars->mySfx.IsPlaying();
	```