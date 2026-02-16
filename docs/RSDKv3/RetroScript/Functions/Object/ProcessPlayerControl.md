# ProcessPlayerControl

Handles player input variables and sidekick input buffering.

!!! note
    Despite RSDKv5U adding multiple controllers, this function only reads the inputs for Controller 1.

## Parameters
None.

## Return Value
- If `Player.ControlMode` is set to `CONTROLMODE_NONE` (`-1`): No variables will be set.
- If `Player.ControlMode` is set to `CONTROLMODE_NORMAL` (`0`):
    - Sets `Player.Up`, `Player.Down`, `Player.Left`, and `Player.Right` to their equivalent `KeyDown` values.
    - Sets `Player.JumpPress` to `true` if `KeyPress.ButtonA`, `KeyPress.ButtonB`, or `KeyPress.ButtonC` are true; otherwise, it's set to `false`.
    - Sets `Player.JumpHold` to `true` if `KeyDown.ButtonA`, `KeyDown.ButtonB`, or `KeyDown.ButtonC` are true; otherwise, it's set to `false`.
- If `Player.ControlMode` is set to `CONTROLMODE_SIDEKICK` (`1`): Sets `Player.Up`, `Player.Down`, `Player.Left`, `Player.Right`, `Player.JumpPress`, and `Player.JumpHold` based on the sidekick input buffer.

## Example
```
ProcessPlayerControl()
```
