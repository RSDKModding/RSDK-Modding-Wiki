# showGizmos

## Description
Checks if gizmos should be visible for this object.

## Parameters
None.

## Return Value
Returns `true` if gizmos should be enabled for this object, or `false` if not.

## Syntax
``` c
showGizmos();
```

## Example
``` c
if (showGizmos()) { /* do stuff */ }
```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
	```
	(SceneInfo->listPos == SceneInfo->entitySlot || SceneInfo->effectGizmo)
	```
	`SceneInfo->listPos` is the currently selected entity in the editor, and `SceneInfo->effectGizmo` is the flag that determines if all gizmos should be visible regardless of if the entity is selected or not.
	The underlying logic should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.
