# PrintText

!!! note
    This function only exists in REV02 and above.

Prints a `const char` string to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The `const char` value to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintText(int32 mode, const char *message);
	```

=== "C++"

	``` cpp
	RSDKTable->PrintText(int32 mode, const char *message);
	```

## Example
=== "C"

	``` c
	RSDK.PrintText(PRINT_NORMAL, "This is a test message.");
	```

=== "C++"

	``` cpp
	RSDKTable->PrintText(Dev::PRINT_NORMAL, "This is a test message.");
	```
