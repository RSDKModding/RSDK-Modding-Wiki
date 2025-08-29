# ProcessAnimation

## Description
Processes the animation applied to an animator.

## Parameters
`animator`

:   The animator used to handle animation of the frames.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.ProcessAnimation(Animator *animator);
	```

=== "C++"

	``` cpp
	animator.Process();
	```

## Example
=== "C"

	``` c
	RSDK.ProcessAnimation(&self->animator);
	```

=== "C++"

	``` cpp
	this->animator.Process();
	```
