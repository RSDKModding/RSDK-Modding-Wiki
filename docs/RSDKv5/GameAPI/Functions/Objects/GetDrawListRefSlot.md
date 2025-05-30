# GetDrawListRefSlot

## Description
Gets the entity slot in the given draw group at the given position.

## Parameters
`drawGroup`

:   The draw group to look for the slot in.

`listPos`

:   The position in `drawGroup` to retrieve the entity slot of.

## Return Value
Returns the entity slot for the `drawGroup` entry in `listPos` as a `uint16`. The return value will be `0` if the entry doesn't exist.

## Syntax
=== "C"

	``` c
	RSDK.GetDrawListRefSlot(uint8 drawGroup, uint16 listPos);
	```

=== "C++"

	``` cpp
	Graphics::GetDrawListRefSlot(uint8 drawGroup, uint16 listPos);
	```

## Example
=== "C"

	``` c
	uint16 refSlot = RSDK.GetDrawListRefSlot(4, 7);
	```

=== "C++"

	``` cpp
	uint16 refSlot = Graphics::GetDrawListRefSlot(4, 7);
	```