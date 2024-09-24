# GetFrame

## Description
Retrieves a specific SpriteFrame from a SpriteAnimation.

## Parameters
- `aniFrames`
The SpriteAnimation to use frames from.
- `listID`
The index of the animation in the animation list to use frames from. In C++, this value is retrieved from `animator.animationID`.
- `frameID`
The index of the frame to get. In C++, this value is retrieved from `animator.frameID`.

## Return Value
Returns a pointer to the retrieved SpriteFrame. The return value will be `NULL` if an error occured.

## Syntax
=== "C"

	``` c
	RSDK.GetFrame(uint16 aniFrames, uint16 listID, int32 frameID);
	```

=== "C++"

	``` cpp
	animator.GetFrame(SpriteAnimation aniFrames);
	```

## Example
=== "C"

	``` c
	SpriteFrame *frame = RSDK.GetFrame(MyObject->aniFrames, 1, 0);
	```

=== "C++"

	``` cpp
	SpriteFrame *frame = animator.GetFrame(sVars->aniFrames);
	```