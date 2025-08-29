# ForceHardReset

!!! note
    This function only exists in REV02 and above.

## Description
Sets whether the next stage reload should reload all assets.

!!! note
    This function does not reload the scene by itself; you must call [LoadScene()](LoadScene.md) manually.

## Parameters
`shouldHardReset`

:   If set to `false`, the stage will reload normally. If set to `true`, the stage will reload all assets when reloaded.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.ForceHardReset(bool32 shouldHardReset);
	```

=== "C++"

	``` cpp
	Stage::ForceHardReset(bool32 shouldHardReset);
	```

## Example
=== "C"

	``` c
	RSDK.ForceHardReset(true);
	```

=== "C++"

	``` cpp
	Stage::ForceHardReset(true);
	```
