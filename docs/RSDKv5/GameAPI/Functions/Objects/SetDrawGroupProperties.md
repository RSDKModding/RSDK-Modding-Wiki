# SetDrawGroupProperties

## Description
Sets the properties of `drawGroup`.

## Parameters
`drawGroup`

:   The draw group to set the properties of.

`sorted`

:   Determines whether the draw group should use `entity->zdepth` to sort the draw list or not.

`hookCB`

:   If set to a void function, it will be called before the drawGroup is drawn.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.SetDrawGroupProperties(uint8 drawGroup, bool32 sorted, void (*hookCB)(void));
	```

=== "C++"

	``` cpp
	Graphics::SetDrawGroupProperties(uint8 drawGroup, bool32 sorted, void (*hookCB)(void));
	```

## Examples
=== "C"

	``` c
	RSDK.SetDrawGroupProperties(6, false, NULL);
	```
	``` c
	RSDK.SetDrawGroupProperties(3, true, MyObject_DrawGroupHookCB);
	```

=== "C++"

	``` cpp
	Graphics::SetDrawGroupProperties(6, false, nullptr);
	```
	``` cpp
	Graphics::SetDrawGroupProperties(3, true, MyObject::DrawGroupHookCB);
	```