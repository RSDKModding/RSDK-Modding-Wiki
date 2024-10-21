# PrintString

!!! note
    This function only exists in REV02 and above.

## Description
Prints a String variable to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The String variable to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintString(int32 mode, String *message);
	```

=== "C++"

	``` cpp
	Dev::PrintString(PrintModes mode, String *message);
	```

## Example
=== "C"

	``` c
	RSDK.PrintString(PRINT_NORMAL, &string);
	```

=== "C++"

	``` cpp
	Dev::PrintString(Dev::PRINT_NORMAL, &string);
	```