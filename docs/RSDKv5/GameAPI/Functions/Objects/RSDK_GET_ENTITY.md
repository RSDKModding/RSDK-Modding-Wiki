# RSDK_GET_ENTITY

## Description
Gets the data of the given entity using the given object's entity struct.

## Parameters
`class`

:   The class of the object to use the entity struct from.

`slot`

:   The slot ID of the entity to return.

## Return Value
Returns the data of entity `slot` using object `class`'s entity struct.

## Syntax
``` c
RSDK_GET_ENTITY(class, slot);
```

## Example
=== "C"

	``` c
	EntityMyObject *entity = RSDK_GET_ENTITY(MyObject, 12);
	```

=== "C++"

	``` cpp
	MyObject *entity = RSDK_GET_ENTITY(MyObject, 12);
	```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        ((Entity##class *)RSDK.GetEntity(slot))
        ```

    === "C++"

        ``` cpp
        (GameObject::Get<class>(slot))
        ```
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.