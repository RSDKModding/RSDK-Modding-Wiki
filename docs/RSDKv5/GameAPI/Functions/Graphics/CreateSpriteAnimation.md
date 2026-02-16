# CreateSpriteAnimation

Creates a SpriteAnimation based on the given parameters and returns the ID of it.

## Parameters
`identifier`

:   The animation's *unique* identifier. Once created, it can be used to retrieve this animation again.

`frameCount`

:   The maximum number of SpriteFrames this SpriteAnimation can store.

`listCount`

:   The maximum number of animation entries this SpriteAnimation can store.

`scope`

:   The asset's scope, may be `SCOPE_GLOBAL` or `SCOPE_STAGE`.

## Return Value
Returns the id of the created animation file as a `uint16`. The return value will be `-1` if the animation file failed to create.

## Syntax
=== "C"

	``` c
	RSDK.CreateSpriteAnimation(const char *identifier, uint32 frameCount, uint32 listCount, int32 scope);
	```

=== "C++"

	``` cpp
	SpriteAnimation.Create(const char *identifier, Scopes scope);
	```

## Example
=== "C"

	``` c
	MyObject->aniFrames = RSDK.CreateSpriteAnimation("Test/MyAnim.bin", 256, 32, SCOPE_STAGE);
	```

=== "C++"

	``` cpp
	sVars->aniFrames.Create("Test/MyAnim.bin", 256, 32, SCOPE_STAGE);
	```
