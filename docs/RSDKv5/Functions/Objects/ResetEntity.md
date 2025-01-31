# ResetEntity

## Description
Resets `entity` with the `classID` and `data` specified.

## Parameters
`entity`

:   The pointer of the entity to reset.

`classID`

:   The class ID of the object to reset the entity as.

`data`

:   The data to send to the entity's [Create()](/RSDKv5/Events/Create.md) function.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.ResetEntity(void *entity, uint16 classID, void *data);
	```

=== "C++"

	``` cpp
	entity->Reset(uint16 classID, void *data);
	```

## Example
=== "C"

	``` c
	RSDK.ResetEntity(self, MyObject->classID, NULL);
	```

=== "C++"

	``` cpp
	this->Reset(MyObject::sVars->classID, nullptr);
	```