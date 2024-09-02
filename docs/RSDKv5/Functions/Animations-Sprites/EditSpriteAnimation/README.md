# EditSpriteAnimation

## Description
Loads a Sprite Animation and returns the id of it.

## Parameters

- `aniFrames`
The sprite animation to be edited.

- `listID`
The index of the animation entry to be edited

- `name`
The animation's name.

- `frameOffset`
The frame list offset to start this animation's frames from.

- `frameCount`
The number of frames in the animation.

- `speed`
The speed of the animation.

- `loopIndex`
The index of the frame the animation should loop from

- `rotationStyle`
The style of rotation snapping to use for frames in this animation. 

## Return Value
None.

## Syntax
=== "C"

	```c
	RSDK.EditSpriteAnimation(uint16 aniFrames, uint16 listID, const char *name, int32 frameOffset, uint16 frameCount, int16 speed, uint8 loopIndex, uint8 rotationStyle);
	```

=== "C++"

	```cpp
	SpriteAnimation.Edit(uint16 listID, const char *name, int32 frameOffset, uint16 frameCount, int16 speed, uint8 loopIndex, uint8 rotationStyle);
	```

## Examples
=== "C"

	```c
	RSDK.EditSpriteAnimation(MyObject->aniFrames, 1, "My Edited Anim", 8, 16, 1, 12, ROTSTYLE_NONE);
	```

=== "C++"

	```cpp
	sVars->aniFrames.Edit(1, "My Edited Anim", 8, 16, 1, 12, Animator::RotateNone);
	```