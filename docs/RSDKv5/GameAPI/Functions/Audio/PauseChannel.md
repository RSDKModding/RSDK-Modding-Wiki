# PauseChannel

## Description
Pauses the currently playing audio in the given channel, if any is playing. The channel can be resumed with [ResumeChannel()](ResumeChannel.md).

## Parameters
`channel`

:   The ID of the channel to pause.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PauseChannel(uint32 channel);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].Pause();
	```

## Example
=== "C"

	``` c
	RSDK.PauseChannel(0);
	```

=== "C++"

	``` cpp
	channels[0].Pause();
	```