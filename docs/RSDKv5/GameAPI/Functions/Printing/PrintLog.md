# PrintLog

!!! note
    This function only exists in REV02 and above.

Prints a message to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The message to print.

## Using Variables
You can add additional parameters when calling this function to use variables in the message. To do this, include one of the following flags in `message` to represent the variable depending on its data type:

- `%d` for signed integers
- `%u` for unsigned integers
- `%f` for floats or doubles
- `%c` for characters
- `%s` for strings (const char)

Then, include additional parameter(s) to the function call pointing to the variable(s) to print the value(s) of. Varaiables should be put in the order the corresponding flags appear in `message`.

If you'd like use the `%` character in `message`, use the `%%` flag.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintLog(int32 mode, const char *message, ...);
	```

=== "C++"

	``` cpp
	Dev::Print(PrintModes mode, const char *message, ...);
	```

## Examples
=== "C"

	``` c
	RSDK.PrintLog(PRINT_NORMAL, "This is a test message.");
	```
	``` c
	RSDK.PrintLog(PRINT_NORMAL, "Player has %d HP.", self->health);
	```
	``` c
	RSDK.PrintLog(PRINT_NORMAL, "Level %u is named %s.", levelID, levelName);
	```

=== "C++"

	``` cpp
	Dev::Print(Dev::PRINT_NORMAL, "This is a test message.");
	```
	``` cpp
	Dev::Print(Dev::PRINT_NORMAL, "Player has %d HP.", this->health);
	```
	``` cpp
	Dev::Print(Dev::PRINT_NORMAL, "Level %u is named %s.", levelID, levelName);
	```
