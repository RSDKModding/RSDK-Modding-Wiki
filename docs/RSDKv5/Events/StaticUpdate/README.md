# StaticUpdate

## Description
Called once per object class, once per frame if Object::[active](TODO) allows for it. This event is called before any [Update](../Update/README.md) events are called.

## Parameters
None.

## Syntax
=== "C"

	```c
	void StaticUpdate();
	```

=== "C++"

	```cpp
	static void StaticUpdate();
	```

## Examples
=== "C"

	```c
	void MyObject_StaticUpdate() { }
	```

=== "C++"

	```cpp
	void MyObject::StaticUpdate() { }
	```