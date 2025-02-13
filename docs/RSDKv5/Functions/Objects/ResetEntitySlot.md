# ResetEntitySlot

## Description
Resets the entity in `slot` with the `classID` and `data` specified.

## Parameters
`slot`

:   The slot of the entity to reset.

`classID`

:   The class ID of the object to reset the entity as.

`data`

:   The data to send to the entity's [Create()](/RSDKv5/Events/Create.md) function.

## Return Value
None.

## Syntax
=== "C"

	``` c
	RSDK.ResetEntity(uint16 slot, uint16 classID, void *data);
	```

=== "C++"

	``` cpp
	GameObject::Reset(uint16 slot, uint16 classID, void *data);
	```

## Example
=== "C"

	``` c
	RSDK.ResetEntity(30, MyObject->classID, NULL);
	```

=== "C++"

	``` cpp
	GameObject::Reset(30, MyObject::sVars->classID, nullptr);
	```