# Draw

Called once every frame per entity if Entity::active allows for it. The ordering is based the value of Entity::drawGroup.

## Parameters
None.

## Syntax
=== "C"

	``` c
	void Draw();
	```

=== "C++"

	``` cpp
	void Draw();
	```

## Examples
=== "C"

	``` c
	void MyObject_Draw() { }
	```

=== "C++"

	``` cpp
	void MyObject::Draw() { }
	```
