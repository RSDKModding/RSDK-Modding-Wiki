# SetAchievement

## Description
Sets the status of the given achievement.

!!! note
    This function has no effect if trial mode or debug mode are enabled.

## Parameters
`ID`

:   The index value of the achievement.

`Status`

:   The status (progress) to set the achievement to, with a range of 0 to 100. If the status is 100, the achievement is considered achieved and will be awarded to the player.

## Return Value
None.

## Syntax
```
SetAchievement(int ID, int Status)
```

## Example
```
SetAchievement(3, 100)
```