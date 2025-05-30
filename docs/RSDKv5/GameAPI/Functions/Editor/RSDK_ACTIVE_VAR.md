# RSDK_ACTIVE_VAR

## Description
Sets a variable to be the "active variable" when using [RSDK_ENUM_VAR()](RSDK_ENUM_VAR.md).

## Parameters
`sVars`

:   The static vars of the object class the variable is in.

`variable`

:   The name of the variable to set as active.

## Return Value
None.

## Syntax
``` c
RSDK_ACTIVE_VAR(sVars, variable);
```

## Example
=== "C"

	``` c
	RSDK_ACTIVE_VAR(Player, characterID);
	```

=== "C++"

	``` cpp
	RSDK_ACTIVE_VAR(sVars, characterID);
	```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying function is:
	```
	void (*SetActiveVariable)(int32 classID, const char *name)
	```
	`classID` is the object's classID, and `name` is the variable's name as a string.
	The underlying function should NEVER be called as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.