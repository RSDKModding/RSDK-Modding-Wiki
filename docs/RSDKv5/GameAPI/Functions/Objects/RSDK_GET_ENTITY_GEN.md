# RSDK_GET_ENTITY_GEN

## Description
Gets the data of the given entity using a generic entity struct.

## Parameters
`slot`

:   The slot ID of the entity to return.

## Return Value
Returns the data of entity `slot` using the generic `Entity` struct.

## Syntax
``` c
RSDK_GET_ENTITY_GEN(slot);
```

## Example
=== "C"

	``` c
	Entity *entity = RSDK_GET_ENTITY_GEN(12);
	```

=== "C++"

	``` cpp
	GameObject::Entity *entity = RSDK_GET_ENTITY_GEN(12);
	```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        ((Entity *)RSDK.GetEntity(slot))
        ```

    === "C++"

        ``` cpp
        (GameObject::Get(slot))
        ```
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.