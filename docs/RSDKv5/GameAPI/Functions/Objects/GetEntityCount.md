# GetEntityCount

## Description
Gets the count of the amount of entities of the given object type currently in the stage.

## Parameters
`classID`

:   The class ID of the object to count the entities of.

`isActive`

:   If set to `true`, only entities that are currently active will be counted.

## Return Value
Returns the entity count as an `int32`.

## Syntax
=== "C"

	``` c
	RSDK.GetEntityCount(uint16 classID, bool32 isActive);
	```

=== "C++"

	``` cpp
	sVars->Count(bool32 isActive);
	```

## Example
=== "C"

	``` c
	int32 entityCount = RSDK.GetEntityCount(MyObject->classID, false);
	```

=== "C++"

	``` cpp
	int32 entityCount = MyObject::sVars->Count(false);
	```