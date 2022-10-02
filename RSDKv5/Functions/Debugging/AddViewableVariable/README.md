# AddViewableVariable

## Description
Adds a viewable variable to the dev menu. Viewable variables exist until the scene is changed or reloaded.

## Parameters

- `name`
The display name of the viewable variable in the dev menu. Display names may be a maximum of 15 characters long.

- `value`
A pointer to the value to be tracked, viewed and edited in the dev menu.

- `type`
The type of the viewable variable, this should match the type of `value`. See [ViewableVarTypes](TODO) for more info on what types are valid.

- `min`
The minimum value of the viewable variable (inclusive).

- `max`
The maximum value of the viewable variable (inclusive).

## Return Value
None.

## Syntax (C)
```RSDK.AddViewableVariable(const char *name, void *value, int32 type, int32 min, int32 max)```

## Syntax (C++)
```Dev::AddViewableVariable(const char *name, void *value, int32 type, int32 min, int32 max)```

## Examples (C)
- ```RSDK.AddViewableVariable("Debug Mode", &SceneInfo->debugMode, VIEWVAR_BOOL, false, true);```

## Examples (C++)
- ```Dev::AddViewableVariable("Debug Mode", &sceneInfo->debugMode, Dev::VIEWVAR_BOOL, false, true)```

## Remarks
This function is suppported by RSDKv5 Revision 02 & RSDKv5U only. It does not exist in RSDKv5 Revision 01.