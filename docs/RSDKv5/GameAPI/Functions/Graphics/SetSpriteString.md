# SetSpriteString

Converts a string into a sprite string. Calling this function will replace each character with a frame index and prepare it for drawing.

## Parameters
`aniFrames`

:   The SpriteAnimation to use frames from.

`listID`

:   The index of the animation in the animation list to use frames from.

`string`

:   The string to apply the frame indices to.

## Return Value
None.

## Syntax
=== "C"

    ``` c
    RSDK.SetSpriteString(uint16 aniFrames, uint16 listID, String *string);
    ```

=== "C++"

    ``` cpp
    string.SetSpriteString(SpriteAnimation aniFrames, uint16 listID);
    ```

## Example
=== "C"

    ``` c
    RSDK.LoadSpriteAnimation(MyObject->aniFrames, 0, &self->string);
    ```

=== "C++"

    ``` cpp
    this->string.Load(sVars->aniFrames, 0);
    ```
