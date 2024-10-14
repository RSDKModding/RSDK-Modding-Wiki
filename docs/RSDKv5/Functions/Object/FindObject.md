# FindObject

## Description
Finds a loaded object by name and retrieves its ID.

## Parameters
`name`

:   The name of the object to find.

## Return Value
Returns the [classID](TODO) of the found object as a `uint16`. The return value will be `0` if the object wasn't found.

## Syntax
=== "C"

	``` c
	RSDK.FindObject(const char *name);
	```

=== "C++"

	``` cpp
	GameObject::Find(const char *name);
	```

## Example
=== "C"

	``` c
	uint16 foundObject = RSDK.FindObject("MyObject");
	```

=== "C++"

	``` cpp
	uint16 foundObject = GameObject::Find("MyObject");
	```