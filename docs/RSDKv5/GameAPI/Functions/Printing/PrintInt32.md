# PrintInt32

!!! note
    This function only exists in REV02 and above.

## Description
Prints a signed integer to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The label to call the integer.

`integer`

:   The signed integer to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintInt32(int32 mode, const char *message, int32 integer);
	```

=== "C++"

	``` cpp
	Dev::PrintInt32(PrintModes mode, const char *message, int32 integer);
	```

## Example
=== "C"

	``` c
	RSDK.PrintInt32(PRINT_NORMAL, "health", self->health);
	```

=== "C++"

	``` cpp
	Dev::PrintInt32(Dev::PRINT_NORMAL, "health", this->health);
	```
