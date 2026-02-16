# CheckValidScene

Checks if `SceneInfo->activeCategory` and `SceneInfo->listPos` point to a valid scene in the GameConfig.

## Parameters
None.

## Return Value
Returns whether the current scene is valid as a `bool32`.

## Syntax
=== "C"

	``` c
	RSDK.CheckValidScene();
	```

=== "C++"

	``` cpp
	Stage::CheckValidScene();
	```

## Example
=== "C"

	``` c
    if (RSDK.CheckValidScene()) { /* do stuff */ }
	```

=== "C++"

	``` cpp
    if (Stage::CheckValidScene()) { /* do stuff */ }
	```
