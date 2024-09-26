# GetFrameID

## Description
Gets the `unicode char` value of the animator's current frame.

## Parameters
`animator`

:   The animator to get the unicode char from. The animation entry will use `animator.frames` and the frame ID uses `animator.frameID`.

## Return Value
Returns the `unicode char` value of the animator's current frame as a `uint16`. The return value will be `0` if an error occurred.

## Syntax
=== "C"

	``` c
	RSDK.GetFrameID(Animator *animator);
	```

=== "C++"

	``` cpp
	Animator.GetFrameID();
	```

## Example
=== "C"

	``` c
	uint16 id = RSDK.GetFrameID(&animator);
	```

=== "C++"

	``` cpp
	uint16 id = animator.GetFrameID();
	```