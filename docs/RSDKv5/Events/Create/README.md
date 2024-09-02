# Create

## Description
Called on Engine initialization, or when the game code manually creates an entity (usually on [StageLoad](../StageLoad/README.md) or when a temporary entity is spawned).

## Parameters

- `data`
Optional pointer to a user defined data (object type, value...).

## Syntax
=== "C"

	```c
	void Create(void *data);
	```

=== "C++"

	```cpp
	void Create(void *data);
	```

## Examples
=== "C"

	```c
	void MyObject_Create(void *data) { }
	```

=== "C++"

	```cpp
	void MyObject::Create(void *data) { }
	```