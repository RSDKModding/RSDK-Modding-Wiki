# StopSfx

## Description
Stops all instances of the given sound effect playing.

## Parameters
`sfx`

:   The slot of the sound effect.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.StopSfx(uint16 sfx);
	```

=== "C++"

	``` cpp
	SoundFX.Stop();
	```

## Example
=== "C"

	``` c
	RSDK.StopSfx(MyObject->mySfx);
	```

=== "C++"

	``` cpp
	sVars->mySfx.Stop();
	```