# CheckSceneFolder

## Description
Reads the name of the current stage's folder.

## Parameters
`folderName`

:   The string to match.

## Return Value
Returns `true` as a `bool32` if the current folder's name matches `folderName`; otherwise, returns `false`.

## Syntax
=== "C"

	``` c
	RSDK.CheckSceneFolder(const char *folderName);
	```

=== "C++"

	``` cpp
	Stage::CheckSceneFolder(const char *folderName);
	```

## Example
=== "C"

	``` c
	RSDK.CheckSceneFolder("Menu");
	```

=== "C++"

	``` cpp
	Stage::CheckSceneFolder("Menu");
	```