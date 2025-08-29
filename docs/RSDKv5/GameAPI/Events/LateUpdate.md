# LateUpdate

## Description
Same as [Update()](Update.md), though this is called after [Update()](Update.md) was called for all entities and all type and draw list sorting has been done.

## Parameters
None.

## Syntax
=== "C"

	``` c
	void LateUpdate();
	```

=== "C++"

	``` cpp
	void LateUpdate();
	```

## Examples
=== "C"

	``` c
	void MyObject_LateUpdate() { }
	```

=== "C++"

	``` cpp
	void MyObject::LateUpdate() { }
	```
