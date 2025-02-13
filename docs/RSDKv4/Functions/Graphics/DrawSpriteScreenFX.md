# DrawSpriteScreenFX

## Description
Draws `frame` at a specified X and Y position in screen-space with visual effects.

## Parameters
`frame`

:   The ID of the SpriteFrame to draw.

`drawFXFlag`

:   The visual effect to apply.

`ixpos`

:   The position of the sprite on the horizontal axis in screen-space.

`iypos`

:   The position of the sprite on the vertical axis in screen-space.

## Return Value
None.

## Syntax
```
DrawSpriteScreenFX(int frame, int drawFXFlag, int ixpos, int iypos)
```

## Example
```
DrawSpriteScreenFX(2, FX_FLIP, screen.xcenter, 15)
```

## drawFXFlag Effects
| Effect        | Description                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| `FX_SCALE`    | Allows the scaling of the sprite via `object.scale`.                                                          |
| `FX_ROTATE`   | Allows the rotation of the sprite via `object.rotation`.                                                      |
| `FX_ROTOZOOM` | Allows both scaling via `object.scale` and rotation via `object.rotation`.                                    |
| `FX_INK`      | Allows using transparency based on `object.inkEffect`.                                                        |
| `FX_TINT`     | Tints the sprite to grayscale if `object.inkEffect` is set to `INK_ALPHA`, otherwise it acts like `FX_SCALE`. |
| `FX_FLIP`     | Flips the sprite depending on `object.direction`.                                                             |

!!! note
    `FX_TINT` does not have an alias set by default. Its numeric ID is `4`.

### Ink Effects
| ID | Ink Effect  | Description                                                                              |
| -- | ----------- | ---------------------------------------------------------------------------------------- |
| 0  | `INK_NONE`  | No effect.                                                                               |
| 1  | `INK_BLEND` | 50% transparency.                                                                        |
| 2  | `INK_ALPHA` | Transparency based on `object.alpha`, with a range of 0-255, 255 being no transparency.  |
| 3  | `INK_ADD`   | Additive blending.                                                                       |
| 4  | `INK_SUB`   | Subtractive blending.                                                                    |