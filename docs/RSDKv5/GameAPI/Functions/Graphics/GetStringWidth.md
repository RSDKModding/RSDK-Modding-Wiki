# GetStringWidth

## Description
Retrieves the width of a string in pixels when displayed with [DrawText()](TODO).

## Parameters
`aniFrames`

:   The SpriteAnimation to use frames from.

`listID`

:   The index of the animation in the animation list to use frames from.

`string`

:   The string that characters are retrieved from.

`startIndex`

:   The starting character index.

`length`

:   The end character index. A value of `0` will result in the end character index being `string.length`.

`spacing`

:   The number of pixels between each character.

## Return Value
Returns the width of the string in pixels as an `int32`. This width is the same as it would be if [DrawText](TODO) was called with the same parameters.

## Syntax
=== "C"

	``` c
	RSDK.GetStringWidth(uint16 aniFrames, uint16 listID, String *string, int32 startIndex, int32 length, int32 spacing);
	```

=== "C++"

	``` cpp
	string.GetWidth(SpriteAnimation aniFrames, uint16 listID, int32 startIndex, int32 length, int32 spacing);
	```

## Example
=== "C"

	``` c
	int32 width = RSDK.LoadSpriteAnimation(MyObject->aniFrames, 0, &self->string, 0, self->string.length, 1);
	```

=== "C++"

	``` cpp
	int32 width = this->string.GetWidth(sVars->aniFrames, 0, 0, this->string.length, 1);
	```