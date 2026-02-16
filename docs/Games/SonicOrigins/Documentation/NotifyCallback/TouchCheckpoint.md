# NOTIFY_TOUCH_CHECKPOINT

Notifies [Hedgehog Engine 2](../../HedgehogEngine2.md) that a Lamp Post/Star Post has been touched.

## Parameters
None.

## Return Value
None.

## Example
=== "v3"

    ```
    EngineCallback(NOTIFY_TOUCH_CHECKPOINT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_TOUCH_CHECKPOINT, 0)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_TOUCH_CHECKPOINT, NULL, NULL, NULL);
    ```
