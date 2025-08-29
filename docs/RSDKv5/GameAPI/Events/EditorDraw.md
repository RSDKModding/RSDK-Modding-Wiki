# EditorDraw

## Description
Similar to [Draw()](Draw.md), though only called when the object class is loaded in via an editor (such as [RetroED](/Tools/RetroED/README.md)). Used to draw sprites in the editor, called once per frame, per entity.

## Parameters
None.

## Syntax
=== "C"

	``` c
	void EditorDraw();
	```

=== "C++"

	``` cpp
	void EditorDraw();
	```

## Examples
=== "C"

	``` c
	void MyObject_EditorDraw() { }
	```

=== "C++"

	``` cpp
	void MyObject::EditorDraw() { }
	```
