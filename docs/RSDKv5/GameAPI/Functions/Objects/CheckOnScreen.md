# CheckOnScreen

## Description
Checks if the given entity is on screen based on the given range.

## Parameters
`entity`

:   The pointer for the entity to check for.

`range`

:   The area in world-space to check if on screen, centered to `entity->position`. If set to `NULL`, `entity->updateRange` will be used instead.

## Return Value
Returns whether the entity is on screen as a `bool32`.

## Syntax
=== "C"

	``` c
	RSDK.CheckOnScreen(void *entity, Vector2 *range);
	```

=== "C++"

	``` cpp
	entity->CheckOnScreen(Vector2 *range);
	```

## Example
=== "C"

	``` c
	bool32 onScreen = RSDK.CheckOnScreen(self, NULL);
	```

=== "C++"

	``` cpp
	bool32 onScreen = this->CheckOnScreen(nullptr);
	```