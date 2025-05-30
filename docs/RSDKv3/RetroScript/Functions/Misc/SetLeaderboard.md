# SetLeaderboard

## Description
Submits the given score to the given leaderboard.

!!! note
    This function has no effect if trial mode or debug mode are enabled.

## Parameters
`LeaderboardID`

:   The index value of the leaderboard.

`Score`

:   The score to submit to the leaderboard. The score will not be submitted if it's lower than the score already in the leaderboard.

## Return Value
None.

## Syntax
```
SetLeaderboard(int LeaderboardID, int Score)
```

## Example
```
SetLeaderboard(19, Player.Score)
```