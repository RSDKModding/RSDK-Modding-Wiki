# SetGameFinished

!!! note
    This function only exists in Sonic Origins.

## Description
Notifies the engine that the game has been finished.

## Parameters
None.

## Return Value
Sets `SceneInfo->state` to `ENGINESTATE_GAME_FINISHED`.

## Example
=== "C"

	``` c
	RSDK.SetGameFinished();
	```

=== "C++"

	``` cpp
	RSDKTable->SetGameFinished();
	```