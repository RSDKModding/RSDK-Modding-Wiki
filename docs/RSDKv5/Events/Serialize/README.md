# Serialize

## Description
Called once per object class, upon the scene being loaded, no logic should be written here, only calls to [RSDK_EDITABLE_VAR](TODO).

## Parameters
None.

## Syntax (C)
```c
void Serialize();
```

## Syntax (C++)
```cpp
static void Serialize();
```

## Examples (C)
```c
void MyObject_Serialize() { }
```

## Examples (C++)
```cpp
void MyObject::Serialize() { }
```