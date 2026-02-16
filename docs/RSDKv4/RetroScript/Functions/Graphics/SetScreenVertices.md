# SetScreenVertices

!!! note
    This function only exists in RSDKv5U.

Sets the screen vertices.

## Parameters
`startVert2P_S1`

:   The first screen's vertex for when there are two screens.

`startVert2P_S2`

:   The second screen's vertex for when there are two screens.

`startVert3P_S1`

:   The first screen's vertex for when there are three screens.

`startVert3P_S2`

:   The second screen's vertex for when there are three screens.

`startVert3P_S3`

:   The third screen's vertex for when there are three screens.

## Return Value
None.

## Syntax
```
SetScreenVertices(int startVert2P_S1, int startVert2P_S2, int startVert3P_S1, int startVert3P_S2, int startVert3P_S3)
```

## Example
```
SetScreenVertices(6, 12, 30, 36, 12)
```
