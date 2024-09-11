# RemoveSpriteSheet

## Description
Removes the given spritesheet from memory, if it is already loaded.

!!! note
    - This function does not affect files in the datafile or device storage, only the engine memory.
    - Spritesheets loaded from animation files cannot be removed.

## Parameters
- `path`
The file path of the target sprite sheet to remove, relative to `Data/Sprites/`.

## Return Value

None.

## Syntax
```
RemoveSpriteSheet(string path)
```

## Example
```
RemoveSpriteSheet("Test/Objects.gif")
```
