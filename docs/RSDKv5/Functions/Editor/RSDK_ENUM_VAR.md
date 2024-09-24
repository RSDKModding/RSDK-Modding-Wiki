# RSDK_ENUM_VAR

## Description
Adds an enum variable to the current active variable.

## Parameters
- `varName`
The name of the enum var to add to the active variable. The value of the enum var will be the the amount of enum vars added minus 1, so the first enum var will have a value of `0`, the second enum var will have a value of `1`, etc.
- `varValue`
**Unused.** The purpose of this parameter is to visibly show what enum var correlates to what enum value in the code; it never does anything in the code due to the way the system works in RSDKv5.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK_ENUM_VAR(const char* varName, int32 varValue);
	```

=== "C++"

	``` cpp
	RSDK_ENUM_VAR(const char* varName);
	```

## Example
=== "C"

	``` c
	RSDK_ENUM_VAR("Sonic", PLAYER_CHAR_SONIC);
	```

=== "C++"

	``` cpp
	RSDK_ENUM_VAR("Sonic");
	```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying function is:
	```
	void (*AddVarEnumValue)(const char *name)
	```
	`name` is the enum var's name as a string.
	The underlying function should NEVER be called as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.