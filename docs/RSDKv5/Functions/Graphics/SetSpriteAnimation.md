# SetSpriteAnimation

## Description
Applies a set of frames to an animator.

## Parameters
- `aniFrames`
The SpriteAnimation to use frames from. IDs 0-1023 are valid; any other values will clear the existing SpriteFrames.
- `listID`
The index of the animation in the animation list to use frames from. Negative indices or indices above the count are considered invalid and will result in the frames not being set.
- `animator`
The animator to apply the frames to. In C++, this function is an instance method of the animator instead. See the [example](#c_3) for further info.
- `forceApply`
Whether or not to forcefully set the animation.
If true, the frames will be set unless the parameters are invalid.
If false, the frames will ONLY be set if they don't match the existing frames (same aniFrames, same listID, frameID is ignored). This allows multiple calls to not restart an animation if it's already playing.
- `frameID`
The index of the frame to set to.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.SetSpriteAnimation(uint16 aniFrames, uint16 listID, Animator *animator, bool32 forceApply, int32 frameID);
	```

=== "C++"

	``` cpp
	animator.SetAnimation(SpriteAnimation aniFrames, uint16 listID, bool32 forceApply, int32 frameID);
	```

## Example
=== "C"

	``` c
	RSDK.SetSpriteAnimation(MyObject->aniFrames, 0, &self->animator, true, 0);
	```

=== "C++"

	``` cpp
	this->animator.SetAnimation(sVars->aniFrames, 0, true, 0);
	```