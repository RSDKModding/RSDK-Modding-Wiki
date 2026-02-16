# GetAnimationByName

Gets the numeric ID of an animation in the current object's animation file.

## Parameters
`Store`

:   The variable to store the ID.

`Name`

:   The name of the animation to find.

## Return Value
Sets `Store` to the ID of animation `Name`. If the animation isn't found, `Store` will be set to 0.

## Syntax
```
GetAnimationByName(var Store, string Name)
```

## Example
```
GetAnimationByName(CheckResult, "My Animation")
```
