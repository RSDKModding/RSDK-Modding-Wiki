# SetChannelAttributes

## Description
Sets the volume, panning, and speed of the given channel to the given values.

## Parameters
`channel`

:   The ID of the channel to set the values for.

`volume`

:   The volume of the channel. The minimum and maximum values are 0.0f and 4.0f respectively, with 1.0f being normal volume.

`panning`

:   The panning of the channel. The minimum and maximum values are -1.0f and 1.0f respectively, with 0.0f being balanced.

`speed`

:   The speed of the channel. Only values above 0.0f are allowed, with 1.0f being normal speed.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.SetChannelAttributes(uint8 channel, float volume, float panning, float speed);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].SetAttributes(float volume, float panning, float speed);
	```

## Example
=== "C"

	``` c
	RSDK.SetChannelAttributes(0, 1.0f, 0.0f, 1.0f);
	```

=== "C++"

	``` cpp
	channels[0].SetAttributes(1.0f, 0.0f, 1.0f);
	```
