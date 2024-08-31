# ProcessPlayerControl

## Description
Handles control inputs

## Parameters
None.

## Return Value
Sets the value for Player.Up, Player.Down, Player.Left and Player.Right to true if their equivalent `KeyPress`/`KeyDown` is pressed. And Player.JumpPress or Player.JumpHold to true if ButtonA/ButtonB/ButtonC are pressed/held, the next frame will return to false if not pressed.

## Syntax
```ProcessPlayerControl()```