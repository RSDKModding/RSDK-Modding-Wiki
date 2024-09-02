# Print

## Description
Prints a message to `log.txt`

## Parameters
- `Message`
The string or int to be printed
- `isInt`
`Message` will be printed as a string if `false`, and as an integer if `true`
- `useEndLine`
Jump line if true, otherwise keep on the same line

## Return Value
None.

## Syntax
```
Print(string/int message, bool isInt, bool useEndLine)
```

## Examples
```
Print("This is a test message, ", false, false)
```
```
Print("The next print will be an int: ", false, false)
```
```
Print(object.value7, true, true)
```