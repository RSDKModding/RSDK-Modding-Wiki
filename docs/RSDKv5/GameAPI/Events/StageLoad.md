# StageLoad

Called once per object class, once when the stage loads. Used for loading assets, and initalizing any static variables.

## Parameters
None.

## Syntax
=== "C"

	``` c
	void StageLoad();
	```

=== "C++"

	``` cpp
	static void StageLoad();
	```

## Examples
=== "C"

	``` c
	void MyObject_StageLoad() { }
	```

=== "C++"

	``` cpp
	void MyObject::StageLoad() { }
	```
