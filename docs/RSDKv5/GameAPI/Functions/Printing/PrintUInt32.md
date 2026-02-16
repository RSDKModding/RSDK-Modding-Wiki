# PrintUInt32

!!! note
    This function only exists in REV02 and above.

Prints an unsigned integer to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The label to call the integer.

`integer`

:   The unsigned integer to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintUInt32(int32 mode, const char *message, uint32 integer);
	```

=== "C++"

	``` cpp
	Dev::PrintUInt32(PrintModes mode, const char *message, uint32 integer);
	```

## Example
=== "C"

	``` c
	RSDK.PrintUInt32(PRINT_NORMAL, "health", self->health);
	```

=== "C++"

	``` cpp
	Dev::PrintUInt32(Dev::PRINT_NORMAL, "health", this->health);
	```
