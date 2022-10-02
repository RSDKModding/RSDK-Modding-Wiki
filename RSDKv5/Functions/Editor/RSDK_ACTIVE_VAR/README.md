# RSDK_ACTIVE_VAR

## Description
Sets a variable to be the "active variable" when using [RSDK_ENUM_VAR](../RSDK_ENUM_VAR/README.md)

## Parameters

- `sVars`
The static vars of the object class the variable is in.

- `variable`
The name of the variable to set as active.

## Return Value
None.

## Syntax (C)
```RSDK_ACTIVE_VAR(sVars, variable)```

## Syntax (C++)
```RSDK_ACTIVE_VAR(sVars, variable)```

## Examples (C)
- ```RSDK_ACTIVE_VAR(Player, characterID);```

## Examples (C++)
- ```RSDK_ACTIVE_VAR(sVars, characterID);```

## Remarks
This is a macro, which is designed to make programming in RSDK easier. The underlying function is `void (*SetActiveVariable)(int32 classID, const char *name)`, with `classID` being the object's classID and `name` being the variable's name as a string. The underlying function should NEVER be called as it's less safe than the macro, this remark is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.