# SetSfxAttributes

## Description
Sets the loop count and panning of the given sound effect slot in the GameConfig to the given values.

!!! note
    Unlike [PlaySfx()](PlaySfx.md) and [StopSfx()](StopSfx.md), this function does not have an equivalent for sound effects in the StageConfig.

## Parameters
`SFX`

:   The slot of the sound effect in the GameConfig to set the values for.

`LoopCount`

:   The number of times the sound effect should loop, if it's set to play on loop. Setting this to -1 will leave the loop count unchanged.

`Panning`

:   The panning of the sound effect. The minimum and maximum values are -100 and 100 respectively, with 0 being balanced.

## Return Value
None.

## Syntax
```
SetSfxAttributes(int SFX, int LoopCount, int Panning)
```

## Example
```
SetSfxAttributes(0, 5, -50)
```