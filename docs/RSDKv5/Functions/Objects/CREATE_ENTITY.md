# CREATE_ENTITY

## Description
Creates a temporary object specified by `object`, `data`, `x`, and `y` near the end of the object list.

!!! note
    If there are too many temporary entities loaded when this function is called, the engine will start overwritting them. Therefore, it's recommended to only use this function for entities that quickly get destroyed or unloaded.

## Parameters
`object`

:   The name of the object to create an entity of.

`data`

:   The data to send to the entity's [Create()](/RSDKv5/Events/Create.md) function.

`x`

:   The position of the entity on the horizontal axis in world-space.

`y`

:   The position of the entity on the vertical axis in world-space.

## Return Value
Returns the data of the created entity using the object's entity struct.

## Syntax
``` c
CREATE_ENTITY(object, data, x, y);
```

## Examples
=== "C"

	``` c
	CREATE_ENTITY(MyObject, 0, 0, 0);
	```
	``` c
	EntityMyObject *entity = CREATE_ENTITY(MyObject, 2, 0x10000, 0x60000);
	```

=== "C++"

	``` cpp
	CREATE_ENTITY(MyObject, 0, 0, 0);
	```
	``` cpp
	MyObject *entity = CREATE_ENTITY(MyObject, 2, 0x10000, 0x60000);
	```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        ((Entity##object *)RSDK.CreateEntity(object->classID, data, x, y))
        ```

    === "C++"

        ``` cpp
        (GameObject::Create<object>(data, x, y))
        ```
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.