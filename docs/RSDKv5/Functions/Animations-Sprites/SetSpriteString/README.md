# SetSpriteString

## Description
Converts a string into a sprite string. Calling this function will replace each character with a frame index and prepare it for drawing.

## Parameters

- `aniFrames`
The sprite animation to use frames from.

- `listID`
the index of the animation in the animation list to use frames from.

- `string`
The string to apply the frame indices to.

## Return Value
None.

## Syntax (C)
```c
RSDK.SetSpriteString(uint16 aniFrames, uint16 listID, String *string);
```

## Syntax (C++)
```cpp
String.SetSpriteString(SpriteAnimation aniFrames, uint16 listID);
```

## Examples (C)
```c
RSDK.LoadSpriteAnimation(MyObject->aniFrames, 0, &string);
```

## Examples (C++)
```cpp
string.Load(sVars->aniFrames, 0);
```