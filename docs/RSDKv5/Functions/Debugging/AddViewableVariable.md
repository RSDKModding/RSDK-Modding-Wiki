# AddViewableVariable

!!! note
    This function only exists in REV02 and above.

## Description
Adds a viewable variable to the [Dev Menu](../../Overview/DevMenu.md). Viewable variables exist until the scene is changed or reloaded.

## Parameters
- `name`
The display name of the viewable variable in the dev menu. Display names may be a maximum of 15 characters long.
- `value`
A pointer to the value to be tracked, viewed and edited in the [Dev Menu](../../Overview/DevMenu.md).
- `type`
The type of the viewable variable, which should match the type of `value`. See [ViewableVarTypes](TODO) for more info on what types are valid.
- `min`
The minimum value of the viewable variable (inclusive).
- `max`
The maximum value of the viewable variable (inclusive).

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.AddViewableVariable(const char *name, void *value, int32 type, int32 min, int32 max);
	```

=== "C++"

	``` cpp
	Dev::AddViewableVariable(const char *name, void *value, int32 type, int32 min, int32 max);
	```

## Example
=== "C"

	``` c
	RSDK.AddViewableVariable("Debug Mode", &SceneInfo->debugMode, VIEWVAR_BOOL, false, true);
	```

=== "C++"

	``` cpp
	Dev::AddViewableVariable("Debug Mode", &sceneInfo->debugMode, Dev::VIEWVAR_BOOL, false, true)
	```