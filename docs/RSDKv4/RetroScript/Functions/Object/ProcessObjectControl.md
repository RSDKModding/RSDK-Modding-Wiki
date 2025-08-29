# ProcessObjectControl

## Description
Handles object input variables.

!!! note
    In standalone RSDKv4, this function has no effect unless `object.controlMode` is set to `0`. In RSDKv5U, `object.controlMode` must be lower than `4`.

## Parameters
None.

## Return Value
- Sets `object.up`, `object.down`, `object.left`, and `object.right` to their equivalent `keyDown` values.
- Sets `object.jumpPress` to `true` if `keyPress.buttonA`, `keyPress.buttonB`, or `keyPress.buttonC` are true; otherwise, it's set to `false`.
- Sets `object.jumpHold` to `true` if `keyDown.buttonA`, `keyDown.buttonB`, or `keyDown.buttonC` are true; otherwise, it's set to `false`.

!!! note
    In RSDKv5U, the controller ID used for the inputs is the value of `object.controlMode` plus 1.

## Example
```
ProcessObjectControl()
```
