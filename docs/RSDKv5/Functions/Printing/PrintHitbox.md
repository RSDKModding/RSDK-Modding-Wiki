# PrintHitbox

!!! note
    This function only exists in REV02 and above.

## Description
Prints a Hitbox variable to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The label to call the hitbox.

`hitbox`

:   The hitbox to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintHitbox(int32 mode, const char *message, Hitbox hitbox);
	```

=== "C++"

	``` cpp
	Dev::PrintHitbox(PrintModes mode, const char *message, Hitbox hitbox);
	```

## Example
=== "C"

	``` c
	RSDK.PrintHitbox(PRINT_NORMAL, "playerHitbox", &self->hitbox);
	```

=== "C++"

	``` cpp
	Dev::PrintHitbox(Dev::PRINT_NORMAL, "playerHitbox", &this->hitbox);
	```