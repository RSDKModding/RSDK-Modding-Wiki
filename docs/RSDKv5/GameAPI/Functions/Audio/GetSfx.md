# GetSfx

Retrieves the ID of the given sound effect.

## Parameters
`sfxPath`

:   The path of the sound effect. SFX must be defined in the GameConfig/StageConfig in order to be valid.

## Return Value
Returns the ID of the sound effect as a `uint16`. The return value will be `-1` if the sound effect is invalid.

## Syntax
=== "C"

	``` c
	RSDK.GetSfx(const char *sfxName);
	```

=== "C++"

	``` cpp
	SoundFX.Get(const char *sfxName);
	```

## Example
=== "C"

	``` c
	MyObject->mySfx = RSDK.GetSfx("Global/SoundFX.wav");
	```

=== "C++"

	``` cpp
	sVars->mySfx.Get("Global/SoundFX.wav");
	```
