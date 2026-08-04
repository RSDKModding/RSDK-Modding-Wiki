# DrawSpriteFX

Draws `Frame` at a specified X and Y position with visual effects.

## Parameters
`Frame`

:   The ID of the SpriteFrame to draw.

`DrawFXFlag`

:   The visual effect to apply.

`XPos`

:   The position of the sprite on the horizontal axis in world-space.

`YPos`

:   The position of the sprite on the vertical axis in world-space.

## Return Value
None.

## Syntax
```
DrawSpriteFX(int Frame, int DrawFXFlag, int XPos, int YPos)
```

## Example
```
DrawSpriteFX(2, FX_FLIP, Object.Value0, Object.YPos)
```

## DrawFXFlag Effects
| Effect        | Description                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `FX_SCALE`    | Allows the scaling of the sprite via `object.scale`.                                                               |
| `FX_ROTATE`   | Allows the rotation of the sprite via `object.rotation`.                                                           |
| `FX_INK`      | Allows using transparency based on `object.inkEffect`.                                                             |
| `FX_TINT`     | Tints the sprite to tint table `0`, if `object.inkEffect` is set to `INK_TINT`, otherwise it acts like `FX_SCALE`. |

!!! note
    `FX_TINT` does not have an alias set by default. Its numeric ID is `3`.

### Ink Effects
| ID | Ink Effect  | Description                   |
| -- | ----------- | ----------------------------- |
| 0  | `INK_NONE`  | No effect.                    |
| 1  | `INK_BLEND` | 50% transparency.             |
| 2  | `INK_TINT`  | Enables the use of `FX_TINT`. |
