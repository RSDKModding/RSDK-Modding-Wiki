# GetFrame

## Description
Retrieves a specific sprite frame from a sprite animation.

## Parameters

- `aniFrames`
The sprite animation to use frames from.

- `listID`
The index of the animation in the animation list to use frames from. In C++ this value is retrieved from `animator.animationID`.

- `frameID`
The index of the frame to get. In C++ this value is retrieved from `animator.frameID`.

## Return Value
This function returns an pointer to the retrieved sprite frame. The return value will be `NULL` if an error occured.

## Syntax
=== "C"

	```c
	RSDK.GetFrame(uint16 aniFrames, uint16 listID, int32 frameID);
	```

=== "C++"

	```cpp
	animator.GetFrame(SpriteAnimation aniFrames);
	```

## Examples
=== "C"

	```c
	SpriteFrame *frame = RSDK.GetFrame(MyObject->aniFrames, 1, 0);
	```

=== "C++"

	```cpp
	SpriteFrame *frame = animator.GetFrame(sVars->aniFrames);
	```