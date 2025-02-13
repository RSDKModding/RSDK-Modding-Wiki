# RSDK_THIS_GEN

## Description
Defines local pointer `self` pointing to `sceneInfo->entity` using a generic entity struct.

## Parameters
None.

## Return Value
None.

## Example
``` c
RSDK_THIS_GEN();
```


!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        Entity *self = SceneInfo->entity
        ```

    === "C++"

        ``` cpp
        GameObject::Entity *self = (GameObject::Entity *)sceneInfo->entity
        ```
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.