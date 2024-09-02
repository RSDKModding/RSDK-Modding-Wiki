# SetSfxAttributes

## Description
Sets the loop count and panning of the given sound effect slot in the GameConfig to the given values. Unlike `PlaySfx` and `StopSfx`, this function does not have an equivalent for sound effects in the StageConfig.

## Parameters

- `sfx`
The slot of the sound effect in the GameConfig.
- `loopCount`
The number of times the sound effect should loop, if it's set to play on loop. Setting this to -1 will leave the loop count unchanged.
- `panning`
The panning of the sound effect. The minimum and maximum values are -100 and 100 respectively, with 0 being balanced.

## Return Value
None.

## Syntax
```
SetSfxAttributes(int sfx, int loopCount, int panning)
```

## Examples
```
SetSfxAttributes(0, 5, -50)
```