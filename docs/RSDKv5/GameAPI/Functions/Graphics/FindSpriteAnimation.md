# FindSpriteAnimation

## Description
Attempts to find an animation entry by name.

## Parameters
`aniFrames`

:   The SpriteAnimation to search in.

`name`

:   The name of the animation entry to search for.

## Return Value
Returns the ID of the found animation entry as a `uint16`. The return value will be `-1` if the animation entry wasn't found.

## Syntax
=== "C"

	``` c
	RSDK.FindSpriteAnimation(uint16 aniFrames, const char *name);
	```

=== "C++"

	``` cpp
	aniFrames.Find(const char *name);
	```

## Example
=== "C"

	``` c
	uint16 listID = RSDK.LoadSpriteAnimation(MyObject->aniFrames, "My Animation Entry");
	```

=== "C++"

	``` cpp
	uint16 listID = sVars->aniFrames.Find("My Animation Entry");
	```
