# destroyEntity

## Description
Clears an entity's data.

## Parameters
`entity`

:   The pointer of the entity to destroy.

## Return Value
None.

## Syntax
=== "C"

	``` c
	destroyEntity(entity);
	```

=== "C++"

	``` cpp
	entity->Destroy();
	```

## Example
=== "C"

	``` c
	destroyEntity(self);
	```

    !!! note
        This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
        ``` c
        RSDK.ResetEntity(entity, TYPE_DEFAULTOBJECT, NULL)
        ```
    	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.

=== "C++"

	``` cpp
	this->Destroy();
	```