# PlaySfx

## Description
Plays the sound effect in the given slot in the GameConfig or StageConfig, looping it if set to do so.

## Parameters
`sfx`

:   The slot of the sound effect. It's recommended to the `SfxName` alias for this.

`loop`

:   Determines whether or not the sound effect should loop.

## Return Value
None.

## Syntax
```
PlaySfx(int sfx, bool loop)
```

## Example
```
PlaySfx(SfxName[Test], false)
```