# SwapDrawListEntries

## Description
Swaps the draw list positions of `slot1` and `slot2` in `drawGroup`.

## Parameters
`drawGroup`

:   The draw group to swap the entries in.

`slot1`

:   The slot of the first entry in the draw list to swap.

`slot2`

:   The slot of the second entry in the draw list to swap.

`count`

:   Only the first entries within this value will be checked. If set to `0`, the function will check every entry in the draw list.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.SwapDrawListEntries(uint8 drawGroup, uint16 slot1, uint16 slot2, uint16 count);
	```

=== "C++"

	``` cpp
	Graphics::SwapDrawListEntries(uint8 drawGroup, uint16 slot1, uint16 slot2, uint16 count);
	```

## Example
=== "C"

	``` c
	RSDK.SwapDrawListEntries(4, 4, 16, 0);
	```

=== "C++"

	``` cpp
	Graphics::SwapDrawListEntries(4, 4, 16, 0);
	```