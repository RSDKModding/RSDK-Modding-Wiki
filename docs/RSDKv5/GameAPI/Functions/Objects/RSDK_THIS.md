# RSDK_THIS

## Description
Defines local pointer `self` pointing to `sceneInfo->entity` using the given object's entity struct.

## Parameters
`class`

:   The name of the object to use the entity struct for.

## Return Value
None.

## Syntax
``` c
RSDK_THIS(class);
```

## Example
``` c
RSDK_THIS(MyObject);
```


!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
    === "C"

        ``` c
        Entity##class *self = (Entity##class *)SceneInfo->entity
        ```

    === "C++"

        ``` cpp
        auto *self = (class *)sceneInfo->entity
        ```
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.