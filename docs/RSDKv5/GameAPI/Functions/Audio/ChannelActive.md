# ChannelActive

## Description
Checks if a channel is currently playing audio or is paused.

## Parameters
`channel`

:   The ID of the channel to check.

## Return Value
Returns the result of the check as a `bool32`. The result will be `false` if the channel is in an idle state; otherwise, it will be `true`.

## Syntax
=== "C"

	``` c
	RSDK.ChannelActive(uint32 channel);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].IsActive();
	```

## Example
=== "C"

	``` c
	bool32 isActive = RSDK.ChannelActive(0);
	```

=== "C++"

	``` cpp
	bool32 isActive = channels[0].IsActive();
	```
