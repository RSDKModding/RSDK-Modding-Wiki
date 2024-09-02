# ProcessObjectControl

## Description
Handles control inputs.

## Parameters
None.

## Return Value
Sets the value for object.up, object.down, object.left and object.right to true if their equivalent `keyPress`/`keyDown` is pressed. And player.jumpPress or player.jumpHold to true if buttonA/buttonB/buttonC are pressed/held, the next frame will return to false if not pressed.

## Syntax
```
ProcessObjectControl()
```