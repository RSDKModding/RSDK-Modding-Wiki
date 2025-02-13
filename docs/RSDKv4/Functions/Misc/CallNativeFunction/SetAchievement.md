# SetAchievement

## Description
Sets the status of the given achievement.

!!! note
    This function has no effect if trial mode or debug mode are enabled.

## Parameters
`id`

:   The index value of the achievement.

`status`

:   The status (progress) to set the achievement to, with a range of 0 to 100. If the status is 100, the achievement is considered achieved and will be awarded to the player.

## Return Value
None.

## Syntax
```
CallNativeFunction2(SetAchievement, int id, int status)
```

## Example
```
CallNativeFunction2(SetAchievement, 0, 100)
```

## Sonic 1 Achievement IDs
| ID | Achievement              |
| -- | ------------------------ |
| 0  | Ramp Ring Acrobatics     |
| 1  | Blast Processing         |
| 2  | Secret of Marble Zone    |
| 3  | Block Buster             |
| 4  | Ring King                |
| 5  | Secret of Labyrinth Zone |
| 6  | Flawless Pursuit         |
| 7  | Bombs Away               |
| 8  | Hidden Transporter       |
| 9  | Chaos Connoisseur        |
| 10 | One For the Road         |
| 11 | Beat The Clock           |

## Sonic 2 Achievement IDs
| ID | Achievement        |
| -- | ------------------ |
| 0  | Quick Run          |
| 1  | 100% Chemical Free |
| 2  | Early Bird Special |
| 3  | Superstar          |
| 4  | Hit it Big         |
| 5  | Bop Non-stop       |
| 6  | Perfectionist      |
| 7  | A Secret Revealed  |
| 8  | Head 2 Head        |
| 9  | Metropolis Master  |
| 10 | Scrambled Egg      |
| 11 | Beat The Clock     |