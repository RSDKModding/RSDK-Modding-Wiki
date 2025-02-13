# SetSfxAttributes

## Description
Sets the loop count and panning of the given sound effect to the given values.

## Parameters
`sfx`

:   The slot of the sound effect to set the values for. It's recommended to the `SfxName` alias for this.

`loopCount`

:   The number of times the sound effect should loop, if it's set to play on loop. Setting this to -1 will leave the loop count unchanged.

`panning`

:   The panning of the sound effect. The minimum and maximum values are -100 and 100 respectively, with 0 being balanced.

## Return Value
None.

## Syntax
```
SetSfxAttributes(int sfx, int loopCount, int panning)
```

## Example
```
SetSfxAttributes(SfxName[Test], 5, -50)
```