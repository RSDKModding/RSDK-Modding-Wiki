# NOTIFY_CONTROLLER_SUPPORT

Opens the controller setup screen in the Nintendo Switch version of the game, then sets `callbackResult` based on the platform and controller count.

## Parameters
None.

## Return Value
=== "v3"

    `game.callbackResult` is set based on the platform and controller count:
    ``` mermaid
    flowchart LR
      A[Callback called] --> B{Is on Nintendo<br/>Switch version?}
      B --> |Yes| C[Wait until controller<br/>setup screen is closed]
      C --> D{Are two controllers<br/>connected?}
      D --> |Yes| E[game.callbackResult<br/>is set to 1]
      D --> |No| F[game.callbackResult<br/>is set to 0]
      B --> |No| E
    ```

=== "v4"

    `game.callbackResult` is set based on the platform and controller count:
    ``` mermaid
    flowchart LR
      A[Callback called] --> B{Is on Nintendo<br/>Switch version?}
      B --> |Yes| C[Wait until controller<br/>setup screen is closed]
      C --> D{Are two controllers<br/>connected?}
      D --> |Yes| E[game.callbackResult<br/>is set to 1]
      D --> |No| F[game.callbackResult<br/>is set to 0]
      B --> |No| E
    ```

=== "v5"

    `globals->callbackResult` is set based on the platform and controller count:
    ``` mermaid
    flowchart LR
      A[Callback called] --> B{Is on Nintendo<br/>Switch version?}
      B --> |Yes| C[Wait until controller<br/>setup screen is closed]
      C --> D{Are two controllers<br/>connected?}
      D --> |Yes| E[globals->callbackResult<br/>is set to 1]
      D --> |No| F[globals->callbackResult<br/>is set to 0]
      B --> |No| E
    ```

## Example
=== "v3"

    ```
    EngineCallback(NOTIFY_CONTROLLER_SUPPORT)
    ```

=== "v4"

    ```
    CallNativeFunction2(NotifyCallback, NOTIFY_CONTROLLER_SUPPORT, 0)
    ```

=== "v5"

    ``` c++
    NotifyCallback(NOTIFY_CONTROLLER_SUPPORT, NULL, NULL, NULL);
    ```
