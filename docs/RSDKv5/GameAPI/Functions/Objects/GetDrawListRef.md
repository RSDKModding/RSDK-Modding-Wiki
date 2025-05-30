# GetDrawListRef

## Description
Gets a pointer to the entity in the given draw group at the given position.

## Parameters
`drawGroup`

:   The draw group to look for the entity in.

`listPos`

:   The position in `drawGroup` to retrieve the entity of.

## Return Value
Returns a pointer to the the entity for the `drawGroup` entry in `listPos`. The return value will be `NULL` if the entry doesn't exist.

## Syntax
=== "C"

	``` c
	RSDK.GetDrawListRef(uint8 drawGroup, uint16 listPos);
	```

=== "C++"

	``` cpp
	Graphics::GetDrawListRef(uint8 drawGroup, uint16 listPos);
	```
	``` cpp
	Graphics::GetDrawListRef<object>(uint8 drawGroup, uint16 listPos);
	```

## Examples
=== "C"

	``` c
	Entity *drawRef = RSDK.GetDrawListRef(4, 7);
	```
	``` c
	EntityMyObject *drawRef = (EntityMyObject *)RSDK.GetDrawListRef(3, 16);
	```

=== "C++"

	``` cpp
	GameObject::Entity *drawRef = Graphics::GetDrawListRef(4, 7);
	```
	``` cpp
	MyObject *drawRef = Graphics::GetDrawListRef<MyObject>(3, 16);
	```