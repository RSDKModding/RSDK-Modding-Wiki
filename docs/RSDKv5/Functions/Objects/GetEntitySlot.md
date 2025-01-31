# GetEntitySlot

## Description
Gets the slot ID of an entity.

## Parameters
`entity`

:   The entity to retrieve the slot ID of.

## Return Value
Returns the slot ID of the entity as an `int32`.

## Syntax
=== "C"

	``` c
	RSDK.GetEntitySlot(void *entity);
	```

=== "C++"

	``` cpp
	entity->Slot();
	```

## Example
=== "C"

	``` c
	int32 entitySlot = RSDK.GetEntitySlot(self);
	```

=== "C++"

	``` cpp
	int32 entitySlot = this->Slot();
	```