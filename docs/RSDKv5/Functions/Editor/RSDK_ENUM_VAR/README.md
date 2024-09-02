# RSDK_ENUM_VAR

## Description
Adds an enum variable to the current active variable.

## Parameters

- `varName`
The name of the enum var to add to the active variable. The value of the enum var will be the the amount of enum vars added minus 1, so the first enum var will have a value of 0, the second enum var will have a value of 1, etc.

- `varValue`
**(UNUSED)** in the C API this is to visibly show what enum var correlates to what enum value in the code. This parameter never does anything in the code due to the way the system works in RSDKv5.

## Return Value
None

## Syntax (C)
```c
RSDK_ENUM_VAR(const char* varName, int32 varValue);
```

## Syntax (C++)
```cpp
RSDK_ENUM_VAR(const char* varName);
```

## Examples (C)
```c
RSDK_ENUM_VAR("Sonic", PLAYER_CHAR_SONIC);
```

## Examples (C++)
```cpp
RSDK_ENUM_VAR("Sonic");
```

## Remarks
This is a macro, which is designed to make programming in RSDK easier. The underlying function is `void (*AddVarEnumValue)(const char *name)`, with `name` being the enum var's name as a string. The underlying function should NEVER be called as it's less safe than the macro, this remark is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.