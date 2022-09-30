# LoadSpriteSheet

## Description
Loads a Spritesheet and returns the id of it.

## Parameters

- `path`
The file path to load the spritesheet from, relative to `Data/Sprites/`. Spritesheets may **ONLY** be in GIF format.

- `scope`
The asset's scope, may be `SCOPE_GLOBAL` or `SCOPE_STAGE`.

## Return Value
This function returns an id to the loaded spritesheet as a `uint16`. The return value will be `-1` if the animation file failed to load.

## Syntax (C)
```RSDK.LoadSpriteSheet(const char* path, Scopes scope)```

## Syntax (C++)
```SpriteSheet.Load(const char* path, Scopes scope)```

## Examples (C)
- ```MyObject->mySheet = RSDK.LoadSpriteSheet("Test/Objects.gif", SCOPE_STAGE);```

## Examples (C++)
- ```sVars->mySheet.Load("Test/Objects.gif", SCOPE_STAGE);```