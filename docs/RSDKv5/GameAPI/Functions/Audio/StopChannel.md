# StopChannel

## Description
Stops playing the currently playing audio in the given channel, if any is playing.

## Parameters
`channel`

:   The ID of the channel to stop.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.StopChannel(uint32 channel);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].Stop();
	```

## Example
=== "C"

	``` c
	RSDK.StopChannel(0);
	```

=== "C++"

	``` cpp
	channels[0].Stop();
	```
