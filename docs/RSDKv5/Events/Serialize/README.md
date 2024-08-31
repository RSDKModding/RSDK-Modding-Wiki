# Serialize

## Description
Called once per object class, upon the scene being loaded, no logic should be written here, only calls to [RSDK_EDITABLE_VAR](TODO).

## Parameters
None.

## Syntax (C)
```void Serialize()```

## Syntax (C++)
```static void Serialize()```

## Examples (C)
- ```void MyObject_Serialize() { }```

## Examples (C++)
- ```void MyObject::Serialize() { }```