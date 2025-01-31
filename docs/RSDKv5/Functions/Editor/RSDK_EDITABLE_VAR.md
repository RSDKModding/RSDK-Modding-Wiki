# RSDK_EDITABLE_VAR

## Description
Sets a variable from the given object's entity struct to be editable in an editor.

## Parameters
`object`

:   The name of the object the variable is in.

`type`

:   The [variable type](TODO) of the variable.

`var`

:   The name of the variable to add.

## Return Value
None.

## Syntax
``` c
RSDK_EDITABLE_VAR(object, type, var);
```

## Example
``` c
RSDK_EDITABLE_VAR(MyObject, VAR_UINT8, direction);
```
``` c
RSDK_EDITABLE_VAR(MyObject, VAR_ENUM, size);
```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying function is:
    === "C"

	    ``` c
	    RSDK.SetEditableVar(type, #var, (uint8)object->classID, offsetof(Entity##object, var))
	    ```

    === "C++"

    	``` cpp
    	sVars->EditableVar(type, #var, offsetof(object, var))
    	```
	The underlying function should NEVER be called as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.