# SetLeaderboard

## Description
Submits the given score to the given leaderboard.

!!! note
    This function has no effect if trial mode or debug mode are enabled.

## Parameters
`leaderboardID`

:   The index value of the leaderboard.

`score`

:   The score to submit to the leaderboard. The score will not be submitted if it's lower than the score already in the leaderboard.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetLeaderboard, int leaderboardID, int score)
```

## Example
```
CallNativeFunction2(SetLeaderboard, 19, player.score)
```

## Sonic 1 Leaderboard IDs
| ID | Leaderboard                          |
| -- | ------------------------------------ |
| 0  | Time Attack - Green Hill Zone Act 1  |
| 1  | Time Attack - Green Hill Zone Act 2  |
| 2  | Time Attack - Green Hill Zone Act 3  |
| 3  | Time Attack - Marble Zone Act 1      |
| 4  | Time Attack - Marble Zone Act 2      |
| 5  | Time Attack - Marble Zone Act 3      |
| 6  | Time Attack - Spring Yard Zone Act 1 |
| 7  | Time Attack - Spring Yard Zone Act 2 |
| 8  | Time Attack - Spring Yard Zone Act 3 |
| 9  | Time Attack - Labyrinth Zone Act 1   |
| 10 | Time Attack - Labyrinth Zone Act 2   |
| 11 | Time Attack - Labyrinth Zone Act 3   |
| 12 | Time Attack - Star Light Zone Act 1  |
| 13 | Time Attack - Star Light Zone Act 2  |
| 14 | Time Attack - Star Light Zone Act 3  |
| 15 | Time Attack - Scrap Brain Zone Act 1 |
| 16 | Time Attack - Scrap Brain Zone Act 2 |
| 17 | Time Attack - Scrap Brain Zone Act 3 |
| 18 | Time Attack - Final Zone             |
| 19 | Best Game Score                      |

## Sonic 2 Leaderboard IDs
| ID | Leaderboard                           |
| -- | ------------------------------------- |
| 0  | Best Time - Emerald Hill Zone Act 1   |
| 1  | Best Time - Emerald Hill Zone Act 2   |
| 2  | Best Time - Chemical Plant Zone Act 1 |
| 3  | Best Time - Chemical Plant Zone Act 2 |
| 4  | Best Time - Aquatic Ruin Zone Act 1   |
| 5  | Best Time - Aquatic Ruin Zone Act 2   |
| 6  | Best Time - Casino Night Zone Act 1   |
| 7  | Best Time - Casino Night Zone Act 2   |
| 8  | Best Time - Hill Top Zone Act 1       |
| 9  | Best Time - Hill Top Zone Act 2       |
| 10 | Best Time - Mystic Cave Zone Act 1    |
| 11 | Best Time - Mystic Cave Zone Act 2    |
| 12 | Best Time - Oil Ocean Zone Act 1      |
| 13 | Best Time - Oil Ocean Zone Act 2      |
| 14 | Best Time - Metropolis Zone Act 1     |
| 15 | Best Time - Metropolis Zone Act 2     |
| 16 | Best Time - Metropolis Zone Act 3     |
| 17 | Unused                                |
| 18 | Best Time - Wing Fortress Zone        |
| 19 | Unused                                |
| 20 | Best Time - Hidden Palace Zone        |
| 21 | Best Time - Boss Attack Zone          |
| 22 | Best Game Score                       |