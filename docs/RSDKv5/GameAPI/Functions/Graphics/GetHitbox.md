# GetHitbox

## Description
Gets a Hitbox from the animator's current frame.

## Parameters
`animator`

:   The animator to get the hitbox from. the animation entry will use `animator.frames` and the frame id uses `animator.frameID`.

`hitboxID`

:   The hitbox ID to retrieve. Indices 0-7 are valid.

## Return Value
Returns a pointer to the desired hitbox of the animator's current frame as a `Hitbox`. The return value will be `NULL` if an error occurred.

## Syntax
=== "C"

	``` c
	RSDK.GetHitbox(Animator *animator, uint8 hitboxID);
	```

=== "C++"

	``` cpp
	animator.GetHitbox(uint8 hitboxID);
	```

## Example
=== "C"

	``` c
	Hitbox *hitbox = RSDK.GetHitbox(&self->animator, 0);
	```

=== "C++"

	``` cpp
	Hitbox *hitbox = this->animator.GetHitbox(0);
	```
