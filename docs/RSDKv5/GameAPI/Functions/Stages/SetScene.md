# SetScene

## Description
Sets the scene category and list position to the matching scene entry in the GameConfig.

## Parameters
`categoryName`

:   The name of the stage category in the GameConfig.

`sceneName`

:   The name of the scene in the GameConfig.

## Return Value
Sets `SceneInfo->activeCategory` and `SceneInfo->listPos` to the category and scene with names matching `categoryName` and `sceneName`, respectively. If the given name(s) aren't found in the GameConfig, the variables will not be set.

## Syntax
=== "C"

	``` c
	RSDK.SetScene(const char *categoryName, const char *sceneName);
	```

=== "C++"

	``` cpp
	Stage::SetScene(const char *categoryName, const char *sceneName);
	```

## Example
=== "C"

	``` c
	RSDK.SetScene("Presentation", "Title Screen");
	```

=== "C++"

	``` cpp
	Stage::SetScene("Presentation", "Title Screen");
	```
