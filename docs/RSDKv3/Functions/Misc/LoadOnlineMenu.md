# LoadOnlineMenu

## Description
Loads the data for the specified online menu.

## Parameters
- `MenuID`
The ID of the called menu, valid values are 0(ONLINEMENU_ACHIEVEMENTS) and 1(ONLINEMENU_LEADERBOARDS)

## Return Value
None.

## Syntax
```
LoadOnlineMenu(int MenuID)
```

## Examples
```
LoadOnlineMenu(0)
```

## Notes
This function is only functional on `Blit` releases of Sonic CD.