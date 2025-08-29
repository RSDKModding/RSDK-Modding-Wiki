# DrawPlayerAnimation

## Description
Draws the player's sprites from the animation file loaded prior via [LoadAnimation()](LoadAnimation.md), with flipping and rotation applied based on the current animation's rotate style.

Unlike [DrawObjectAnimation()](DrawObjectAnimation.md), DrawPlayerAnimation() only draws the player if `Player.Visible` is `true`, and sets the position of the sprite based on the camera's target.

!!! note
    Player animations cannot use scale or ink effects.

## Parameters
None.

## Return Value
None.

## Example
```
DrawPlayerAnimation()
```
