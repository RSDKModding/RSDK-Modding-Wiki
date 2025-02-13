# destroyEntitySlot

## Description
Clears the entity of the given slot's data.

## Parameters
`slot`

:   The slot of the entity to destroy.

## Return Value
None.

## Syntax
=== "C"

	``` c
	destroyEntitySlot(slot);
	```

=== "C++"

	``` cpp
	GameObject::Destroy(int32 slot);
	```

## Example
=== "C"

	``` c
	destroyEntitySlot(15);
	```

    !!! note
        This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
        ``` c
        RSDK.ResetEntitySlot(slot, TYPE_DEFAULTOBJECT, NULL)
        ```
    	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.

=== "C++"

	``` cpp
	GameObject::Destroy(15);
	```