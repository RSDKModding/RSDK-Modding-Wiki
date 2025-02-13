# LoadAnimation

## Description
Loads an animation file for the current object type.

!!! note
    Loaded animation files are stored per object *type*, not per object *entity*.

## Parameters
`path`

:   The file path to load the animation from, relative to `Data/Animations/`.

## Return Value
None.

## Syntax
```
LoadAnimation(string path)
```

## Example
```
LoadAnimation("Test.ani")
```
