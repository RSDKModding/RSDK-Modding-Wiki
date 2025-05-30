# RSDK_DRAWING_OVERLAY

## Description
Enables/disables "overlay" mode when drawing.

## Parameters
`isDrawingOverlay`

:   Determines if the following code should be considered an "overlay", used for gizmos and stuff that shouldn't effect the selection area.

## Return Value
None.

## Syntax
``` c
RSDK_DRAWING_OVERLAY(bool32 isDrawingOverlay);
```

## Example
``` c
RSDK_DRAWING_OVERLAY(true);

// draw sprites and stuff

RSDK_DRAWING_OVERLAY(false);
```

!!! note
    This is a macro, which is designed to make programming in RSDK easier. The underlying logic is:
	```
	SceneInfo->debugMode = isDrawingOverlay
	```
	`SceneInfo->debugMode` is the flag that determines if drawing is in "overlay mode" or not.
	The underlying logc should NEVER be used as it's less safe than the macro. This note is here for anyone wishing to learn about the internals or hoping to develop a wrapper for another language that doesn't support macros.