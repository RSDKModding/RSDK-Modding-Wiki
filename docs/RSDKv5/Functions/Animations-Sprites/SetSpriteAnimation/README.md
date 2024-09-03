# SetSpriteAnimation

## Description
Applies a set of frames to an animator.

## Parameters

- `aniFrames`
The sprite animation to use frames from. id 0-1023 is valid, any other values will clear the existing sprite frames.

- `listID`
The index of the animation in the animation list to use frames from. negative indices or indices above the count are considered invalid and will result in the frames not being set.

- `animator`
The animator to apply the frames to. in C++ this function is a instance method of the animator instead. See examples for further info.

- `forceApply`
Whether or not to forcefully set the animation.
If true then the frames will be set unless the parameters are invalid.
If false then the frames will ONLY be set if they don't match the existing frames (same aniFrames, same listID, frameID is ignored) this allows multiple calls to not restart an animation if already playing.

- `frameID`
The index of the frame to set to.

## Return Value
None.

## Syntax
=== "C"

	```c
	RSDK.SetSpriteAnimation(uint16 aniFrames, uint16 listID, Animator *animator, bool32 forceApply, int32 frameID);
	```

=== "C++"

	```cpp
	animator.SetAnimation(SpriteAnimation aniFrames, uint16 listID, bool32 forceApply, int32 frameID);
	```

## Examples
=== "C"

	```c
	animator.SetAnimation(MyObject->aniFrames, 0, true, 0);
	```

=== "C++"

	```cpp
	this->animator.SetAnimation(sVars->aniFrames, 0, true, 0);
	```