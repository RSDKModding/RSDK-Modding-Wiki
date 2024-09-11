# ProcessAnimation

## Description
Processes the animation applied to an animator.

## Parameters

- `animator`
The animator used to handle animation of the frames.

## Return Value
None.

## Syntax
=== "C"

	```c
	RSDK.ProcessAnimation(Animator *animator);
	```

=== "C++"

	```cpp
	animator.Process();
	```

## Examples
=== "C"

	```c
	RSDK.ProcessAnimation(&animator);
	```

=== "C++"

	```cpp
	animator.Process();
	```