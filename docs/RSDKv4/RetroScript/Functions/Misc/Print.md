# Print

Prints a message or integer to the console.

!!! note
    This function has no effect in Sonic Origins.

## Parameters
`message`

:   The message to print. If `isInt` is `false`, takes a string; otherwise, takes an integer.

`isInt`

:   `message` will be printed as a string if `false`, and as an integer if `true`.

`useEndLine`

:   If set to `true`, adds a newline character (`\n`) to the end of the print.

## Return Value
None.

## Syntax
```
Print(string/int message, bool isInt, bool useEndLine)
```

## Examples
```
Print("This is a test message. ", false, false)
```
```
Print("The next print will be an int: ", false, false)
```
```
Print(object.value7, true, true)
```
