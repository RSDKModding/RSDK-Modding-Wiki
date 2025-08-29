# GetChannelPos

## Description
Gets the position of the current track in the given channel.

## Parameters
`channel`

:   The ID of the channel to check.

## Return Value
Returns the current position of the channel's track, in samples, as a `uint32`.

## Syntax
=== "C"

	``` c
	RSDK.GetChannelPos(uint32 channel);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].AudioPos();
	```

## Example
=== "C"

	``` c
	uint32 trackPos = RSDK.GetChannelPos(0);
	```

=== "C++"

	``` cpp
	uint32 trackPos = channels[0].AudioPos();
	```
