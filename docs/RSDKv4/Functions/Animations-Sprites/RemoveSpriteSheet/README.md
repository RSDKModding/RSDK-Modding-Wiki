# RemoveSpriteSheet

## Description

Removes the given Sprite Sheet from memory, if it is already loaded. This does *not* delete the file from the computer or anything, it purely only affects the game memory.

## Parameters

- `path`
The file path of the target sprite sheet to remove, relative to `Data/Sprites/`

## Return Value

None.

## Syntax
```
RemoveSpriteSheet(string path)
```

## Examples
```
RemoveSpriteSheet("Test/Objects.gif")
```
