# LoadSpriteAnimation

## Description
Loads a Sprite Animation and returns the id of it.

## Parameters

- `path`
The file path to load the sprite animation file from, relative to `Data/Sprites/`

- `scope`
The asset's scope, may be `SCOPE_GLOBAL` or `SCOPE_STAGE`.

## Return Value
This function returns an id to the loaded animation file as a `uint16`. The return value will be `-1` if the animation file failed to load.

## Syntax (C)
```c
RSDK.LoadSpriteAnimation(const char* path, Scopes scope);
```

## Syntax (C++)
```cpp
SpriteAnimation.Load(const char* path, Scopes scope);
```

## Examples (C)
```c
MyObject->aniFrames = RSDK.LoadSpriteAnimation("Test/MyAnim.bin", SCOPE_STAGE);
```

## Examples (C++)
```cpp
sVars->aniFrames.Load("Test/MyAnim.bin", SCOPE_STAGE);
```