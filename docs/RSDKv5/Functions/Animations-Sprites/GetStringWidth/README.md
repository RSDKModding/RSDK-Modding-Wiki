# GetStringWidth

## Description
Loads a Sprite Animation and returns the id of it.

## Parameters

- `aniFrames`
The sprite animation to use frames from.

- `listID`
the index of the animation in the animation list to use frames from.

- `string`
The string that characters are retrieved from.

- `startIndex`
The starting character index.

- `length`
The end character index. A value of 0 will result in the end character index being `string.length`.

- `spacing`
The number of pixels between each character.

## Return Value
This function returns the width of the string in pixels. This width is the same as it would be if [DrawText](TODO) was called with the same parameters.

## Syntax (C)
```c
RSDK.GetStringWidth(uint16 aniFrames, uint16 listID, String *string, int32 startIndex, int32 length, int32 spacing);
```

## Syntax (C++)
```cpp
String.GetWidth(SpriteAnimation aniFrames, uint16 listID, int32 startIndex, int32 length, int32 spacing);
```

## Examples (C)
```c
int32 width = RSDK.LoadSpriteAnimation(MyObject->aniFrames, 0, &string, 0, string.length, 1);
```

## Examples (C++)
```cpp
int32 width = string.GetWidth(sVars->aniFrames, 0, 0, string.length, 1);
```