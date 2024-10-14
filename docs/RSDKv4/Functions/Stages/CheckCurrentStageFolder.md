# CheckCurrentStageFolder

## Description
Reads the name of the current stage's folder.

## Parameters
`checkFolder`

:   The string to match.

## Return Value
Sets `checkResult` to `true` if the current folder's name matches `checkFolder`; otherwise, it's set to `false`.

## Syntax
```
CheckCurrentStageFolder(string checkFolder)
```

## Examples
```
CheckCurrentStageFolder("Zone01")
```