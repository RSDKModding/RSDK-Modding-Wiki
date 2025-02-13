# CheckPosOnScreen

## Description
Checks if the given position is on screen based on the given range.

## Parameters
`position`

:   The position in world-space to check for.

`range`

:   The area in world-space to check if on screen, centered to `position`.

## Return Value
Returns whether the position is on screen as a `bool32`.

## Syntax
=== "C"

	``` c
	RSDK.CheckPosOnScreen(Vector2 *position, Vector2 *range);
	```

=== "C++"

	``` cpp
	position->CheckOnScreen(Vector2 *range);
	```

## Example
=== "C"

	``` c
	bool32 onScreen = RSDK.CheckOnScreen(self->startPos, self->updateRange);
	```

=== "C++"

	``` cpp
	bool32 onScreen = this->startPos.CheckOnScreen(this->updateRange);
	```