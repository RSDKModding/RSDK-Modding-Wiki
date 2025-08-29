# ResumeChannel

## Description
If the given channel's audio has been paused with [PauseChannel()](PauseChannel.md), resumes playing the audio.

## Parameters
`channel`

:   The ID of the channel to resume.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.ResumeChannel(uint32 channel);
	```

=== "C++"

	``` cpp
	channels[uint8 channel].Resume();
	```

## Example
=== "C"

	``` c
	RSDK.ResumeChannel(0);
	```

=== "C++"

	``` cpp
	channels[0].Resume();
	```
