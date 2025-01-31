# INIT_ENTITY

## Description
Initializes the `active`, `visible`, and `updateRange` values of the given entity.

## Parameters
`entity`

:   The entity to initialize.

## Return Value
Sets `entity`'s `active` value to `ACTIVE_BOUNDS`, the `visible` value to `false`, and the `updateRange.x` and `updateRange.y` values to `TO_FIXED(128)`.

## Syntax
=== "C"

	``` c
	INIT_ENTITY(entity);
	```

=== "C++"

	``` cpp
	entity->Init();
	```

## Example
=== "C"

	``` c
	INIT_ENTITY(self);
	```

    !!! note
        This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
        ``` c
        (entity)->active        = ACTIVE_BOUNDS;
        (entity)->visible       = false;
        (entity)->updateRange.x = TO_FIXED(128);
        (entity)->updateRange.y = TO_FIXED(128);
        ```
    	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.

=== "C++"

	``` cpp
	this->Init();
	```