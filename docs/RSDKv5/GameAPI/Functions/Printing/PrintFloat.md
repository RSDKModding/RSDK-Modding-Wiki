# PrintFloat

!!! note
    This function only exists in REV02 and above.

## Description
Prints a float value to the console.

## Parameters
`mode`

:   The [print mode](TODO) of the message.

`message`

:   The label to call the float.

`fvalue`

:   The float value to print.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.PrintFloat(int32 mode, const char *message, float fvalue);
	```

=== "C++"

	``` cpp
	Dev::PrintFloat(PrintModes mode, const char *message, float fvalue);
	```

## Example
=== "C"

	``` c
	RSDK.PrintFloat(PRINT_NORMAL, "distance", distanceFromGoal);
	```

=== "C++"

	``` cpp
	Dev::PrintFloat(Dev::PRINT_NORMAL, "distance", distanceFromGoal);
	```