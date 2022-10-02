# EditorLoad

## Description
Similar to [StageLoad](../StageLoad/README.md), though only called when the object class is loaded in via an editor (such as RetroED v2). Used to load assets that will be used in [EditorDraw](../EditorDraw/README.md).

## Parameters
None.

## Syntax (C)
```void EditorLoad()```

## Syntax (C++)
```static void EditorLoad()```

## Examples (C)
- ```void MyObject_EditorLoad() { }```

## Examples (C++)
- ```void MyObject::EditorLoad() { }```