# SetAchievement

## Description
Sets the status of the achievement with index of `ID` to `Status`.

## Parameters
- `ID`
the ID of the achievement
- `Status`
New status of the achievement, valid values are 0 for locked, and 100 for unlocked

## Return Value
None.

## Syntax
```SetAchievement(int ID, int Status)```

## Examples
- ```SetAchievement(3, 100)```