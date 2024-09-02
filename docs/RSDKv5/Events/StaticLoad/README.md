# StaticLoad

## Description
Called once per object class, once when the static variables are allocated. Used for initializing any static variables. It's basically an RSDK implementation of a constructor in C++.

## Parameters
- `sVars`
A pointer to the static variables that will be initialized during this event.

## Syntax
=== "C"

	```c
	void StaticLoad(Object[ObjectName] *sVars);
	```

=== "C++"

	```cpp
	static void StaticLoad(Static *sVars);
	```

## Examples
=== "C"

	```c
	void MyObject_StaticLoad(ObjectMyObject *sVars) { }
	```

=== "C++"

	```cpp
	void MyObject::StaticLoad(Static *sVars) { }
	```

## Remarks
This function is ONLY suppported by RSDKv5U. It does not exist in RSDKv5 Revision 01 or RSDKv5 Revision 02.