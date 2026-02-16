# LoadSpriteAnimation

Loads a SpriteAnimation and returns the ID of it.

## Parameters
`path`

:   The file path to load the SpriteAnimation file from, relative to `Data/Sprites/`.

`scope`

:   The asset's scope, may be `SCOPE_GLOBAL` or `SCOPE_STAGE`.

## Return Value
Returns the ID of the loaded animation file as a `uint16`. The return value will be `-1` if the animation file failed to load.

## Syntax
=== "C"

	``` c
	RSDK.LoadSpriteAnimation(const char* path, Scopes scope);
	```

=== "C++"

	``` cpp
	SpriteAnimation.Load(const char* path, Scopes scope);
	```

## Example
=== "C"

	``` c
	MyObject->aniFrames = RSDK.LoadSpriteAnimation("Test/MyAnim.bin", SCOPE_STAGE);
	```

=== "C++"

	``` cpp
	sVars->aniFrames.Load("Test/MyAnim.bin", SCOPE_STAGE);
	```
