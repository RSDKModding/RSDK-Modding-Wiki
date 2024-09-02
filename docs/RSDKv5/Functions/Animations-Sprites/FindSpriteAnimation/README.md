# FindSpriteAnimation

## Description
Attempts to find an animation entry by name.

## Parameters

- `aniFrames`
The sprite animation to search in.

- `name`
The name of the animation entry to search for.

## Return Value
This function returns an id to the found animation entry as a `uint16`. The return value will be `-1` if the animation entry wasn't found.

## Syntax (C)
```c
RSDK.FindSpriteAnimation(uint16 aniFrames, const char *name);
```

## Syntax (C++)
```cpp
SpriteAnimation.Find(const char *name);
```

## Examples (C)
```c
uint16 listID = RSDK.LoadSpriteAnimation(MyObject->aniFrames, "My Animation Entry");
```

## Examples (C++)
```cpp
uint16 listID = sVars->aniFrames.Find(sVars->aniFrames, "My Animation Entry");
```