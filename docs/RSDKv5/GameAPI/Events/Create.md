# Create

## Description
Called on engine initialization, or when the game code manually creates an entity (usually on [StageLoad()](StageLoad.md) or when a new entity is created).

## Parameters
`data`

:   Optional pointer to user defined data (object type, value, etc). Will be `NULL` for entities loaded from the scene layout.

## Syntax
=== "C"

	``` c
	void Create(void *data);
	```

=== "C++"

	``` cpp
	void Create(void *data);
	```

## Examples
=== "C"

	``` c
	void MyObject_Create(void *data) { }
	```

=== "C++"

	``` cpp
	void MyObject::Create(void *data) { }
	```