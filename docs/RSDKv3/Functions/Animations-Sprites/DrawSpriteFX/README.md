# DrawSpriteFX

## Description
Draws `Frame` to a specified X and Y position with visual effects.

## Parameters
- `Frame`
The ID of the sprite to draw
- `DrawFXFlag`
The flag for the visual effect
- `XPos`
The position of the sprite on the horizontal axis in world-space
- `YPos`
The position of the sprite on the vertical axis in world-space

## Return Value
None.

## Syntax
```
DrawSpriteFX(int Frame, int DrawFXFlag, int XPos, int YPos)
```

## Examples
```
DrawSpriteFX(2, FX_FLIP, Object.Value0, Object.YPos)
```

## Note
The flags for visual effects are
- FX_SCALE
Allows the scaling of the sprite via `Object.Scale`
- FX_ROTATE
Allows the rotation of the sprite via `Object.Rotation`
- FX_ROTOZOOM
Allows for rotation and scaling w/ `Object.Scale` and `Object.Rotation`
- FX_INK
Allows the usage of `Object.InkEffect` to alter transparency
    the values for InkEffect are:
    - 0 : INK_NONE, nothing happens
    - 1 : INK_BLEND, 50% transparency
    - 2 : INK_ALPHA, transparency based on `Object.Alpha` on a range of 0-255 (255 being no transparency)
    - 3 : INK_ADD, additive transparency
    - 4 : INK_SUB, subtractive transparency
- FX_TINT
Tints the sprite on a grayscale if `Object.InkEffect` is set to INK_ALPHA, otherwise it acts like FX_SCALE. (Note, there isn't an alias by default for this, it's equivalent value is 4)
- FX_FLIP
Flips the sprite depending of `Object.Direction`