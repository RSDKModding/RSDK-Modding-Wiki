# GetAnimationByName

Gets the numeric ID of an animation in the current object's animation file.

## Parameters
`store`

:   The variable to store the ID.

`name`

:   The name of the animation to find.

## Return Value
Sets `store` to the ID of animation `name`. If the animation isn't found, `store` will be set to 0.

## Syntax
```
GetAnimationByName(var store, string name)
```

## Example
```
GetAnimationByName(checkResult, "My Animation")
```
