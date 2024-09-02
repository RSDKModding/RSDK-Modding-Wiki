# CreateSpriteAnimation

## Description
Creates a Sprite Animation based on the parameters and returns the id of it.

## Parameters

- `identifier`
The animation's *unique* identifier. Once created, it can be used to retrieve this animation again.

- `frameCount`
The maximum number of sprite frames this sprite animation can store.

- `listCount`
The maximum number of animation entries this sprite animation can store.

- `scope`
The asset's scope, may be `SCOPE_GLOBAL` or `SCOPE_STAGE`.

## Return Value
This function returns an id to the created animation file as a `uint16`. The return value will be `-1` if the animation file failed to create.

## Syntax (C)
```c
RSDK.CreateSpriteAnimation(const char *identifier, uint32 frameCount, uint32 listCount, int32 scope);
```

## Syntax (C++)
```cpp
SpriteAnimation.Create(const char* path, Scopes scope);
```

## Examples (C)
```c
MyObject->aniFrames = RSDK.CreateSpriteAnimation("Test/MyAnim.bin", 256, 32, SCOPE_STAGE);
```

## Examples (C++)
```cpp
sVars->aniFrames.Create("Test/MyAnim.bin", 256, 32, SCOPE_STAGE);
```