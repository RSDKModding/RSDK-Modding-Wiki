# AddDrawListRef

## Description
Adds a reference to an entity to a draw group.

## Parameters
`drawGroup`

:   The draw group to add the entity to.

`entitySlot`

:   The slot of the entity to add.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.AddDrawListRef(uint8 drawGroup, uint16 entitySlot);
	```

=== "C++"

	``` cpp
	Graphics::AddDrawListRef(uint8 drawGroup, uint16 entitySlot);
	```
	``` cpp
	entity->AddDrawListRef(uint8 drawGroup);
	```

## Examples
=== "C"

	``` c
	RSDK.AddDrawListRef(1, 17);
	```
	``` c
	RSDK.AddDrawListRef(5, RSDK.GetEntitySlot(self));
	```

=== "C++"

	``` cpp
	Graphics::AddDrawListRef(1, 17);
	```
	``` cpp
	this->AddDrawListRef(5);
	```