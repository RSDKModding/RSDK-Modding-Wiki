# EditorLoad

## Description
Similar to [StageLoad](StageLoad.md), though only called when the object class is loaded in via an editor (such as RetroED v2). Used to load assets that will be used in [EditorDraw](EditorDraw.md).

## Parameters
None.

## Syntax
=== "C"

	```c
	void EditorLoad();
	```

=== "C++"

	```cpp
	static void EditorLoad();
	```

## Examples
=== "C"

	```c
	void MyObject_EditorLoad() { }
	```

=== "C++"

	```cpp
	void MyObject::EditorLoad() { }
	```