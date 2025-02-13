# PlaySfx

## Description
Plays the sound effect in the given slot, looping it if a loop point is set.

## Parameters
`sfx`

:   The slot of the sound effect.

`loopPoint`

:   The sound effect's loop point, in samples. `0` will disable looping, `1` will loop from the beginning of the sound effect, and anything else is the sample to loop from.

`priority`

:   The priority of the sound effect.

## Return Value
Returns the ID of the channel the sound effect plays in as an `int32`. The return value will be `-1` if the sound effect failed to play.

## Syntax
=== "C"

	``` c
	RSDK.PlaySfx(uint16 sfx, uint32 loopPoint, uint32 priority);
	```

=== "C++"

	``` cpp
	SoundFX.Play(uint32 loopPoint, uint32 priority);
	```
	``` cpp
	SoundFX.Play(); // loopPoint and priority default to 0 and 0xFF, respectively
	```

## Example
=== "C"

	``` c
	RSDK.PlaySfx(MyObject->mySfx, 0, 0xFF);
	```

=== "C++"

	``` cpp
	sVars->mySfx.Play(0, 0xFF);
	```
	``` cpp
	sVars->mySfx.Play();
	```