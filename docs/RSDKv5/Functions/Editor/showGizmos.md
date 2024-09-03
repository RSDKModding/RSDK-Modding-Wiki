# showGizmos

## Description
Checks if gizmos should be visible for this object.

## Parameters
None.

## Return Value
This function returns an true if gizmos should be enabled for this object, otherwise it returns false.

## Syntax
=== "C"

	```c
	showGizmos();
	```

=== "C++"

	```cpp
	showGizmos();
	```

## Examples
=== "C"

	```c
	if (showGizmos()) { /* do stuff */ }
	```

=== "C++"

	```cpp
	if (showGizmos()) { /* do stuff */ }
	```

## Remarks
This is a macro, which is designed to make programming in RSDK easier. The underlying logic is `(SceneInfo->listPos == SceneInfo->entitySlot || SceneInfo->effectGizmo)`, `SceneInfo->listPos` being the currently selected entity in the editor and `SceneInfo->effectGizmo` being the flag that determines if all gizmos should be visible regardless of if the entity is selected or not. The underlying logic should NEVER be used as it's less safe than the macro, this remark is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.