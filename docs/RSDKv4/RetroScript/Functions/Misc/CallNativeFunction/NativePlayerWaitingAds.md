# NativePlayerWaitingAds

!!! note
    This native function only exists in the Sega Forever versions of Sonic 1 (3.9.0 and later) and Sonic 2 (1.7.0 and later).

Creates a `RewardAds` native object, prompting the player to watch an ad.

## Parameters
None.

## Return Value
If `Yes` is selected and an ad plays, `waitingAds.result` is set to `1`. If `No` is selected, it's set to `2`.

!!! note
    The `RewardAds` native object does not exist in the RSDKv4 decompilation; instead, `waitingAds.result` is always set to `2`.

## Example
```
CallNativeFunction(NativePlayerWaitingAds)
```
