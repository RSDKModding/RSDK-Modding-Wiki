# SetEngineState

## Description
Sets the state of the engine.

## Parameters
`state`

:   The [engine state](TODO) to set the engine to.

## Return Value
Sets `SceneInfo->state` to the given state, preserving step-over mode if it's enabled.

## Syntax
=== "C"

	``` c
	RSDK.SetEngineState(uint8 state);
	```

=== "C++"

	``` cpp
	Stage::SetEngineState(EngineStates state);
	```

## Example
=== "C"

	``` c
	RSDK.SetEngineState(ENGINESTATE_FROZEN);
	```

=== "C++"

	``` cpp
	Stage::SetEngineState(ENGINESTATE_FROZEN);
	```
