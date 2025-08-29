# PrintVector2

!!! note
    This function only exists in REV02 and above.

## Description
Prints a Vector2 variable to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The label to call the Vector2.

`vector`

:   The Vector2 variable to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintVector2(int32 mode, const char *message, Vector2 vector);
	```

=== "C++"

	``` cpp
	Dev::PrintVector2(PrintModes mode, const char *message, Vector2 vector);
	```
	``` cpp
	Dev::PrintVector2(PrintModes mode, const char *message, int32 x, int32 y);
	```

## Example
=== "C"

	``` c
	RSDK.PrintVector2(PRINT_NORMAL, "position", &self->position);
	```

=== "C++"

	``` cpp
	Dev::PrintVector2(Dev::PRINT_NORMAL, "position", &this->position);
	```
	``` cpp
	Dev::PrintVector2(Dev::PRINT_NORMAL, "velocity", this->velocity.x, this->velocity.y);
	```
