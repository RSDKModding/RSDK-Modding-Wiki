# CopyEntity

## Description
Copies an entity into another entity.

## Parameters
`destEntity`

:   The pointer to the entity to copy into.

`srcEntity`

:   The pointer to the entity to copy from.

`clearSrcEntity`

:   If set to `true`, `srcEntity` will be cleared after being copied.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.CopyEntity(void *destEntity, void *srcEntity, bool32 clearSrcEntity);
	```

=== "C++"

	``` cpp
	srcEntity->Copy(void *destEntity, bool32 clearSrcEntity);
	```

## Example
=== "C"

	``` c
	RSDK.CopyEntity(clone, self, false);
	```

=== "C++"

	``` cpp
	this->Copy(clone, false);
	```